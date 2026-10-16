#!/usr/bin/env node
/**
 * DeveloperOS QuickTools — Extension Builder & Bundler (ES Module)
 * Compiles TypeScript source modules using Node's AST type-stripper and bundles
 * them into an optimized, self-contained ES module for Chrome Manifest V3.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stripTypeScriptTypes } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'src');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const ICONS_DIR = path.join(ROOT_DIR, 'icons');

function processTsFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  // Strip TypeScript types using Node.js built-in AST parser
  const js = stripTypeScriptTypes(raw);
  // Remove local import statements
  return js.replace(/^\s*import\s+[^;]+from\s+['"][^'"]+['"];?\s*$/gm, '');
}

export function build() {
  console.log('[BUILD] Compiling DeveloperOS QuickTools Chrome Extension...');

  // 1. Ensure dist directories
  fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.mkdirSync(path.join(DIST_DIR, 'icons'), { recursive: true });
  fs.mkdirSync(path.join(DIST_DIR, 'src', 'styles'), { recursive: true });

  // 2. Read registry data
  const registryData = fs.readFileSync(path.join(SRC_DIR, 'data', 'registry.json'), 'utf-8');

  // 3. Collect tools code
  const toolsOrder = [
    'json-formatter.ts',
    'jwt-decoder.ts',
    'base64-tool.ts',
    'uuid-gen.ts',
    'hash-gen.ts',
    'timestamp-tool.ts',
    'color-converter.ts',
    'qrcode-gen.ts',
    'text-toolkit.ts',
    'tool-launcher.ts',
  ];

  let bundledTools = '';
  for (const toolFile of toolsOrder) {
    const filePath = path.join(SRC_DIR, 'tools', toolFile);
    if (fs.existsSync(filePath)) {
      bundledTools += `\n/* --- Tool: ${toolFile} --- */\n` + processTsFile(filePath) + '\n';
    }
  }

  // 4. Process popup.ts
  const popupJs = processTsFile(path.join(SRC_DIR, 'popup.ts'));

  // 5. Assemble final popup.js
  const finalJs = `/**
 * DeveloperOS QuickTools — Bundled Extension Runtime (Manifest V3)
 * Offline developer utility popup runtime.
 */

// --- Embedded Registry Snapshot ---
const rawRegistry = ${registryData.trim()};

${bundledTools}

${popupJs}
`;

  // Write popup.js in root and dist/
  const popupJsPath = path.join(ROOT_DIR, 'popup.js');
  const distPopupJsPath = path.join(DIST_DIR, 'popup.js');
  fs.writeFileSync(popupJsPath, finalJs, 'utf-8');
  fs.writeFileSync(distPopupJsPath, finalJs, 'utf-8');
  console.log('  + Generated popup.js (' + Buffer.byteLength(finalJs) + ' bytes)');

  // 6. Copy assets to dist/
  const staticFiles = [
    'manifest.json',
    'popup.html',
    'popup.css',
  ];

  for (const f of staticFiles) {
    const srcF = path.join(ROOT_DIR, f);
    if (fs.existsSync(srcF)) {
      fs.copyFileSync(srcF, path.join(DIST_DIR, f));
      console.log(`  + Copied ${f} to dist/`);
    }
  }

  // Copy design tokens
  const tokensSrc = path.join(SRC_DIR, 'styles', 'tokens.css');
  if (fs.existsSync(tokensSrc)) {
    fs.copyFileSync(tokensSrc, path.join(DIST_DIR, 'src', 'styles', 'tokens.css'));
    console.log('  + Copied src/styles/tokens.css to dist/');
  }

  // Copy icons
  if (fs.existsSync(ICONS_DIR)) {
    const icons = fs.readdirSync(ICONS_DIR);
    for (const icon of icons) {
      if (!icon.startsWith('.')) {
        fs.copyFileSync(path.join(ICONS_DIR, icon), path.join(DIST_DIR, 'icons', icon));
        console.log(`  + Copied icons/${icon} to dist/icons/`);
      }
    }
  }

  console.log('\n[SUCCESS] Extension built successfully in dist/ and root for unpacked loading.');
}

// Execute directly if run as CLI script
if (process.argv[1] && process.argv[1].endsWith('build.js')) {
  build();
}
