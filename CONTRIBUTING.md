# Contributing to DeveloperOS QuickTools

We welcome contributions to DeveloperOS QuickTools! Please follow these guidelines to keep our extension lightweight, privacy-focused, and high-performance.

---

## Code of Conduct

Be welcoming, respectful, and constructive in all community interactions.

---

## Development Workflow

1. Fork and clone the repository.
2. Install dependencies or inspect TypeScript source in `src/`:
   ```bash
   npm run build
   ```
3. Test locally in Chrome by loading `extensions/developeros-chrome-extension` as an unpacked extension at `chrome://extensions/`.
4. Run the automated test suites:
   ```bash
   npm test
   npm run test:py
   ```
5. Ensure your changes pass all tests before submitting a Pull Request.

---

## Core Contribution Guidelines

1. **Strict Manifest V3 Compliance**: Never add permissions beyond the essential minimum. Host permissions (`<all_urls>`) and background service workers will be rejected.
2. **Zero Telemetry Policy**: Absolutely no analytics, network trackers, or external CDN script tags.
3. **Local Processing**: Sensitive developer inputs must be processed strictly client-side.
4. **Design Tokens**: Use CSS variables from `src/styles/tokens.css` to maintain visual consistency.
5. **Add Tests**: Any new utility or feature must include unit tests in `tests/test_extension_core.test.js`.
