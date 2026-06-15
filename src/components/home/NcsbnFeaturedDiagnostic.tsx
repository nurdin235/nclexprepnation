import { Calendar, MapPin, ClipboardCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function NcsbnFeaturedDiagnostic() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-center border border-line rounded-lg overflow-hidden bg-white p-6 sm:p-8 hover:shadow-md transition-shadow">
          {/* Image Container */}
          <div className="relative rounded overflow-hidden border border-line bg-soft aspect-square lg:aspect-auto lg:h-full min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80"
              alt="Prioritization illustration representing test diagnostic"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Content Container */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">
                Featured Assessment
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-8">
                NCLEX Prep Nation Free Diagnostic Test
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                Take a short diagnostic test designed to check your clinical judgment baseline, identify your weak areas, and suggest a structured path forward. Build confidence before choosing a preparation package.
              </p>

              {/* Details grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-b border-line py-5 my-6">
                <div className="flex gap-3">
                  <div className="text-clinical mt-0.5">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">When</h4>
                    <p className="text-xs text-muted mt-1">Self-Paced (24/7 Access)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-clinical mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Where</h4>
                    <p className="text-xs text-muted mt-1">Online Dashboard</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-clinical mt-0.5">
                    <ClipboardCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy">Focus Area</h4>
                    <p className="text-xs text-muted mt-1">Priority Nursing Concepts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href="/free-diagnostic" className="px-6">
                Start Assessment Now
              </Button>
              <Link
                href="/practice-questions"
                className="inline-flex items-center gap-1 text-xs font-bold text-clinical hover:underline px-2 py-2"
              >
                View Sample Questions
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
