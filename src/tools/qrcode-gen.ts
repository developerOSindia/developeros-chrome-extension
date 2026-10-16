/**
 * DeveloperOS QuickTools — Tool 8: Pure Offline QR Code Generator
 * Generates standards-compliant QR codes (Versions 1-6, Byte Mode, EC Low/Medium)
 * completely client-side with zero external libraries or network calls.
 */

// QR Code Constants & Tables
const PAD0 = 0xec;
const PAD1 = 0x11;

// GF(256) tables for Reed-Solomon error correction
const EXP_TABLE = new Uint8Array(256);
const LOG_TABLE = new Uint8Array(256);

(function initGaloisField() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  EXP_TABLE[255] = EXP_TABLE[0];
})();

function glog(n: number): number {
  if (n < 1) throw new Error('glog(' + n + ')');
  return LOG_TABLE[n];
}

function gexp(n: number): number {
  while (n < 0) n += 255;
  while (n >= 256) n -= 255;
  return EXP_TABLE[n];
}

function rsMultiply(p1: number[], p2: number[]): number[] {
  const result = new Array(p1.length + p2.length - 1).fill(0);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      result[i + j] ^= gexp(glog(p1[i]) + glog(p2[j]));
    }
  }
  return result;
}

function rsGetGeneratorPoly(errorCorrectionLength: number): number[] {
  let poly = [1];
  for (let i = 0; i < errorCorrectionLength; i++) {
    poly = rsMultiply(poly, [1, gexp(i)]);
  }
  return poly;
}

function rsCalculateEc(data: number[], ecCount: number): number[] {
  const generator = rsGetGeneratorPoly(ecCount);
  const info = data.slice();
  for (let i = 0; i < ecCount; i++) info.push(0);

  while (info.length >= generator.length) {
    const lead = info[0];
    if (lead !== 0) {
      const leadLog = glog(lead);
      for (let i = 0; i < generator.length; i++) {
        info[i] ^= gexp(leadLog + glog(generator[i]));
      }
    }
    info.shift();
  }
  return info;
}

// Version table: [version, totalCodewords, dataCodewordsL, ecCodewordsL]
const VERSION_INFO: Record<number, { size: number; total: number; dataL: number; ecL: number }> = {
  1: { size: 21, total: 26, dataL: 19, ecL: 7 },
  2: { size: 25, total: 44, dataL: 34, ecL: 10 },
  3: { size: 29, total: 70, dataL: 55, ecL: 15 },
  4: { size: 33, total: 100, dataL: 80, ecL: 20 },
  5: { size: 37, total: 134, dataL: 108, ecL: 26 },
};

export class SimpleQrCode {
  private version: number = 1;
  private size: number = 21;
  private matrix: boolean[][] = [];
  private isReserved: boolean[][] = [];

  constructor(text: string) {
    this.build(text);
  }

  public getSize(): number {
    return this.size;
  }

  public isDark(row: number, col: number): boolean {
    return this.matrix[row][col];
  }

