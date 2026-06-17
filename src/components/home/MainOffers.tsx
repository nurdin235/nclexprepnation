import { Award, BookOpenCheck, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const offers = [
  {
    title: "Exam Prep Materials",
    description:
      "Access NCLEX study guides, topic summaries, practice questions, NGN-style case studies, mock exams, and detailed rationales designed to support structured preparation.",
    cta: "Get Exam Prep Materials",
    href: "/resources",
    icon: BookOpenCheck,
  },
  {
    title: "Certificate",
    description:
      "Earn a preparation completion certificate from NCLEX Prep Nation after completing our designated preparatory path and mock exams.",
    cta: "View Certificate Program",
    href: "/contact",
    icon: Award,
  },
  {
    title: "Score Improvement Support",
    description:
      "Get support to identify weak areas, review mistakes, practice better, and build stronger exam readiness before test day. This does not change official exam scores.",
    cta: "Request Score Improvement Support",
    href: "/score-improvement-support",
    icon: TrendingUp,
  },
];

export function MainOffers() {
  return (
    <Section className="border-y border-line bg-soft">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
          Main things we offer
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          What NCLEX Prep Nation Offers
        </h2>
        <p className="mt-4 leading-7 text-muted">
          Clear preparation support for students who need exam materials, guided structure, and a reliable study direction.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {offers.map(({ cta, description, href, icon: Icon, title }) => (
          <Card className="flex h-full flex-col p-6" key={title}>
            <div className="inline-flex w-fit rounded-md border border-clinical/15 bg-soft p-3 text-clinical">
              <Icon aria-hidden size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {description}
            </p>
            <Button className="mt-7 w-full" href={href} variant="outline">
              {cta}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
