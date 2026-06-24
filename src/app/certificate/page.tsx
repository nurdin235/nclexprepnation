import { Award, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Request information about the NCLEX Prep Nation preparation completion certificate for candidates who complete selected study activities, diagnostics, and review requirements.";

export const metadata = createPageMetadata({
  title: "NCLEX Preparation Certificate",
  description,
  path: "/certificate",
  keywords: [
    "NCLEX preparation certificate",
    "NCLEX completion certificate",
    "NCLEX prep certificate",
    "NCLEX preparation support certificate",
  ],
});

const certificateDetails = [
  {
    title: "Preparation Activity Record",
    description:
      "The certificate documents completion of selected NCLEX Prep Nation preparation activities, review checkpoints, and study requirements.",
    icon: FileCheck2,
  },
  {
    title: "For RN and PN Candidates",
    description:
      "Candidates preparing for NCLEX-RN or NCLEX-PN pathways in the United States, Canada, or international routes may request details.",
    icon: Award,
  },
  {
    title: "Independent and Educational",
    description:
      "This is not an exam authority document, nursing license, exam score, or approval from NCSBN, Pearson VUE, or any nursing board.",
    icon: ShieldCheck,
  },
];

export default function CertificatePage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/certificate"
        title="NCLEX Preparation Certificate | NCLEX Prep Nation"
      />
      <PageHero
        description="Learn how candidates can request a preparation completion certificate after selected NCLEX Prep Nation study activities, diagnostics, and review steps are completed."
        eyebrow="Preparation certificate"
        imageAlt="Nursing preparation certificate support"
        imageSrc="/images/certificate_support_promo.png"
        primaryHref="/request-access?service=certificate"
        primaryLabel="Request Certificate Details"
        secondaryHref="/faq"
        secondaryLabel="Read Certificate FAQ"
        title="Document your NCLEX preparation completion."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {certificateDetails.map(({ description, icon: Icon, title }) => (
            <Card className="p-6" key={title}>
              <div className="inline-flex rounded-md border border-clinical/15 bg-soft p-3 text-clinical">
                <Icon aria-hidden size={24} />
              </div>
              <h2 className="mt-5 text-xl font-bold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                {description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="mt-8 border-clinical/20 bg-soft p-6 sm:p-8">
          <div className="flex gap-4">
            <CheckCircle2
              aria-hidden
              className="mt-1 shrink-0 text-clinical"
              size={24}
            />
            <div>
              <h2 className="text-xl font-bold text-navy">
                What candidates should know
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                NCLEX Prep Nation can provide direct preparation or completion
                certificates after reviewing your details and confirming the
                appropriate completion path. The certificate confirms
                preparation activity with us and does not replace official exam
                registration, eligibility, licensure, or board requirements.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <PageCTA
        description="Share your exam type, preparation status, and support needs so we can explain the certificate path and recommended next step."
        primaryHref="/request-access?service=certificate"
        primaryLabel="Request Certificate Details"
        secondaryHref="/contact"
        secondaryLabel="Contact Support"
        title="Need certificate guidance?"
      />
    </>
  );
}
