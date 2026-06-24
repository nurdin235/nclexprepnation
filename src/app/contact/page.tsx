import { Mail, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { InfoGrid } from "@/components/layout/InfoGrid";
import { PageHero } from "@/components/layout/PageHero";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Contact NCLEX Prep Nation by email, WhatsApp, or inquiry form for NCLEX-RN and NCLEX-PN packages, materials, access, and preparation questions.";

export const metadata = createPageMetadata({
  title: "Contact NCLEX Prep Nation",
  description,
  path: "/contact",
  keywords: ["contact NCLEX prep support", "NCLEX prep WhatsApp support"],
});

export default function ContactPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/contact"
        title="Contact NCLEX Prep Nation"
      />
      <PageHero
        description="Reach out for package guidance, access questions, or help deciding which preparation path fits your NCLEX-RN or NCLEX-PN needs."
        eyebrow="Contact"
        primaryLabel="Request Access"
        secondaryHref="/faq"
        secondaryLabel="Read FAQs"
        title="Talk with the NCLEX Prep Nation team."
        imageSrc="/images/nursing_care_hero.png"
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
            <div className="mt-6 border-t border-line pt-4">
              <h3 className="font-bold text-navy text-xs mb-3">Connect on Social</h3>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-soft border border-line text-navy hover:bg-clinical hover:text-white hover:border-clinical transition-all"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-soft border border-line text-navy hover:bg-clinical hover:text-white hover:border-clinical transition-all"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.81.055.973.044 1.5.206 1.85.342.463.18.795.394 1.144.743.349.349.562.68.743 1.144.136.35.298.877.342 1.85.047 1.026.055 1.38.055 3.81s-.008 2.784-.055 3.81c-.044.973-.206 1.5-.342 1.85a3.197 3.197 0 01-.743 1.144 3.197 3.197 0 01-1.144.743c-.35.136-.877.298-1.85.342-1.026.047-1.38.055-3.81.055s-2.784-.008-3.81-.055c-.973-.044-1.5-.206-1.85-.342a3.197 3.197 0 01-1.144-.743 3.197 3.197 0 01-.743-1.144c-.136-.35-.298-.877-.342-1.85C2.008 15.025 2 14.67 2 12s.008-2.784.055-3.81c.044-.973.206-1.5.342-1.85a3.197 3.197 0 01.743-1.144 3.197 3.197 0 011.144-.743c.35-.136.877-.298 1.85-.342 1.026-.047 1.38-.055 3.81-.055zm-1.11 1.751c-2.33.008-2.6.018-3.516.06-.88.04-1.353.186-1.671.31-.421.164-.722.36-.1.037-.714a2.232 2.232 0 00-1.037 1.037c-.124.318-.27.79-.31 1.67-.042.917-.052 1.187-.06 3.517v.75c.008 2.33.018 2.6.06 3.516.04.88.186 1.353.31 1.671.164.421.36.722.714 1.037.318.318.682.524 1.037.714.318.124.79.27 1.67.31.917.042 1.187.052 3.517.06h.75c2.33-.008 2.6-.018 3.516-.06.88-.04 1.353-.186 1.671-.31a2.232 2.232 0 001.037-1.037c.124-.318.27-.79.31-1.67.042-.917.052-1.187.06-3.517v-.75c-.008-2.33-.018-2.6-.06-3.516-.04-.88-.186-1.353-.31-1.671a2.232 2.232 0 00-1.037-1.037c-.318-.124-.79-.27-1.67-.31-.917-.042-1.187-.052-3.517-.06h-.75zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm6.487-11.595a1.102 1.102 0 11-2.204 0 1.102 1.102 0 012.204 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-soft border border-line text-navy hover:bg-clinical hover:text-white hover:border-clinical transition-all"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.72-.01 2.92-.01 5.84-.02 8.75-.1 1.6-.54 3.18-1.46 4.47-1.09 1.54-2.82 2.63-4.7 2.95-2.01.39-4.15-.22-5.66-1.57A8.69 8.69 0 0 1 3.6 15.65c-.1-2.36.98-4.73 2.8-6.25 1.63-1.37 3.82-1.95 5.92-1.57V12c-1.17-.18-2.4.14-3.26.96-.83.78-1.2 1.99-1 3.11.16 1.05.86 1.99 1.83 2.43.95.45 2.11.4 3.01-.13.92-.53 1.48-1.54 1.56-2.6.02-3.89.02-7.78.02-11.67-.01-1.35.01-2.7-.02-4.05z" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
