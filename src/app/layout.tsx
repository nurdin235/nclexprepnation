import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NCLEX Prep Nation | NCLEX-RN & NCLEX-PN Exam Preparation",
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
  ],
  openGraph: {
    title: "NCLEX Prep Nation | NCLEX-RN & NCLEX-PN Exam Preparation",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "NCLEX Prep Nation",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
