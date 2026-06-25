import type { FAQItem } from "@/types";
import { siteConfig } from "@/data/site";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

function safeJson(data: JsonValue) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "NCLEX Prep Nation",
        url: "https://nclexprepnation.com",
        logo: "https://nclexprepnation.com/icon-512.png",
        description: "NCLEX Prep Nation is an independent NCLEX preparation platform offering study materials, practice questions, NGN-style case studies, diagnostic support, and guided preparation for NCLEX-RN and NCLEX-PN candidates.",
        areaServed: ["United States", "Canada", "International"],
        email: "support@nclexprepnation.com",
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.tiktok,
        ].filter(Boolean),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NCLEX Prep Nation",
        alternateName: "NCLEX Prep",
        url: "https://nclexprepnation.com",
        description: "Independent NCLEX preparation platform for NCLEX-RN and NCLEX-PN candidates.",
        inLanguage: "en",
      }}
    />
  );
}

export function WebPageJsonLd({
  description,
  path,
  title,
}: {
  description: string;
  path: string;
  title: string;
}) {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          description,
          url,
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          inLanguage: "en",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: siteConfig.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: url,
            },
          ],
        }}
      />
    </>
  );
}

export function FAQPageJsonLd({ items }: { items: FAQItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
