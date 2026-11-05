#!/usr/bin/env python3
"""
Turn the site name into SVG outlines so it can be "written" on, manim-style.

Shapes the name with HarfBuzz (so kerning matches what the browser would do),
pulls each glyph's outline out of the Newsreader variable font at the weight and
optical size the heading actually renders at, and writes the result to
src/data/name-paths.ts.

Run after changing the name, the font, or the heading's weight/size:

    python3 scripts/generate-name-paths.py

Needs: fonttools, brotli, uharfbuzz.
"""

import math
from pathlib import Path

import uharfbuzz as hb
from fontTools.pens.basePen import BasePen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer


class LengthPen(BasePen):
    """Approximate outline arc length, so each glyph can be drawn at one speed."""

    STEPS = 24

    def __init__(self, glyph_set):
        super().__init__(glyph_set)
        self.length = 0.0
        self._start = None

    def _moveTo(self, pt):
        self._start = pt

    def _lineTo(self, pt):
        self.length += math.dist(self._getCurrentPoint(), pt)

    def _curveToOne(self, p1, p2, p3):
        self._flatten(self._getCurrentPoint(), [p1, p2, p3])

    def _qCurveToOne(self, p1, p2):
        self._flatten(self._getCurrentPoint(), [p1, p2])

    def _closePath(self):
        if self._start and self._getCurrentPoint():
            self.length += math.dist(self._getCurrentPoint(), self._start)

    def _flatten(self, p0, pts):
        ctrl = [p0, *pts]
        prev = p0
        for i in range(1, self.STEPS + 1):
            cur = self._bezier(ctrl, i / self.STEPS)
            self.length += math.dist(prev, cur)
            prev = cur

    @staticmethod
    def _bezier(pts, t):
        pts = list(pts)
        while len(pts) > 1:
            pts = [
                (a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t)
                for a, b in zip(pts, pts[1:])
            ]
        return pts[0]

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "src/fonts/newsreader-italic.woff2"
OUT = ROOT / "src/data/name-paths.ts"

TEXT = "Rushil Kagithala"
WEIGHT = 500  # matches font-medium on the <h1>
ITALIC = True  # FONT above must be the matching italic/upright file
OPTICAL_SIZE = 44  # matches the clamp() ceiling, which is what the browser picks
SCALE = 0.05  # font units (2000/em) -> 100/em, so the path data stays short
TRACKING_EM = -0.022  # matches the heading's tracking-[-0.022em]
PAD = 2.0  # viewBox breathing room so round stroke caps are not clipped


def main() -> None:
    # Pin the variable axes, then shape with the very same binary so the
    # advances HarfBuzz reports line up with the outlines we extract.
    pinned = instancer.instantiateVariableFont(
        TTFont(FONT), {"wght": WEIGHT, "opsz": OPTICAL_SIZE}, inplace=False
    )
    # Hand HarfBuzz a bare TTF — it does not read woff2, and silently maps every
    # character to .notdef if you give it one.
    pinned.flavor = None
    buf = __import__("io").BytesIO()
    pinned.save(buf)
    blob = buf.getvalue()

    face = hb.Face(blob)
    font = hb.Font(face)
    upem = face.upem
    font.scale = (upem, upem)

    hb_buf = hb.Buffer()
    hb_buf.add_str(TEXT)
    hb_buf.guess_segment_properties()
    hb.shape(font, hb_buf, {"kern": True, "liga": True})

    glyph_set = pinned.getGlyphSet()
    order = pinned.getGlyphOrder()

    glyphs = []
    pen_x = 0.0
    ink_min_x, ink_max_x = 0.0, 0.0
    for info, pos in zip(hb_buf.glyph_infos, hb_buf.glyph_positions):
        name = order[info.codepoint]
        svg_pen = SVGPathPen(glyph_set, ntos=lambda v: f"{v:.1f}")
        # Flip Y (font space is Y-up, SVG is Y-down) and drop the glyph at its
        # shaped position. Baseline ends up at y = 0.
        tx = (pen_x + pos.x_offset) * SCALE
        ty = pos.y_offset * SCALE
        glyph_set[name].draw(TransformPen(svg_pen, (SCALE, 0, 0, -SCALE, tx, ty)))
        d = svg_pen.getCommands()
        if d.strip():  # spaces draw nothing
            length_pen = LengthPen(glyph_set)
            glyph_set[name].draw(TransformPen(length_pen, (SCALE, 0, 0, -SCALE, 0, 0)))
            glyphs.append(
                {"char": TEXT[info.cluster], "d": d, "len": round(length_pen.length, 1)}
            )
            bounds_pen = BoundsPen(glyph_set)
            glyph_set[name].draw(TransformPen(bounds_pen, (SCALE, 0, 0, -SCALE, tx, ty)))
            if bounds_pen.bounds:
                bx0, _, bx1, _ = bounds_pen.bounds
                ink_min_x = min(ink_min_x, bx0)
                ink_max_x = max(ink_max_x, bx1)
        pen_x += pos.x_advance + TRACKING_EM * upem

    # viewBox: real ink horizontally (an italic leans past its advance), the
    # font's own metrics vertically so the baseline sits where text would.
    advance_w = (pen_x - TRACKING_EM * upem) * SCALE
    ascent = pinned["hhea"].ascender * SCALE
    descent = pinned["hhea"].descender * SCALE  # negative
    min_x = min(0.0, ink_min_x) - PAD
    max_x = max(advance_w, ink_max_x) + PAD
    min_y = -ascent - PAD
    width = max_x - min_x
    vb_w, vb_h = width, (ascent - descent) + PAD * 2

    lines = [
        "// GENERATED by scripts/generate-name-paths.py — do not edit by hand.",
        f"// {TEXT!r} in Newsreader {'italic' if ITALIC else 'roman'} "
        f"(wght {WEIGHT}, opsz {OPTICAL_SIZE}), shaped with HarfBuzz.",
        "",
        "export const nameOutline = {",
        f'  text: "{TEXT}",',
        f'  viewBox: "{min_x:.1f} {min_y:.1f} {vb_w:.1f} {vb_h:.1f}",',
        f"  width: {width:.1f},",
        f"  height: {vb_h:.1f},",
        "  glyphs: [",
    ]
    for g in glyphs:
        lines.append(
            f'    {{ char: "{g["char"]}", len: {g["len"]}, d: "{g["d"]}" }},'
        )
    lines += ["  ],", "} as const;", ""]

    OUT.write_text("\n".join(lines))
    print(f"wrote {OUT.relative_to(ROOT)}: {len(glyphs)} glyphs, viewBox {min_x:.1f} {min_y:.1f} {vb_w:.1f} {vb_h:.1f}")


if __name__ == "__main__":
    main()
