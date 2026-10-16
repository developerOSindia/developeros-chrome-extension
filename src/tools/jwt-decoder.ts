/**
 * DeveloperOS QuickTools — Tool 2: JWT Decoder
 * Decodes JSON Web Tokens offline without transmitting sensitive data.
 */

export interface JwtDecodeResult {
  success: boolean;
  header?: Record<string, any>;
  payload?: Record<string, any>;
  signature?: string;
  isExpired?: boolean;
  expiresAtFormatted?: string;
  issuedAtFormatted?: string;
  timeRemaining?: string;
  algorithm?: string;
  error?: string;
}

function base64UrlDecode(str: string): string {
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

function formatRelativeTime(secondsDiff: number): string {
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

export function decodeJwt(token: string): JwtDecodeResult {
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

    let isExpired: boolean | undefined;
    let expiresAtFormatted: string | undefined;
    let issuedAtFormatted: string | undefined;
    let timeRemaining: string | undefined;

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
  } catch (err: any) {
    return {
      success: false,
      error: `Failed to decode JWT: ${err.message || 'Malformed token encoding'}`,
    };
  }
}
