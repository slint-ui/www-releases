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
    echo "usage: $0 <local-dir> <bucket> [prefix] [--delete] [--in-place]" >&2
    echo >&2
    echo "  --delete    make the target match the source exactly, removing" >&2
    echo "              anything else under the prefix. Only safe when the" >&2
    echo "              source is the whole of that prefix." >&2
    echo "  --in-place  rename inside <local-dir> instead of copying it first." >&2
    echo "              Saves a second copy of the tree, but rewrites the" >&2
    echo "              directory given. For throwaway checkouts only." >&2
    exit 1
fi

src=$1
bucket=$2
prefix=""
mode=copy
in_place=no

for arg in "${@:3}"; do
    case "$arg" in
        --delete)   mode=sync ;;
        --in-place) in_place=yes ;;
        *)          prefix=$arg ;;
    esac
done

[ -d "$src" ] || { echo "no such directory: $src" >&2; exit 1; }

if [ "$in_place" = yes ]; then
    stage=$src
else
    # A copy, so the tree given is left alone. Costs a second copy of it on
    # disk; pass --in-place where that matters and the source is disposable.
    stage=$(mktemp -d)
    trap 'rm -rf "$stage"' EXIT
    echo "copying $(du -sh "$src" 2>/dev/null | cut -f1) to a staging directory..."
    cp -a "$src"/. "$stage"/
fi

# Lowercase every name. Its own script, because doing it in shell meant forking
# dirname, basename and tr for each of 65,000 names, and on macOS that is
# minutes of process creation for seconds of work.
"$(dirname "$0")/lowercase.py" "$stage"

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
# A live display when someone is watching, a line every 30s when it is a log.
# --progress repaints the terminal, which turns a CI log into noise.
if [ -t 1 ]; then
    reporting=(--progress)
else
    # --stats-log-level NOTICE makes the closing summary print even when
    # nothing was transferred. In a log that line is the whole point: it is
    # how you see that a run really was a no-op rather than silently skipped.
    reporting=(--stats 30s --stats-one-line --stats-log-level NOTICE)
fi

echo "$mode to $bucket/$prefix ..."
rclone "$mode" "$stage"/ "r2:$bucket/$prefix" \
    --checksum --transfers 32 --checkers 32 --fast-list --s3-no-check-bucket \
    "${reporting[@]}"

echo "done: $(find "$stage" -type f | wc -l | tr -d ' ') files considered -> $bucket/$prefix"
