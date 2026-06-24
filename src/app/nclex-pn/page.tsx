import { Activity, Baby, HeartPulse, MessageCircleMore, ShieldCheck, Tablets } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Access NCLEX-PN preparation resources, practice questions, study guides, and structured support for practical nursing candidates preparing for U.S. and Canada pathways.";

export const metadata = createPageMetadata({
  title: "NCLEX-PN Prep Resources",
  description,
  path: "/nclex-pn",
  keywords: ["NCLEX-PN prep", "NCLEX-PN practice questions", "practical nursing exam prep"],
});

export default function NclexPnPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/nclex-pn"
        title="NCLEX-PN Prep Resources"
      />
      <PageHero
        description="Develop practical nursing knowledge and safer decision-making through organized topic review, original practice, and clear rationales for U.S., Canadian, and international PN candidates."
        eyebrow="NCLEX-PN"
        primaryHref="/free-diagnostic"
        primaryLabel="Start PN Diagnostic"
        secondaryHref="/request-access"
        secondaryLabel="Request PN Materials"
        title="Prepare for NCLEX-PN with focused study direction."
        imageSrc="/images/nursing_student_hero.png"
        imageAlt="Practical Nursing Study Session"
      />
      <Section>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">PN preparation areas</h2>
          <p className="mt-3 leading-7 text-muted">
            Build confidence across coordinated care, safety, pharmacology,
            psychosocial integrity, and common health needs.
          </p>
        </div>
        <InfoGrid
          items={[
            { title: "Coordinated Care", description: "Review assignments, communication, scope, and continuity of care.", icon: MessageCircleMore },
            { title: "Safety", description: "Practice infection prevention, environmental safety, and risk reduction.", icon: ShieldCheck },
            { title: "Pharmacological Therapies", description: "Review medication administration, monitoring, and client teaching.", icon: Tablets },
            { title: "Basic Care and Comfort", description: "Strengthen practical nursing actions that support daily client needs.", icon: HeartPulse },
            { title: "Health Promotion", description: "Review prevention, development, maternity, and pediatric considerations.", icon: Baby },
            { title: "Physiological Adaptation", description: "Practice recognizing changes and responding within the practical nurse role.", icon: Activity },
          ]}
        />
      </Section>
      <PageCTA
        description="Start with a topic check or request PN study materials, practice questions, and an organized study plan."
        primaryHref="/free-diagnostic"
        primaryLabel="Start PN Diagnostic"
        secondaryHref="/request-access?exam=nclex-pn"
        secondaryLabel="Request PN Package"
        title="Prepare with a focused NCLEX-PN plan."
      />
    </>
  );
}
