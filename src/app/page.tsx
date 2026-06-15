import { NcsbnHero } from "@/components/home/NcsbnHero";
import { WhatWeOffer } from "@/components/home/WhatWeOffer";
import { WhyNclexPrepNation } from "@/components/home/WhyNclexPrepNation";
import { NcsbnPathways } from "@/components/home/NcsbnPathways";
import { NcsbnNews } from "@/components/home/NcsbnNews";
import { NcsbnPreFooter } from "@/components/home/NcsbnPreFooter";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <NcsbnHero />
      <WhatWeOffer />
      <WhyNclexPrepNation />
      <NcsbnPathways />
      
      {/* Testimonials section on home page */}
      <Section className="bg-white py-16 sm:py-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-navy tracking-tight leading-tight">
              What Our Candidates Say
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-6">
              Hear directly from nursing graduates who used NCLEX Prep Nation to pass their RN or PN exams. Verified screenshots from candidate chat logs.
            </p>
          </div>
          <TestimonialCarousel />
          <div className="mt-8 text-center">
            <Button href="/testimonials" variant="outline" className="text-xs">
              View All Reviews
            </Button>
          </div>
        </div>
      </Section>

      <NcsbnNews />
      <NcsbnPreFooter />
    </>
  );
}



