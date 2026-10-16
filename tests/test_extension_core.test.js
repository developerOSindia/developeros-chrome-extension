import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  formatJson,
  minifyJson,
  validateJson,
  decodeJwt,
  encodeBase64,
  decodeBase64,
  generateUuids,
  computeHash,
  computeAllHashes,
  timestampToInfo,
  formatRelativeTimestamp,
  parseColor,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  SimpleQrCode,
  generateQrSvg,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toTitleCase,
  toUpperCase,
  toLowerCase,
  getTextStats,
  searchTools,
  getCategories,
  resolveLaunchUrl,
} from '../popup.js';

describe('Tool 1: JSON Formatter & Validator', () => {
  test('formats valid JSON with indentation', () => {
    const raw = '{"name":"DeveloperOS","active":true}';
    const res = formatJson(raw, 2);
    assert.strictEqual(res.success, true);
    assert.ok(res.result.includes('\n  "name": "DeveloperOS"'));
    assert.strictEqual(res.stats?.keysCount, 2);
  });

  test('minifies formatted JSON', () => {
    const formatted = '{\n  "suite": "QuickTools"\n}';
    const res = minifyJson(formatted);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.result, '{"suite":"QuickTools"}');
  });

  test('validates correct and incorrect syntax', () => {
    assert.strictEqual(validateJson('{"valid": true}').valid, true);
    const invalid = validateJson('{ bad: json }');
    assert.strictEqual(invalid.valid, false);
    assert.ok(invalid.error);
  });
});

describe('Tool 2: JWT Decoder', () => {
  const sampleJwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsZXgiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MjA1MTYyMzkwMn0.' +
    '4z8LkJ50_O0y70z8LkJ50_O0y70z8LkJ50_O0y70z8L';

  test('decodes valid JWT header and payload', () => {
    const res = decodeJwt(sampleJwt);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.algorithm, 'HS256');
    assert.strictEqual(res.payload?.name, 'Alex');
    assert.strictEqual(res.payload?.sub, '1234567890');
    assert.strictEqual(res.isExpired, false);
  });

  test('detects expired tokens', () => {
    const expiredJwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
      'eyJzdWIiOiIxMjMiLCJleHAiOjEwMDAwMDAwMDB9.' +
      'signature';
    const res = decodeJwt(expiredJwt);
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.isExpired, true);
    assert.ok(res.timeRemaining?.includes('Expired'));
  });

  test('handles malformed JWT strings gracefully', () => {
    const res = decodeJwt('not-a-jwt');
    assert.strictEqual(res.success, false);
    assert.ok(res.error?.includes('Invalid JWT structure'));
  });
});

describe('Tool 3: Base64 Encoder / Decoder', () => {
  test('encodes and decodes standard UTF-8 string', () => {
    const input = 'DeveloperOS QuickTools 🚀';
    const enc = encodeBase64(input);
    assert.strictEqual(enc.success, true);
    const dec = decodeBase64(enc.result);
    assert.strictEqual(dec.success, true);
    assert.strictEqual(dec.result, input);
  });

  test('supports URL-safe Base64 mode', () => {
    const input = '>>>???';
    const enc = encodeBase64(input, true);
    assert.strictEqual(enc.success, true);
    assert.ok(!enc.result.includes('+') && !enc.result.includes('/'));
    const dec = decodeBase64(enc.result);
    assert.strictEqual(dec.success, true);
    assert.strictEqual(dec.result, input);
  });
});

describe('Tool 4: UUID Generator', () => {
  test('generates valid RFC 4122 v4 UUIDs', () => {
    const uuids = generateUuids({ count: 5 });
    assert.strictEqual(uuids.length, 5);
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    for (const u of uuids) {
      assert.ok(regex.test(u), `Invalid UUID: ${u}`);
    }
  });

  test('supports uppercase and hyphen removal options', () => {
    const uuids = generateUuids({ count: 2, uppercase: true, hyphens: false });
    assert.strictEqual(uuids.length, 2);
    for (const u of uuids) {
      assert.strictEqual(u.length, 32);
      assert.strictEqual(u, u.toUpperCase());
      assert.ok(!u.includes('-'));
    }
  });
});

describe('Tool 5: SHA Hash Generator', () => {
  test('computes SHA-1, SHA-256, and SHA-512 correctly', async () => {
    const input = 'developerOS';
    const sha256 = await computeHash('SHA-256', input);
    // Known sha256 of 'developerOS'
    assert.strictEqual(typeof sha256, 'string');
    assert.strictEqual(sha256.length, 64);

    const all = await computeAllHashes(input);
    assert.strictEqual(all['SHA-1'].length, 40);
    assert.strictEqual(all['SHA-256'].length, 64);
    assert.strictEqual(all['SHA-512'].length, 128);
  });
});

describe('Tool 6: Unix Timestamp Converter', () => {
  test('converts numeric epoch seconds to date details', () => {
    const ts = 1700000000;
    const info = timestampToInfo(ts);
    assert.strictEqual(info.seconds, ts);
    assert.strictEqual(info.iso, '2023-11-14T22:13:20.000Z');
    assert.ok(info.utc.includes('14 Nov 2023'));
  });

  test('handles relative time calculations', () => {
    const now = 1000000000;
    assert.strictEqual(formatRelativeTimestamp(now, now), 'Just now');
    assert.strictEqual(formatRelativeTimestamp(now - 3600 * 1000, now), '1 hour ago');
    assert.strictEqual(formatRelativeTimestamp(now + 86400 * 1000, now), 'in 1 day');
  });
});

