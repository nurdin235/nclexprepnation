import { LegalPage } from "@/components/layout/LegalPage";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn what information NCLEX Prep Nation may collect and how it is used for preparation services, communication, and access management.";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description,
  path: "/privacy-policy",
  keywords: ["NCLEX Prep Nation privacy policy", "NCLEX preparation privacy"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/privacy-policy"
        title="Privacy Policy | NCLEX Prep Nation"
      />
      <LegalPage
        description="Learn what information the platform may collect, why it may be used, and the choices available to users."
        eyebrow="Privacy"
        sections={[
          {
            title: "Information we may collect",
            paragraphs: [
              "The platform may collect names, email addresses, WhatsApp numbers, countries, exam types, preparation details, diagnostic results, practice history, package requests, and contact messages.",
            ],
          },
          {
            title: "How information is used",
            paragraphs: [
              "Information may be used to create accounts, save progress, respond to requests, provide support, confirm package access, and improve learning recommendations and platform performance.",
            ],
          },
          {
            title: "Data sharing",
            paragraphs: [
              "NCLEX Prep Nation does not sell student personal information. Data should be shared only with service providers needed to operate the platform or when required by law.",
            ],
          },
          {
            title: "Data choices",
            paragraphs: [
              "Users may contact the team to request reasonable access, correction, or deletion of their personal information, subject to legal and operational requirements.",
            ],
          },
          {
            title: "Policy updates",
            paragraphs: [
              "This policy may be updated as authentication, analytics, payments, and additional service providers are introduced. Material changes will be reflected on this page.",
            ],
          },
        ]}
        title="Privacy Policy"
      />
    </>
  );
}
