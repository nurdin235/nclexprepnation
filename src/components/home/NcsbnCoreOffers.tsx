import { FileText, Activity, ShieldCheck, Award, TrendingUp, MessageCircle, Info, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";

const basicCards = [
  {
    title: "Practice by Topic & Category",
    desc: "Practice Questions",
    href: "/practice-questions",
    icon: ShieldCheck,
  },
  {
    title: "Document Completion Activities",
    desc: "Completion Certificate",
    href: "/contact",
    icon: Award,
  },
  {
    title: "Review Mistakes & Weak Areas",
    desc: "Score Improvement Support",
    href: "/score-improvement-support",
    icon: TrendingUp,
  },
  {
    title: "Direct Study Checks & Support",
    desc: "WhatsApp Guidance",
    href: getWhatsAppHref(),
    icon: MessageCircle,
  },
  {
    title: "Ask About Exam Prep Direction",
    desc: "FAQ & Support",
    href: "/faq",
    icon: Info,
  },
];

export function NcsbnCoreOffers() {
  return (
    <Section className="bg-soft border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center tracking-tight leading-8 mb-12">
          The Leader in NCLEX Preparation and Candidate Support
        </h2>

        {/* 2 Large Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Card 1 */}
          <Card className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-line hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="rounded bg-soft p-3 text-clinical h-fit border border-line shrink-0">
                <FileText size={28} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-clinical">01. Materials</p>
                <h3 className="mt-2 text-xl font-bold text-navy leading-7">
                  Access Focused NCLEX-RN & PN Study Materials
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Structured study guides, pharmacology outlines, lab value summaries, prioritization sheets, and Next Generation NCLEX (NGN) case reviews.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line flex justify-end">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 text-sm font-semibold text-clinical hover:underline"
              >
                Explore Study Materials
                <ArrowRight size={16} />
              </Link>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col justify-between p-6 sm:p-8 bg-white border border-line hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className="rounded bg-soft p-3 text-teal h-fit border border-line shrink-0">
                <Activity size={28} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal">02. Assessment</p>
                <h3 className="mt-2 text-xl font-bold text-navy leading-7">
                  Evaluate Your Readiness with Diagnostic Tests
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Identify your strong areas and target weak topics with original prep diagnostics before scheduling your review program.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-line flex justify-end">
              <Link
                href="/free-diagnostic"
                className="inline-flex items-center gap-1 text-sm font-semibold text-clinical hover:underline"
              >
                Start Diagnostic Test
                <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        </div>

        {/* 5 Basic Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {basicCards.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                className="flex flex-col justify-between bg-white border border-line p-5 rounded-md hover:border-clinical transition-colors group"
                key={item.desc}
              >
                <div className="text-clinical mb-4">
                  <Icon size={22} className="group-hover:scale-105 transition-transform" />
                </div>
                <div className="border-t border-line pt-3 mt-2">
                  <p className="text-xs font-bold text-navy leading-5">
                    {item.title}
                  </p>
                  <p className="text-[10px] uppercase font-semibold tracking-wider text-muted mt-1">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
