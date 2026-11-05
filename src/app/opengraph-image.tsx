import { ImageResponse } from "next/og";

import { nameOutline } from "@/data/name-paths";
import { site } from "@/data/site";

// Static fallback card: the name on the page's own paper, and nothing else.
//
// Platforms that honour og:video (iMessage among them) play
// public/og/preview.mp4 instead, which animates the write-on. This is what
// everything else falls back to, so it shows the finished name.
// Reuses the same Newsreader outlines as the heading, so the two never drift
// and no font file has to be loaded here.

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREAM = "#f4f0e4";
const FOREST = "#0e3b1f";
const NAME_WIDTH = 960; // leaves a generous margin inside the 1200px card

export default async function Image() {
  const [, , vbWidth, vbHeight] = nameOutline.viewBox.split(" ").map(Number);
  const nameHeight = (NAME_WIDTH * vbHeight) / vbWidth;

  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${nameOutline.viewBox}"`,
    ` width="${NAME_WIDTH}" height="${nameHeight}">`,
    `<g fill="${FOREST}">`,
    nameOutline.glyphs.map((g) => `<path d="${g.d}"/>`).join(""),
    "</g></svg>",
  ].join("");

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
