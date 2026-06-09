#!/usr/bin/env bash
set -euo pipefail

# End-to-end test for ui-testing-site:
#   1. Build two interdependent fixture Python packages with `uv build`.
#   2. Stage them into an isolated asset tree under tmp/ — including the
#      hand-written PEP 503 index.html files mirroring what an operator
#      would commit for a real release.
#   3. Apply D1 migrations and insert a test token.
#   4. Start `wrangler dev --assets <isolated tree>` so production assets
#      under ./assets/ are untouched.
#   5. Resolve & install through the token-gated index via:
#        - `uv pip install --index-url …`   (pip-compat smoke)
#        - `uv add` against a project that declares the index in pyproject.toml
#        - `uv add` against the credential-free /simple/ endpoint, token
#          supplied via UV_INDEX_<NAME>_PASSWORD — and assert the token never
#          lands in uv.lock.
#   6. Run a Python smoke import that exercises the cross-package dependency.
#   7. Negative cases: bad token; missing Basic-auth credentials; revoked
#      token. All must fail.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
E2E_DIR="$REPO_ROOT/test/e2e"
TMP_DIR="$E2E_DIR/tmp"
ASSETS_DIR="$TMP_DIR/assets"
TOKEN="e2e-test-token"
PORT=8787
INDEX_URL="http://localhost:$PORT/t/$TOKEN/"

export UV_CACHE_DIR="$TMP_DIR/uv-cache"
export NO_COLOR=1
export WRANGLER_SEND_METRICS=false

WLOG="$TMP_DIR/wrangler-seed.log"

command -v uv      >/dev/null || { echo "uv not on PATH" >&2; exit 1; }
command -v python3 >/dev/null || { echo "python3 not on PATH" >&2; exit 1; }
command -v pnpm    >/dev/null || { echo "pnpm not on PATH" >&2; exit 1; }

cd "$REPO_ROOT"

rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR" "$UV_CACHE_DIR" "$ASSETS_DIR/_protected"

# Public landing — wrangler dev requires at least one asset.
cp "$REPO_ROOT/assets/index.html" "$ASSETS_DIR/index.html"

# --- build fixtures + stage assets/_protected/ ---

