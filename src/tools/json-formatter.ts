/**
 * DeveloperOS QuickTools — Tool 1: JSON Formatter & Validator
 * Formats, minifies, and inspects JSON completely offline.
 */

export interface JsonFormatResult {
  success: boolean;
  result: string;
  error?: string;
  stats?: {
    keysCount: number;
    byteSize: number;
    depth: number;
  };
}

export interface JsonValidationResult {
  valid: boolean;
  error?: string;
  line?: number;
  column?: number;
}

function calculateDepth(obj: any): number {
  if (obj === null || typeof obj !== 'object') return 0;
  let maxChildDepth = 0;
  for (const key of Object.keys(obj)) {
    maxChildDepth = Math.max(maxChildDepth, calculateDepth(obj[key]));
  }
  return 1 + maxChildDepth;
}

function countKeys(obj: any): number {
  if (obj === null || typeof obj !== 'object') return 0;
  let count = Array.isArray(obj) ? 0 : Object.keys(obj).length;
  for (const key of Object.keys(obj)) {
    count += countKeys(obj[key]);
  }
  return count;
}

export function formatJson(input: string, indent: number = 2): JsonFormatResult {
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
  } catch (err: any) {
    return {
      success: false,
      result: '',
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

export function minifyJson(input: string): JsonFormatResult {
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
  } catch (err: any) {
    return {
      success: false,
      result: '',
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

export function validateJson(input: string): JsonValidationResult {
  if (!input || !input.trim()) {
    return { valid: false, error: 'Input is empty.' };
  }

  try {
    JSON.parse(input);
    return { valid: true };
  } catch (err: any) {
    const message = err.message || 'Invalid JSON syntax';
    let line: number | undefined;
    let column: number | undefined;

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
