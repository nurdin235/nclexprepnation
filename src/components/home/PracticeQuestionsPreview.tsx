import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const topics = [
  "Pharmacology",
  "Prioritization",
  "Safety and Infection Control",
  "Lab Values",
  "Medical-Surgical Nursing",
  "Maternity",
  "Pediatrics",
  "Mental Health",
  "NGN Case Studies",
];

export function PracticeQuestionsPreview() {
  return (
    <Section className="border-t border-line bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Practice questions
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Practice by Topic and Review With Clear Rationales
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Strengthen your clinical judgment by practicing topic-focused blocks. Every question comes with detailed explanations mapping correct and incorrect options to core safety concepts.
          </p>
          <div className="mt-7">
            <Button href="/practice-questions">
              View Practice Questions
            </Button>
          </div>
        </div>

        <Card className="grid gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div className="flex items-center gap-3 bg-white p-4" key={topic}>
              <CheckCircle2
                aria-hidden
                className="shrink-0 text-success"
                size={18}
              />
              <span className="text-sm font-semibold text-navy">{topic}</span>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}
