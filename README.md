# DeveloperOS QuickTools — Chrome Extension

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-success.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Offline-blue.svg)](PRIVACY.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/Tests-27%20Passing-emerald.svg)](tests/)

**DeveloperOS QuickTools** is a lightweight, zero-telemetry browser extension built using **Chrome Manifest V3** and the official **DeveloperOS Design System**. It provides 10 essential developer utilities in an accessible popup and acts as a quick launcher for all 25+ open-source suites in the DeveloperOS ecosystem.

Part of the [DeveloperOS Open-Source Tools Ecosystem](https://developeros.in).

---

## 🛠️ Included Utilities

| # | Tool | Description | Capabilities |
| :--- | :--- | :--- | :--- |
| **1** | **JSON Formatter** | Pretty print, minify, and validate JSON syntax | 2/4 space indents, key counts, byte size, syntax error locator |
| **2** | **JWT Decoder** | Inspect JSON Web Tokens completely offline | Header & payload parsing, expiration status badge, human countdown |
| **3** | **Base64 Tool** | Text to Base64 encode and decode | Standard and URL-safe (`-_`) modes, full UTF-8 support |
| **4** | **UUID Generator** | RFC 4122 Version 4 random UUID generation | Bulk counts (1-25), uppercase toggle, hyphen removal |
| **5** | **SHA Hash Generator** | Real-time cryptographic hashing | Hardware-accelerated SHA-1, SHA-256, and SHA-512 via Web Crypto |
| **6** | **Unix Timestamp** | Epoch time converter with live clock | Live ticking clock, seconds/ms conversion, UTC, local, relative time |
| **7** | **Color Converter** | Bidirectional color picker & converter | Live swatch preview, HEX ↔ RGB ↔ HSL, contrast indicator |
| **8** | **QR Code Generator** | Pure client-side QR generation | Instant canvas rendering, PNG download, SVG markup copy |
| **9** | **Text Toolkit** | Case converter & textual analytics | camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, word/char count |
| **10** | **Tool Launcher** | Searchable DeveloperOS tool directory | Bundled snapshot of 25+ tools, category filters, 1-click tab launcher |

---

## 🚀 Local Unpacked Installation Guide

You can test and use the extension immediately without building or downloading from an app store:

1. Clone or navigate to the extension directory:
   ```bash
   cd extensions/developeros-chrome-extension
   ```
2. Open Google Chrome (or any Chromium browser like Brave, Edge, Arc).
3. Navigate to:
   ```
   chrome://extensions/
   ```
4. In the top-right corner, toggle **Developer mode** to **ON**.
5. In the top-left corner, click **Load unpacked**.
6. Select the `extensions/developeros-chrome-extension` directory (or the `dist/` subdirectory).
7. The **DeveloperOS QuickTools** icon will appear in your Chrome toolbar! Click it to open the popup.

---

## 🔒 Security & Privacy Guarantees

- **100% Offline Processing**: All transformations, hashing, and decoding happen locally in ephemeral browser memory.
- **Zero Telemetry**: No tracking scripts, analytics, cookies, or remote pings.
- **Minimal Permissions**: Requests only `"storage"` (used solely to remember your last active tab).
- **Zero Host Permissions**: Does not request `<all_urls>` or permission to access websites you visit.
- **Strict Content Security Policy**: Enforces `script-src 'self'; object-src 'self'`, prohibiting all remote executable code.

Read our full [PRIVACY.md](PRIVACY.md) and [SECURITY_AND_PERMISSIONS.md](docs/SECURITY_AND_PERMISSIONS.md) documentation.

---

## 💻 Development & Testing

### Project Structure
```
extensions/developeros-chrome-extension/
├── manifest.json              # Chrome Manifest V3 specification
├── popup.html                 # Extension popup structure
├── popup.css                  # DeveloperOS dark theme tokens
├── popup.js                   # Bundled standalone ES module runtime
├── src/
│   ├── popup.ts               # Main TypeScript entrypoint
│   ├── styles/tokens.css      # DeveloperOS design system tokens
│   ├── tools/*.ts             # 10 modular TypeScript utilities
│   └── data/registry.json     # 25+ DeveloperOS tools catalog snapshot
├── icons/                     # 16x16, 48x48, 128x128 PNG & SVG icons
├── dist/                      # Production distribution build & ZIP
├── scripts/
│   ├── build.js               # Zero-dependency TypeScript bundler
│   ├── generate_icons.py      # Icon generator script
│   └── package_extension.py   # Manifest V3 packaging script
├── tests/
│   ├── test_extension_core.test.js # Node.js test suite for all 10 tools
│   └── test_extension.py      # Python unittest suite
└── docs/
    ├── CHROME_WEB_STORE_CHECKLIST.md
    └── SECURITY_AND_PERMISSIONS.md
```

### Build & Package Commands
```bash
# Compile TypeScript & bundle assets to dist/
npm run build
# Or directly: node scripts/build.js

# Run unit tests across all 10 tools
npm test
# Or directly: node --test tests/test_extension_core.test.js

# Run Python packaging & manifest validation tests
npm run test:py
# Or directly: python3 -m unittest discover tests/

# Package deployable Chrome Web Store ZIP archive
npm run package
# Output created at: dist/developeros-quicktools-v1.0.0.zip
```

---

## 🌐 Ecosystem Integration

DeveloperOS QuickTools seamlessly connects with the broader DeveloperOS ecosystem:
- **Main Hub**: [developeros.in](https://developeros.in)
- **Central Tools Directory**: [toolkit.developeros.in](https://toolkit.developeros.in)
- **GitHub Organization**: [github.com/developerOSindia](https://github.com/developerOSindia)

---

## 📄 License & Governance

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
Contributions welcome! Check out [CONTRIBUTING.md](CONTRIBUTING.md).
