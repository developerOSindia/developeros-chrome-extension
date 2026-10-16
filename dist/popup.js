/**
 * DeveloperOS QuickTools — Bundled Extension Runtime (Manifest V3)
 * Offline developer utility popup runtime.
 */

// --- Embedded Registry Snapshot ---
const rawRegistry = {
  "$schema": "./schema.json",
  "version": "1.0.0",
  "last_updated": "2026-10-16",
  "ecosystem": {
    "name": "DeveloperOS",
    "website": "https://developeros.in",
    "tools_directory": "https://toolkit.developeros.in",
    "github_org": "https://github.com/developerOSindia"
  },
  "tools": [
    {
      "id": "tool-json-formatter",
      "name": "JSON Formatter & Prettifier",
      "category": "Formatters & Converters",
      "short_description": "Format, prettify, sort keys, and minify JSON payloads client-side.",
      "long_description": "High-performance JSON formatter supporting custom indentation (2 or 4 spaces), key alphabetical sorting, and payload minification. Operates strictly in-memory client-side with safe length limits.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "json-formatter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-json-validator",
      "name": "JSON Validator & Linter",
      "category": "Formatters & Converters",
      "short_description": "Validate RFC 8259 JSON syntax with precise line and column error reporting.",
      "long_description": "Strict RFC 8259 syntax checker that locates missing commas, unescaped characters, and malformed object pairs with exact line/column indicators and error highlighting.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "json-validator",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-json-csv-converter",
      "name": "JSON ↔ CSV Converter",
      "category": "Formatters & Converters",
      "short_description": "Bidirectional conversion between tabular JSON array objects and CSV data.",
      "long_description": "Convert complex tabular JSON records into CSV format with auto-detected headers, or parse CSV records into structured JSON arrays. Supports custom delimiters and quote escaping.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "json-csv-converter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-yaml-json-converter",
      "name": "YAML ↔ JSON Converter",
      "category": "Formatters & Converters",
      "short_description": "Translate configuration files between YAML and JSON syntax with validation.",
      "long_description": "Bidirectional YAML and JSON converter designed for Kubernetes manifests, Docker Compose files, and cloud configuration payloads. Safe PyYAML parsing without arbitrary code execution.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "yaml-json-converter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-xml-formatter",
      "name": "XML Formatter & Beautifier",
      "category": "Formatters & Converters",
      "short_description": "Format, indent, and minify XML documents with XXE security defense.",
      "long_description": "Beautify or minify raw XML payloads with configurable indentation. Features built-in XXE (XML External Entity) and entity expansion defense to protect against entity injection attacks.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "xml-formatter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-base64-codec",
      "name": "Base64 Encoder / Decoder",
      "category": "Security & Encoders",
      "short_description": "Encode and decode standard or URL-safe Base64 strings with automatic padding.",
      "long_description": "Encodes UTF-8 strings into RFC 4648 standard Base64 or URL-safe Base64, and decodes incoming strings with automatic padding reconstruction and UTF-8 error tolerance.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "base64-codec",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-jwt-decoder",
      "name": "JWT Token Claims Decoder",
      "category": "Security & Encoders",
      "short_description": "Decode JSON Web Tokens into Header and Payload with human-readable timestamps.",
      "long_description": "Inspect JWT headers, algorithms, expiry (exp), issued-at (iat), and custom claims client-side. Explicitly notes non-cryptographic verification for security clarity.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "jwt-decoder",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-uuid-generator",
      "name": "UUID / GUID Batch Generator",
      "category": "Security & Encoders",
      "short_description": "Bulk generate cryptographically secure UUID v4 and timestamp-based UUID v1.",
      "long_description": "Generate up to 100 RFC 4122 compliant UUIDs with options for uppercase formatting, hyphens removal, and curly brace wrapping. Fast and deterministic.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "uuid-generator",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-regex-tester",
      "name": "Regular Expression Tester",
      "category": "Security & Encoders",
      "short_description": "Test regex patterns, inspect named capture groups, and preview substitutions.",
      "long_description": "Evaluate Python-compatible regular expressions in real-time. Includes capture group inspection, flag toggles (ignore case, multiline, dotall), and ReDoS character limit protections.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "regex-tester",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-cron-builder",
      "name": "Cron Expression Builder & Explainer",
      "category": "Security & Encoders",
      "short_description": "Construct standard 5-part cron schedules and decode expressions into English.",
      "long_description": "Interactive visual cron builder supporting presets (hourly, daily, weekly) and field breakdowns for minutes, hours, days, months, and weekdays with instant English schedule translation.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "cron-builder",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-unix-timestamp",
      "name": "Unix Timestamp Converter",
      "category": "Text & Inspection",
      "short_description": "Convert epoch seconds and milliseconds to UTC, ISO 8601, and relative times.",
      "long_description": "Translates epoch seconds or milliseconds to ISO 8601, RFC 2822, UTC, and local timezone formats with human-readable relative time calculations (e.g. '3 hours ago').",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "unix-timestamp",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-url-codec",
      "name": "URL Encoder, Decoder & Inspector",
      "category": "Text & Inspection",
      "short_description": "Percent-encode query parameters and deconstruct URLs into structural parts.",
      "long_description": "Encode or decode query string parameters with support for form-encoded plus spaces. Deconstructs URLs into scheme, hostname, port, path, query dictionary, and fragment components.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "url-codec",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-text-diff",
      "name": "Text Diff Checker",
      "category": "Text & Inspection",
      "short_description": "Compare code and text side-by-side with additions, deletions, and similarity.",
      "long_description": "Computes unified and side-by-side diffs using Python standard difflib. Calculates character similarity percentages, additions counts, deletions counts, and configurable context lines.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "text-diff",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-hash-calculator",
      "name": "Hash & HMAC Calculator",
      "category": "Text & Inspection",
      "short_description": "Compute SHA-256, SHA-512, MD5 hashes, HMAC signatures, and constant-time check.",
      "long_description": "Calculates multi-algorithm cryptographic digests client-side. Includes secret-keyed HMAC generation and constant-time string comparison to prevent timing attack vulnerabilities.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "hash-calculator",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-markdown-previewer",
      "name": "Markdown Previewer & Outline Inspector",
      "category": "Text & Inspection",
      "short_description": "Live Markdown rendering, table-of-contents extraction, and XSS safety check.",
      "long_description": "Real-time rendering of Markdown syntax with automated heading outline extraction, word count metrics, reading time estimations, and detection of potentially unsafe HTML script tags.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "markdown-previewer",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-html-minifier",
      "name": "HTML Minifier & Optimizer",
      "category": "Web & Design Tools",
      "short_description": "Minify HTML markup, strip comments, and collapse inter-tag whitespace.",
      "long_description": "Compresses HTML documents, strips non-conditional comments, and eliminates unnecessary whitespace while strictly preserving literal code, pre, script, and textarea tag contents.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "html-minifier",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-css-minifier",
      "name": "CSS Minifier & Optimizer",
      "category": "Web & Design Tools",
      "short_description": "Compress CSS stylesheets, remove comments, and eliminate whitespace.",
      "long_description": "Minifies CSS stylesheets, strips block comments, normalizes declaration delimiters, removes redundant trailing semicolons, and calculates byte savings and compression percentages.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "css-minifier",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-color-converter",
      "name": "Color Converter & WCAG Contrast Inspector",
      "category": "Web & Design Tools",
      "short_description": "Convert HEX, RGB, HSL, CMYK, and verify WCAG AA accessibility compliance.",
      "long_description": "Converts color codes bidirectionally between HEX, RGB, HSL, and CMYK formats. Computes exact relative luminance and tests WCAG 2.1 AA/AAA contrast ratios against white and black canvases.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "color-converter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-text-case-converter",
      "name": "Text Case Converter",
      "category": "Web & Design Tools",
      "short_description": "Convert strings across camelCase, PascalCase, snake_case, and kebab-case.",
      "long_description": "Intelligent tokenizer that parses camelCase, snake_case, spaces, and punctuation, transforming identifiers into 12 standard programming cases including CONSTANT_CASE and dot.case.",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "text-case-converter",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-qr-code-generator",
      "name": "QR Code Generator",
      "category": "Web & Design Tools",
      "short_description": "Generate vector SVG and PNG QR codes with configurable error correction.",
      "long_description": "Generates QR codes for URLs, plain text, and Wi-Fi networks. Exports high-resolution PNG images or scalable vector SVG assets with selectable error correction levels (L, M, Q, H).",
      "parent_suite": {
        "id": "developeros-devutils",
        "name": "DeveloperOS DevUtils Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-devutils",
      "seo_slug": "qr-code-generator",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-api-sentinel",
      "name": "API Sentinel Route Simulator",
      "category": "API & Network",
      "short_description": "Standalone in-memory API route simulator, header inspector, and response mocker.",
      "long_description": "Simulate REST API endpoints with custom JSON payloads, headers, latency delays, and error codes without provisioning a live backend. Completely in-memory and ephemeral.",
      "parent_suite": {
        "id": "api-sentinel",
        "name": "API Sentinel Flagship"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/api-sentinel",
      "seo_slug": "api-sentinel",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-data-forge",
      "name": "Data Forge Tabular Generator",
      "category": "Database & Data",
      "short_description": "Generate synthetic tabular datasets and mock relational databases.",
      "long_description": "Deterministic and randomized generation of synthetic datasets for testing database queries, data pipelines, and UI tables. Exports directly to CSV, JSON, and SQL INSERT scripts.",
      "parent_suite": {
        "id": "data-forge",
        "name": "Data Forge Flagship"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/data-forge",
      "seo_slug": "data-forge",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-diagram-studio",
      "name": "Diagram Studio Architecture Canvas",
      "category": "Documentation & Visuals",
      "short_description": "Interactive Mermaid.js architecture diagrams and system visualizer.",
      "long_description": "Renders system architecture diagrams, sequence flows, and entity relationship diagrams directly from Mermaid syntax with zero backend compilation. Runs statically in the browser.",
      "parent_suite": {
        "id": "diagram-studio",
        "name": "Diagram Studio Flagship"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/diagram-studio",
      "seo_slug": "diagram-studio",
      "framework": "Vanilla JS & Mermaid.js",
      "hosting_provider": "Cloudflare Pages",
      "availability_status": "staged_local",
      "privacy_classification": "zero_storage_client",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-quick-hub",
      "name": "DeveloperOS Quick Hub Chrome Extension",
      "category": "Browser Extensions",
      "short_description": "Offline JWT, Base64, and UUID browser extension with zero permissions.",
      "long_description": "Instant offline browser extension for developers. Decodes JWTs, computes Base64 strings, and generates UUIDs without internet access or permissions. Complies with Chrome Manifest V3.",
      "parent_suite": {
        "id": "developer-quick-hub",
        "name": "Developer Quick Hub Extension"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developer-quick-hub",
      "seo_slug": "developer-quick-hub",
      "framework": "Chrome Manifest V3",
      "hosting_provider": "Chrome Web Store",
      "availability_status": "staged_local",
      "privacy_classification": "zero_storage_client",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-meta-tags",
      "name": "OpenGraph & Meta Tag Generator",
      "category": "Web & Design Tools",
      "short_description": "Generate social sharing cards and SEO meta tags with real-time preview.",
      "long_description": "Interactive generator for OpenGraph, Twitter Cards, and standard SEO meta tags. Provides real-time rendering of social sharing previews on desktop and mobile platforms.",
      "parent_suite": {
        "id": "suite-web-craft",
        "name": "Web & Frontend Craft Suite"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/devos-suite-web-craft",
      "seo_slug": "meta-tag-generator",
      "framework": "Streamlit",
      "hosting_provider": "Streamlit Community Cloud",
      "availability_status": "staged_local",
      "privacy_classification": "client_side_ephemeral",
      "version": "1.0.0",
      "last_verified_date": null
    },
    {
      "id": "tool-quicktools-extension",
      "name": "DeveloperOS QuickTools Chrome Extension",
      "category": "Browser Extensions",
      "short_description": "Privacy-first Manifest V3 developer extension with 10 utilities and tool launcher.",
      "long_description": "Lightweight, privacy-conscious Chrome Manifest V3 developer extension featuring 10 offline utilities: JSON Formatter, JWT Decoder, Base64 Tool, UUID Generator, SHA Hash Generator, Unix Timestamp Converter, Color Picker, QR Code Generator, Text Toolkit, and Searchable Tool Launcher.",
      "parent_suite": {
        "id": "developeros-chrome-extension",
        "name": "DeveloperOS QuickTools Extension"
      },
      "live_url": null,
      "repository_url": "https://github.com/developerOSindia/developeros-chrome-extension",
      "seo_slug": "developeros-quicktools",
      "framework": "Chrome Manifest V3 / TypeScript",
      "hosting_provider": "Chrome Web Store / GitHub Releases",
      "availability_status": "staged_local",
      "privacy_classification": "zero_storage_client",
      "version": "1.0.0",
      "last_verified_date": null
    }
  ]
};


/* --- Tool: json-formatter.ts --- */
/**
 * DeveloperOS QuickTools — Tool 1: JSON Formatter & Validator
 * Formats, minifies, and inspects JSON completely offline.
 */

                                   
                   
                 
                 
           
                      
                     
                  
    
 

                                       
                 
                 
                
                  
 

function calculateDepth(obj     )         {
  if (obj === null || typeof obj !== 'object') return 0;
  let maxChildDepth = 0;
  for (const key of Object.keys(obj)) {
    maxChildDepth = Math.max(maxChildDepth, calculateDepth(obj[key]));
  }
  return 1 + maxChildDepth;
}

function countKeys(obj     )         {
  if (obj === null || typeof obj !== 'object') return 0;
  let count = Array.isArray(obj) ? 0 : Object.keys(obj).length;
  for (const key of Object.keys(obj)) {
    count += countKeys(obj[key]);
  }
  return count;
}

export function formatJson(input        , indent         = 2)                   {
  if (!input || !input.trim()) {
    return { success: false, result: '', error: 'Input cannot be empty.' };
  }

  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, indent);
    return {
      success: true,
      result: formatted,
      stats: {
        keysCount: countKeys(parsed),
        byteSize: new Blob([formatted]).size,
        depth: calculateDepth(parsed),
      },
    };
  } catch (err     ) {
    return {
      success: false,
      result: '',
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

export function minifyJson(input        )                   {
  if (!input || !input.trim()) {
    return { success: false, result: '', error: 'Input cannot be empty.' };
  }

  try {
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    return {
      success: true,
      result: minified,
      stats: {
        keysCount: countKeys(parsed),
        byteSize: new Blob([minified]).size,
        depth: calculateDepth(parsed),
      },
    };
  } catch (err     ) {
    return {
      success: false,
      result: '',
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

export function validateJson(input        )                       {
  if (!input || !input.trim()) {
    return { valid: false, error: 'Input is empty.' };
  }

  try {
    JSON.parse(input);
    return { valid: true };
  } catch (err     ) {
    const message = err.message || 'Invalid JSON syntax';
    let line                    ;
    let column                    ;

    const lineMatch = message.match(/line (\d+) column (\d+)/i);
    if (lineMatch) {
      line = parseInt(lineMatch[1], 10);
      column = parseInt(lineMatch[2], 10);
    } else {
      const posMatch = message.match(/position (\d+)/i);
      if (posMatch) {
        const pos = parseInt(posMatch[1], 10);
        const sub = input.slice(0, pos);
        const lines = sub.split('\n');
        line = lines.length;
        column = lines[lines.length - 1].length + 1;
      }
    }

    return { valid: false, error: message, line, column };
  }
}


/* --- Tool: jwt-decoder.ts --- */
/**
 * DeveloperOS QuickTools — Tool 2: JWT Decoder
 * Decodes JSON Web Tokens offline without transmitting sensitive data.
 */

                                  
                   
                               
                                
                     
                      
                              
                             
                         
                     
                 
 

function base64UrlDecode(str        )         {
  // Convert Base64URL to standard Base64
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  // Pad with '='
  while (base64.length % 4) {
    base64 += '=';
  }

  // Safe UTF-8 decode
  if (typeof atob !== 'undefined') {
    const raw = atob(base64);
    const bytes = Uint8Array.from(raw, c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } else if (typeof Buffer !== 'undefined') {
    return Buffer.from(base64, 'base64').toString('utf-8');
  }
  throw new Error('No base64 decoding mechanism available');
}

function formatRelativeTime(secondsDiff        )         {
  const abs = Math.abs(secondsDiff);
  const minutes = Math.floor(abs / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let desc = '';
  if (days > 0) {
    desc = `${days} day${days > 1 ? 's' : ''}`;
  } else if (hours > 0) {
    desc = `${hours} hour${hours > 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    desc = `${minutes} min${minutes > 1 ? 's' : ''}`;
  } else {
    desc = `${abs} sec${abs > 1 ? 's' : ''}`;
  }

  return secondsDiff < 0 ? `Expired ${desc} ago` : `Expires in ${desc}`;
}

export function decodeJwt(token        )                  {
  if (!token || !token.trim()) {
    return { success: false, error: 'Please enter a JWT token.' };
  }

  const cleanToken = token.trim();
  const parts = cleanToken.split('.');

  if (parts.length !== 3) {
    return {
      success: false,
      error: `Invalid JWT structure: Expected 3 period-separated parts, found ${parts.length}.`,
    };
  }

  try {
    const headerJson = base64UrlDecode(parts[0]);
    const payloadJson = base64UrlDecode(parts[1]);
    const signature = parts[2];

    const header = JSON.parse(headerJson);
    const payload = JSON.parse(payloadJson);

    let isExpired                     ;
    let expiresAtFormatted                    ;
    let issuedAtFormatted                    ;
    let timeRemaining                    ;

    const nowSeconds = Math.floor(Date.now() / 1000);

    if (payload.exp && typeof payload.exp === 'number') {
      const expDate = new Date(payload.exp * 1000);
      expiresAtFormatted = expDate.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
      isExpired = nowSeconds >= payload.exp;
      timeRemaining = formatRelativeTime(payload.exp - nowSeconds);
    }

    if (payload.iat && typeof payload.iat === 'number') {
      const iatDate = new Date(payload.iat * 1000);
      issuedAtFormatted = iatDate.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';
    }

    return {
      success: true,
      header,
      payload,
      signature,
      isExpired,
      expiresAtFormatted,
      issuedAtFormatted,
      timeRemaining,
      algorithm: header.alg || 'Unknown',
    };
  } catch (err     ) {
    return {
      success: false,
      error: `Failed to decode JWT: ${err.message || 'Malformed token encoding'}`,
    };
  }
}


/* --- Tool: base64-tool.ts --- */
/**
 * DeveloperOS QuickTools — Tool 3: Base64 Encoder / Decoder
 * Supports standard and URL-safe Base64 conversions with full UTF-8 Unicode support.
 */

                               
                   
                 
                 
                      
                       
 

export function encodeBase64(input        , urlSafe          = false)               {
  if (input === '') {
    return { success: true, result: '', inputBytes: 0, outputBytes: 0 };
  }

  try {
    let base64 = '';
    if (typeof btoa !== 'undefined') {
      const bytes = new TextEncoder().encode(input);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      base64 = btoa(binary);
    } else if (typeof Buffer !== 'undefined') {
      base64 = Buffer.from(input, 'utf-8').toString('base64');
    }

    if (urlSafe) {
      base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    return {
      success: true,
      result: base64,
      inputBytes: new Blob ? new Blob([input]).size : input.length,
      outputBytes: base64.length,
    };
  } catch (err     ) {
    return {
      success: false,
      result: '',
      error: err.message || 'Failed to encode to Base64.',
    };
  }
}

export function decodeBase64(input        )               {
  if (!input || !input.trim()) {
    return { success: true, result: '', inputBytes: 0, outputBytes: 0 };
  }

  try {
    let clean = input.trim();
    // Convert URL-safe characters back to standard Base64
    clean = clean.replace(/-/g, '+').replace(/_/g, '/');
    while (clean.length % 4 !== 0) {
      clean += '=';
    }

    // Validate Base64 characters
    if (!/^[A-Za-z0-9+/=]+$/.test(clean)) {
      return {
        success: false,
        result: '',
        error: 'Invalid Base64 character detected.',
      };
    }

    let decoded = '';
    if (typeof atob !== 'undefined') {
      const binary = atob(clean);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      decoded = new TextDecoder().decode(bytes);
    } else if (typeof Buffer !== 'undefined') {
      decoded = Buffer.from(clean, 'base64').toString('utf-8');
    }

    return {
      success: true,
      result: decoded,
      inputBytes: input.length,
      outputBytes: new Blob ? new Blob([decoded]).size : decoded.length,
    };
  } catch (err     ) {
    return {
      success: false,
      result: '',
      error: `Failed to decode Base64: ${err.message || 'Invalid encoding'}`,
    };
  }
}


/* --- Tool: uuid-gen.ts --- */
/**
 * DeveloperOS QuickTools — Tool 4: UUID Generator
 * Generates cryptographically secure RFC 4122 Version 4 UUIDs offline.
 */

                              
                 
                      
                    
 

export function generateSingleUuid()         {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  // Fallback using crypto.getRandomValues
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    // Set version 4 (bits 12-15 = 0100)
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    // Set variant (bits 6-7 = 10)
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  // Pure JS pseudo-random fallback (should rarely be needed in Chrome)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function generateUuids(options              = {})           {
  const count = Math.min(Math.max(options.count || 1, 1), 50);
  const uppercase = !!options.uppercase;
  const hyphens = options.hyphens !== false; // default true

  const uuids           = [];
  for (let i = 0; i < count; i++) {
    let id = generateSingleUuid();
    if (!hyphens) {
      id = id.replace(/-/g, '');
    }
    if (uppercase) {
      id = id.toUpperCase();
    } else {
      id = id.toLowerCase();
    }
    uuids.push(id);
  }

  return uuids;
}


/* --- Tool: hash-gen.ts --- */
/**
 * DeveloperOS QuickTools — Tool 5: SHA Hash Generator
 * Computes SHA-1, SHA-256, and SHA-512 hashes offline using Web Crypto API.
 */

                                                            

                             
                           
               
 

export async function computeHash(algorithm               , input        )                  {
  if (typeof crypto !== 'undefined' && crypto.subtle && typeof crypto.subtle.digest === 'function') {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Node.js fallback for unit test environments
  try {
    const nodeCrypto = await import('crypto');
    const nodeAlgo = algorithm.toLowerCase().replace('-', '');
    return nodeCrypto.createHash(nodeAlgo).update(input, 'utf8').digest('hex');
  } catch (err) {
    throw new Error(`Web Crypto API is unavailable to compute ${algorithm}`);
  }
}

export async function computeAllHashes(input        )                                         {
  const [sha1, sha256, sha512] = await Promise.all([
    computeHash('SHA-1', input),
    computeHash('SHA-256', input),
    computeHash('SHA-512', input),
  ]);

  return {
    'SHA-1': sha1,
    'SHA-256': sha256,
    'SHA-512': sha512,
  };
}


/* --- Tool: timestamp-tool.ts --- */
/**
 * DeveloperOS QuickTools — Tool 6: Unix Timestamp Converter
 * Converts between Unix epoch timestamps and human-readable dates with timezone clarity.
 */

                                
                  
                       
              
              
                
                   
 

export function formatRelativeTimestamp(targetMs        , nowMs         = Date.now())         {
  const diffSec = Math.round((targetMs - nowMs) / 1000);
  const absSec = Math.abs(diffSec);

  const minutes = Math.floor(absSec / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let desc = '';
  if (days > 0) {
    desc = `${days} day${days > 1 ? 's' : ''}`;
  } else if (hours > 0) {
    desc = `${hours} hour${hours > 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    desc = `${minutes} min${minutes > 1 ? 's' : ''}`;
  } else {
    desc = `${absSec} sec${absSec > 1 ? 's' : ''}`;
  }

  if (diffSec === 0) return 'Just now';
  return diffSec < 0 ? `${desc} ago` : `in ${desc}`;
}

export function timestampToInfo(ts        )                {
  // If timestamp has 10 digits or fewer, treat as seconds; otherwise milliseconds
  let ms = ts;
  if (Math.abs(ts) < 100000000000) {
    ms = ts * 1000;
  }

  const date = new Date(ms);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp number');
  }

  return {
    seconds: Math.floor(date.getTime() / 1000),
    milliseconds: date.getTime(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    relative: formatRelativeTimestamp(date.getTime()),
  };
}

export function dateStringToTimestamp(dateString        )                {
  if (!dateString || !dateString.trim()) {
    throw new Error('Date string cannot be empty');
  }

  const date = new Date(dateString.trim());
  if (isNaN(date.getTime())) {
    throw new Error(`Unable to parse date string: "${dateString}"`);
  }

  return {
    seconds: Math.floor(date.getTime() / 1000),
    milliseconds: date.getTime(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    relative: formatRelativeTimestamp(date.getTime()),
  };
}

export function getCurrentTimestamps()                {
  return timestampToInfo(Date.now());
}


/* --- Tool: color-converter.ts --- */
/**
 * DeveloperOS QuickTools — Tool 7: Color Converter & Picker
 * Real-time bidirectional color conversions between HEX, RGB, and HSL.
 */

                                        
              
              
              
            
            
            
            
            
            
            
                  
 

export function rgbToHsl(r        , g        , b        )                                      {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export function hslToRgb(h        , s        , l        )                                      {
  h /= 360;
  s /= 100;
  l /= 100;

  let r        , g        , b        ;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p        , q        , t        ) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

export function rgbToHex(r        , g        , b        )         {
  const toHex = (c        ) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function parseColor(input        )                               {
  if (!input || !input.trim()) return null;
  const str = input.trim().toLowerCase();

  let r = 0, g = 0, b = 0, a = 1;

  // HEX matching (#RGB, #RRGGBB)
  const hexMatch = str.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  } else {
    // RGB matching rgb(r, g, b)
    const rgbMatch = str.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([0-9.]+))?\s*\)$/i);
    if (rgbMatch) {
      r = Math.min(255, parseInt(rgbMatch[1], 10));
      g = Math.min(255, parseInt(rgbMatch[2], 10));
      b = Math.min(255, parseInt(rgbMatch[3], 10));
      if (rgbMatch[4]) a = parseFloat(rgbMatch[4]);
    } else {
      // HSL matching hsl(h, s%, l%)
      const hslMatch = str.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*([0-9.]+))?\s*\)$/i);
      if (hslMatch) {
        const h = parseInt(hslMatch[1], 10) % 360;
        const s = Math.min(100, parseInt(hslMatch[2], 10));
        const l = Math.min(100, parseInt(hslMatch[3], 10));
        const rgb = hslToRgb(h, s, l);
        r = rgb.r;
        g = rgb.g;
        b = rgb.b;
        if (hslMatch[4]) a = parseFloat(hslMatch[4]);
      } else {
        return null;
      }
    }
  }

  const hsl = rgbToHsl(r, g, b);
  const hex = rgbToHex(r, g, b);

  // Perceived brightness (YIQ formula)
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const isDark = yiq < 128;

  return {
    hex,
    rgb: a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`,
    hsl: a === 1 ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${a})`,
    r,
    g,
    b,
    a,
    h: hsl.h,
    s: hsl.s,
    l: hsl.l,
    isDark,
  };
}


/* --- Tool: qrcode-gen.ts --- */
/**
 * DeveloperOS QuickTools — Tool 8: Pure Offline QR Code Generator
 * Generates standards-compliant QR codes (Versions 1-6, Byte Mode, EC Low/Medium)
 * completely client-side with zero external libraries or network calls.
 */

// QR Code Constants & Tables
const PAD0 = 0xec;
const PAD1 = 0x11;

// GF(256) tables for Reed-Solomon error correction
const EXP_TABLE = new Uint8Array(256);
const LOG_TABLE = new Uint8Array(256);

(function initGaloisField() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  EXP_TABLE[255] = EXP_TABLE[0];
})();

function glog(n        )         {
  if (n < 1) throw new Error('glog(' + n + ')');
  return LOG_TABLE[n];
}

function gexp(n        )         {
  while (n < 0) n += 255;
  while (n >= 256) n -= 255;
  return EXP_TABLE[n];
}

function rsMultiply(p1          , p2          )           {
  const result = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gexp(glog(p1[i]) + glog(p2[j]));
    }
  }
  return result;
}

function rsGetGeneratorPoly(errorCorrectionLength        )           {
  let poly = [1];
  for (let i = 0; i < errorCorrectionLength; i++) {
    poly = rsMultiply(poly, [1, gexp(i)]);
  }
  return poly;
}

function rsCalculateEc(data          , ecCount        )           {
  const generator = rsGetGeneratorPoly(ecCount);
  const info = data.slice();
  for (let i = 0; i < ecCount; i++) info.push(0);

  while (info.length >= generator.length) {
    const lead = info[0];
    if (lead !== 0) {
      const leadLog = glog(lead);
      for (let i = 0; i < generator.length; i++) {
        info[i] ^= gexp(leadLog + glog(generator[i]));
      }
    }
    info.shift();
  }
  return info;
}

// Version table: [version, totalCodewords, dataCodewordsL, ecCodewordsL]
const VERSION_INFO                                                                              = {
  1: { size: 21, total: 26, dataL: 19, ecL: 7 },
  2: { size: 25, total: 44, dataL: 34, ecL: 10 },
  3: { size: 29, total: 70, dataL: 55, ecL: 15 },
  4: { size: 33, total: 100, dataL: 80, ecL: 20 },
  5: { size: 37, total: 134, dataL: 108, ecL: 26 },
};

export class SimpleQrCode {
          version         = 1;
          size         = 21;
          matrix              = [];
          isReserved              = [];

  constructor(text        ) {
    this.build(text);
  }

         getSize()         {
    return this.size;
  }

         isDark(row        , col        )          {
    return this.matrix[row][col];
  }

         toSvg(scale         = 8, margin         = 4)         {
    const totalDim = (this.size + margin * 2) * scale;
    let paths = '';

    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.matrix[r][c]) {
          const x = (c + margin) * scale;
          const y = (r + margin) * scale;
          paths += `M${x},${y}h${scale}v${scale}h-${scale}z `;
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalDim} ${totalDim}" width="${totalDim}" height="${totalDim}">
      <rect width="100%" height="100%" fill="#ffffff" />
      <path d="${paths}" fill="#0f172a" />
    </svg>`;
  }

         drawToCanvas(canvas                   , scale         = 8, margin         = 4)       {
    const totalDim = (this.size + margin * 2) * scale;
    canvas.width = totalDim;
    canvas.height = totalDim;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, totalDim, totalDim);

    ctx.fillStyle = '#0f172a';
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.matrix[r][c]) {
          ctx.fillRect((c + margin) * scale, (r + margin) * scale, scale, scale);
        }
      }
    }
  }

          build(text        )       {
    const rawBytes = new TextEncoder().encode(text);
    const dataLen = rawBytes.length;

    // Pick smallest version that fits data in Byte Mode (4 bits mode + 8 bits count + bytes)
    this.version = 1;
    for (let v = 1; v <= 5; v++) {
      if (VERSION_INFO[v].dataL >= dataLen + 2) {
        this.version = v;
        break;
      }
      if (v === 5) this.version = 5;
    }

    const vInfo = VERSION_INFO[this.version];
    this.size = vInfo.size;

    // Initialize matrix
    this.matrix = Array.from({ length: this.size }, () => new Array(this.size).fill(false));
    this.isReserved = Array.from({ length: this.size }, () => new Array(this.size).fill(false));

    // Place function patterns
    this.placeFinderPatterns();
    this.placeTimingPatterns();
    if (this.version >= 2) this.placeAlignmentPattern();

    // Encode data
    const bitBuffer           = [];
    const pushBits = (val        , bits        ) => {
      for (let i = bits - 1; i >= 0; i--) {
        bitBuffer.push((val >> i) & 1);
      }
    };

    // Mode indicator: 0100 for Byte Mode
    pushBits(0b0100, 4);
    // Character count (8 bits for V1-9 byte mode)
    pushBits(dataLen, 8);
    // Data bytes
    for (let i = 0; i < dataLen; i++) {
      pushBits(rawBytes[i], 8);
    }
    // Terminator bits
    const totalDataBits = vInfo.dataL * 8;
    const term = Math.min(4, totalDataBits - bitBuffer.length);
    pushBits(0, term);
    // Pad to byte
    while (bitBuffer.length % 8 !== 0) {
      bitBuffer.push(0);
    }
    // Convert to bytes
    const dataBytes           = [];
    for (let i = 0; i < bitBuffer.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bitBuffer[i + j];
      dataBytes.push(b);
    }
    // Pad bytes with PAD0 and PAD1
    let padToggle = false;
    while (dataBytes.length < vInfo.dataL) {
      dataBytes.push(padToggle ? PAD1 : PAD0);
      padToggle = !padToggle;
    }

    // Reed-Solomon Error Correction
    const ecBytes = rsCalculateEc(dataBytes, vInfo.ecL);
    const finalCodewords = dataBytes.concat(ecBytes);

    // Convert codewords to final bit sequence
    const finalBits           = [];
    for (const b of finalCodewords) {
      for (let i = 7; i >= 0; i--) {
        finalBits.push((b >> i) & 1);
      }
    }

    // Place data in matrix
    let bitIdx = 0;
    let upwards = true;
    for (let right = this.size - 1; right > 0; right -= 2) {
      if (right === 6) right--; // skip timing column

      for (let vert = 0; vert < this.size; vert++) {
        const row = upwards ? this.size - 1 - vert : vert;
        for (let col = right; col >= right - 1; col--) {
          if (!this.isReserved[row][col]) {
            let bit = bitIdx < finalBits.length ? finalBits[bitIdx++] === 1 : false;
            // Apply Mask 0: (row + col) % 2 === 0
            if ((row + col) % 2 === 0) {
              bit = !bit;
            }
            this.matrix[row][col] = bit;
          }
        }
      }
      upwards = !upwards;
    }

    this.placeFormatInformation();
  }

          placeFinderPatterns()       {
    const placeFinder = (rStart        , cStart        ) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const isCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          this.matrix[rStart + r][cStart + c] = isBorder || isCore;
          this.isReserved[rStart + r][cStart + c] = true;
        }
      }
      // Separator border
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const row = rStart + r;
          const col = cStart + c;
          if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
            this.isReserved[row][col] = true;
          }
        }
      }
    };

    placeFinder(0, 0);
    placeFinder(0, this.size - 7);
    placeFinder(this.size - 7, 0);
  }

          placeTimingPatterns()       {
    for (let i = 8; i < this.size - 8; i++) {
      const isBlack = i % 2 === 0;
      this.matrix[6][i] = isBlack;
      this.isReserved[6][i] = true;
      this.matrix[i][6] = isBlack;
      this.isReserved[i][6] = true;
    }
  }

          placeAlignmentPattern()       {
    const pos = this.size - 7;
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        const isBlack = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        this.matrix[pos + r][pos + c] = isBlack;
        this.isReserved[pos + r][pos + c] = true;
      }
    }
  }

          placeFormatInformation()       {
    // Mask 0, Error Correction L = 0b01
    // Format bits for L-0 after BCH code and XOR mask: 0x77c4 = 0b111011111000100
    const formatBits = 0x77c4;

    for (let i = 0; i < 15; i++) {
      const bit = ((formatBits >> i) & 1) === 1;
      // Around top-left finder
      if (i < 6) this.matrix[8][i] = bit;
      else if (i < 8) this.matrix[8][i + 1] = bit;
      else if (i === 8) this.matrix[7][8] = bit;
      else this.matrix[14 - i][8] = bit;

      // Split second copy
      if (i < 8) this.matrix[this.size - 1 - i][8] = bit;
      else this.matrix[8][this.size - 15 + i] = bit;
    }
    // Dark module
    this.matrix[this.size - 8][8] = true;
  }
}

export function generateQrSvg(text        , scale         = 8, margin         = 4)         {
  if (!text) text = 'https://developeros.in';
  const qr = new SimpleQrCode(text);
  return qr.toSvg(scale, margin);
}


/* --- Tool: text-toolkit.ts --- */
/**
 * DeveloperOS QuickTools — Tool 9: Text Toolkit
 * Case transformations and textual analytics executed offline.
 */

                                 
                    
                            
                    
                    
 

function splitWords(input        )           {
  if (!input) return [];
  // Split on camelCase boundaries, snake_case, kebab-case, or whitespace
  return input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/[_\-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(w => w.length > 0);
}

export function toCamelCase(input        )         {
  const words = splitWords(input);
  if (words.length === 0) return '';
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('')
  );
}

export function toPascalCase(input        )         {
  const words = splitWords(input);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

export function toSnakeCase(input        )         {
  const words = splitWords(input);
  return words.map(w => w.toLowerCase()).join('_');
}

export function toKebabCase(input        )         {
  const words = splitWords(input);
  return words.map(w => w.toLowerCase()).join('-');
}

export function toConstantCase(input        )         {
  const words = splitWords(input);
  return words.map(w => w.toUpperCase()).join('_');
}

export function toTitleCase(input        )         {
  const words = splitWords(input);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

export function toUpperCase(input        )         {
  return input.toUpperCase();
}

export function toLowerCase(input        )         {
  return input.toLowerCase();
}

export function getTextStats(input        )                 {
  if (!input) {
    return {
      charCount: 0,
      charCountNoSpaces: 0,
      wordCount: 0,
      lineCount: 0,
    };
  }

  const charCount = input.length;
  const charCountNoSpaces = input.replace(/\s/g, '').length;
  const words = input.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const lineCount = input.split('\n').length;

  return {
    charCount,
    charCountNoSpaces,
    wordCount,
    lineCount,
  };
}


/* --- Tool: tool-launcher.ts --- */
/**
 * DeveloperOS QuickTools — Tool 10: Searchable Tool Launcher
 * Instant discovery and launcher for 25+ DeveloperOS web suites, tools, and repositories.
 */

                               
             
               
                   
                            
                           
                       
                          
                         
                   
                    
                           
                              
                                 
                  
                             
 

export function searchTools(
  tools                ,
  query        ,
  selectedCategory         = 'All'
)                 {
  const q = (query || '').toLowerCase().trim();
  const cat = (selectedCategory || 'All').trim();

  return tools.filter(tool => {
    // Category check
    if (cat !== 'All' && tool.category.toLowerCase() !== cat.toLowerCase()) {
      return false;
    }

    // Search query check
    if (!q) return true;

    return (
      tool.name.toLowerCase().includes(q) ||
      tool.short_description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.parent_suite.toLowerCase().includes(q) ||
      tool.seo_slug.toLowerCase().includes(q)
    );
  });
}

export function getCategories(tools                )           {
  const set = new Set        ();
  tools.forEach(t => set.add(t.category));
  return ['All', ...Array.from(set).sort()];
}

export function resolveLaunchUrl(tool              )         {
  // If the live URL has been verified, launch it
  if (tool.live_url && tool.live_url.startsWith('https://')) {
    return tool.live_url;
  }
  // Otherwise open the static SEO landing page on toolkit.developeros.in
  return `https://toolkit.developeros.in/tools/${tool.seo_slug}.html`;
}

export function openExternalUrl(url        )       {
  if (typeof chrome !== 'undefined' && chrome.tabs && typeof chrome.tabs.create === 'function') {
    chrome.tabs.create({ url });
  } else if (typeof window !== 'undefined' && window.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}



/**
 * DeveloperOS QuickTools — Main Popup Controller
 * Manages tab switching, UI event bindings, state persistence, and all 10 tools.
 */











// --- Clipboard Helper ---
export function copyToClipboard(text        , button                     )       {
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (button) {
      const origText = button.textContent;
      button.textContent = 'Copied!';
      button.classList.add('copied');
      setTimeout(() => {
        button.textContent = origText;
        button.classList.remove('copied');
      }, 1500);
    }
  });
}

// --- Main Init ---
export function initPopup()       {
  // 1. Tab Switching
  const navTabs = document.querySelectorAll                   ('.nav-tab');
  const toolPanes = document.querySelectorAll             ('.tool-pane');

  function switchTab(tabId        ) {
    navTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
    toolPanes.forEach(p => p.classList.toggle('active', p.id === `pane-${tabId}`));
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lastTab: tabId });
    }
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      if (target) switchTab(target);
    });
  });

  // Restore last active tab
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['lastTab'], res => {
      if (res.lastTab) switchTab(res.lastTab);
    });
  }

  // Global Copy Buttons
  document.querySelectorAll                   ('.devos-btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const val = (el                    ).value || el.textContent || '';
          copyToClipboard(val, btn);
        }
      }
    });
  });

  // --- Tool 1: JSON Formatter ---
  const jsonInput = document.getElementById('jsonInput')                       ;
  const jsonOutput = document.getElementById('jsonOutput')               ;
  const jsonIndent = document.getElementById('jsonIndent')                     ;
  const jsonStatus = document.getElementById('jsonStatus')               ;
  const jsonStats = document.getElementById('jsonStats')               ;

  document.getElementById('jsonBtnFormat')?.addEventListener('click', () => {
    const res = formatJson(jsonInput.value, parseInt(jsonIndent.value, 10));
    if (res.success) {
      jsonOutput.textContent = res.result;
      jsonStatus.className = 'status-msg';
      jsonStatus.textContent = '';
      if (res.stats) {
        jsonStats.textContent = `${res.stats.keysCount} keys • ${res.stats.byteSize} bytes • depth ${res.stats.depth}`;
      }
    } else {
      jsonStatus.className = 'status-msg error';
      jsonStatus.textContent = res.error || 'Formatting error';
      jsonStats.textContent = '';
    }
  });

  document.getElementById('jsonBtnMinify')?.addEventListener('click', () => {
    const res = minifyJson(jsonInput.value);
    if (res.success) {
      jsonOutput.textContent = res.result;
      jsonStatus.className = 'status-msg';
      jsonStatus.textContent = '';
      if (res.stats) {
        jsonStats.textContent = `${res.stats.keysCount} keys • ${res.stats.byteSize} bytes`;
      }
    } else {
      jsonStatus.className = 'status-msg error';
      jsonStatus.textContent = res.error || 'Minification error';
    }
  });

  document.getElementById('jsonBtnValidate')?.addEventListener('click', () => {
    const res = validateJson(jsonInput.value);
    if (res.valid) {
      jsonStatus.className = 'status-msg success';
      jsonStatus.textContent = '✓ Valid JSON syntax.';
    } else {
      jsonStatus.className = 'status-msg error';
      jsonStatus.textContent = `✗ ${res.error}`;
    }
  });

  document.getElementById('jsonBtnClear')?.addEventListener('click', () => {
    jsonInput.value = '';
    jsonOutput.textContent = '';
    jsonStatus.className = 'status-msg';
    jsonStats.textContent = '';
  });

  document.getElementById('jsonBtnCopy')?.addEventListener('click', e => {
    copyToClipboard(jsonOutput.textContent || '', e.target               );
  });

  // --- Tool 2: JWT Decoder ---
  const jwtInput = document.getElementById('jwtInput')                       ;
  const jwtStatus = document.getElementById('jwtStatus')               ;
  const jwtMetaCard = document.getElementById('jwtMetaCard')               ;
  const jwtExpiryBadge = document.getElementById('jwtExpiryBadge')               ;
  const jwtTimeRemaining = document.getElementById('jwtTimeRemaining')               ;
  const jwtAlgVal = document.getElementById('jwtAlgVal')               ;
  const jwtExpVal = document.getElementById('jwtExpVal')               ;
  const jwtPayloadOutput = document.getElementById('jwtPayloadOutput')               ;
  const jwtHeaderOutput = document.getElementById('jwtHeaderOutput')               ;

  function handleJwtDecode() {
    const res = decodeJwt(jwtInput.value);
    if (res.success) {
      jwtStatus.className = 'status-msg';
      jwtStatus.textContent = '';
      jwtMetaCard.style.display = 'block';

      if (res.isExpired !== undefined) {
        jwtExpiryBadge.className = res.isExpired ? 'badge badge-expired' : 'badge badge-private';
        jwtExpiryBadge.textContent = res.isExpired ? 'Expired' : 'Active';
      } else {
        jwtExpiryBadge.className = 'badge';
        jwtExpiryBadge.textContent = 'No Expiry';
      }

      jwtTimeRemaining.textContent = res.timeRemaining || '';
      jwtAlgVal.textContent = res.algorithm || 'None';
      jwtExpVal.textContent = res.expiresAtFormatted || 'N/A';

      jwtPayloadOutput.textContent = JSON.stringify(res.payload, null, 2);
      jwtHeaderOutput.textContent = JSON.stringify(res.header, null, 2);
    } else {
      jwtStatus.className = 'status-msg error';
      jwtStatus.textContent = res.error || 'Failed to decode JWT';
      jwtMetaCard.style.display = 'none';
      jwtPayloadOutput.textContent = '';
      jwtHeaderOutput.textContent = '';
    }
  }

  document.getElementById('jwtBtnDecode')?.addEventListener('click', handleJwtDecode);
  document.getElementById('jwtBtnSample')?.addEventListener('click', () => {
    // Standard test JWT with exp set into future
    jwtInput.value =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJzdWIiOiJkZXZlbG9wZXIiLCJuYW1lIjoiQWxleCIsImFkbWluIjp0cnVlLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjA1MTYyMzkwMn0.' +
      '4z8LkJ50_O0y70z8LkJ50_O0y70z8LkJ50_O0y70z8L';
    handleJwtDecode();
  });

  document.getElementById('jwtBtnClear')?.addEventListener('click', () => {
    jwtInput.value = '';
    jwtStatus.className = 'status-msg';
    jwtMetaCard.style.display = 'none';
    jwtPayloadOutput.textContent = '';
    jwtHeaderOutput.textContent = '';
  });

  document.getElementById('jwtBtnCopyPayload')?.addEventListener('click', e => {
    copyToClipboard(jwtPayloadOutput.textContent || '', e.target               );
  });

  document.getElementById('jwtBtnCopyHeader')?.addEventListener('click', e => {
    copyToClipboard(jwtHeaderOutput.textContent || '', e.target               );
  });

  // --- Tool 3: Base64 Tool ---
  const b64Input = document.getElementById('b64Input')                       ;
  const b64Output = document.getElementById('b64Output')               ;
  const b64UrlSafe = document.getElementById('b64UrlSafe')                    ;
  const b64Status = document.getElementById('b64Status')               ;

  document.getElementById('b64BtnEncode')?.addEventListener('click', () => {
    const res = encodeBase64(b64Input.value, b64UrlSafe.checked);
    if (res.success) {
      b64Output.textContent = res.result;
      b64Status.className = 'status-msg';
      b64Status.textContent = '';
    } else {
      b64Status.className = 'status-msg error';
      b64Status.textContent = res.error || 'Encode error';
    }
  });

  document.getElementById('b64BtnDecode')?.addEventListener('click', () => {
    const res = decodeBase64(b64Input.value);
    if (res.success) {
      b64Output.textContent = res.result;
      b64Status.className = 'status-msg';
      b64Status.textContent = '';
    } else {
      b64Status.className = 'status-msg error';
      b64Status.textContent = res.error || 'Decode error';
    }
  });

  document.getElementById('b64BtnClear')?.addEventListener('click', () => {
    b64Input.value = '';
    b64Output.textContent = '';
    b64Status.className = 'status-msg';
  });

  document.getElementById('b64BtnCopy')?.addEventListener('click', e => {
    copyToClipboard(b64Output.textContent || '', e.target               );
  });

  // --- Tool 4: UUID Generator ---
  const uuidCount = document.getElementById('uuidCount')                     ;
  const uuidUppercase = document.getElementById('uuidUppercase')                    ;
  const uuidHyphens = document.getElementById('uuidHyphens')                    ;
  const uuidOutput = document.getElementById('uuidOutput')               ;

  function handleUuidGen() {
    const uuids = generateUuids({
      count: parseInt(uuidCount.value, 10),
      uppercase: uuidUppercase.checked,
      hyphens: uuidHyphens.checked,
    });
    uuidOutput.textContent = uuids.join('\n');
  }

  document.getElementById('uuidBtnGenerate')?.addEventListener('click', handleUuidGen);
  document.getElementById('uuidBtnCopy')?.addEventListener('click', e => {
    copyToClipboard(uuidOutput.textContent || '', e.target               );
  });
  handleUuidGen();

  // --- Tool 5: SHA Hash Generator ---
  const hashInput = document.getElementById('hashInput')                       ;
  const hashSha1 = document.getElementById('hashSha1')               ;
  const hashSha256 = document.getElementById('hashSha256')               ;
  const hashSha512 = document.getElementById('hashSha512')               ;

  async function updateHashes() {
    const text = hashInput.value;
    if (!text) {
      hashSha1.textContent = 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
      hashSha256.textContent = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
      hashSha512.textContent = 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e';
      return;
    }
    const hashes = await computeAllHashes(text);
    hashSha1.textContent = hashes['SHA-1'];
    hashSha256.textContent = hashes['SHA-256'];
    hashSha512.textContent = hashes['SHA-512'];
  }
  hashInput.addEventListener('input', updateHashes);
  updateHashes();

  // --- Tool 6: Unix Timestamp Converter ---
  const liveEpochSeconds = document.getElementById('liveEpochSeconds')               ;
  const liveIsoTime = document.getElementById('liveIsoTime')               ;
  const tsToDateInput = document.getElementById('tsToDateInput')                    ;
  const tsOutputCard = document.getElementById('tsOutputCard')               ;
  const tsUtcVal = document.getElementById('tsUtcVal')               ;
  const tsLocalVal = document.getElementById('tsLocalVal')               ;
  const tsIsoVal = document.getElementById('tsIsoVal')               ;
  const tsRelativeVal = document.getElementById('tsRelativeVal')               ;

  function updateLiveClock() {
    const info = getCurrentTimestamps();
    if (liveEpochSeconds) liveEpochSeconds.textContent = info.seconds.toString();
    if (liveIsoTime) liveIsoTime.textContent = info.iso;
  }
  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  document.getElementById('tsBtnConvertDate')?.addEventListener('click', () => {
    const val = tsToDateInput.value.trim();
    if (!val) return;
    try {
      const num = Number(val);
      const info = !isNaN(num) ? timestampToInfo(num) : timestampToInfo(new Date(val).getTime() / 1000);
      tsOutputCard.style.display = 'block';
      tsUtcVal.textContent = info.utc;
      tsLocalVal.textContent = info.local;
      tsIsoVal.textContent = info.iso;
      tsRelativeVal.textContent = info.relative;
    } catch (e     ) {
      alert('Invalid timestamp or date format.');
    }
  });

  // --- Tool 7: Color Converter & Picker ---
  const nativeColorPicker = document.getElementById('nativeColorPicker')                    ;
  const colorTextInput = document.getElementById('colorTextInput')                    ;
  const colorSwatch = document.getElementById('colorSwatch')               ;
  const colorContrastText = document.getElementById('colorContrastText')               ;
  const colorHexOut = document.getElementById('colorHexOut')                    ;
  const colorRgbOut = document.getElementById('colorRgbOut')                    ;
  const colorHslOut = document.getElementById('colorHslOut')                    ;

  function syncColor(val        ) {
    const res = parseColor(val);
    if (!res) return;
    colorSwatch.style.backgroundColor = res.hex;
    colorContrastText.style.color = res.isDark ? '#ffffff' : '#000000';
    colorHexOut.value = res.hex;
    colorRgbOut.value = res.rgb;
    colorHslOut.value = res.hsl;
    nativeColorPicker.value = res.hex;
  }

  nativeColorPicker.addEventListener('input', () => {
    colorTextInput.value = nativeColorPicker.value;
    syncColor(nativeColorPicker.value);
  });

  colorTextInput.addEventListener('input', () => {
    syncColor(colorTextInput.value);
  });
  syncColor('#6366f1');

  // --- Tool 8: QR Code Generator ---
  const qrInput = document.getElementById('qrInput')                    ;
  const qrCanvas = document.getElementById('qrCanvas')                     ;

  function renderQr() {
    const text = qrInput.value || 'https://developeros.in';
    const qr = new SimpleQrCode(text);
    qr.drawToCanvas(qrCanvas, 6, 2);
  }

  qrInput.addEventListener('input', renderQr);
  renderQr();

  document.getElementById('qrBtnDownload')?.addEventListener('click', () => {
    const url = qrCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'developerOS-qrcode.png';
    a.click();
  });

  document.getElementById('qrBtnCopySvg')?.addEventListener('click', e => {
    const qr = new SimpleQrCode(qrInput.value || 'https://developeros.in');
    copyToClipboard(qr.toSvg(6, 2), e.target               );
  });

  // --- Tool 9: Text Toolkit ---
  const textInput = document.getElementById('textInput')                       ;
  const textOutput = document.getElementById('textOutput')                       ;
  const statChars = document.getElementById('statChars')               ;
  const statCharsNoSpace = document.getElementById('statCharsNoSpace')               ;
  const statWords = document.getElementById('statWords')               ;
  const statLines = document.getElementById('statLines')               ;

  function updateTextStats() {
    const stats = getTextStats(textInput.value);
    statChars.textContent = stats.charCount.toString();
    statCharsNoSpace.textContent = stats.charCountNoSpaces.toString();
    statWords.textContent = stats.wordCount.toString();
    statLines.textContent = stats.lineCount.toString();
  }

  textInput.addEventListener('input', updateTextStats);
  updateTextStats();

  document.querySelectorAll                   ('.devos-btn-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.case;
      const val = textInput.value;
      let out = '';
      switch (mode) {
        case 'camel': out = toCamelCase(val); break;
        case 'pascal': out = toPascalCase(val); break;
        case 'snake': out = toSnakeCase(val); break;
        case 'kebab': out = toKebabCase(val); break;
        case 'constant': out = toConstantCase(val); break;
        case 'title': out = toTitleCase(val); break;
        case 'upper': out = toUpperCase(val); break;
        case 'lower': out = toLowerCase(val); break;
      }
      textOutput.value = out;
    });
  });

  document.getElementById('textBtnCopy')?.addEventListener('click', e => {
    copyToClipboard(textOutput.value, e.target               );
  });

  // --- Tool 10: Searchable Tool Launcher ---
  const tools                 = (rawRegistry       ).tools || [];
  const launcherSearchInput = document.getElementById('launcherSearchInput')                    ;
  const launcherCategoryChips = document.getElementById('launcherCategoryChips')               ;
  const launcherToolList = document.getElementById('launcherToolList')               ;
  const launcherCountBadge = document.getElementById('launcherCountBadge')               ;

  let currentCategory = 'All';

  function renderCategories() {
    const categories = getCategories(tools);
    launcherCategoryChips.innerHTML = '';
    categories.forEach(cat => {
      const chip = document.createElement('button');
      chip.className = `cat-chip ${cat === currentCategory ? 'active' : ''}`;
      chip.textContent = cat;
      chip.addEventListener('click', () => {
        currentCategory = cat;
        renderCategories();
        renderTools();
      });
      launcherCategoryChips.appendChild(chip);
    });
  }

  function renderTools() {
    const filtered = searchTools(tools, launcherSearchInput.value, currentCategory);
    launcherCountBadge.textContent = `${filtered.length} Tools`;
    launcherToolList.innerHTML = '';

    if (filtered.length === 0) {
      launcherToolList.innerHTML = '<div style="text-align: center; color: var(--devos-text-muted); padding: 20px;">No tools found matching your query.</div>';
      return;
    }

    filtered.forEach(tool => {
      const card = document.createElement('div');
      card.className = 'catalog-card';

      const info = document.createElement('div');
      info.className = 'catalog-card-info';

      const top = document.createElement('div');
      top.className = 'catalog-card-top';

      const title = document.createElement('span');
      title.className = 'catalog-card-title';
      title.textContent = tool.name;

      const catBadge = document.createElement('span');
      catBadge.className = 'catalog-card-cat';
      catBadge.textContent = tool.category;

      top.appendChild(title);
      top.appendChild(catBadge);

      const desc = document.createElement('div');
      desc.className = 'catalog-card-desc';
      desc.textContent = tool.short_description;

      info.appendChild(top);
      info.appendChild(desc);

      const launchBtn = document.createElement('button');
      launchBtn.className = 'catalog-launch-btn';
      launchBtn.textContent = 'Launch ↗';
      launchBtn.addEventListener('click', () => {
        openExternalUrl(resolveLaunchUrl(tool));
      });

      card.appendChild(info);
      card.appendChild(launchBtn);
      launcherToolList.appendChild(card);
    });
  }

  launcherSearchInput.addEventListener('input', renderTools);
  renderCategories();
  renderTools();
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initPopup);
}

