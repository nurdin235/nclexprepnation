import { Award, CheckSquare, FileCheck2 } from "lucide-react";

import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Learn about the NCLEX Prep Nation course and preparation completion certificate, eligibility activities, and important credential limitations.";

export const metadata = createPageMetadata({
  title: "Certificate Program",
  description,
  path: "/certificate",
});

export default function CertificatePage() {
  return (
    <>
      <PageHero
        description="NCLEX Prep Nation may issue a course/preparation completion certificate to students who complete selected preparation activities."
        eyebrow="Certificate program"
        primaryHref="/request-access?service=certificate"
        primaryLabel="Request Certificate Details"
        secondaryHref={`mailto:${siteConfig.emails.certificate}`}
        secondaryLabel="Email Certificate Support"
        title="Document your preparation program completion."
        imageSrc="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
        imageAlt="Professional Certification Document Study"
      />

      <Section>
        <div className="mb-10 max-w-4xl space-y-4">
          <h2 className="text-3xl font-bold text-navy">
            A preparation completion certificate
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            NCLEX Prep Nation may issue a course/preparation completion certificate to students who complete selected preparation activities on the platform.
          </p>
          <p className="text-sm leading-7 text-muted">
            This certificate shows that the student participated in and completed NCLEX Prep Nation preparation activities such as study resources, practice questions, mock exams, or guided support tasks.
          </p>
          <p className="text-sm leading-7 text-muted font-semibold border-l-3 border-clinical bg-soft px-4 py-3">
            This certificate is not an official NCLEX certificate. It is not issued by NCSBN, Pearson VUE, or any nursing regulatory body. It does not replace NCLEX registration, eligibility, licensing requirements, or official exam results.
          </p>
        </div>
        <InfoGrid
          items={[
            {
              title: "Selected activities",
              description:
                "Eligibility may include completing assigned preparation modules, practice work, or guided review activities.",
              icon: CheckSquare,
            },
            {
              title: "Completion record",
              description:
                "The certificate records participation in an NCLEX Prep Nation preparation pathway.",
              icon: FileCheck2,
            },
            {
              title: "Clear limitations",
              description:
                "It is not a nursing license, exam result, official NCLEX credential, or proof of regulatory eligibility.",
              icon: Award,
            },
          ]}
        />
        <div className="mt-8">
          <TrustNotice
            text={`Certificate questions can be sent to ${siteConfig.emails.certificate}. Official exam and licensing requirements must be confirmed with the relevant nursing regulator and official NCLEX sources.`}
            title="Certificate clarification"
          />
        </div>
      </Section>

      <PageCTA
        description="Ask which preparation activities are included and what must be completed before a certificate may be issued."
        primaryHref="/request-access?service=certificate"
        primaryLabel="View Certificate Program"
        secondaryHref={`mailto:${siteConfig.emails.certificate}`}
        secondaryLabel="Email Certificate Support"
        title="Need the completion requirements?"
      />
    </>
  );
}
