import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function NcsbnPromoSections() {
  return (
    <>
      {/* Promo Section 1: Score Improvement (Image Left) */}
      <section className="bg-white py-16 sm:py-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative rounded overflow-hidden border border-line bg-soft aspect-[8/7]">
              <img
                src="https://images.unsplash.com/photo-1582750433449-64c86b1fdf30?auto=format&fit=crop&w=800&q=80"
                alt="Score Improvement Progress Graphic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                Preparation Support
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy tracking-tight leading-9">
                Score Improvement Guidance
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Get structured support to identify weak areas, review mistake patterns, build testing stamina, and prepare with confidence before test day. We analyze your diagnostics to formulate a tailored review approach.
              </p>
              <p className="mt-2 text-xs leading-5 text-muted font-semibold italic">
                *Note: This support represents educational review and does not change official exam scores.
              </p>
              <div className="mt-8">
                <Button href="/score-improvement-support">
                  Request Score Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section 2: Certificate Support (Image Right) */}
      <section className="bg-soft py-16 sm:py-20 border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Content (First in DOM on mobile, second on desktop via order-last or grid layout) */}
            <div className="lg:order-first order-last">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal">
                Certificate Program
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy tracking-tight leading-9">
                Document Your Preparation Completion
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Show your commitment and study completion by earning a preparation certificate from NCLEX Prep Nation after finishing selected activities. Earning a certificate represents hours of dedicated mock practice and rationale review.
              </p>
              <p className="mt-2 text-xs leading-5 text-muted font-semibold italic">
                *Note: This completion certificate is not an official NCLEX certificate and does not replace official licensing board requirements.
              </p>
              <div className="mt-8">
                <Button href="/certificate">
                  View Certificate Program
                </Button>
              </div>
            </div>
            {/* Image */}
            <div className="relative rounded overflow-hidden border border-line bg-white aspect-[8/7] lg:order-last order-first">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                alt="Certificate support illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