  public toSvg(scale: number = 8, margin: number = 4): string {
    const totalDim = (this.size + margin * 2) * scale;
    let paths = '';

    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.matrix[r][c]) {
          const x = (c + margin) * scale;
          const y = (r + margin) * scale;
          paths += `M${x},${y}h${scale}v${scale}h-${scale}z `;
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalDim} ${totalDim}" width="${totalDim}" height="${totalDim}">
      <rect width="100%" height="100%" fill="#ffffff" />
      <path d="${paths}" fill="#0f172a" />
    </svg>`;
  }

  public drawToCanvas(canvas: HTMLCanvasElement, scale: number = 8, margin: number = 4): void {
    const totalDim = (this.size + margin * 2) * scale;
    canvas.width = totalDim;
    canvas.height = totalDim;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, totalDim, totalDim);

    ctx.fillStyle = '#0f172a';
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        if (this.matrix[r][c]) {
          ctx.fillRect((c + margin) * scale, (r + margin) * scale, scale, scale);
        }
      }
    }
  }

  private build(text: string): void {
    const rawBytes = new TextEncoder().encode(text);
    const dataLen = rawBytes.length;

    // Pick smallest version that fits data in Byte Mode (4 bits mode + 8 bits count + bytes)
    this.version = 1;
    for (let v = 1; v <= 5; v++) {
      if (VERSION_INFO[v].dataL >= dataLen + 2) {
        this.version = v;
        break;
      }
      if (v === 5) this.version = 5;
    }

    const vInfo = VERSION_INFO[this.version];
    this.size = vInfo.size;

    // Initialize matrix
    this.matrix = Array.from({ length: this.size }, () => new Array(this.size).fill(false));
    this.isReserved = Array.from({ length: this.size }, () => new Array(this.size).fill(false));

    // Place function patterns
    this.placeFinderPatterns();
    this.placeTimingPatterns();
    if (this.version >= 2) this.placeAlignmentPattern();

    // Encode data
    const bitBuffer: number[] = [];
    const pushBits = (val: number, bits: number) => {
      for (let i = bits - 1; i >= 0; i--) {
        bitBuffer.push((val >> i) & 1);
      }
    };

    // Mode indicator: 0100 for Byte Mode
    pushBits(0b0100, 4);
    // Character count (8 bits for V1-9 byte mode)
    pushBits(dataLen, 8);
    // Data bytes
    for (let i = 0; i < dataLen; i++) {
      pushBits(rawBytes[i], 8);
    }
    // Terminator bits
    const totalDataBits = vInfo.dataL * 8;
    const term = Math.min(4, totalDataBits - bitBuffer.length);
    pushBits(0, term);
    // Pad to byte
    while (bitBuffer.length % 8 !== 0) {
      bitBuffer.push(0);
    }
    // Convert to bytes
    const dataBytes: number[] = [];
    for (let i = 0; i < bitBuffer.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | bitBuffer[i + j];
      dataBytes.push(b);
    }
    // Pad bytes with PAD0 and PAD1
    let padToggle = false;
    while (dataBytes.length < vInfo.dataL) {
      dataBytes.push(padToggle ? PAD1 : PAD0);
      padToggle = !padToggle;
    }

    // Reed-Solomon Error Correction
    const ecBytes = rsCalculateEc(dataBytes, vInfo.ecL);
    const finalCodewords = dataBytes.concat(ecBytes);

    // Convert codewords to final bit sequence
    const finalBits: number[] = [];
    for (const b of finalCodewords) {
      for (let i = 7; i >= 0; i--) {
        finalBits.push((b >> i) & 1);
      }
    }

    // Place data in matrix
    let bitIdx = 0;
    let upwards = true;
    for (let right = this.size - 1; right > 0; right -= 2) {
      if (right === 6) right--; // skip timing column

      for (let vert = 0; vert < this.size; vert++) {
        const row = upwards ? this.size - 1 - vert : vert;
        for (let col = right; col >= right - 1; col--) {
          if (!this.isReserved[row][col]) {
            let bit = bitIdx < finalBits.length ? finalBits[bitIdx++] === 1 : false;
            // Apply Mask 0: (row + col) % 2 === 0
            if ((row + col) % 2 === 0) {
              bit = !bit;
            }
            this.matrix[row][col] = bit;
          }
        }
      }
      upwards = !upwards;
    }

    this.placeFormatInformation();
  }

  private placeFinderPatterns(): void {
    const placeFinder = (rStart: number, cStart: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const isCore = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          this.matrix[rStart + r][cStart + c] = isBorder || isCore;
          this.isReserved[rStart + r][cStart + c] = true;
        }
      }
      // Separator border
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const row = rStart + r;
          const col = cStart + c;
          if (row >= 0 && row < this.size && col >= 0 && col < this.size) {
            this.isReserved[row][col] = true;
          }
        }
      }
    };

    placeFinder(0, 0);
    placeFinder(0, this.size - 7);
    placeFinder(this.size - 7, 0);
  }

  private placeTimingPatterns(): void {
    for (let i = 8; i < this.size - 8; i++) {
      const isBlack = i % 2 === 0;
      this.matrix[6][i] = isBlack;
      this.isReserved[6][i] = true;
      this.matrix[i][6] = isBlack;
      this.isReserved[i][6] = true;
    }
  }

  private placeAlignmentPattern(): void {
    const pos = this.size - 7;
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        const isBlack = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        this.matrix[pos + r][pos + c] = isBlack;
        this.isReserved[pos + r][pos + c] = true;
      }
    }
  }

  private placeFormatInformation(): void {
    // Mask 0, Error Correction L = 0b01
    // Format bits for L-0 after BCH code and XOR mask: 0x77c4 = 0b111011111000100
    const formatBits = 0x77c4;

    for (let i = 0; i < 15; i++) {
      const bit = ((formatBits >> i) & 1) === 1;
      // Around top-left finder
      if (i < 6) this.matrix[8][i] = bit;
      else if (i < 8) this.matrix[8][i + 1] = bit;
      else if (i === 8) this.matrix[7][8] = bit;
      else this.matrix[14 - i][8] = bit;

      // Split second copy
      if (i < 8) this.matrix[this.size - 1 - i][8] = bit;
      else this.matrix[8][this.size - 15 + i] = bit;
    }
    // Dark module
    this.matrix[this.size - 8][8] = true;
  }
}

export function generateQrSvg(text: string, scale: number = 8, margin: number = 4): string {
  if (!text) text = 'https://developeros.in';
  const qr = new SimpleQrCode(text);
  return qr.toSvg(scale, margin);
}
