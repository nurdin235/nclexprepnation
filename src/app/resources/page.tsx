import {
  Beaker,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  ClipboardList,
  FileText,
  HeartPulse,
} from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Explore NCLEX study guides, PDF materials, lab values, pharmacology, prioritization, exam-day, and NGN preparation resources.";

export const metadata = createPageMetadata({
  title: "Exam Prep Materials",
  description,
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        description="Use organized guides, checklists, and topic summaries to support a more consistent NCLEX-RN or NCLEX-PN study routine."
        eyebrow="Study resources"
        primaryLabel="Request Study Materials"
        secondaryHref="/practice-questions"
        secondaryLabel="Practice Questions"
        title="Focused resources for the topics that matter."
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
        imageAlt="Student Nurse Studying Books and Guidelines"
      />
      <Section>
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy">Resource library preview</h2>
          <p className="mt-3 leading-7 text-muted">
            Free and package-based resources will be clearly labeled as the
            content library grows.
          </p>
        </div>
        <InfoGrid
          items={[
            { title: "Study Guides and PDFs", description: "Downloadable topic summaries and structured review materials for flexible preparation.", icon: FileText },
            { title: "Pharmacology Guide", description: "Medication classes, safety priorities, adverse effects, and nursing monitoring.", icon: Beaker },
            { title: "Lab Values Guide", description: "Focused lab interpretation guides and review prompts for common exam contexts.", icon: ClipboardList },
            { title: "Prioritization Guide", description: "ABCs, safety, stability, nursing process, and delegation review tools.", icon: HeartPulse },
            { title: "Study Plans", description: "Structured 7-day, 30-day, and longer review pathways for different schedules.", icon: CalendarDays },
            { title: "Exam Day Checklist", description: "A practical checklist for official requirements, logistics, and calm preparation.", icon: CalendarCheck },
            { title: "NGN Guide", description: "Case-based reasoning guides organized around the clinical judgment process.", icon: BookOpen },
          ]}
        />
        <p className="mt-8 text-sm leading-7 text-muted">
          Materials questions can be sent to{" "}
          <a
            className="font-semibold text-clinical hover:underline"
            href={`mailto:${siteConfig.emails.materials}`}
          >
            {siteConfig.emails.materials}
          </a>
          .
        </p>
      </Section>
      <PageCTA
        description="Tell us your exam type and current study needs so the team can recommend a suitable resource package."
        primaryHref="/request-access?service=materials"
        primaryLabel="Request Study Materials"
        secondaryHref="/practice-questions"
        secondaryLabel="View Practice Questions"
        title="Find the right materials for your study plan."
      />
    </>
  );
}
