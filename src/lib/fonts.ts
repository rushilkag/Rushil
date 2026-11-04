import localFont from "next/font/local";

// Self-hosted, latin subsets of three Google Fonts (all SIL Open Font License).
// Newsreader stands in for the high-contrast editorial serif of the Santé brand,
// JetBrains Mono for its monospaced labels, Inter for body copy.
// The CSS variables are mapped to Tailwind's font-serif / font-mono / font-sans in globals.css.

export const serif = localFont({
  src: [
    { path: "../fonts/newsreader-normal.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/newsreader-italic.woff2", weight: "200 800", style: "italic" },
  ],
  variable: "--font-newsreader",
  display: "swap",
});

export const mono = localFont({
  src: [
    { path: "../fonts/jetbrains-normal.woff2", weight: "100 800", style: "normal" },
    { path: "../fonts/jetbrains-italic.woff2", weight: "100 800", style: "italic" },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});

export const sans = localFont({
  src: [
    { path: "../fonts/inter-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../fonts/inter-italic.woff2", weight: "100 900", style: "italic" },
  ],
  variable: "--font-inter",
  display: "swap",
});
