import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NcsbnHero() {
  return (
    <section className="relative overflow-hidden bg-white text-navy min-h-[520px] flex items-center border-b border-line">
      {/* Background Image on Right */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1250&q=80"
          alt="Professional nurse caring for a patient"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft overlay gradient to fade to white on the left for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/45 to-transparent" />
      </div>

      {/* Mobile-only white overlay to ensure dark text is readable on tiny viewports */}
      <div className="absolute inset-0 bg-white/80 lg:hidden z-5" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy leading-tight">
            We're There in the Moments of Preparation
          </h1>
          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-7 text-slate-700 font-medium max-w-lg">
            NCLEX Prep Nation supports you and your journey in nursing through original practice questions, detailed rationales, and structured study plans built to strengthen your clinical judgment.
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
