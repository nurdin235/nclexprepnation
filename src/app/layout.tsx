import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NCLEX Prep Nation | NCLEX-RN & NCLEX-PN Prep for U.S. and Canada",
    template: "%s | NCLEX Prep Nation",
  },
  description: siteConfig.description,
  applicationName: "NCLEX Prep Nation",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "NCLEX prep",
    "NCLEX-RN prep",
    "NCLEX-PN prep",
    "NCLEX practice questions",
    "NGN case studies",
    "NCLEX study resources",
    "NCLEX prep United States",
    "NCLEX prep Canada",
    "NCLEX prep for international nurses",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "NCLEX Prep Nation | NCLEX-RN & NCLEX-PN Prep for U.S. and Canada",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "NCLEX Prep Nation",
    images: [
      {
        url: "/images/medical-globe-hero.png",
        width: 1200,
        height: 630,
        alt: "NCLEX Prep Nation medical education workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NCLEX Prep Nation | NCLEX-RN & NCLEX-PN Prep for U.S. and Canada",
    description: siteConfig.description,
    images: ["/images/medical-globe-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