for fixture in leaf trunk; do
  pkg="slint-testing-e2e-$fixture"
  echo "→ building $fixture"
  (cd "$E2E_DIR/fixtures/$fixture" && rm -rf dist && uv build --wheel --quiet)
  mkdir -p "$ASSETS_DIR/_protected/$pkg"
  cp "$E2E_DIR/fixtures/$fixture"/dist/*.whl "$ASSETS_DIR/_protected/$pkg/"
done

# Generate PEP 503 listings via simple503 (Python API, base_url='./')
uvx --quiet --with simple503 python "$REPO_ROOT/scripts/regen-listings.py" \
  "$ASSETS_DIR/_protected" >>"$WLOG" 2>&1

# --- seed local D1 ---

echo "→ applying D1 migrations (local)"
pnpm db:migrate:local >>"$WLOG" 2>&1

echo "→ seeding token"
pnpm exec wrangler d1 execute ui-testing --local --command \
  "DELETE FROM tokens WHERE token = '$TOKEN'; \
   INSERT INTO tokens (token, customer, created_at) VALUES ('$TOKEN', 'E2E', unixepoch());" \
  >>"$WLOG" 2>&1

# --- start wrangler dev pointing at the isolated assets tree ---

echo "→ starting wrangler dev on :$PORT"
LOG="$TMP_DIR/wrangler-dev.log"
pnpm exec wrangler dev --port "$PORT" --assets "$ASSETS_DIR" --log-level warn >"$LOG" 2>&1 &
WRANGLER_PID=$!
disown "$WRANGLER_PID" 2>/dev/null || true

cleanup() {
  if [ -n "${WRANGLER_PID:-}" ] && kill -0 "$WRANGLER_PID" 2>/dev/null; then
    kill "$WRANGLER_PID" 2>/dev/null || true
    sleep 0.3
    kill -9 "$WRANGLER_PID" 2>/dev/null || true
  fi
}
trap cleanup EXIT

ready=
for _ in $(seq 1 60); do
  if curl -sf "http://localhost:$PORT/" >/dev/null 2>&1; then
    ready=1
    break
  fi
  sleep 0.5
done
if [ -z "$ready" ]; then
  echo "wrangler dev never came up; log follows" >&2
  cat "$LOG" >&2
  exit 1
fi
echo "  ready"

# --- Path A: uv pip install (pip-compat) ---

echo "→ Path A: uv pip install"
uv venv "$TMP_DIR/.venv-pip" --python python3 --quiet
uv pip install \
  --python "$TMP_DIR/.venv-pip/bin/python" \
  --index-url "$INDEX_URL" \
  slint-testing-e2e-trunk

LIST="$(uv pip list --python "$TMP_DIR/.venv-pip/bin/python")"
grep -q "^slint-testing-e2e-leaf "  <<<"$LIST"
grep -q "^slint-testing-e2e-trunk " <<<"$LIST"
"$TMP_DIR/.venv-pip/bin/python" "$E2E_DIR/smoke.py"

# --- Path B: uv project (uv add) ---

echo "→ Path B: uv add (project flow)"
CONSUMER="$TMP_DIR/consumer"
mkdir -p "$CONSUMER"
cat >"$CONSUMER/pyproject.toml" <<EOF
[project]
name = "consumer"
version = "0.0.0"
requires-python = ">=3.9"
dependencies = []

[[tool.uv.index]]
name = "slint-private"
url = "$INDEX_URL"
default = true
EOF

(
  cd "$CONSUMER"
  uv add slint-testing-e2e-trunk --quiet
  uv run python "$E2E_DIR/smoke.py"
)

grep -q "localhost:$PORT"          "$CONSUMER/uv.lock"
grep -q "slint-testing-e2e-leaf"   "$CONSUMER/uv.lock"
grep -q "slint-testing-e2e-trunk"  "$CONSUMER/uv.lock"

# --- Path C: /simple/ + Basic-auth credentials (token kept out of uv.lock) ---

echo "→ Path C: uv add via /simple/ (credentials in env, not the URL)"
SIMPLE_URL="http://localhost:$PORT/simple/"
CONSUMER_BASIC="$TMP_DIR/consumer-basic"
mkdir -p "$CONSUMER_BASIC"
cat >"$CONSUMER_BASIC/pyproject.toml" <<EOF
[project]
name = "consumer-basic"
version = "0.0.0"
requires-python = ">=3.9"
dependencies = []

[[tool.uv.index]]
name = "slint-private"
url = "$SIMPLE_URL"
default = true
EOF

(
  cd "$CONSUMER_BASIC"
  # uv derives the credential env-var names from the index name:
  # slint-private → SLINT_PRIVATE.
  export UV_INDEX_SLINT_PRIVATE_USERNAME=__token__
  export UV_INDEX_SLINT_PRIVATE_PASSWORD="$TOKEN"
  uv add slint-testing-e2e-trunk --quiet
  uv run python "$E2E_DIR/smoke.py"
)

grep -q "localhost:$PORT/simple"   "$CONSUMER_BASIC/uv.lock"
grep -q "slint-testing-e2e-leaf"   "$CONSUMER_BASIC/uv.lock"
grep -q "slint-testing-e2e-trunk"  "$CONSUMER_BASIC/uv.lock"
# The whole point: the token must NOT have leaked into the lockfile.
if grep -q "$TOKEN" "$CONSUMER_BASIC/uv.lock"; then
  echo "FAIL: token leaked into uv.lock" >&2
  grep -n "$TOKEN" "$CONSUMER_BASIC/uv.lock" >&2
  exit 1
fi

# --- Negative cases: every install below must be rejected by the index ---

# Run `uv pip install` against an index that should reject us; fail the suite
# if it unexpectedly succeeds.
assert_install_fails() {
  local label="$1" index_url="$2" log="$3"
  echo "→ Negative: $label"
  if uv pip install \
      --python "$TMP_DIR/.venv-pip/bin/python" \
      --reinstall --refresh \
      --index-url "$index_url" \
      slint-testing-e2e-trunk \
      >"$log" 2>&1; then
    echo "FAIL: install succeeded ($label)" >&2
    cat "$log" >&2
    exit 1
  fi
}

assert_install_fails "/simple/ without credentials" \
  "$SIMPLE_URL" "$TMP_DIR/no-creds.log"

assert_install_fails "bad token" \
  "http://localhost:$PORT/t/not-a-real-token/" "$TMP_DIR/bad-token.log"

# Revoke the good token first, then confirm it stops working.
pnpm exec wrangler d1 execute ui-testing --local --command \
  "UPDATE tokens SET revoked_at = unixepoch() WHERE token = '$TOKEN';" \
  >>"$WLOG" 2>&1
assert_install_fails "revoked token" \
  "$INDEX_URL" "$TMP_DIR/revoked-token.log"

echo
echo "✓ e2e passed"
