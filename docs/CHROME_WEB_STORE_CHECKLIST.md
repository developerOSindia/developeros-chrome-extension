# Chrome Web Store Publication Checklist: DeveloperOS QuickTools

> [!IMPORTANT]
> **Approval Gate**: Do **NOT** submit or publish the extension to the Chrome Web Store without explicit user approval. This document serves as the pre-submission readiness checklist and financial account requirement audit.

---

## 1. Developer Account & Financial Requirements

Google Chrome Web Store requires a registered Google Developer account before publishing any extension:

| Requirement | Details | Cost | Status |
| :--- | :--- | :--- | :--- |
| **Developer Registration Fee** | Google charges a mandatory **one-time \$5.00 USD registration fee** to verify the developer identity and prevent store spam. | **\$5.00 (One-Time)** | Required from Developer Account Owner |
| **Google Account with 2FA** | The publishing account must have 2-Step Verification enabled. | Free | Mandatory |
| **Developer Dashboard** | Access via [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole). | Included | Ready |
| **Publishing / Update Fees** | Subsequent updates and releases are 100% free with no recurring subscriptions. | **\$0.00** | Indefinite |

---

## 2. Chrome Web Store Listing Metadata

When ready to submit via the Chrome Developer Dashboard, prepare the following metadata:

### 2.1. Basic Information
- **Item Name**: `DeveloperOS QuickTools`
- **Short Description (Max 132 chars)**:
  `Privacy-first developer utilities: JSON formatter, JWT decoder, Base64, UUID, SHA hashes, Color picker, QR code & DeveloperOS tool launcher.`
- **Detailed Description**:
  ```markdown
  DeveloperOS QuickTools is a lightweight, privacy-focused productivity extension engineered for developers.

  🚀 KEY FEATURES (100% Offline & Client-Side):
  1. JSON Formatter & Validator: Format, minify, and inspect JSON with depth and key metrics.
  2. JWT Decoder: Decode headers and payloads with human-readable expiration badges without sending tokens over the wire.
  3. Base64 Encoder / Decoder: Standard and URL-safe Base64 conversions with full UTF-8 Unicode support.
  4. UUID v4 Generator: Single or bulk generation with uppercase and hyphen toggles.
  5. SHA Hash Generator: Real-time SHA-1, SHA-256, and SHA-512 hashing using hardware-accelerated Web Crypto API.
  6. Unix Timestamp Converter: Live epoch clock, timestamp-to-date conversion, and relative time countdowns.
  7. Color Converter & Picker: Bidirectional conversions between HEX, RGB, and HSL with contrast indicator.
  8. Offline QR Code Generator: Instant QR code rendering with PNG download and SVG copy options.
  9. Text Toolkit: Transform text into camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, with word/character counts.
  10. Searchable DeveloperOS Launcher: Search and launch 25+ open-source suites from https://developeros.in.

  🔒 PRIVACY & SECURITY FIRST:
  • Zero telemetry, analytics, or tracking.
  • Zero network requests — your inputs never leave your browser.
  • Minimal permissions: only requests local 'storage' to remember your active tab.
  • Open source on GitHub under DeveloperOS: https://github.com/developerOSindia
  ```
- **Category**: `Developer Tools`
- **Language**: `English`

### 2.2. Graphic Assets Checklist
- [x] **Store Icon**: `icons/icon128.png` (128x128 PNG)
- [ ] **Small Promo Tile**: 440x280 PNG (To be designed before store launch)
- [ ] **Large Promo Tile**: 920x680 PNG (Optional for store feature)
- [ ] **Screenshots**: At least one 1280x800 or 640x400 screenshot showing:
  - JSON Formatter & JWT Decoder panes
  - Color Picker & QR Code generator
  - DeveloperOS Tool Launcher catalog

---

## 3. Privacy Policy & Permissions Disclosure

Chrome Web Store enforces strict Single Purpose and Privacy Compliance policies:

1. **Single Purpose Declaration**:
   - *"The single purpose of DeveloperOS QuickTools is to provide developers with essential client-side data formatting, cryptographic utilities, and direct navigation to open-source developer tooling."*
2. **Permission Justification (`storage`)**:
   - *"Used exclusively via `chrome.storage.local` to remember the user's last selected tool tab between extension popup sessions. No personal data or user inputs are stored or transmitted."*
3. **Data Usage Compliance**:
   - Check the declaration: *"This extension does not collect or transmit user data."*
   - Check the declaration: *"All code execution occurs locally within the extension bundle."*
4. **Privacy Policy Link**:
   - `https://github.com/developerOSindia/developeros-chrome-extension/blob/main/PRIVACY.md`
   - Also mirrored on `https://developeros.in/privacy`.

---

## 4. Package Pre-Flight Verification

Before uploading `developeros-quicktools-v1.0.0.zip`:
- [x] Manifest version is `3`.
- [x] No `remote-code` or dynamic script evaluation (`eval()`).
- [x] Content Security Policy is strictly `script-src 'self'; object-src 'self'`.
- [x] Bundle contains no `.git`, `.DS_Store`, tests, or uncompiled source files.
- [x] Total package size is under 30KB.
