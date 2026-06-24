import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const newsItems = [
  {
    title: "How to Prepare for NCLEX-RN With a Simple Study Plan",
    desc: "Build a practical, step-by-step review plan around content, daily question practices, rationale review, and clinical judgment.",
    image: "/images/blog_rn_plan.png",
    category: "Study Plan",
    date: "06/12/2026",
  },
  {
    title: "How to Answer NCLEX Prioritization Questions With Confidence",
    desc: "Master high-yield prioritization frameworks (ABC, safety, stability) to confidently answer delegation and priority questions.",
    image: "/images/blog_prioritization.png",
    category: "Prioritization",
    date: "06/10/2026",
  },
  {
    title: "What Are NGN Case Studies and How Should You Practice Them?",
    desc: "Understand the Next Generation NCLEX format, how to identify crucial cues, prioritize client needs, and practice clinical judgment.",
    image: "/images/blog_ngn.png",
    category: "NGN Case Studies",
    date: "06/08/2026",
  },
];

export function NcsbnNews() {
  return (
    <Section className="bg-soft py-16 sm:py-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight leading-8">
              Latest Prep Articles
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted max-w-2xl">
              Guides, articles, and exam preparation updates from the NCLEX Prep Nation team.
            </p>
          </div>
          <Button href="/blog" variant="outline" className="text-xs">
            See All Articles
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <Card className="flex flex-col overflow-hidden bg-white border border-line hover:shadow-md transition-shadow" key={item.title}>
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden bg-soft border-b border-line">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>
              {/* Content Container */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-navy leading-6">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-muted line-clamp-3">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-[10px] font-bold text-muted uppercase tracking-wider">
                  <span>Posted {item.date}</span>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-clinical hover:underline"
                    aria-label={`Read more about ${item.title}`}
                  >
                    Read More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
