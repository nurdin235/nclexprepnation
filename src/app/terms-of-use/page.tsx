import { LegalPage } from "@/components/layout/LegalPage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Review the educational use, account responsibility, package access, intellectual property, and acceptable use terms for NCLEX Prep Nation.";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description,
  path: "/terms-of-use",
  keywords: ["NCLEX Prep Nation terms", "NCLEX prep terms of use"],
});

export default function TermsOfUsePage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/terms-of-use"
        title="Terms of Use | NCLEX Prep Nation"
      />
      <LegalPage
        description="These terms describe responsible use of NCLEX Prep Nation materials, services, support channels, and future account features."
        eyebrow="Terms"
        sections={[
          {
            title: "Educational use",
            paragraphs: [
              "NCLEX Prep Nation materials are provided for educational and exam preparation purposes. They do not replace official exam information, nursing school instruction, or professional guidance.",
            ],
          },
          {
            title: "Account responsibilities",
            paragraphs: [
              "Users must provide accurate information, protect their login credentials, and use the platform only through their authorized access level.",
            ],
          },
          {
            title: "Package access",
            paragraphs: [
              "Paid access and digital materials are provided after package and payment confirmation. Access limits, duration, and included resources may vary by package.",
            ],
          },
          {
            title: "Intellectual property",
            paragraphs: [
              "Users may not copy, resell, scrape, publicly share, or redistribute proprietary questions, rationales, study guides, or paid materials.",
            ],
          },
          {
            title: "Prohibited use and outcomes",
            paragraphs: [
              "Users must not attempt unauthorized access, submit false payment information, or misuse support channels. The platform does not guarantee exam results.",
            ],
          },
        ]}
        title="Terms of Use"
      />
    </>
  );
}
