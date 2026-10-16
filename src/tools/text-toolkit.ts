/**
 * DeveloperOS QuickTools — Tool 9: Text Toolkit
 * Case transformations and textual analytics executed offline.
 */

export interface TextStatistics {
  charCount: number;
  charCountNoSpaces: number;
  wordCount: number;
  lineCount: number;
}

function splitWords(input: string): string[] {
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

export function toCamelCase(input: string): string {
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

export function toPascalCase(input: string): string {
  const words = splitWords(input);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
}

export function toSnakeCase(input: string): string {
  const words = splitWords(input);
  return words.map(w => w.toLowerCase()).join('_');
}

export function toKebabCase(input: string): string {
  const words = splitWords(input);
  return words.map(w => w.toLowerCase()).join('-');
}

export function toConstantCase(input: string): string {
  const words = splitWords(input);
  return words.map(w => w.toUpperCase()).join('_');
}

export function toTitleCase(input: string): string {
  const words = splitWords(input);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}

export function toUpperCase(input: string): string {
  return input.toUpperCase();
}

export function toLowerCase(input: string): string {
  return input.toLowerCase();
}

export function getTextStats(input: string): TextStatistics {
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
