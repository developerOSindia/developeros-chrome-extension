/**
 * DeveloperOS QuickTools — Tool 4: UUID Generator
 * Generates cryptographically secure RFC 4122 Version 4 UUIDs offline.
 */

export interface UuidOptions {
  count?: number;
  uppercase?: boolean;
  hyphens?: boolean;
}

export function generateSingleUuid(): string {
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

export function generateUuids(options: UuidOptions = {}): string[] {
  const count = Math.min(Math.max(options.count || 1, 1), 50);
  const uppercase = !!options.uppercase;
  const hyphens = options.hyphens !== false; // default true

  const uuids: string[] = [];
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
