import { MailCheck, MessageCircle, ShieldCheck } from "lucide-react";

import { RequestAccessForm } from "@/components/forms/RequestAccessForm";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Request NCLEX Prep Nation materials, certificate details, score improvement support, Premium access, or Guided Support.";

export const metadata = createPageMetadata({
  title: "Request NCLEX Prep Access",
  description,
  path: "/request-access",
});

export default function RequestAccessPage() {
  return (
    <>
      <PageHero
        description="Tell us what you are preparing for and which service interests you. The team will follow up through your preferred contact method."
        eyebrow="Request access"
        primaryHref="#request-form"
        primaryLabel="Complete the Form"
        title="Request your preparation package."
      />
      <Section id="request-form">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="p-6 sm:p-8">
            <RequestAccessForm />
          </Card>

          <aside className="space-y-5">
            <Card className="p-6">
              <MailCheck aria-hidden className="text-clinical" size={25} />
              <h2 className="mt-4 font-bold text-navy text-base">
                How the request process works
              </h2>
              <ol className="mt-4 space-y-3.5 text-xs leading-5 text-muted">
                <li>
                  <strong className="text-navy">1. Choose service or package:</strong> select which support fits your current prep needs.
                </li>
                <li>
                  <strong className="text-navy">2. Submit your request:</strong> fill out the form with your correct details.
                </li>
                <li>
                  <strong className="text-navy">3. Team outreach:</strong> our team contacts you by WhatsApp or email.
                </li>
                <li>
                  <strong className="text-navy">4. Access confirmation:</strong> access is confirmed after payment discussion.
                </li>
              </ol>
            </Card>
            <Card className="p-6">
              <MessageCircle aria-hidden className="text-teal" size={25} />
              <h2 className="mt-4 font-bold text-navy text-base">Direct Contact Details</h2>
              <p className="mt-3 text-xs leading-5 text-muted">
                Have questions before submitting your request? Connect with us directly:
              </p>
              <div className="mt-4 space-y-2 text-xs">
                <p>
                  <span className="font-semibold text-navy">General Support:</span>{" "}
                  <a className="text-clinical hover:underline" href={`mailto:${siteConfig.emails.support}`}>
                    {siteConfig.emails.support}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Study Materials:</span>{" "}
                  <a className="text-clinical hover:underline" href={`mailto:${siteConfig.emails.materials}`}>
                    {siteConfig.emails.materials}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Certificate program:</span>{" "}
                  <a className="text-clinical hover:underline" href={`mailto:${siteConfig.emails.certificate}`}>
                    {siteConfig.emails.certificate}
                  </a>
                </p>
              </div>
            </Card>
            <Card className="p-6">
              <ShieldCheck aria-hidden className="text-success" size={25} />
              <h2 className="mt-4 font-bold text-navy text-base">Content Integrity</h2>
              <p className="mt-3 text-xs leading-5 text-muted">
                NCLEX Prep Nation provides original educational preparation
                materials. We do not provide real or leaked NCLEX exam questions.
              </p>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
