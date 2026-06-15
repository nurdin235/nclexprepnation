import { ShieldCheck, MessageSquare } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";

const description =
  "Read authentic, verified student reviews and WhatsApp chat screenshots from candidates who passed their NCLEX-RN and NCLEX-PN exams using NCLEX Prep Nation.";

export const metadata = createPageMetadata({
  title: "Student Testimonials",
  description,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        description="Review real feedback, study progress logs, and WhatsApp chat screenshot reviews from candidates who prepared with NCLEX Prep Nation."
        eyebrow="Testimonials"
        primaryHref="/request-access"
        primaryLabel="Explore Preparation Options"
        secondaryHref="/about"
        secondaryLabel="About the Platform"
        title="Candidate success stories & verified reviews."
        imageSrc="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
        imageAlt="Nurses smiling and celebrating together"
      />
      <Section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-line pb-6 mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
                Verified Candidate Success Stories
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Over 20+ active nursing candidate reviews, including direct WhatsApp chat screenshots.
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-800 shrink-0">
              <ShieldCheck size={16} className="text-emerald-700" />
              <span>100% Real, Verified Feedback Only</span>
            </div>
          </div>

          <TestimonialCarousel />
        </div>
      </Section>
      <PageCTA
        description="Choose the package that matches your preparation needs and start your path toward joining our successful candidates."
        primaryHref="/packages"
        primaryLabel="View Packages"
        secondaryHref="/free-diagnostic"
        secondaryLabel="Start Free Diagnostic"
        title="Ready to write your own success story?"
      />
    </>
  );
}
