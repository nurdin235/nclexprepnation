import { Check, HelpCircle } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { prepPackages } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const description =
  "Compare NCLEX prep packages for study materials, practice questions, NGN case studies, diagnostic review, and guided support for U.S. and Canada candidates.";

export const metadata = createPageMetadata({
  title: "NCLEX Exam Prep Materials",
  description,
  path: "/packages",
  keywords: ["NCLEX prep packages", "NCLEX exam prep materials", "NCLEX guided support"],
});

const packageFaqs = [
  {
    q: "Is there an online checkout system?",
    a: "No. Access is requested manually. After you fill out the request form, our team will connect with you via WhatsApp or email to discuss details and finalize setup.",
  },
  {
    q: "How do I make a payment?",
    a: "After discussing your needs, we will send payment instructions directly to you on WhatsApp or email. Once payment is confirmed, access is granted manually.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Yes, you can upgrade from Starter to Premium or Guided Support at any time by speaking with our team.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/packages"
        title="NCLEX Exam Prep Materials"
      />
      <PageHero
        description="Compare preparation options and select the level of structure and study support that fits your current NCLEX-RN or NCLEX-PN needs."
        eyebrow="Packages"
        primaryLabel="Send Package Request"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
        title="Preparation options for different study needs."
        imageSrc="/images/nursing_student_hero.png"
        imageAlt="NCLEX Prep Packages Comparison"
      />
      <Section>
        {/* Packages Flex Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {prepPackages.map((item) => (
            <Card
              className={cn(
                "flex w-full sm:w-[320px] md:w-[340px] flex-col p-6 sm:p-8 bg-white border border-line rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group",
                item.featured && "border-clinical ring-1 ring-clinical bg-soft/10",
              )}
              key={item.slug}
            >
              {/* Colored top visual bar on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-clinical to-teal opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-navy">{item.name}</h2>
                {item.featured ? (
                  <Badge className="bg-teal text-white border-none text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                    Popular
                  </Badge>
                ) : null}
              </div>
              <p className="mt-4 text-3xl font-black text-clinical">
                {item.price}
              </p>
              <p className="mt-2 text-xs font-bold text-teal">
                Best for: {item.bestFor}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">
                {item.description}
              </p>
              
              <ul className="mt-6 space-y-3 border-t border-line pt-5 flex-1">
                {item.features.map((feature) => (
                  <li className="flex gap-2.5 text-xs text-navy font-semibold" key={feature}>
                    <Check
                      aria-hidden
                      className="mt-0.5 shrink-0 text-emerald-600 stroke-[3]"
                      size={14}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="mt-8 w-full text-xs font-bold py-3"
                href={
                  item.slug === "free"
                    ? "/free-diagnostic"
                    : `/request-access?package=${item.slug}`
                }
                variant={item.slug === "free" ? "outline" : "gold"}
              >
                {item.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Manual request note */}
        <Card className="mt-10 border-clinical/20 bg-soft p-6 sm:p-8">
          <h2 className="font-bold text-navy text-lg">How package access works</h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-muted">
            Payments are handled through a manual request process. After
            submitting a request, our team will contact you by WhatsApp or email
            with package details, payment instructions, and access confirmation.
            There is no automated checkout or instant card charge. Direct questions can be sent to{" "}
            <a
              className="font-semibold text-clinical hover:underline"
              href={`mailto:${siteConfig.emails.support}`}
            >
              {siteConfig.emails.support}
            </a>
            .
          </p>
        </Card>

        {/* Package FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-navy text-center mb-8">Packages FAQ</h2>
          <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {packageFaqs.map((faq) => (
              <div className="py-5 flex gap-4" key={faq.q}>
                <HelpCircle className="text-clinical shrink-0 mt-1" size={18} />
                <div>
                  <h3 className="font-bold text-navy text-sm">{faq.q}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <PageCTA
        description="Share your exam type and study needs before confirming a package. There is no automated checkout in this phase."
        primaryLabel="Send Package Request"
        secondaryHref={`mailto:${siteConfig.emails.support}`}
        secondaryLabel="Email Support"
        title="Need help choosing a package?"
      />
    </>
  );
}
