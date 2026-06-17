import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { TrustNotice } from "@/components/layout/TrustNotice";
import { Section } from "@/components/ui/Section";
import { faqTopics } from "@/data/faqs";
import { createPageMetadata } from "@/lib/metadata";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

const description =
  "Find answers to frequently asked questions about preparing with NCLEX Prep Nation, custom study plans, visual rationales, original questions, and access requests.";

export const metadata = createPageMetadata({
  title: "NCLEX Prep FAQ",
  description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        description="Get answers to common questions about our question bank features, NGN case studies, completion certificates, and payment discussion."
        eyebrow="FAQ"
        primaryLabel="Ask About Access"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        title="Frequently Asked Questions"
        imageSrc="/images/nursing_student_hero.png"
        imageAlt="Frequently Asked Questions Study"
      />

      {/* Topics Navigation Index (NCSBN/NCLEX style) */}
      <div className="bg-soft border-b border-line py-8">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <h3 className="text-xs font-black text-navy uppercase tracking-widest mb-4">FAQ Topics</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {faqTopics.map((topic) => (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                className="text-clinical font-bold text-sm hover:underline hover:text-navy transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-clinical" />
                {topic.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Section>
        {/* FAQs Topic-Wise Sections */}
        <div className="space-y-16">
          {faqTopics.map((topic) => (
            <div key={topic.id} id={topic.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-black text-navy border-b border-line pb-3 mb-6 tracking-tight flex items-center gap-2">
                <span className="text-teal font-extrabold">#</span> {topic.title}
              </h2>
              <FAQAccordion items={topic.items} />
              <div className="mt-4 flex justify-end text-xs font-semibold text-clinical hover:underline">
                <a href="#" className="cursor-pointer">Back to Top &uarr;</a>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <TrustNotice />
        </div>
      </Section>

      <PageCTA
        description="Send a package request or contact the team if your question is not answered here."
        primaryLabel="Request Access"
        secondaryHref="/contact"
        secondaryLabel="Contact Support"
        title="Still deciding where to begin?"
      />
    </>
  );
}
