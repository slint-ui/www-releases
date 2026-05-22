#!/usr/bin/env python3
"""Regenerate PEP 503 listings under assets/_protected/ using simple503's API.

Walks each per-project subdirectory of the target, builds a WheelFile per
.whl with an extracted .metadata sidecar (PEP 658), and renders:
  - assets/_protected/<project>/index.html  (project listing)
  - assets/_protected/index.html            (root listing)

All hrefs are emitted with ``base_url='./'`` so they resolve relatively to
the current URL — that's what lets the token-prefixed customer URL
(/t/<TOK>/...) navigate the same static tree without any path rewriting
in the Worker.

Usage:
    uvx --with simple503 python scripts/regen-listings.py [assets/_protected]
"""

import sys
from pathlib import Path

from dist_meta import distributions, metadata
from shippinglabel.checksum import get_sha256_hash
from simple503 import WheelFile, generate_index, generate_project_page

root = Path(sys.argv[1] if len(sys.argv) > 1 else "assets/_protected").resolve()
if not root.is_dir():
    raise SystemExit(f"not a directory: {root}")

projects: dict[str, list[WheelFile]] = {}

for project_dir in sorted(p for p in root.iterdir() if p.is_dir()):
    wheels: list[WheelFile] = []
    for whl in sorted(project_dir.glob("*.whl")):
        with distributions.WheelDistribution.from_path(whl) as wd:
            metadata_str = wd.read_file("METADATA")
        metadata_path = whl.with_suffix(".whl.metadata")
        metadata_path.write_text(metadata_str)
        wheels.append(
            WheelFile(
                filename=whl.name,
                wheel_hash=get_sha256_hash(whl),
                requires_python=metadata.loads(metadata_str).get("Requires-Python"),
                metadata_hash=get_sha256_hash(metadata_path),
            )
        )
    if wheels:
        projects[project_dir.name] = wheels

for name, wheels in projects.items():
    page = generate_project_page(name, wheels, base_url="./")
    (root / name / "index.html").write_text(str(page))

(root / "index.html").write_text(str(generate_index(projects.keys(), base_url="./")))

print(f"Regenerated listings for {len(projects)} project(s) in {root}")
