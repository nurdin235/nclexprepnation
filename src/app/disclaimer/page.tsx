import { LegalPage } from "@/components/layout/LegalPage";
import { contentIntegrityStatement } from "@/data/site";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Read the NCLEX Prep Nation educational purpose, content integrity, and results disclaimers.";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/disclaimer"
        title="Disclaimer"
      />
      <LegalPage
        description="Important information about our educational materials, content integrity, and preparation guidelines."
        eyebrow="Legal"
        sections={[
          {
            title: "Original educational content",
            paragraphs: [contentIntegrityStatement],
          },
          {
            title: "No guarantee",
            paragraphs: [
              "NCLEX Prep Nation provides study tools and preparation support but does not guarantee a passing result. Exam outcomes depend on each candidate's preparation, eligibility, knowledge, performance, and exam conditions.",
            ],
          },
          {
            title: "Official information",
            paragraphs: [
              "Candidates should use official NCLEX, NCSBN, Pearson VUE, and nursing regulatory body sources for registration, eligibility, scheduling, test plans, rules, and current policies.",
            ],
          },
        ]}
        title="Disclaimer"
      />
    </>
  );
}
