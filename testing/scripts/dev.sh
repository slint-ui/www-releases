#!/usr/bin/env bash
set -euo pipefail

# Apply migrations, ensure a known dev token exists in local D1, then start
# wrangler dev. All steps are idempotent — safe to run every time.

DEV_TOKEN="dev-token"
PORT=8787

pnpm db:migrate:local >/dev/null

pnpm exec wrangler d1 execute ui-testing --local --command \
  "INSERT INTO tokens (token, customer, created_at) \
   VALUES ('$DEV_TOKEN', 'Local Dev', unixepoch()) \
   ON CONFLICT(token) DO NOTHING;" \
  >/dev/null 2>&1

cat <<EOF

Local index ready.
  Token: $DEV_TOKEN
  Index: http://localhost:$PORT/t/$DEV_TOKEN/

  (Run \`pnpm publish:package <path>\` to add packages to assets/.)

EOF

exec pnpm exec wrangler dev --port "$PORT"
