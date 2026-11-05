import { ImageResponse } from "next/og";

import { nameOutline } from "@/data/name-paths";
import { site } from "@/data/site";

// Link previews: the name on the page's own paper, and nothing else.
//
// Link previews are always a still — X and the rest take a single frame — so
// this cannot run the heading's write-on. Instead it freezes that animation a
// beat before it finishes: the name is fully there, but the last few letters
// are still catching up, the tail one mid-stroke under the pen.
//
// Reuses the same Newsreader outlines as the heading, so the two never drift
// and no font file has to be loaded here.

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#f4f0e4";
const FOREST = "#0e3b1f";
const NAME_WIDTH = 960; // leaves a generous margin inside the 1200px card
const STROKE_WIDTH = 1.9; // path units; heavier than the page's 1.1 so the
// outlined tail still reads when a platform unfurls the card as a thumbnail
/** Trailing glyphs still being written. Keep small so the name stays readable. */
const TAIL = 3;
/** How much of the final glyph's outline the pen has covered. */
const TAIL_PROGRESS = 0.55;

export default async function Image() {
  const [, , vbWidth, vbHeight] = nameOutline.viewBox.split(" ").map(Number);
  const nameHeight = (NAME_WIDTH * vbHeight) / vbWidth;

  const glyphs = nameOutline.glyphs;
  const firstTail = Math.max(0, glyphs.length - TAIL);

  const marks = glyphs.map((g, i) => {
    if (i < firstTail) return `<path d="${g.d}" fill="${FOREST}"/>`;

    // Fade the fill out across the tail, and show the outline that the fill
    // would be chasing.
    const step = i - firstTail + 1;
    const fillOpacity = (1 - step / (TAIL + 1)) * 0.9;
    const isLast = i === glyphs.length - 1;
    const dash = isLast
      ? ` stroke-dasharray="${(g.len * TAIL_PROGRESS).toFixed(1)} ${g.len.toFixed(1)}"`
      : "";

    return (
      `<path d="${g.d}" fill="${FOREST}" fill-opacity="${fillOpacity.toFixed(2)}"/>` +
      `<path d="${g.d}" fill="none" stroke="${FOREST}" stroke-opacity="0.95"` +
      ` stroke-width="${STROKE_WIDTH}" stroke-linecap="round" stroke-linejoin="round"${dash}/>`
    );
  });

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${nameOutline.viewBox}"` +
    ` width="${NAME_WIDTH}" height="${nameHeight}">${marks.join("")}</svg>`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`}
          width={NAME_WIDTH}
          height={nameHeight}
          alt={site.name}
        />
      </div>
    ),
    size,
  );
}
