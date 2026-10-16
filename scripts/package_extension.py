#!/usr/bin/env python3
"""
DeveloperOS QuickTools Chrome Extension Packager
Validates Manifest V3 specifications and packages the extension into a distribution ZIP archive.
"""

import json
import os
import sys
import zipfile
from pathlib import Path

EXT_DIR = Path(__file__).resolve().parent.parent
DIST_DIR = EXT_DIR / "dist"


def validate_manifest(manifest_path: Path) -> dict:
    if not manifest_path.exists():
        print(f"[ERROR] Missing manifest.json at {manifest_path}")
        sys.exit(1)

    with open(manifest_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    if data.get("manifest_version") != 3:
        print(f"[ERROR] Invalid manifest_version: expected 3, got {data.get('manifest_version')}")
        sys.exit(1)

    if not data.get("name"):
        print("[ERROR] Manifest missing required 'name' field")
        sys.exit(1)

    if not data.get("version"):
        print("[ERROR] Manifest missing required 'version' field")
        sys.exit(1)

    action = data.get("action", {})
    if not action.get("default_popup"):
        print("[ERROR] Manifest missing action.default_popup")
        sys.exit(1)

    # Verify icons exist
    icons = data.get("icons", {})
    for size in ["16", "48", "128"]:
        icon_rel = icons.get(size)
        if not icon_rel or not (EXT_DIR / icon_rel).exists():
            print(f"[ERROR] Missing declared icon size {size}: {icon_rel}")
            sys.exit(1)

    # Verify permissions are minimal
    perms = data.get("permissions", [])
    forbidden = ["<all_urls>", "webRequest", "webRequestBlocking", "cookies", "tabs"]
    for p in perms:
        if p in forbidden:
            print(f"[ERROR] Excessive permission detected: {p}")
            sys.exit(1)

    return data


def package():
    print("=" * 60)
    print("DeveloperOS QuickTools: Chrome Extension Packager")
    print("=" * 60)

    manifest_file = EXT_DIR / "manifest.json"
    manifest = validate_manifest(manifest_file)
    version = manifest["version"]
    name_slug = "developeros-quicktools"

    # Make sure build output exists
    DIST_DIR.mkdir(parents=True, exist_ok=True)
    zip_path = DIST_DIR / f"{name_slug}-v{version}.zip"

    # Required files for distribution
    files_to_pack = [
        "manifest.json",
        "popup.html",
        "popup.css",
        "popup.js",
        "src/styles/tokens.css",
        "icons/icon16.png",
        "icons/icon48.png",
        "icons/icon128.png",
        "icons/icon.svg",
    ]

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zf:
        for f in files_to_pack:
            src_file = EXT_DIR / f
            if not src_file.exists():
                print(f"[ERROR] Required distribution file missing: {f}")
                sys.exit(1)
            zf.write(src_file, arcname=f)
            size_kb = src_file.stat().st_size / 1024
            print(f"  + Added: {f:<28} ({size_kb:>6.2f} KB)")

    total_zip_kb = zip_path.stat().st_size / 1024
    print("-" * 60)
    print(f"[SUCCESS] Packaged Chrome Web Store Bundle:")
    print(f"          Target: {zip_path}")
    print(f"          Size:   {total_zip_kb:.2f} KB")
    print("=" * 60)


if __name__ == "__main__":
    package()
