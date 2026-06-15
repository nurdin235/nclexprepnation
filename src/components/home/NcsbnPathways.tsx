import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function NcsbnPathways() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: RN */}
          <div className="flex flex-col sm:flex-row border border-line rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <div className="sm:w-2/5 bg-navy flex items-center justify-center p-8 text-white relative min-h-[160px] sm:min-h-auto">
              <GraduationCap size={48} className="text-teal" />
              <div className="absolute inset-0 bg-white/5" />
            </div>
            <div className="sm:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal">Registered Nursing</p>
                <h3 className="mt-2 text-lg font-bold text-navy">NCLEX-RN Prep Program</h3>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Access advanced management of care review, pharmacology safety protocols, clinical judgment exercises, and RN-specific test plan resources.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/nclex-rn"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical hover:underline"
                >
                  Explore RN Pathway
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: PN */}
          <div className="flex flex-col sm:flex-row border border-line rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <div className="sm:w-2/5 bg-clinical flex items-center justify-center p-8 text-white relative min-h-[160px] sm:min-h-auto">
              <BookOpen size={48} className="text-teal" />
              <div className="absolute inset-0 bg-white/5" />
            </div>
            <div className="sm:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-teal">Practical Nursing</p>
                <h3 className="mt-2 text-lg font-bold text-navy">NCLEX-PN Prep Program</h3>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Access coordinated care checklists, basic comfort reviews, health promotion guides, and PN-specific physiological adaptation resources.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/nclex-pn"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical hover:underline"
                >
                  Explore PN Pathway
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
