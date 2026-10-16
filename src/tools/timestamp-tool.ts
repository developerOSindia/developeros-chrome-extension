/**
 * DeveloperOS QuickTools — Tool 6: Unix Timestamp Converter
 * Converts between Unix epoch timestamps and human-readable dates with timezone clarity.
 */

export interface TimestampInfo {
  seconds: number;
  milliseconds: number;
  iso: string;
  utc: string;
  local: string;
  relative: string;
}

export function formatRelativeTimestamp(targetMs: number, nowMs: number = Date.now()): string {
  const diffSec = Math.round((targetMs - nowMs) / 1000);
  const absSec = Math.abs(diffSec);

  const minutes = Math.floor(absSec / 60);
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
    desc = `${absSec} sec${absSec > 1 ? 's' : ''}`;
  }

  if (diffSec === 0) return 'Just now';
  return diffSec < 0 ? `${desc} ago` : `in ${desc}`;
}

export function timestampToInfo(ts: number): TimestampInfo {
  // If timestamp has 10 digits or fewer, treat as seconds; otherwise milliseconds
  let ms = ts;
  if (Math.abs(ts) < 100000000000) {
    ms = ts * 1000;
  }

  const date = new Date(ms);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp number');
  }

  return {
    seconds: Math.floor(date.getTime() / 1000),
    milliseconds: date.getTime(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    relative: formatRelativeTimestamp(date.getTime()),
  };
}

export function dateStringToTimestamp(dateString: string): TimestampInfo {
  if (!dateString || !dateString.trim()) {
    throw new Error('Date string cannot be empty');
  }

  const date = new Date(dateString.trim());
  if (isNaN(date.getTime())) {
    throw new Error(`Unable to parse date string: "${dateString}"`);
  }

  return {
    seconds: Math.floor(date.getTime() / 1000),
    milliseconds: date.getTime(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    relative: formatRelativeTimestamp(date.getTime()),
  };
}

export function getCurrentTimestamps(): TimestampInfo {
  return timestampToInfo(Date.now());
}
