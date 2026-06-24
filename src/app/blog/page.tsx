import { ArrowRight } from "lucide-react";

import { PageCTA } from "@/components/layout/PageCTA";
import { PageHero } from "@/components/layout/PageHero";
import { WebPageJsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/metadata";

const description =
  "Explore NCLEX-RN, NCLEX-PN, NGN case study, international nurse, rationale review, and study planning guidance for U.S. and Canada exam pathways.";

export const metadata = createPageMetadata({
  title: "NCLEX Prep Blog for RN, PN, and International Nurses",
  description,
  path: "/blog",
  keywords: ["NCLEX prep blog", "NCLEX study tips", "NCLEX for international nurses"],
});

const posts = [
  {
    category: "NCLEX-RN",
    title: "How to Prepare for NCLEX-RN as a U.S. or Canada Candidate",
    excerpt:
      "Build a practical, step-by-step review plan around content, daily question practices, rationale review, and clinical judgment.",
  },
  {
    category: "NCLEX Basics",
    title: "NCLEX-RN vs NCLEX-PN: What Nursing Candidates Should Know",
    excerpt:
      "Compare RN and PN preparation priorities, question practice, clinical judgment expectations, and study planning needs.",
  },
  {
    category: "Rationales",
    title: "How to Use NCLEX Practice Questions With Rationales",
    excerpt:
      "Learn how to review correct and incorrect answer explanations so each question becomes a focused learning opportunity.",
  },
  {
    category: "Prioritization",
    title: "How to Answer NCLEX Prioritization Questions With Confidence",
    excerpt:
      "Master high-yield prioritization frameworks (ABC, safety, stability) to confidently answer delegation and priority questions.",
  },
  {
    category: "Clinical Judgment",
    title: "What Are NGN Case Studies and How Should You Practice Them?",
    excerpt:
      "Understand the Next Generation NCLEX format, how to identify crucial cues, prioritize client needs, and practice clinical judgment.",
  },
  {
    category: "Score Support",
    title: "How to Improve Your NCLEX Practice Score Before Exam Day",
    excerpt:
      "Stuck at a score plateau? Use error logs, diagnostic test feedback, and structured rationale study to increase your scores.",
  },
  {
    category: "Study Materials",
    title: "Best NCLEX Study Materials for Focused Exam Preparation",
    excerpt:
      "Prioritize essential materials—including lab values, pharmacology rules, and safety protocols—that form the core exam concepts.",
  },
  {
    category: "International Nurses",
    title: "How International Nurses Can Prepare for NCLEX",
    excerpt:
      "Plan your study around NCLEX-RN or NCLEX-PN expectations while confirming official registration steps through official sources.",
  },
];

export default function BlogPage() {
  return (
    <>
      <WebPageJsonLd
        description={description}
        path="/blog"
        title="NCLEX Prep Blog"
      />
      <PageHero
        description="Practical articles and guides written to help candidates study with more structure and understand the clinical reasoning behind common NCLEX questions."
        eyebrow="Blog"
        primaryHref="/free-diagnostic"
        primaryLabel="Start Free Diagnostic"
        secondaryHref="/resources"
        secondaryLabel="Browse Resources"
        title="NCLEX preparation guidance you can apply."
        imageSrc="/images/nursing_student_hero.png"
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card className="flex h-full flex-col p-6 justify-between" key={post.title}>
              <div>
                <Badge className="w-fit mb-4">{post.category}</Badge>
                <h2 className="text-xl font-bold text-navy leading-7">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {post.excerpt}
                </p>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-clinical hover:underline cursor-pointer">
                Read Article
                <ArrowRight aria-hidden size={16} />
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <PageCTA
        description="Use the current preparation pages while the full article library is being developed."
        primaryHref="/resources"
        primaryLabel="Browse Study Resources"
        secondaryHref="/request-access"
        secondaryLabel="Request Study Materials"
        title="Put the guidance into a study plan."
      />
    </>
  );
}
