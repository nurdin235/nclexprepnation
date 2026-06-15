import { Activity, Baby, HeartPulse, MessageCircleMore, ShieldCheck, Tablets } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Prepare for NCLEX-PN with practical nursing study plans, original practice questions, topic resources, and a clear package request process.";

export const metadata = createPageMetadata({
  title: "NCLEX-PN Prep",
  description,
  path: "/nclex-pn",
});

export default function NclexPnPage() {
  return (
    <>
      <PageHero
        description="Develop practical nursing knowledge and safer decision-making through organized topic review, original practice, and clear rationales."
        eyebrow="NCLEX-PN"
        primaryHref="/free-diagnostic"
        primaryLabel="Start PN Diagnostic"
        secondaryHref="/request-access"
        secondaryLabel="Request PN Materials"
        title="Prepare for NCLEX-PN with focused study direction."
        imageSrc="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80"
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
