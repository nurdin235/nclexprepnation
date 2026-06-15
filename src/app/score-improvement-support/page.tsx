import { BookCheck, ChartNoAxesCombined, ClipboardList, ListChecks, MessageCircleMore, Target } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Get structured NCLEX score improvement support focused on weak areas, mistake review, better practice habits, and stronger preparation confidence.";

export const metadata = createPageMetadata({
  title: "Score Improvement Support",
  description,
  path: "/score-improvement-support",
});

export default function ScoreImprovementSupportPage() {
  return (
    <>
      <PageHero
        description="Score Improvement Support helps students review weak areas, understand mistakes, practice with better structure, and prepare with more confidence. It does not change official exam scores."
        eyebrow="Preparation support"
        primaryHref="/request-access?service=score-improvement"
        primaryLabel="Request Score Improvement Support"
        secondaryHref={getWhatsAppHref()}
        secondaryLabel="Contact Us on WhatsApp"
        title="Turn weak areas into a focused review plan."
      />

      <Section>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">
            Support for a stronger preparation process
          </h2>
          <p className="mt-3 leading-7 text-muted">
            The focus is on how you study, review, and respond to mistakes
            before test day. Recommendations are educational and tailored to
            the preparation information you share.
          </p>
        </div>
        <InfoGrid
          columns={3}
          items={[
            {
              title: "Weak-topic review",
              description:
                "Organize review around topics and clinical scenarios that need the most immediate attention.",
              icon: Target,
            },
            {
              title: "Mistake analysis",
              description:
                "Use rationales to understand why an answer was missed and dissect incorrect answer choices.",
              icon: BookCheck,
            },
            {
              title: "Guided practice direction",
              description:
                "Apply test-taking frameworks and build structured guidelines for daily question practice.",
              icon: ListChecks,
            },
            {
              title: "Mock exam review",
              description:
                "Analyze full practice scores to assess readiness, stamina, and timing patterns.",
              icon: ChartNoAxesCombined,
            },
            {
              title: "WhatsApp support",
              description:
                "Stay connected with our prep team for direct check-ins, reminders, and study motivation.",
              icon: MessageCircleMore,
            },
            {
              title: "Structured preparation plan",
              description:
                "Build a practical schedule mapping out topic study, daily questions, and review steps.",
              icon: ClipboardList,
            },
          ]}
        />
        <div className="mt-8">
          <TrustNotice
            text="This service supports preparation only. It cannot alter, appeal, replace, or guarantee any official NCLEX result."
            title="Important score clarification"
          />
        </div>
      </Section>

      <PageCTA
        description="Share your exam type, current challenges, and preferred contact method so the team can recommend a practical support path."
        primaryHref="/request-access?service=score-improvement"
        primaryLabel="Request Support"
        secondaryHref={getWhatsAppHref()}
        secondaryLabel="Contact Us on WhatsApp"
        secondaryVariant="whatsapp"
        title="Ready for a more focused review plan?"
      />
    </>
  );
}
