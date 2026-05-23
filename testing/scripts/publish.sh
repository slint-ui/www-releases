#!/usr/bin/env bash
set -euo pipefail

# Stage one or more pre-built wheels into the static-assets tree at
# assets/_protected/<normalized-name>/ and regenerate the PEP 503 listings via
# simple503's Python API. Building the wheel is the package repo's job
# (ui-testing); this script only updates the index. Changes are staged for
# review — `git status` shows what would deploy; `pnpm run deploy` pushes.
#
# Usage:
#   scripts/publish.sh <wheel> [<wheel>...]
#
# Example:
#   scripts/publish.sh ../ui-testing/python/dist/slint_testing-0.1-py3-none-any.whl

if [ "$#" -eq 0 ]; then
  echo "Usage: pnpm publish:package <wheel> [<wheel>...]" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS="$REPO_ROOT/assets/_protected"

for wheel in "$@"; do
  if [[ "$wheel" != *.whl || ! -f "$wheel" ]]; then
    echo "not a wheel file: $wheel" >&2
    exit 1
  fi
  # PEP 503 normalize the distribution name from the wheel filename
  # ({distribution}-{version}-...whl), matching yank.sh.
  base="$(basename "$wheel")"
  normalized="$(echo "${base%%-*}" | tr '[:upper:]' '[:lower:]' | sed -E 's/[-_.]+/-/g')"
  mkdir -p "$ASSETS/$normalized"
  cp "$wheel" "$ASSETS/$normalized/"
  echo "→ staged $base into $normalized/"
done

uvx --quiet --with simple503 python "$REPO_ROOT/scripts/regen-listings.py" "$ASSETS"

echo
echo "Review with \`git status\` and \`git diff $ASSETS\`, then \`pnpm run deploy\`."
