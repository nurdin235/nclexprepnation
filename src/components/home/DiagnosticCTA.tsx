import { ArrowRight, Clock3, ListChecks, Target } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const diagnosticDetails = [
  { label: "Short, focused format", icon: Clock3 },
  { label: "Strong and weak topic review", icon: ListChecks },
  { label: "Recommended next step", icon: Target },
];

export function DiagnosticCTA() {
  return (
    <Section>
      <Card className="grid overflow-hidden border-clinical/25 lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Free diagnostic
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
            Start With a Free Diagnostic Test
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            Take a short diagnostic test to identify your strong areas, weak topics, and recommended preparation path.
          </p>
          <Button className="mt-7" href="/free-diagnostic">
            Start Free Diagnostic
            <ArrowRight aria-hidden size={18} />
          </Button>
        </div>

        <div className="border-t border-line bg-soft p-7 sm:p-10 lg:border-t-0 lg:border-l">
          <p className="font-semibold text-navy">What the test analyzes</p>
          <ul className="mt-5 space-y-4">
            {diagnosticDetails.map(({ icon: Icon, label }) => (
              <li className="flex items-center gap-3 text-sm text-ink" key={label}>
                <Icon aria-hidden className="text-clinical" size={20} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Section>
  );
}
