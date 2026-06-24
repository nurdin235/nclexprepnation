import { LegalPage } from "@/components/layout/LegalPage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Review the NCLEX Prep Nation refund review process for manually confirmed packages, digital materials, and guided support.";

export const metadata = createPageMetadata({
  title: "Refund Policy",
  description,
  path: "/refund-policy",
  keywords: ["NCLEX Prep Nation refund policy", "NCLEX prep package refund"],
});

export default function RefundPolicyPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/refund-policy"
        title="Refund Policy | NCLEX Prep Nation"
      />
      <LegalPage
        description="This policy explains how refund requests for manually confirmed packages, digital materials, and guided support are reviewed."
        eyebrow="Refunds"
        sections={[
          {
            title: "Requesting a review",
            paragraphs: [
              "Students should contact support with their name, package, payment details, and reason for the request. Each request will be reviewed according to the package type and delivery status.",
            ],
          },
          {
            title: "Digital materials and access",
            paragraphs: [
              "Because digital resources and question bank access may be delivered immediately after payment confirmation, some payments may be non-refundable after access has been granted or materials have been sent.",
            ],
          },
          {
            title: "Guided support",
            paragraphs: [
              "Refund eligibility for guided support may depend on sessions, reviews, plans, or other support already delivered or scheduled.",
            ],
          },
          {
            title: "Manual decision and notice",
            paragraphs: [
              "Approved refunds will be recorded by the team and processed through an agreed method. The student will receive a written confirmation of the decision.",
            ],
          },
          {
            title: "Package-specific terms",
            paragraphs: [
              "Package-specific terms, timeframes, currencies, and delivery conditions will be provided before payment confirmation. Students should review those details before proceeding.",
            ],
          },
        ]}
        title="Refund Policy"
      />
    </>
  );
}
