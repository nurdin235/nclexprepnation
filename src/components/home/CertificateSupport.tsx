import { Award, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function CertificateSupport() {
  return (
    <Section>
      <Card className="grid gap-8 border-clinical/20 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Additional preparation support
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
            More Than Practice Questions
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            NCLEX Prep Nation also supports students with preparation completion
            certificates and score improvement guidance for those who need more
            structure, accountability, and review support.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button href="/contact" variant="outline">
            <Award aria-hidden size={18} />
            View Certificate Program
          </Button>
          <Button href="/score-improvement-support">
            <TrendingUp aria-hidden size={18} />
            Request Score Improvement Support
          </Button>
        </div>
      </Card>
    </Section>
  );
}
