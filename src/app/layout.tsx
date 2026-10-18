import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteConfig } from "@/content/site/config";
import { buildSiteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = buildSiteMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = siteConfig.brand;

  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
        style={
          {
            "--background": colors.background,
            "--foreground": colors.foreground,
            "--muted": colors.muted,
            "--accent": colors.accent,
            "--accent-hover": colors.accentHover,
            "--accent-soft": colors.accentSoft,
            "--surface": colors.surface,
          } as CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
