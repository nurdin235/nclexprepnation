import { Brain, ClipboardCheck, Pill, ShieldPlus, Stethoscope, Users } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Prepare for NCLEX-RN with topic-based practice questions, study resources, NGN-style case studies, a diagnostic preview, and structured support.";

export const metadata = createPageMetadata({
  title: "NCLEX-RN Prep",
  description,
  path: "/nclex-rn",
});

export default function NclexRnPage() {
  return (
    <>
      <PageHero
        description="Prepare across key registered nursing topics with original practice, clinical judgment review, and resources designed to make your next study action clearer."
        eyebrow="NCLEX-RN"
        primaryHref="/free-diagnostic"
        primaryLabel="Start RN Diagnostic"
        secondaryHref="/request-access"
        secondaryLabel="Request RN Materials"
        title="Build a stronger NCLEX-RN preparation routine."
        imageSrc="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
        imageAlt="Registered Nursing Clinical Study"
      />
      <Section>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">RN practice priorities</h2>
          <p className="mt-3 leading-7 text-muted">
            Review broad nursing knowledge while strengthening prioritization,
            safety, delegation, and case-based decision-making.
          </p>
        </div>
        <InfoGrid
          items={[
            { title: "Management of Care", description: "Practice coordination, delegation, client rights, and continuity of care.", icon: Users },
            { title: "Safety and Infection Control", description: "Review precautions, risk reduction, and safe nursing actions.", icon: ShieldPlus },
            { title: "Pharmacology", description: "Strengthen medication safety, expected effects, and nursing monitoring.", icon: Pill },
            { title: "Prioritization", description: "Apply urgency, stability, safety, and nursing process frameworks.", icon: ClipboardCheck },
            { title: "Medical-Surgical Nursing", description: "Review high-yield adult health systems and nursing interventions.", icon: Stethoscope },
            { title: "Clinical Judgment", description: "Practice recognizing cues, setting priorities, taking action, and evaluating outcomes.", icon: Brain },
          ]}
        />
      </Section>
      <PageCTA
        description="Use the free diagnostic to identify a starting point, then request RN materials for focused practice, NGN-style review, and guided study."
        primaryHref="/free-diagnostic"
        primaryLabel="Start RN Diagnostic"
        secondaryHref="/request-access?exam=nclex-rn"
        secondaryLabel="Request RN Package"
        title="Choose your next NCLEX-RN study step."
      />
    </>
  );
}
