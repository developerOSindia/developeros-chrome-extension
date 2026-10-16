/**
 * DeveloperOS QuickTools — Tool 7: Color Converter & Picker
 * Real-time bidirectional color conversions between HEX, RGB, and HSL.
 */

export interface ColorConversionResult {
  hex: string;
  rgb: string;
  hsl: string;
  r: number;
  g: number;
  b: number;
  a: number;
  h: number;
  s: number;
  l: number;
  isDark: boolean;
}

export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
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

export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;

  let r: number, g: number, b: number;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
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

export function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (c: number) => Math.max(0, Math.min(255, Math.round(c))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function parseColor(input: string): ColorConversionResult | null {
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
