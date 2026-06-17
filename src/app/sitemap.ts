import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/about",
  "/nclex-rn",
  "/nclex-pn",
  "/practice-questions",
  "/free-diagnostic",
  "/resources",
  "/packages",
  "/score-improvement-support",
  "/request-access",
  "/contact",
  "/blog",
  "/faq",
  "/testimonials",
  "/official-nclex-resources",
  "/disclaimer",
  "/privacy-policy",
  "/terms-of-use",
  "/refund-policy",
  "/content-integrity-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
