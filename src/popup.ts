/**
 * DeveloperOS QuickTools — Main Popup Controller
 * Manages tab switching, UI event bindings, state persistence, and all 10 tools.
 */

import { formatJson, minifyJson, validateJson } from './tools/json-formatter';
import { decodeJwt } from './tools/jwt-decoder';
import { encodeBase64, decodeBase64 } from './tools/base64-tool';
import { generateUuids } from './tools/uuid-gen';
import { computeAllHashes } from './tools/hash-gen';
import { timestampToInfo, getCurrentTimestamps } from './tools/timestamp-tool';
import { parseColor } from './tools/color-converter';
import { SimpleQrCode } from './tools/qrcode-gen';
import {
  getTextStats,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toTitleCase,
  toUpperCase,
  toLowerCase,
} from './tools/text-toolkit';
import {
  RegistryTool,
  searchTools,
  getCategories,
  resolveLaunchUrl,
  openExternalUrl,
} from './tools/tool-launcher';
import rawRegistry from './data/registry.json';

// --- Clipboard Helper ---
export function copyToClipboard(text: string, button?: HTMLElement | null): void {
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
export function initPopup(): void {
  // 1. Tab Switching
  const navTabs = document.querySelectorAll<HTMLButtonElement>('.nav-tab');
  const toolPanes = document.querySelectorAll<HTMLElement>('.tool-pane');

  function switchTab(tabId: string) {
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
  document.querySelectorAll<HTMLButtonElement>('.devos-btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const val = (el as HTMLInputElement).value || el.textContent || '';
          copyToClipboard(val, btn);
        }
      }
    });
  });

  // --- Tool 1: JSON Formatter ---
  const jsonInput = document.getElementById('jsonInput') as HTMLTextAreaElement;
  const jsonOutput = document.getElementById('jsonOutput') as HTMLElement;
  const jsonIndent = document.getElementById('jsonIndent') as HTMLSelectElement;
  const jsonStatus = document.getElementById('jsonStatus') as HTMLElement;
  const jsonStats = document.getElementById('jsonStats') as HTMLElement;

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
    copyToClipboard(jsonOutput.textContent || '', e.target as HTMLElement);
  });

  // --- Tool 2: JWT Decoder ---
  const jwtInput = document.getElementById('jwtInput') as HTMLTextAreaElement;
  const jwtStatus = document.getElementById('jwtStatus') as HTMLElement;
  const jwtMetaCard = document.getElementById('jwtMetaCard') as HTMLElement;
  const jwtExpiryBadge = document.getElementById('jwtExpiryBadge') as HTMLElement;
  const jwtTimeRemaining = document.getElementById('jwtTimeRemaining') as HTMLElement;
  const jwtAlgVal = document.getElementById('jwtAlgVal') as HTMLElement;
  const jwtExpVal = document.getElementById('jwtExpVal') as HTMLElement;
  const jwtPayloadOutput = document.getElementById('jwtPayloadOutput') as HTMLElement;
  const jwtHeaderOutput = document.getElementById('jwtHeaderOutput') as HTMLElement;

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
    copyToClipboard(jwtPayloadOutput.textContent || '', e.target as HTMLElement);
  });

  document.getElementById('jwtBtnCopyHeader')?.addEventListener('click', e => {
    copyToClipboard(jwtHeaderOutput.textContent || '', e.target as HTMLElement);
  });

  // --- Tool 3: Base64 Tool ---
  const b64Input = document.getElementById('b64Input') as HTMLTextAreaElement;
  const b64Output = document.getElementById('b64Output') as HTMLElement;
  const b64UrlSafe = document.getElementById('b64UrlSafe') as HTMLInputElement;
  const b64Status = document.getElementById('b64Status') as HTMLElement;

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
    copyToClipboard(b64Output.textContent || '', e.target as HTMLElement);
  });

  // --- Tool 4: UUID Generator ---
  const uuidCount = document.getElementById('uuidCount') as HTMLSelectElement;
  const uuidUppercase = document.getElementById('uuidUppercase') as HTMLInputElement;
  const uuidHyphens = document.getElementById('uuidHyphens') as HTMLInputElement;
  const uuidOutput = document.getElementById('uuidOutput') as HTMLElement;

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
    copyToClipboard(uuidOutput.textContent || '', e.target as HTMLElement);
  });
  handleUuidGen();

  // --- Tool 5: SHA Hash Generator ---
  const hashInput = document.getElementById('hashInput') as HTMLTextAreaElement;
  const hashSha1 = document.getElementById('hashSha1') as HTMLElement;
  const hashSha256 = document.getElementById('hashSha256') as HTMLElement;
  const hashSha512 = document.getElementById('hashSha512') as HTMLElement;

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
  const liveEpochSeconds = document.getElementById('liveEpochSeconds') as HTMLElement;
  const liveIsoTime = document.getElementById('liveIsoTime') as HTMLElement;
  const tsToDateInput = document.getElementById('tsToDateInput') as HTMLInputElement;
  const tsOutputCard = document.getElementById('tsOutputCard') as HTMLElement;
  const tsUtcVal = document.getElementById('tsUtcVal') as HTMLElement;
  const tsLocalVal = document.getElementById('tsLocalVal') as HTMLElement;
  const tsIsoVal = document.getElementById('tsIsoVal') as HTMLElement;
  const tsRelativeVal = document.getElementById('tsRelativeVal') as HTMLElement;

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
    } catch (e: any) {
      alert('Invalid timestamp or date format.');
    }
  });

  // --- Tool 7: Color Converter & Picker ---
  const nativeColorPicker = document.getElementById('nativeColorPicker') as HTMLInputElement;
  const colorTextInput = document.getElementById('colorTextInput') as HTMLInputElement;
  const colorSwatch = document.getElementById('colorSwatch') as HTMLElement;
  const colorContrastText = document.getElementById('colorContrastText') as HTMLElement;
  const colorHexOut = document.getElementById('colorHexOut') as HTMLInputElement;
  const colorRgbOut = document.getElementById('colorRgbOut') as HTMLInputElement;
  const colorHslOut = document.getElementById('colorHslOut') as HTMLInputElement;

  function syncColor(val: string) {
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
  const qrInput = document.getElementById('qrInput') as HTMLInputElement;
  const qrCanvas = document.getElementById('qrCanvas') as HTMLCanvasElement;

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
    copyToClipboard(qr.toSvg(6, 2), e.target as HTMLElement);
  });

  // --- Tool 9: Text Toolkit ---
  const textInput = document.getElementById('textInput') as HTMLTextAreaElement;
  const textOutput = document.getElementById('textOutput') as HTMLTextAreaElement;
  const statChars = document.getElementById('statChars') as HTMLElement;
  const statCharsNoSpace = document.getElementById('statCharsNoSpace') as HTMLElement;
  const statWords = document.getElementById('statWords') as HTMLElement;
  const statLines = document.getElementById('statLines') as HTMLElement;

  function updateTextStats() {
    const stats = getTextStats(textInput.value);
    statChars.textContent = stats.charCount.toString();
    statCharsNoSpace.textContent = stats.charCountNoSpaces.toString();
    statWords.textContent = stats.wordCount.toString();
    statLines.textContent = stats.lineCount.toString();
  }

  textInput.addEventListener('input', updateTextStats);
  updateTextStats();

  document.querySelectorAll<HTMLButtonElement>('.devos-btn-pill').forEach(btn => {
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
    copyToClipboard(textOutput.value, e.target as HTMLElement);
  });

  // --- Tool 10: Searchable Tool Launcher ---
  const tools: RegistryTool[] = (rawRegistry as any).tools || [];
  const launcherSearchInput = document.getElementById('launcherSearchInput') as HTMLInputElement;
  const launcherCategoryChips = document.getElementById('launcherCategoryChips') as HTMLElement;
  const launcherToolList = document.getElementById('launcherToolList') as HTMLElement;
  const launcherCountBadge = document.getElementById('launcherCountBadge') as HTMLElement;

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
