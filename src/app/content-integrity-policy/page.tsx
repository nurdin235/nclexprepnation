import { LegalPage } from "@/components/layout/LegalPage";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn how NCLEX Prep Nation approaches original questions, ethical exam preparation, content review, corrections, and updates.";

export const metadata = createPageMetadata({
  title: "Content Integrity Policy",
  description,
  path: "/content-integrity-policy",
  noIndex: true,
});

export default function ContentIntegrityPolicyPage() {
  return (
    <LegalPage
      description="Our content standards are designed to support ethical preparation, original learning materials, and responsible review."
      eyebrow="Content standards"
      sections={[
        {
          title: "Original materials",
          paragraphs: [
            "Questions, rationales, study guides, NGN-style case studies, and mock exams are created as original educational preparation materials.",
          ],
        },
        {
          title: "No real or leaked questions",
          paragraphs: [
            "NCLEX Prep Nation does not provide, sell, request, or claim access to real NCLEX exam questions, leaked questions, exam dumps, or content obtained through unethical means.",
          ],
        },
        {
          title: "Review process",
          paragraphs: [
            "Content should move through drafting, nursing accuracy review, grammar review, originality checks, and approval before publication.",
          ],
        },
        {
          title: "Corrections and reports",
          paragraphs: [
            "Students will be able to report unclear or potentially inaccurate content. Reports should be reviewed, documented, corrected when needed, and used to improve the question bank.",
          ],
        },
        {
          title: "Ethical preparation",
          paragraphs: [
            "The goal is to build knowledge, clinical judgment, and exam readiness through structured study rather than shortcuts or misleading claims.",
          ],
        },
      ]}
      title="Content Integrity Policy"
    />
  );
}
