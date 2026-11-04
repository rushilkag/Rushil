# Rushil Kagithala — personal website

A one-page personal site. Layout: a single 700px column with location + local time, a name with a cycling word, a quote, WORK / PERSONAL sections under hairline rules, and an icon footer. Look: the Santé palette (cream paper, deep forest ink, halftone dots, mono labels, a three-colour stripe).

## Editing

- **Copy, links, quote, location, last-updated date:** `src/data/site.ts`
- **Bio paragraphs:** the `WORK` / `PERSONAL` sections in `src/app/page.tsx`
- **Colours:** the `@theme` block and CSS variables at the top of `src/app/globals.css`
- **Fonts:** self-hosted in `src/fonts/`, wired up in `src/lib/fonts.ts` (Newsreader, JetBrains Mono, Inter; all SIL OFL)
- **Resume:** replace `public/resume.pdf`
- **Social preview and icons:** `src/app/opengraph-image.png`, `twitter-image.png`, `icon.png`, `apple-icon.png`, `favicon.ico`

## Running

```bash
npm install
npm run dev
```

`npm run build` type-checks, lints, and produces the production bundle. Deployed on Vercel.
