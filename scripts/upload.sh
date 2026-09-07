#!/usr/bin/env bash
#
# Push one folder to an R2 bucket, with every name in lowercase.
#
#   upload.sh <local-dir> <bucket> [prefix] [--delete]
#
# Addresses in the wild are lowercase, while the files have capitals. Storing
# everything lowercase, and looking up in lowercase, makes both spellings reach
# the same object. Only safe because no two files differ solely by capitals.
#
# Runs on macOS and Linux. A rename that only changes capitals does work on
# macOS, but the check for two names clashing has to use -ef there, because
# -e sees a file under either spelling.
#
# Needs an rclone remote called "r2". Once:
#   rclone config create r2 s3 provider=Cloudflare \
#       access_key_id=... secret_access_key=... \
#       endpoint=https://<account>.r2.cloudflarestorage.com

set -euo pipefail

if [ $# -lt 2 ]; then
    echo "usage: $0 <local-dir> <bucket> [prefix] [--delete]" >&2
    echo >&2
    echo "  --delete  make the target match the source exactly, removing" >&2
    echo "            anything else under the prefix. Only safe when the" >&2
    echo "            source is the whole of that prefix." >&2
    exit 1
fi

src=$1
bucket=$2
prefix=""
mode=copy

for arg in "${@:3}"; do
    case "$arg" in
        --delete) mode=sync ;;
        *)        prefix=$arg ;;
    esac
done

[ -d "$src" ] || { echo "no such directory: $src" >&2; exit 1; }

stage=$(mktemp -d)
trap 'rm -rf "$stage"' EXIT

cp -a "$src"/. "$stage"/

# Deepest first, so a folder is only renamed after everything inside it.
#
# [[:upper:]] rather than [A-Z]: in most locales A-Z collates as AaBb..Zz and
# so matches lowercase names too.
#
# Fed by process substitution rather than a pipe, so that a collision can stop
# the whole script instead of only a subshell.
while IFS= read -r -d '' path; do
    dir=$(dirname "$path")
    lower=$(basename "$path" | tr '[:upper:]' '[:lower:]')
    target="$dir/$lower"

    [ "$path" = "$target" ] && continue

    # Two names differing only in capitals would silently overwrite each other.
    # There are none in this repo, but do not find that out by losing a file.
    #
    # -ef asks whether both names point at the same file. On a filesystem that
    # ignores case, -e alone is always true here because it finds the file
    # under either spelling.
    if [ "$path" -ef "$target" ] 2>/dev/null; then
        # Same file under both spellings. Some systems refuse to rename it
        # directly, so go via a temporary name to make the change stick.
        tmp="$dir/.case-$$-$(basename "$path")"
        mv "$path" "$tmp"
        mv "$tmp" "$target"
        continue
    fi

    if [ -e "$target" ]; then
        echo "collision: $path would overwrite $target" >&2
        exit 1
    fi

    mv "$path" "$target"
done < <(find "$stage" -depth -name '*[[:upper:]]*' -print0)

# Build files that the site does not need and that should not be downloadable.
rm -f "$stage"/_redirects "$stage"/_headers "$stage"/netlify.toml \
      "$stage"/package.json "$stage"/package-lock.json "$stage"/readme.md

# "copy" by default, never "sync". Sync makes the target match the source, so
# uploading just the handful of files at the top of releases/ would delete all
# 58 release folders. Pass --delete only when the source really is the whole of
# that prefix.
#
# --checksum compares content, not timestamps. A git checkout stamps every file
# with the time it ran, so the default size-and-modtime comparison would treat
# the whole tree as changed and send it again on every run.
rclone "$mode" "$stage"/ "r2:$bucket/$prefix" \
    --checksum --transfers 32 --checkers 32 --fast-list --s3-no-check-bucket

echo "$mode: $(find "$stage" -type f | wc -l | tr -d ' ') files -> $bucket/$prefix"
