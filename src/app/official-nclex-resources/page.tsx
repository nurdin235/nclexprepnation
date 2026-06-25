import { ExternalLink, Landmark } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Find source links for NCLEX test plans, registration, scheduling, eligibility, and exam-day rules from the organizations that administer or publish exam information.";

export const metadata = createPageMetadata({
  title: "NCLEX Resource Links",
  description,
  path: "/official-nclex-resources",
});

const officialResources = [
  {
    title: "NCLEX Candidate Information",
    description:
      "Review exam information, registration guidance, exam-day information, results guidance, and FAQs from the source.",
    href: "https://www.nclex.com/",
  },
  {
    title: "NCLEX Test Plans",
    description:
      "Access the current official RN and PN test plans and information about exam content and clinical judgment.",
    href: "https://www.nclex.com/test-plans.page",
  },
  {
    title: "Prepare for the NCLEX",
    description:
      "Review official preparation resources and candidate information before your exam appointment.",
    href: "https://www.nclex.com/prepare.page",
  },
  {
    title: "NCSBN Exams",
    description:
      "Learn about NCSBN examinations, registration steps, test plans, and nursing regulatory requirements.",
    href: "https://www.ncsbn.org/exams.page",
  },
  {
    title: "Pearson VUE NCLEX",
    description:
      "Use Pearson VUE for official registration, scheduling, testing location, and candidate service information.",
    href: "https://www.pearsonvue.com/us/en/nclex.html",
  },
];

export default function OfficialNclexResourcesPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/official-nclex-resources"
        title="NCLEX Resource Links"
      />
      <PageHero
        description="Use official sources for registration, eligibility, scheduling, test plans, exam-day rules, and official exam information."
        eyebrow="Official resources"
        primaryHref="/practice-questions"
        primaryLabel="Explore Preparation Tools"
        secondaryHref="/faq"
        secondaryLabel="Read FAQ"
        title="Verify important NCLEX information at the source."
        imageSrc="/images/nursing_care_hero.png"
      />
      <Section>
        <Card className="mb-8 flex gap-4 border-clinical/20 bg-soft p-6">
          <Landmark
            aria-hidden
            className="mt-0.5 shrink-0 text-clinical"
            size={25}
          />
          <div>
            <h2 className="font-bold text-navy">Official sources guide</h2>
            <p className="mt-2 text-sm leading-7 text-muted">
              The links below lead directly to the organizations responsible for exam
              information, scheduling, and administration.
            </p>
          </div>
        </Card>

        <div className="grid gap-5 md:grid-cols-2">
          {officialResources.map((resource) => (
            <a
              className="rounded-lg border border-line bg-white p-6 transition-colors hover:border-clinical"
              href={resource.href}
              key={resource.title}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-bold text-navy">{resource.title}</h2>
                <ExternalLink
                  aria-hidden
                  className="shrink-0 text-clinical"
                  size={18}
                />
              </div>
              <p className="mt-3 text-sm leading-7 text-muted">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </Section>
      <PageCTA
        description="Use source links for exam administration details and NCLEX Prep Nation to begin your study preparation."
        primaryHref="/resources"
        primaryLabel="View Prep Materials"
        secondaryHref="/faq"
        secondaryLabel="Read FAQ"
        title="Separate official requirements from study support."
      />
    </>
  );
}
