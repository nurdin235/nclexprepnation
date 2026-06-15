import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    num: "01",
    title: "Start With a Diagnostic",
    description: "Take our free diagnostic preview test to check your baseline knowledge across key exam topics.",
  },
  {
    num: "02",
    title: "Review Your Weak Areas",
    description: "Identify key topics and question patterns that require immediate review and focused study time.",
  },
  {
    num: "03",
    title: "Use Prep Materials and Practice Questions",
    description: "Access our original topic summaries, pharmacology guides, NGN case studies, and detailed rationales.",
  },
  {
    num: "04",
    title: "Request Support or Guided Preparation",
    description: "Send a request to connect with our prep team via WhatsApp or email for personalized study direction.",
  },
  {
    num: "05",
    title: "Track Progress and Complete Prep Activities",
    description: "Monitor your preparation consistency, review your mistake history, and verify your readiness.",
  },
];

export function ProcessSteps() {
  return (
    <Section className="border-t border-line bg-white">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
          Preparation workflow
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          How NCLEX Prep Nation Helps You Prepare
        </h2>
        <p className="mt-4 leading-7 text-muted">
          Our step-by-step approach ensures you build stable study habits, identify weak topics, and practice with clear rationales.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((step) => (
          <Card className="p-6 relative border-line" key={step.num}>
            <span className="text-3xl font-bold text-clinical/20 block mb-4">
              {step.num}
            </span>
            <h3 className="text-base font-bold text-navy leading-6">
              {step.title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-muted">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
