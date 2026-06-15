import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  FileText,
  Activity,
  Layers,
  HeartHandshake
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";

const readinessItems = [
  "Original NCLEX-style practice",
  "NCLEX-RN and NCLEX-PN paths",
  "Detailed learning rationales",
];

export function Hero() {
  const whatsappHref = getWhatsAppHref();

  return (
    <Section className="overflow-hidden bg-white py-18 sm:py-24 border-b border-line">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>Independent NCLEX Preparation Platform</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Prepare Smarter for NCLEX-RN and NCLEX-PN
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            NCLEX Prep Nation helps nursing candidates prepare with structured exam prep
            materials, practice questions, study resources, diagnostic testing,
            completion certificate support, and score improvement guidance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/free-diagnostic">
              Start Free Diagnostic
              <ArrowRight aria-hidden size={18} />
            </Button>
            <Button href="/resources" variant="outline">
              View Prep Materials
            </Button>
            <Button href={whatsappHref} variant="whatsapp">
              <MessageCircle aria-hidden size={18} />
              Contact Us on WhatsApp
            </Button>
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Original educational preparation materials. No real or leaked NCLEX exam questions.
          </p>
        </div>

        {/* Right side visual panel */}
        <Card className="relative border-clinical/20 p-6 sm:p-8 bg-soft">
          <div className="flex items-start justify-between border-b border-line pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-clinical">
                Preparation Hub
              </p>
              <p className="mt-1 text-xl font-bold text-navy">
                Structured Study Plan
              </p>
            </div>
            <div className="rounded-md bg-white border border-line p-2 text-clinical">
              <ClipboardCheck aria-hidden size={22} />
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded bg-white border border-line p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-clinical">
                <FileText size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">01. Materials</span>
              </div>
              <p className="mt-3 text-sm font-bold text-navy">Prep Materials</p>
              <p className="mt-1 text-xs text-muted">Guides, lists, & drug cards</p>
            </div>

            <div className="rounded bg-white border border-line p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-teal">
                <Activity size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">02. Assessment</span>
              </div>
              <p className="mt-3 text-sm font-bold text-navy">Diagnostic Test</p>
              <p className="mt-1 text-xs text-muted">Verify baseline knowledge</p>
            </div>

            <div className="rounded bg-white border border-line p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-indigo-500">
                <Layers size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">03. Practice</span>
              </div>
              <p className="mt-3 text-sm font-bold text-navy">Practice Questions</p>
              <p className="mt-1 text-xs text-muted">NGN cases & rationales</p>
            </div>

            <div className="rounded bg-white border border-line p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-emerald-500">
                <HeartHandshake size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">04. Guidance</span>
              </div>
              <p className="mt-3 text-sm font-bold text-navy">Guided Support</p>
              <p className="mt-1 text-xs text-muted">One-on-one review channels</p>
            </div>
          </div>

          <ul className="mt-6 space-y-2.5">
            {readinessItems.map((item) => (
              <li className="flex items-center gap-2.5 text-xs font-medium text-ink" key={item}>
                <CheckCircle2
                  aria-hidden
                  className="shrink-0 text-success"
                  size={16}
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
