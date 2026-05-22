#!/usr/bin/env bash
set -euo pipefail

# Remove one or more wheels from the static-assets tree and regenerate
# the PEP 503 listings via simple503. Hard delete, not PEP 592
# "yanked-but-kept" — see README.
#
# Usage:
#   scripts/yank.sh <project> <filename> [<filename>...]
#
# Example:
#   scripts/yank.sh slint-testing slint_testing-0.1.0-py3-none-any.whl

PROJECT="${1:-}"
shift || true

if [ -z "$PROJECT" ] || [ "$#" -eq 0 ]; then
  echo "Usage: pnpm yank <project> <filename> [<filename>...]" >&2
  exit 1
fi

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS="$REPO_ROOT/assets/_protected"
NORMALIZED="$(echo "$PROJECT" | tr '[:upper:]' '[:lower:]' | sed -E 's/[-_.]+/-/g')"
PROJECT_DIR="$ASSETS/$NORMALIZED"

if [ ! -d "$PROJECT_DIR" ]; then
  echo "no such project: $NORMALIZED (looked at $PROJECT_DIR)" >&2
  exit 1
fi

for filename in "$@"; do
  target="$PROJECT_DIR/$filename"
  if [ ! -e "$target" ]; then
    echo "no such file: $target" >&2
    exit 1
  fi
  echo "→ removing $target"
  rm "$target"
  # Drop the matching .metadata sidecar too, if present.
  rm -f "$target.metadata"
done

if [ -z "$(ls -A "$PROJECT_DIR" 2>/dev/null | grep -v 'index.html')" ]; then
  rm -rf "$PROJECT_DIR"
fi

uvx --quiet --with simple503 python "$REPO_ROOT/scripts/regen-listings.py" "$ASSETS"

echo
echo "Yanked. Review with \`git status\`, then \`pnpm run deploy\`."
