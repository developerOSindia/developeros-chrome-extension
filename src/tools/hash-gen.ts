/**
 * DeveloperOS QuickTools — Tool 5: SHA Hash Generator
 * Computes SHA-1, SHA-256, and SHA-512 hashes offline using Web Crypto API.
 */

export type HashAlgorithm = 'SHA-1' | 'SHA-256' | 'SHA-512';

export interface HashOutput {
  algorithm: HashAlgorithm;
  hash: string;
}

export async function computeHash(algorithm: HashAlgorithm, input: string): Promise<string> {
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

export async function computeAllHashes(input: string): Promise<Record<HashAlgorithm, string>> {
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
