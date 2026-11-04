import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { mono, sans, serif } from "@/lib/fonts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.description,
    ...(site.url ? { url: site.url } : {}),
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
