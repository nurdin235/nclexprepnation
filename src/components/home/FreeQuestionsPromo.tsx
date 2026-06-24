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
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2e3e4f] tracking-tight">
          Get NCLEX Practice Questions
        </h2>

        {/* Subtitle Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          Experience the high-yield questions and detailed clinical rationales that help nursing candidates prepare effectively for their exam day.
        </p>

        {/* Primary Action Button */}
        <div className="mt-6">
          <Button
            href="/free-diagnostic"
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#bf5137] text-white hover:bg-[#a5442e] px-8 py-3 text-sm font-bold transition-colors duration-200"
          >
            Start Practice
          </Button>
        </div>
      </div>
    </section>
  );
}
