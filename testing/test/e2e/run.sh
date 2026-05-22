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
#   6. Run a Python smoke import that exercises the cross-package dependency.
#   7. Negative cases: bad token; revoked token. Both must fail.

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

# --- Negative: bad token ---

echo "→ Negative: bad token"
if uv pip install \
    --python "$TMP_DIR/.venv-pip/bin/python" \
    --reinstall --refresh \
    --index-url "http://localhost:$PORT/t/not-a-real-token/" \
    slint-testing-e2e-trunk \
    >"$TMP_DIR/bad-token.log" 2>&1; then
  echo "FAIL: install succeeded with bad token" >&2
  cat "$TMP_DIR/bad-token.log" >&2
  exit 1
fi

# --- Negative: revoked token ---

echo "→ Negative: revoked token"
pnpm exec wrangler d1 execute ui-testing --local --command \
  "UPDATE tokens SET revoked_at = unixepoch() WHERE token = '$TOKEN';" \
  >>"$WLOG" 2>&1

if uv pip install \
    --python "$TMP_DIR/.venv-pip/bin/python" \
    --reinstall --refresh \
    --index-url "$INDEX_URL" \
    slint-testing-e2e-trunk \
    >"$TMP_DIR/revoked-token.log" 2>&1; then
  echo "FAIL: install succeeded with revoked token" >&2
  cat "$TMP_DIR/revoked-token.log" >&2
  exit 1
fi

echo
echo "✓ e2e passed"
