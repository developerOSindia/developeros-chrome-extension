#!/usr/bin/env python3
"""
DeveloperOS Chrome Extension Icon Generator
Generates crisp, branded PNG icons (16x16, 48x48, 128x128) using pure Python standard library.
Features DeveloperOS dark background (#0f172a), rounded aesthetic, and gradient terminal prompt (> _).
"""

import math
import struct
import zlib
from pathlib import Path


def create_png(width: int, height: int, pixels: list[tuple[int, int, int, int]]) -> bytes:
    """Encodes RGBA pixel array into valid PNG binary bytes using zlib."""
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0)  # filter type 0: None
        for x in range(width):
            r, g, b, a = pixels[y * width + x]
            raw_data.extend((r, g, b, a))

    def chunk(tag: bytes, data: bytes) -> bytes:
        length = struct.pack(">I", len(data))
        crc = struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        return length + tag + data + crc

    header = b"\x89PNG\r\n\x1a\n"
    ihdr = chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0))
    idat = chunk(b"IDAT", zlib.compress(bytes(raw_data), 9))
    iend = chunk(b"IEND", b"")

    return header + ihdr + idat + iend


def render_icon(size: int) -> bytes:
    """Renders DeveloperOS icon at target size (16, 48, 128)."""
    pixels = []
    # Authentic developerOS Palette
    bg_r, bg_g, bg_b = 6, 7, 10  # #06070a
    grad_start_r, grad_start_g, grad_start_b = 255, 59, 48   # #ff3b30
    grad_end_r, grad_end_g, grad_end_b = 255, 145, 77        # #ff914d

    radius = size * 0.22

    for y in range(size):
        for x in range(size):
            # Check rounded corner
            dx = max(0, abs(x - (size - 1) / 2) - ((size - 1) / 2 - radius))
            dy = max(0, abs(y - (size - 1) / 2) - ((size - 1) / 2 - radius))
            dist = math.sqrt(dx * dx + dy * dy)

            if dist > radius + 0.5:
                # Transparent outside rounded box
                pixels.append((0, 0, 0, 0))
                continue

            # Normalized coordinates (0.0 to 1.0)
            nx = x / size
            ny = y / size

            # Base background
            r, g, b, a = bg_r, bg_g, bg_b, 255

            # Gradient factor for prompt
            grad_t = (nx + ny) / 2.0
            icon_r = int(grad_start_r + (grad_end_r - grad_start_r) * grad_t)
            icon_g = int(grad_start_g + (grad_end_g - grad_start_g) * grad_t)
            icon_b = int(grad_start_b + (grad_end_b - grad_start_b) * grad_t)

            # Draw Chevron ">" (left edge from 0.28 to 0.48, top 0.30 to 0.50 to 0.70)
            in_chevron = False
            thickness = max(1.2 / size, 0.08)

            if 0.22 <= nx <= 0.52:
                expected_y1 = 0.50 - (0.48 - nx) * 0.95
                if abs(ny - expected_y1) < thickness and ny <= 0.54:
                    in_chevron = True
                expected_y2 = 0.50 + (0.48 - nx) * 0.95
                if abs(ny - expected_y2) < thickness and ny >= 0.46:
                    in_chevron = True

            # Draw Underscore "_" from x: 0.54 to 0.76, y: 0.68 to 0.76
            in_underscore = False
            if 0.54 <= nx <= 0.76 and 0.66 <= ny <= (0.66 + thickness * 1.2):
                in_underscore = True

            if in_chevron or in_underscore:
                r, g, b = icon_r, icon_g, icon_b

            pixels.append((r, g, b, a))

    return create_png(size, size, pixels)


def main():
    root = Path(__file__).resolve().parent.parent
    icons_dir = root / "icons"
    dist_icons_dir = root / "dist" / "icons"
    icons_dir.mkdir(parents=True, exist_ok=True)
    dist_icons_dir.mkdir(parents=True, exist_ok=True)

    sizes = [16, 48, 128]
    for size in sizes:
        png_data = render_icon(size)
        file_path = icons_dir / f"icon{size}.png"
        dist_path = dist_icons_dir / f"icon{size}.png"
        file_path.write_bytes(png_data)
        dist_path.write_bytes(png_data)
        print(f"Generated {file_path.name} ({len(png_data)} bytes)")

    # Ensure icon.svg is copied to dist/icons/ if present
    src_svg = icons_dir / "icon.svg"
    dist_svg = dist_icons_dir / "icon.svg"
    if src_svg.exists():
        dist_svg.write_text(src_svg.read_text(encoding="utf-8"), encoding="utf-8")
        print("Synchronized authentic icon.svg to dist/icons/")


if __name__ == "__main__":
    main()
