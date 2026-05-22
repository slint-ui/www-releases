# End-to-end test

Spins up `wrangler dev` against local miniflare-backed D1 and an isolated
asset tree under `tmp/assets/`, stages two interdependent fixture Python
packages into it, and verifies `uv` can resolve and install them through
the token-gated PEP 503 index. The real `./assets/_protected/` directory
is never touched.

```sh
pnpm e2e
```

## Prereqs

- `uv` ([install](https://docs.astral.sh/uv/getting-started/installation/))
- `python3` (any version supported by the fixtures: 3.9+)
- the repo's normal toolchain (`pnpm install` once)

Nothing hits the network: the index runs at `http://localhost:8787`, D1
is a local SQLite file under `.wrangler/state/`, the assets are local
files under `tmp/assets/`, and the fixtures have no external Python
dependencies.

## What it covers

| | what's exercised |
|---|---|
| **Build** | `uv build` produces wheel + sdist for both fixtures |
| **Seed** | Token row in D1, two packages × {wheel, sdist} staged into `tmp/assets/_protected/` with hand-written PEP 503 listings |
| **Path A** | `uv pip install --index-url …` — pip-compat resolver |
| **Path B** | `uv add` against a project that declares the index in `pyproject.toml` |
| **Dependency resolution** | trunk → leaf is walked through our index |
| **Smoke** | `from slint_testing_e2e_trunk import greet; greet() == "trunk says leaf"` |
| **Negative: bad token** | unknown token → 404 → resolver fails |
| **Negative: revoked token** | `UPDATE tokens SET revoked_at = …` → fresh resolution fails |

## Layout

```
test/e2e/
  fixtures/
    leaf/                                # slint-testing-e2e-leaf
    trunk/                               # slint-testing-e2e-trunk (deps: leaf)
  smoke.py                               # tiny import + assertion
  run.sh                                 # orchestrator (this is what pnpm e2e runs)
  tmp/                                   # scratch (gitignored); regenerated each run
    assets/                              # isolated asset tree wrangler dev points at
      index.html
      _protected/{simple,files}/...      # built from the fixtures
    .venv-pip/                           # venv for Path A
    consumer/                            # uv project for Path B
    uv-cache/                            # isolated uv cache
    wrangler-dev.log
```

## Troubleshooting

- **`wrangler dev never came up`** — port 8787 already in use, or
  `wrangler-dev.log` shows the real error. The script prints the log on
  failure.
- **`uv` rejects `http://`** — only happens for non-loopback URLs.
  `localhost` is whitelisted; if you change the host, pass
  `--allow-insecure-host`.
- **State drift across runs** — `tmp/` is wiped at start, but
  `.wrangler/state/` (local D1) is not. The script's D1 seeding is
  idempotent (`DELETE … INSERT`), so this doesn't matter.
