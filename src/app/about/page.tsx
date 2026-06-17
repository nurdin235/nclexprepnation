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
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn about NCLEX Prep Nation's mission, original educational materials, preparation support, and independent platform standards.";

export const metadata = createPageMetadata({
  title: "About NCLEX Prep Nation",
  description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        description="We are building a structured preparation platform for nursing candidates who want clearer study direction, meaningful practice, and honest support."
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
