# Privacy Policy — DeveloperOS QuickTools

**Last Updated:** October 16, 2026  
**Publisher:** DeveloperOS (`https://developeros.in`)  
**Organization Repository:** `https://github.com/developerOSindia`

---

## 1. Core Commitment

DeveloperOS QuickTools is built on the fundamental principle that developer utilities should respect user privacy. We do not track, collect, store, sell, or transmit any user data.

---

## 2. Information We Do NOT Collect

- **Zero Personal Information**: We do not collect names, email addresses, IP addresses, location data, or device identifiers.
- **Zero Input Data**: Text, JSON payloads, tokens (including JWTs), secrets, passwords, hashes, and URLs you enter into the extension are processed strictly in your local browser runtime and are never sent to any server.
- **Zero Browsing History**: We do not monitor, inspect, log, or track your browsing activity or visited websites.
- **Zero Analytics or Telemetry**: There are no tracking scripts, pixels, telemetry pings, or third-party SDKs included in this extension.

---

## 3. Local Storage Usage

The extension uses the Chrome `storage.local` API solely for saving user interface preferences:
- **`lastTab`**: Remembers the last selected tool tab (e.g. JSON, JWT, Color) so it re-opens to the same tool when clicked.

This data is stored solely on your local device and is never shared or synchronized with external services.

---

## 4. Network Communications

DeveloperOS QuickTools runs **100% offline**:
- All operations (formatting, minification, hashing, decoding, color conversion, QR generation) run entirely client-side.
- The only outbound network action occurs when you intentionally click a link to an external website (such as `https://developeros.in` or `https://tools.developeros.in`), which opens standard navigation tabs in your browser.

---

## 5. Security & Cryptographic Processing

- Cryptographic hashing uses the standard W3C Web Crypto API (`crypto.subtle`).
- UUID generation uses cryptographically secure pseudorandom number generators (`crypto.randomUUID`).
- All code is executed under strict Manifest V3 Content Security Policies (`script-src 'self'`).

---

## 6. Open Source Transparency

The full source code of DeveloperOS QuickTools is publicly available and verifiable:
- **Repository**: [github.com/developerOSindia/developeros-chrome-extension](https://github.com/developerOSindia/developeros-chrome-extension)

---

## 7. Contact & Inquiries

For questions or security disclosures regarding this privacy policy, please open an issue on our GitHub repository or contact:
- **Website**: `https://developeros.in`
- **Security Policy**: [SECURITY.md](SECURITY.md)
