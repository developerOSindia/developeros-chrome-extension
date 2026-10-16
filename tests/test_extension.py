#!/usr/bin/env python3
"""
Unit tests for DeveloperOS QuickTools Chrome Extension
Validates Manifest V3 compliance, strict permissions, icon assets, CSP, and packaging.
"""

import json
import subprocess
import sys
import unittest
import zipfile
from pathlib import Path

EXT_DIR = Path(__file__).resolve().parent.parent


class TestDeveloperOsChromeExtension(unittest.TestCase):
    def setUp(self):
        self.manifest_path = EXT_DIR / "manifest.json"
        self.dist_dir = EXT_DIR / "dist"
        self.icons_dir = EXT_DIR / "icons"

    def test_manifest_v3_compliance(self):
        self.assertTrue(self.manifest_path.exists(), "manifest.json must exist")
        with open(self.manifest_path, "r", encoding="utf-8") as f:
            manifest = json.load(f)

        self.assertEqual(manifest.get("manifest_version"), 3, "Must be Manifest V3")
        self.assertEqual(manifest.get("name"), "DeveloperOS QuickTools")
        self.assertEqual(manifest.get("version"), "1.0.0")
        self.assertIn("action", manifest)
        self.assertEqual(manifest["action"].get("default_popup"), "popup.html")

    def test_minimal_permissions_security(self):
        with open(self.manifest_path, "r", encoding="utf-8") as f:
            manifest = json.load(f)

        permissions = manifest.get("permissions", [])
        self.assertEqual(permissions, ["storage"], "Must request only minimal 'storage' permission")

        forbidden_permissions = [
            "<all_urls>",
            "tabs",
            "cookies",
            "webRequest",
            "webRequestBlocking",
            "management",
            "privacy",
            "debugger",
        ]
        for forbidden in forbidden_permissions:
            self.assertNotIn(forbidden, permissions, f"Excessive permission {forbidden} must not be present")

        # Must not request host permissions
        self.assertNotIn("host_permissions", manifest, "Host permissions must be empty / omitted")

    def test_strict_csp(self):
        with open(self.manifest_path, "r", encoding="utf-8") as f:
            manifest = json.load(f)

        csp = manifest.get("content_security_policy", {})
        ext_pages = csp.get("extension_pages", "")
        self.assertIn("script-src 'self'", ext_pages)
        self.assertNotIn("unsafe-eval", ext_pages, "unsafe-eval is strictly prohibited")
        self.assertNotIn("http://", ext_pages, "Remote HTTP scripts strictly prohibited")
        self.assertNotIn("https://", ext_pages, "Remote HTTPS scripts strictly prohibited")

    def test_icon_assets(self):
        for size in [16, 48, 128]:
            icon_file = self.icons_dir / f"icon{size}.png"
            self.assertTrue(icon_file.exists(), f"Icon {icon_file.name} must exist")
            self.assertGreater(icon_file.stat().st_size, 100, f"Icon {icon_file.name} must have valid content")

        svg_icon = self.icons_dir / "icon.svg"
        self.assertTrue(svg_icon.exists(), "Vector SVG icon must exist")

    def test_bundled_popup_runtime(self):
        popup_js = EXT_DIR / "popup.js"
        dist_popup_js = self.dist_dir / "popup.js"
        self.assertTrue(popup_js.exists(), "popup.js must exist in root")
        self.assertTrue(dist_popup_js.exists(), "popup.js must exist in dist/")
        self.assertGreater(popup_js.stat().st_size, 10000, "popup.js must contain bundled tools")

        # Verify syntax with node -c
        res = subprocess.run(["node", "-c", str(popup_js)], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"popup.js must pass node syntax check: {res.stderr}")

    def test_package_zip_generation(self):
        package_script = EXT_DIR / "scripts" / "package_extension.py"
        res = subprocess.run([sys.executable, str(package_script)], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"package_extension.py failed: {res.stderr}")

        zip_file = self.dist_dir / "developeros-quicktools-v1.0.0.zip"
        self.assertTrue(zip_file.exists(), "ZIP archive must exist in dist/")

        with zipfile.ZipFile(zip_file, "r") as zf:
            namelist = zf.namelist()
            self.assertIn("manifest.json", namelist)
            self.assertIn("popup.html", namelist)
            self.assertIn("popup.css", namelist)
            self.assertIn("popup.js", namelist)
            self.assertIn("icons/icon16.png", namelist)
            self.assertIn("icons/icon48.png", namelist)
            self.assertIn("icons/icon128.png", namelist)


if __name__ == "__main__":
    unittest.main()
