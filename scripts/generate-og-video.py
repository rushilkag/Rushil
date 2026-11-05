#!/usr/bin/env python3
"""
Render the heading's write-on to public/og/preview.mp4.

iMessage (and anything else that honours og:video) plays a video inline in the
link bubble, so the preview can actually animate instead of sitting still.
Platforms that ignore og:video fall back to the static card rendered by
src/app/opengraph-image.tsx.

Frames are built straight from src/data/name-paths.ts using the same timing as
src/components/WrittenName.tsx, so the card and the page animate identically.
Keep the constants below in sync with that component.

Run after regenerating the name paths or retiming the animation:

    python3 scripts/generate-og-video.py

Needs: rsvg-convert (librsvg) and ffmpeg.
"""

import math
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PATHS_TS = ROOT / "src/data/name-paths.ts"
OUT = ROOT / "public/og/preview.mp4"

# --- must match src/components/WrittenName.tsx ---
PEN_SECONDS = 2.1
OVERLAP = 0.9
FILL_LEAD = 0.45
STROKE_TAIL = 0.22  # the extra seconds each CSS animation runs past its glyph
DRAW_FRACTION = 0.72  # of the stroke animation spent drawing, before it fades

# --- card ---
WIDTH, HEIGHT = 1200, 630  # both even, required by yuv420p
FPS = 30
HOLD_SECONDS = 1.3  # linger on the finished name before the loop ends
NAME_WIDTH = 960
STROKE_WIDTH = 1.6  # path units; heavier than the page so it survives H.264
CREAM = "#f4f0e4"
FOREST = "#0e3b1f"

GLYPH_RE = re.compile(r'\{\s*char:\s*"(?P<char>(?:[^"\\]|\\.)*)",\s*len:\s*(?P<len>[\d.]+),\s*d:\s*"(?P<d>[^"]*)"\s*\}')
VIEWBOX_RE = re.compile(r'viewBox:\s*"([^"]+)"')


def ease_out(t: float) -> float:
    """CSS ease-out, cubic-bezier(0, 0, 0.58, 1), solved for y at x = t."""
    if t <= 0:
        return 0.0
    if t >= 1:
        return 1.0
    lo, hi = 0.0, 1.0
    for _ in range(40):  # bisect on x to find the curve parameter
        mid = (lo + hi) / 2
        x = 3 * mid * (1 - mid) ** 2 * 0.0 + 3 * (1 - mid) * mid**2 * 0.58 + mid**3
        if x < t:
            lo = mid
        else:
            hi = mid
    p = (lo + hi) / 2
    return 3 * p * (1 - p) ** 2 * 0.0 + 3 * (1 - p) * p**2 * 1.0 + p**3


def clamp01(v: float) -> float:
    return max(0.0, min(1.0, v))


def load_glyphs():
    src = PATHS_TS.read_text()
    view_box = VIEWBOX_RE.search(src).group(1)
    glyphs = [
        {"char": m.group("char"), "len": float(m.group("len")), "d": m.group("d")}
        for m in GLYPH_RE.finditer(src)
    ]
    if not glyphs:
        raise SystemExit(f"no glyphs parsed from {PATHS_TS} — did its format change?")
    return view_box, glyphs


def schedule(glyphs):
    """Per-glyph stroke/fill timing, mirroring the component's constant pen speed."""
    total = sum(g["len"] for g in glyphs)
    speed = total / PEN_SECONDS
    travelled = 0.0
    out = []
    for g in glyphs:
        duration = g["len"] / speed
        delay = (travelled / speed) * OVERLAP
        travelled += g["len"]
        out.append(
            {
                **g,
                "stroke_delay": delay,
                "stroke_dur": duration + STROKE_TAIL,
                "fill_delay": delay + duration * FILL_LEAD,
                "fill_dur": duration * (1 - FILL_LEAD) + STROKE_TAIL,
            }
        )
    return out


def frame_svg(view_box: str, timed, t: float) -> str:
    vb = [float(v) for v in view_box.split()]
    name_height = NAME_WIDTH * vb[3] / vb[2]
    x = (WIDTH - NAME_WIDTH) / 2
    y = (HEIGHT - name_height) / 2

    marks = []
    for g in timed:
        # fill: opacity 0 -> 1 on an ease-out
        q = clamp01((t - g["fill_delay"]) / g["fill_dur"])
        fill_opacity = ease_out(q)
        if fill_opacity > 0.001:
            marks.append(
                f'<path d="{g["d"]}" fill="{FOREST}" fill-opacity="{fill_opacity:.3f}"/>'
            )

        # stroke: draws over DRAW_FRACTION of its run, then fades out
        p = clamp01((t - g["stroke_delay"]) / g["stroke_dur"])
        if p <= 0 or p >= 1:
            continue
        if p <= DRAW_FRACTION:
            drawn = p / DRAW_FRACTION
            stroke_opacity = 0.85
        else:
            drawn = 1.0
            stroke_opacity = 0.85 * (1 - (p - DRAW_FRACTION) / (1 - DRAW_FRACTION))
        if stroke_opacity <= 0.001 or drawn <= 0:
            continue
        offset = g["len"] * (1 - drawn)
        marks.append(
            f'<path d="{g["d"]}" fill="none" stroke="{FOREST}"'
            f' stroke-opacity="{stroke_opacity:.3f}" stroke-width="{STROKE_WIDTH}"'
            f' stroke-linecap="round" stroke-linejoin="round"'
            f' stroke-dasharray="{g["len"]:.1f}" stroke-dashoffset="{offset:.2f}"/>'
        )

    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" '
        f'viewBox="0 0 {WIDTH} {HEIGHT}">'
        f'<rect width="{WIDTH}" height="{HEIGHT}" fill="{CREAM}"/>'
        f'<svg x="{x:.1f}" y="{y:.1f}" width="{NAME_WIDTH}" height="{name_height:.1f}"'
        f' viewBox="{view_box}">{"".join(marks)}</svg>'
        f"</svg>"
    )


def main() -> None:
    for tool in ("rsvg-convert", "ffmpeg"):
        if not shutil.which(tool):
            raise SystemExit(f"{tool} not found on PATH")

    view_box, glyphs = load_glyphs()
    timed = schedule(glyphs)
    end = max(g["stroke_delay"] + g["stroke_dur"] for g in timed)
    n_frames = math.ceil((end + HOLD_SECONDS) * FPS)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for i in range(n_frames):
            t = i / FPS
            svg = frame_svg(view_box, timed, t)
            png = tmp / f"f{i:05d}.png"
            subprocess.run(
                ["rsvg-convert", "-w", str(WIDTH), "-h", str(HEIGHT), "-o", str(png)],
                input=svg.encode(),
                check=True,
            )
        print(f"rendered {n_frames} frames ({n_frames / FPS:.2f}s)")

        subprocess.run(
            [
                "ffmpeg", "-y", "-loglevel", "error",
                "-framerate", str(FPS), "-i", str(tmp / "f%05d.png"),
                "-c:v", "libx264", "-pix_fmt", "yuv420p",
                "-profile:v", "high", "-level", "4.0",
                "-crf", "20", "-movflags", "+faststart",
                str(OUT),
            ],
            check=True,
        )

    print(f"wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size / 1024:.0f} KB)")


if __name__ == "__main__":
    main()
