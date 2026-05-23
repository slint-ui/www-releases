# testing.slint.dev

A Cloudflare Worker that serves a token-gated, PEP 503 Python package
index for commercial customers of [`slint-testing`](https://github.com/slint-ui/ui-testing).

A customer adds this to their `pyproject.toml`:

```toml
[[tool.uv.index]]
name = "slint-private"
url = "https://testing.slint.dev/t/<TOKEN>/"
explicit = true

[tool.uv.sources]
slint-testing = { index = "slint-private" }
```

…and runs `uv add slint-testing`. `explicit = true` keeps PyPI the default
for everything else; only `slint-testing` routes through our index.

If their repo is public, the `[[index]]` block goes in
`~/.config/uv/uv.toml` instead (where the token URL isn't committed); the
`[tool.uv.sources]` mapping stays in `pyproject.toml`.

## Design

**Token in the URL path, not in a header.** Means `--index-url` is the
whole story on the customer side — no `~/.netrc`, no env vars, no
per-tool auth glue. The token is opaque (32 random bytes, base64url) so
URL-leakage is no worse than a leaked secret anywhere else.

**Wheels and PEP 503 listings live under `assets/_protected/`**,
committed to git, bundled into each Worker deploy. Nothing to
provision, nothing to operate; diffing the repo tells you what's about
to ship.

**[simple503](https://github.com/repo-helper/simple503) for listing
generation, called via its Python API.** The CLI hard-codes the base
URL into hrefs, which would break under our per-token URL prefix. The
API accepts `base_url='./'` and emits relative hrefs that resolve
correctly under any prefix — so the same static tree serves every
customer with no HTML rewriting in the Worker. Free bonus: PEP 658
`.metadata` sidecars and `#sha256=…` hash fragments.

**D1 for tokens.** SQL fits the actual operations — list everyone with
their last-used timestamp, instantly revoke by name (single `UPDATE`,
strongly consistent), grow the schema as needs change. KV is simpler
at setup but worse for all of those.

## Layout

```
src/index.ts          # the entire Worker
assets/_protected/    # the package index, simple503-generated, committed
migrations/           # D1 schema (just `tokens`)
scripts/              # publish, yank, dev, token issue/revoke
test/                 # vitest + e2e (real `uv` against wrangler dev)
```

## Working locally

```sh
pnpm install
pnpm dev          # http://localhost:8787/t/dev-token/ (idempotent setup)
pnpm test         # unit + integration in workerd via vitest-pool-workers
pnpm e2e          # real `uv pip install` + `uv add` through wrangler dev
pnpm typecheck
```

`pnpm dev` migrates local D1, seeds a `dev-token` row, then runs
`wrangler dev` against the on-disk `assets/`. No Cloudflare account
required. Edits to `assets/_protected/` show up on the next request.

## Managing packages

```sh
pnpm publish:package /path/to/pkg.whl    # copy a pre-built wheel + regen listings
pnpm yank slint-testing <wheel>          # rm + regen listings
git diff assets/_protected/              # review what would deploy
git commit -m "publish slint-testing 0.2.0"
pnpm run deploy
```

Both scripts shell out to `uvx --with simple503` to regenerate the
`index.html` files and `.whl.metadata` sidecars. Output is committed
alongside the wheels — what's in git is what gets deployed.

Wheel-only (slint-testing is pure Python). PEP 592 "yank but keep"
isn't wired up; today's yank is a hard delete.

## Managing tokens

**All `pnpm tokens:*` commands target the production D1 database.** They
shell out to `wrangler d1 execute ui-testing --remote`. There's no
`--local` equivalent — for local development, `pnpm dev` seeds the
`dev-token` row automatically.

```sh
pnpm tokens:issue "ACME GmbH"            # prints token + pyproject.toml snippet
pnpm tokens:list
pnpm tokens:revoke --customer "ACME GmbH"
pnpm tokens:revoke --token <value>
```

If you need extra tokens in local D1 (rare — usually the seeded
`dev-token` is enough), use wrangler directly:

```sh
pnpm exec wrangler d1 execute ui-testing --local --command \
  "INSERT INTO tokens (token, customer, created_at) VALUES ('local-test', 'Local', unixepoch());"
```

### How it behaves

The Worker returns 404 (not 401) for missing/revoked tokens — `uv`/pip
handle 404 cleanly, and we don't reveal which tokens exist. Revocation
takes effect on the next request (D1 is strongly consistent).
`last_used_at` is updated via `ctx.waitUntil(...)`, throttled to once
per 60 s per token so the hot path stays cheap.

## Deploying to production

One-time:

```sh
pnpm exec wrangler login                     # account must own slint.dev
pnpm exec wrangler d1 create ui-testing      # paste database_id into wrangler.toml
pnpm db:migrate:remote
pnpm publish:package /path/to/pkg.whl        # stage the first package
pnpm run deploy                               # uploads code + assets
pnpm tokens:issue "Internal Test"            # smoke-test via printed URL
```

Then attach `testing.slint.dev` as a custom domain in the dashboard
(Workers → ui-testing-site → Domains → Add). DNS + TLS provision
automatically.

Ongoing:

| | command |
|---|---|
| code change       | `pnpm run deploy` |
| schema change     | new `migrations/NNNN_*.sql`, `pnpm db:migrate:remote && pnpm run deploy` |
| publish a version | `pnpm publish:package <wheel>`, commit, `pnpm run deploy` |
| yank a version    | `pnpm yank <project> <wheel>`, commit, `pnpm run deploy` |
| new customer      | `pnpm tokens:issue "Name"` |
| revoke a customer | `pnpm tokens:revoke --customer "Name"` |

## How the Worker routes

```
/                  →  assets/index.html                  (CDN, Worker not invoked)
/t/<TOK>           →  301 /t/<TOK>/                      (so relative hrefs resolve)
/t/<TOK>/<rest>    →  /_protected/<rest>                 (after validating <TOK> in D1)
/_protected/*      →  404                                (direct access blocked)
```

`run_worker_first = ["/t/*", "/_protected/*"]` in `wrangler.toml` is
what keeps the asset CDN from serving `_protected/` directly. The
Worker also rewrites `Location` headers from asset-CDN 3xx responses so
the internal `/_protected/` path never leaks.
