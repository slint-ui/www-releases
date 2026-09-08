#!/usr/bin/env python3
"""Rename every file and directory under a tree so all names are lowercase.

Addresses in the wild are lowercase while the files have capitals, so the
objects are stored lowercase and looked up in lowercase; both spellings then
reach the same one. Safe only because no two files differ solely by capitals,
which is checked here rather than assumed.

    lowercase.py <dir>

Prints the number renamed. Exits non-zero, having changed nothing further, if
two names would collide.
"""

import os
import sys


def lowercase_tree(root: str) -> int:
    renamed = 0

    # topdown=False walks depth first, so a directory is only renamed once
    # everything inside it has been dealt with and its path is still valid.
    for dirpath, dirnames, filenames in os.walk(root, topdown=False):
        for name in filenames + dirnames:
            lower = name.lower()
            if lower == name:
                continue

            src = os.path.join(dirpath, name)
            dst = os.path.join(dirpath, lower)

            if os.path.lexists(dst):
                # On a filesystem that ignores case these are one file under
                # two spellings, which is fine. Anything else would lose data.
                if not os.path.samefile(src, dst):
                    sys.exit(f"collision: {src} would overwrite {dst}")

                # Same file: go via a temporary name, because such a
                # filesystem refuses a rename that only changes capitals.
                tmp = os.path.join(dirpath, f".case-{os.getpid()}-{name}")
                os.rename(src, tmp)
                os.rename(tmp, dst)
            else:
                os.rename(src, dst)

            renamed += 1
            if renamed % 5000 == 0:
                print(f"\r  {renamed} renamed", end="", file=sys.stderr, flush=True)

    if renamed:
        print(f"\r  {renamed} renamed", file=sys.stderr)
    return renamed


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(f"usage: {sys.argv[0]} <dir>")
    if not os.path.isdir(sys.argv[1]):
        sys.exit(f"no such directory: {sys.argv[1]}")
    lowercase_tree(sys.argv[1])
