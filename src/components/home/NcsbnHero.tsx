import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NcsbnHero() {
  return (
    <section className="relative overflow-hidden bg-white text-navy min-h-[520px] flex items-center border-b border-line">
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <Image
          src="/images/nursing_care_hero.webp"
          alt="Nursing Care Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <Image
          src="/images/medical-globe-hero.webp"
          alt="Medical Globe Overlay"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-white/20" />

      {/* Mobile-only white overlay to ensure dark text is readable on tiny viewports */}
      <div className="absolute inset-0 bg-white/70 lg:hidden z-[5]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy leading-tight">
            We&apos;re there in the moments of preparation.
          </h1>
          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 text-slate-600 max-w-xl">
            NCLEX Prep Nation helps nursing candidates prepare for NCLEX-RN and NCLEX-PN with structured study materials, practice questions, NGN-style case studies, diagnostic support, guided preparation, and exam readiness resources. We support candidates in the United States, Canada, and international nursing candidates to build clinical judgment.
          </p>
          <div className="mt-8">
            <Button
              href="/free-diagnostic"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-clinical hover:bg-navy text-white font-bold rounded-full border-none shadow-md transition-all duration-150 text-sm cursor-pointer"
            >
              <span>Start Free Diagnostic</span>
              <PlayCircle size={20} className="stroke-[2.5]" />
            </Button>
          </div>
          <p className="mt-5 text-[11px] text-slate-500 font-semibold italic">
            *Original preparation materials.
          </p>
        </div>
      </div>
    </section>
  );
}
