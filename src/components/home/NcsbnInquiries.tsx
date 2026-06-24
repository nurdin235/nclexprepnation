import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NcsbnInquiries() {
  return (
    <section className="bg-soft py-16 sm:py-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-8">
            Request Platform Access & Materials
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Connect with our team to obtain study guides, request premium access, or book guided preparation packages. There is no automated checkout; we connect with you directly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/request-access" className="px-8">
              Open Request Access Form
            </Button>
          </div>
        </div>

        {/* 2 Cards below */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mt-12">
          <div className="bg-white border border-line rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Starter Materials</p>
              <h3 className="mt-2 text-lg font-bold text-navy">Starter Study Packages</h3>
              <p className="mt-3 text-xs leading-5 text-muted">
                Access structured study guides, topic summaries, basic plans, and topic outlines. Recommended for self-study checkouts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical hover:underline"
              >
                Book Starter Materials
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="bg-white border border-line rounded-lg p-6 sm:p-8 flex flex-col justify-between hover:shadow-sm transition-shadow">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Premium Access</p>
              <h3 className="mt-2 text-lg font-bold text-navy">Complete Preparation Library</h3>
              <p className="mt-3 text-xs leading-5 text-muted">
                Unlock full question bank access, detailed rationales for every choice, mock examinations, and progress tracker tools.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-clinical hover:underline"
              >
                Request Premium Access
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
