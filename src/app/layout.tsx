import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { mono, sans, serif } from "@/lib/fonts";
import { site } from "@/data/site";

// Open Graph needs absolute URLs. Prefer the canonical URL if one is set, then
// Vercel's stable production domain — VERCEL_PROJECT_PRODUCTION_URL, not
// VERCEL_URL, which is per-deployment and would change on every push and keep
// busting the social caches.
const baseUrl =
  site.url ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    url: baseUrl,
    // iMessage and anything else that honours og:video plays this inline in
    // the link bubble, so the preview animates the name the way the page does.
    // Everywhere else falls back to the still from app/opengraph-image.tsx.
    videos: [
      {
        url: `${baseUrl}/og/preview.mp4`,
        secureUrl: `${baseUrl}/og/preview.mp4`,
        type: "video/mp4",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rushilkag",
    creator: "@Rushilkag",
    title: site.title,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0e4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
