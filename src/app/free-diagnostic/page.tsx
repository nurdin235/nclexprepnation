import { BarChart3, ClipboardList, Route } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Start with a free NCLEX diagnostic preview to identify strong areas, weak topics, and a practical next step for NCLEX-RN or NCLEX-PN preparation.";

export const metadata = createPageMetadata({
  title: "Free NCLEX Diagnostic Test",
  description,
  path: "/free-diagnostic",
});

export default function FreeDiagnosticPage() {
  return (
    <>
      <PageHero
        description="Not sure where to begin? Use a short preparation-focused diagnostic to identify strong areas, weak topics, and a recommended next step."
        eyebrow="Free diagnostic"
        primaryHref="#diagnostic-preview"
        primaryLabel="View Diagnostic Preview"
        secondaryHref="/request-access"
        secondaryLabel="Request Access"
        title="Start With a Free Diagnostic Test"
        imageSrc="/images/nursing_student_hero.png"
        imageAlt="Clinical Diagnostic Evaluation"
      />

      <Section id="diagnostic-preview">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">
            A clearer starting point for your study plan
          </h2>
          <p className="mt-3 leading-7 text-muted">
            The full question engine will be connected in a later phase. This
            public preview shows the learning experience the diagnostic is
            designed to provide.
          </p>
        </div>
        <InfoGrid
          items={[
            {
              title: "Short topic check",
              description:
                "Review a focused mix of safety, prioritization, pharmacology, and clinical judgment concepts.",
              icon: ClipboardList,
            },
            {
              title: "Preparation summary",
              description:
                "See a study-focused summary highlighting your strengths and the topics requiring closer review.",
              icon: BarChart3,
            },
            {
              title: "Recommended next step",
              description:
                "Use the result to choose practice questions, resources, or a preparation package.",
              icon: Route,
            },
          ]}
        />

      </Section>

      <PageCTA
        description="Tell us whether you are preparing for NCLEX-RN or NCLEX-PN, and we will help you choose a useful starting point."
        primaryLabel="Request Diagnostic Access"
        secondaryHref="/practice-questions"
        secondaryLabel="View Practice Questions"
        title="Ready to find your next study priority?"
      />
    </>
  );
}