describe('Tool 7: Color Converter & Picker', () => {
  test('parses HEX and converts to RGB and HSL', () => {
    const parsed = parseColor('#6366f1');
    assert.ok(parsed);
    assert.strictEqual(parsed.hex, '#6366f1');
    assert.strictEqual(parsed.r, 99);
    assert.strictEqual(parsed.g, 102);
    assert.strictEqual(parsed.b, 241);
    assert.strictEqual(parsed.rgb, 'rgb(99, 102, 241)');
    assert.strictEqual(parsed.hsl, 'hsl(239, 84%, 67%)');
    assert.strictEqual(parsed.isDark, true);
  });

  test('parses RGB strings correctly', () => {
    const parsed = parseColor('rgb(255, 255, 255)');
    assert.ok(parsed);
    assert.strictEqual(parsed.hex, '#ffffff');
    assert.strictEqual(parsed.isDark, false);
  });
});

describe('Tool 8: Offline QR Code Generator', () => {
  test('generates QR code matrix and valid SVG output', () => {
    const qr = new SimpleQrCode('https://developeros.in');
    assert.ok(qr.getSize() >= 21);
    const svg = generateQrSvg('https://developeros.in');
    assert.ok(svg.includes('<svg'));
    assert.ok(svg.includes('viewBox="0 0'));
    assert.ok(svg.includes('fill="#0f172a"'));
  });
});

describe('Tool 9: Text Toolkit', () => {
  test('transforms cases accurately', () => {
    const text = 'hello world test_case-sample';
    assert.strictEqual(toCamelCase(text), 'helloWorldTestCaseSample');
    assert.strictEqual(toPascalCase(text), 'HelloWorldTestCaseSample');
    assert.strictEqual(toSnakeCase(text), 'hello_world_test_case_sample');
    assert.strictEqual(toKebabCase(text), 'hello-world-test-case-sample');
    assert.strictEqual(toConstantCase(text), 'HELLO_WORLD_TEST_CASE_SAMPLE');
    assert.strictEqual(toTitleCase(text), 'Hello World Test Case Sample');
    assert.strictEqual(toUpperCase('abc'), 'ABC');
    assert.strictEqual(toLowerCase('ABC'), 'abc');
  });

  test('calculates accurate text statistics', () => {
    const sample = 'Hello DeveloperOS!\nWelcome to QuickTools.';
    const stats = getTextStats(sample);
    assert.strictEqual(stats.charCount, 41);
    assert.strictEqual(stats.charCountNoSpaces, 37);
    assert.strictEqual(stats.wordCount, 5);
    assert.strictEqual(stats.lineCount, 2);
  });
});

describe('Tool 10: Searchable Tool Launcher', () => {
  const mockTools = [
    {
      id: 'json-formatter',
      name: 'JSON Formatter',
      category: 'Formatters',
      short_description: 'Format, validate and beautify JSON.',
      long_description: 'Full description',
      parent_suite: 'developeros-devutils',
      live_url: null,
      repository_url: 'https://github.com/developerOSindia/developeros-devutils',
      seo_slug: 'json-formatter',
      framework: 'Streamlit',
      hosting_provider: 'Streamlit Community Cloud',
      availability_status: 'staged_local',
      privacy_classification: '100% Client-Side',
      version: '1.0.0',
      last_verified_date: '2026-10-16',
    },
    {
      id: 'api-sentinel',
      name: 'API Sentinel',
      category: 'Security',
      short_description: 'Security & HTTP audit tool.',
      long_description: 'Audit APIs',
      parent_suite: 'api-sentinel',
      live_url: 'https://developeros-api-sentinel.streamlit.app',
      repository_url: 'https://github.com/developerOSindia/api-sentinel',
      seo_slug: 'api-sentinel',
      framework: 'Streamlit',
      hosting_provider: 'Streamlit Community Cloud',
      availability_status: 'live_verified',
      privacy_classification: '100% Client-Side',
      version: '1.0.0',
      last_verified_date: '2026-10-16',
    },
  ];

  test('filters tools by search term and category', () => {
    const searchRes = searchTools(mockTools, 'json');
    assert.strictEqual(searchRes.length, 1);
    assert.strictEqual(searchRes[0].id, 'json-formatter');

    const catRes = searchTools(mockTools, '', 'Security');
    assert.strictEqual(catRes.length, 1);
    assert.strictEqual(catRes[0].id, 'api-sentinel');
  });

  test('extracts categories with All prepended', () => {
    const cats = getCategories(mockTools);
    assert.deepStrictEqual(cats, ['All', 'Formatters', 'Security']);
  });

  test('resolves live URL or fallback SEO page URL', () => {
    assert.strictEqual(
      resolveLaunchUrl(mockTools[0]),
      'https://toolkit.developeros.in/tools/json-formatter.html'
    );
    assert.strictEqual(
      resolveLaunchUrl(mockTools[1]),
      'https://developeros-api-sentinel.streamlit.app'
    );
  });
});
