import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/official-nclex-resources",
        "/content-integrity-policy",
        "/disclaimer",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
