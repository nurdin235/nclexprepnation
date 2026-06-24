import {
  Award,
  BookOpenCheck,
  HeartHandshake,
  Target,
} from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn about NCLEX Prep Nation, an independent NCLEX preparation platform supporting RN, PN, U.S., Canadian, and international nursing candidates with original study resources.";

export const metadata = createPageMetadata({
  title: "About NCLEX Prep Nation",
  description,
  path: "/about",
  keywords: ["independent NCLEX preparation platform", "NCLEX prep support"],
});

export default function AboutPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/about"
        title="About NCLEX Prep Nation"
      />
      <PageHero
        description="We are building a structured preparation platform for nursing candidates in the United States, Canada, and international licensure pathways who want clearer study direction, meaningful practice, and honest support."
        eyebrow="About us"
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        title="NCLEX preparation built around clarity, practice, and trust."
        imageSrc="/images/nursing_care_hero.png"
      />
      <Section>
        <InfoGrid
          items={[
            {
              title: "Our mission",
              description:
                "Help nursing candidates prepare with original questions, detailed review, useful resources, and stronger clinical judgment habits.",
              icon: Target,
            },
            {
              title: "Who we support",
              description:
                "NCLEX-RN and NCLEX-PN candidates, international nurses, first-time testers, and students preparing to retake the exam.",
              icon: HeartHandshake,
            },
            {
              title: "What we provide",
              description:
                "Diagnostic guidance, practice questions, study plans, topic resources, mock exam preparation, and guided support pathways.",
              icon: BookOpenCheck,
            },
            {
              title: "Additional support",
              description:
                "Premium access programs include a preparation completion certificate and dedicated support for reviewing weak areas and clinical mistakes.",
              icon: Award,
            },
          ]}
          columns={4}
        />
        <div className="mt-10">
          <TrustNotice />
        </div>
      </Section>
      <PageCTA
        description="Start with a free diagnostic preview or request the materials and support that fit your NCLEX-RN or NCLEX-PN goals."
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/request-access"
        secondaryLabel="Request Access"
        title="Build a clearer preparation plan."
      />
    </>
  );
}
