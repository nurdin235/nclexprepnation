import { Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Contact NCLEX Prep Nation by support email, WhatsApp, or the inquiry form for packages, materials, access, and preparation questions.";

export const metadata = createPageMetadata({
  title: "Contact NCLEX Prep Nation",
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        description="Reach out for package guidance, access questions, or help deciding which preparation path fits your current needs."
        eyebrow="Contact"
        primaryLabel="Request Access"
        secondaryHref="/faq"
        secondaryLabel="Read FAQs"
        title="Talk with the NCLEX Prep Nation team."
        imageSrc="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80"
        imageAlt="Student Studying with Computer and Phone"
      />
      <Section>
        <InfoGrid
          items={[
            { title: "General Support", description: siteConfig.emails.support, icon: Mail },
            { title: "Study Materials", description: siteConfig.emails.materials, icon: Mail },
            { title: "Certificate program", description: siteConfig.emails.certificate, icon: Mail },
          ]}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-navy">
              Send a general inquiry
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Use this form to send general questions. The team will follow up through your preferred contact method.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Card>
          <Card className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-navy">Direct channels</h2>
            <p className="mt-3 text-sm leading-7 text-muted font-semibold text-clinical">
              WhatsApp Support
            </p>
            <p className="mt-1 text-xs text-muted">
              Connect directly via WhatsApp for quick questions or package discussion.
            </p>
            <div className="mt-4">
              <Button href={getWhatsAppHref()} variant="whatsapp" className="w-full">
                <MessageCircle size={16} />
                Contact Us on WhatsApp
              </Button>
            </div>
            <div className="mt-8 border-t border-line pt-6 space-y-4">
              <h3 className="font-bold text-navy text-sm">Targeted Email Inquiries</h3>
              <div className="space-y-3 text-xs leading-5">
                <p>
                  <span className="font-semibold text-navy">General questions:</span>{" "}
                  <a className="text-clinical hover:underline" href={`mailto:${siteConfig.emails.support}`}>
                    {siteConfig.emails.support}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-navy">Study materials:</span>{" "}
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
            </div>
            <div className="mt-6 border-t border-line pt-4 flex flex-col gap-2">
              <Button href="/faq" variant="ghost" className="text-xs justify-start px-2">
                Read FAQs
              </Button>
              <Button href="/request-access" variant="ghost" className="text-xs justify-start px-2">
                Request Access
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
