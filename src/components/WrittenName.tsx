import { nameOutline } from "@/data/name-paths";

/**
 * The name, drawn on the way manim's `Write` does it: an outline strokes in at a
 * steady pen speed, then the solid letterform fades up behind it as the stroke
 * retires.
 *
 * Outlines come from the real Newsreader font via scripts/generate-name-paths.py,
 * so this matches the typography everywhere else on the page. Animation is pure
 * CSS — no client JS, and it renders fully on the server.
 */

/** Seconds the pen takes to travel the whole name. */
const PEN_SECONDS = 2.1;
/** <1 lets each glyph start a little before the previous one finishes. */
const OVERLAP = 0.9;
/** Fraction of a glyph's stroke that passes before its fill starts to show. */
const FILL_LEAD = 0.45;

const UNITS_PER_EM = 100; // the generator normalises the font's 2000/em to this

export default function WrittenName({ className = "" }: { className?: string }) {
  const totalLength = nameOutline.glyphs.reduce((sum, g) => sum + g.len, 0);
  const speed = totalLength / PEN_SECONDS; // path units per second

  let travelled = 0;
  const glyphs = nameOutline.glyphs.map((g, i) => {
    const duration = g.len / speed;
    const delay = (travelled / speed) * OVERLAP;
    travelled += g.len;
    return { ...g, key: `${g.char}-${i}`, duration, delay };
  });

  const [, , vbWidth] = nameOutline.viewBox.split(" ").map(Number);

  return (
    <span className={className}>
      {/* The visible mark is decorative; the real text sits in the sr-only span
          below so screen readers and crawlers get a plain heading. */}
      <svg
        viewBox={nameOutline.viewBox}
        aria-hidden="true"
        focusable="false"
        className="written-name block overflow-visible"
        style={{
          width: `${vbWidth / UNITS_PER_EM}em`,
          maxWidth: "100%",
          height: "auto",
        }}
      >
        {glyphs.map((g) => (
          <g key={g.key}>
            <path
              d={g.d}
              className="written-name-fill"
              style={{
                animationDuration: `${(g.duration * (1 - FILL_LEAD) + 0.22).toFixed(3)}s`,
                animationDelay: `${(g.delay + g.duration * FILL_LEAD).toFixed(3)}s`,
              }}
            />
            <path
              d={g.d}
              pathLength={1}
              className="written-name-stroke"
              style={{
                animationDuration: `${(g.duration + 0.22).toFixed(3)}s`,
                animationDelay: `${g.delay.toFixed(3)}s`,
              }}
            />
          </g>
        ))}
      </svg>
      <span className="sr-only">{nameOutline.text}</span>
    </span>
  );
}
