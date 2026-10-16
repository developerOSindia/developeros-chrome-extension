/**
 * DeveloperOS QuickTools — Tool 3: Base64 Encoder / Decoder
 * Supports standard and URL-safe Base64 conversions with full UTF-8 Unicode support.
 */

export interface Base64Result {
  success: boolean;
  result: string;
  error?: string;
  inputBytes?: number;
  outputBytes?: number;
}

export function encodeBase64(input: string, urlSafe: boolean = false): Base64Result {
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
  } catch (err: any) {
    return {
      success: false,
      result: '',
      error: err.message || 'Failed to encode to Base64.',
    };
  }
}

export function decodeBase64(input: string): Base64Result {
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
  } catch (err: any) {
    return {
      success: false,
      result: '',
      error: `Failed to decode Base64: ${err.message || 'Invalid encoding'}`,
    };
  }
}
