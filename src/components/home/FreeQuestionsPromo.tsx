"use client";

import { Button } from "@/components/ui/Button";

export function FreeQuestionsPromo() {
  return (
    <section className="bg-[#fdf0ea] py-16 sm:py-20 border-b border-line relative overflow-hidden">
      {/* Subtle decorative blurs for premium appearance */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full filter blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#bf5137]/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Main Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2e3e4f] tracking-tight leading-tight">
          Get NCLEX Practice Questions
        </h2>

        {/* Thick accent divider under title */}
        <div className="mx-auto mt-4 h-1.5 w-14 rounded bg-[#bf5137]" />

        {/* Subtitle Description */}
        <p className="mt-6 text-base sm:text-lg text-[#556779] font-semibold max-w-2xl mx-auto leading-relaxed">
          Experience the rationales that help 98% of NCLEX Prep Nation candidates pass the first time.
        </p>

        {/* Primary Action Button */}
        <div className="mt-8">
          <Button
            href="/free-diagnostic"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#bf5137] text-white hover:bg-[#a5442e] hover:border-[#a5442e] border-none px-10 py-4 text-base font-extrabold shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
}
