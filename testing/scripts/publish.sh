#!/usr/bin/env bash
set -euo pipefail

# Build the Python package's wheel with uv, drop it into the static-assets
# tree at assets/_protected/<normalized-name>/, and regenerate the PEP 503
# listings via simple503's Python API. Changes are staged for review —
# `git status` shows what would be deployed; `pnpm run deploy` pushes.
#
# Usage:
#   scripts/publish.sh [path-to-python-package]
# Default: ../ui-testing/python

PKG_DIR="${1:-../ui-testing/python}"
REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ASSETS="$REPO_ROOT/assets/_protected"

if [[ ! -f "$PKG_DIR/pyproject.toml" ]]; then
  echo "no pyproject.toml at $PKG_DIR" >&2
  exit 1
fi

abs_pkg_dir="$(cd "$PKG_DIR" && pwd)"

(
  cd "$abs_pkg_dir"
  rm -rf dist/
  uv build --wheel
)

PROJECT="$(python3 -c "import tomllib; print(tomllib.load(open('$abs_pkg_dir/pyproject.toml','rb'))['project']['name'])")"
NORMALIZED="$(echo "$PROJECT" | tr '[:upper:]' '[:lower:]' | sed -E 's/[-_.]+/-/g')"

mkdir -p "$ASSETS/$NORMALIZED"
cp "$abs_pkg_dir"/dist/*.whl "$ASSETS/$NORMALIZED/"

uvx --quiet --with simple503 python "$REPO_ROOT/scripts/regen-listings.py" "$ASSETS"

echo
echo "Staged $(ls "$ASSETS/$NORMALIZED"/*.whl | wc -l | tr -d ' ') wheel(s) for $NORMALIZED."
echo "Review with \`git status\` and \`git diff $ASSETS\`, then \`pnpm run deploy\`."
