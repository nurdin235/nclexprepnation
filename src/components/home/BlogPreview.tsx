import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const articles = [
  {
    title: "How to Prepare for NCLEX-RN With a Simple Study Plan",
    excerpt: "Learn how to structure your study weeks, manage review topics, and track your clinical judgment practice without getting overwhelmed.",
    category: "Study Guide",
  },
  {
    title: "How to Answer NCLEX Prioritization Questions With Confidence",
    excerpt: "Master the classic prioritization frameworks (ABC, safety, stability, acute vs. chronic) to answer prioritization and delegation questions correctly.",
    category: "Prioritization",
  },
  {
    title: "What Are NGN Case Studies and How Should You Practice Them?",
    excerpt: "Understand the Next Generation NCLEX format, how to identify cues, analyze patient status, and prepare for multi-part case study questions.",
    category: "NGN",
  },
  {
    title: "How to Improve Your NCLEX Practice Score Before Exam Day",
    excerpt: "Stuck at a plateau? Use mistake review, diagnostic test feedback, and structured rationale study to push your prep score higher.",
    category: "Score Support",
  },
  {
    title: "NCLEX Exam Prep Materials: What Students Should Study First",
    excerpt: "Break down essential materials (lab values, key pharmacology rules, and safety protocols) that build the foundation for registered nursing.",
    category: "Exam Prep",
  },
];

export function BlogPreview() {
  return (
    <Section className="border-t border-line bg-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Learning resources
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Latest Educational Prep Articles
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Read structured articles covering nursing tips, exam strategies, prioritization guides, and case study advice.
          </p>
        </div>
        <Button href="/blog" variant="outline">
          Read NCLEX Prep Articles
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {articles.map((post) => (
          <Card className="flex h-full flex-col p-6 justify-between" key={post.title}>
            <div>
              <Badge className="w-fit mb-4">{post.category}</Badge>
              <h3 className="text-base font-bold text-navy leading-6">
                {post.title}
              </h3>
              <p className="mt-3 text-xs leading-5 text-muted">
                {post.excerpt}
              </p>
            </div>
            <Link
              className="mt-6 flex items-center gap-2 text-xs font-semibold text-clinical hover:underline"
              href="/blog"
            >
              Read Article
              <ArrowRight aria-hidden size={14} />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
