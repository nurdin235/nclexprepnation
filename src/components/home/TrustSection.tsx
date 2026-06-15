import {
  BookCheck,
  ClipboardCheck,
  FileQuestion,
  MessageCircle,
  Scale,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { Section } from "@/components/ui/Section";
import { contentIntegrityStatement } from "@/data/site";

const trustPoints = [
  { title: "Independent preparation platform", icon: Scale },
  { title: "Original educational materials", icon: BookCheck },
  { title: "NCLEX-RN and NCLEX-PN support", icon: Stethoscope },
  { title: "NGN-style case study practice", icon: FileQuestion },
  { title: "Detailed rationales", icon: ClipboardCheck },
  { title: "WhatsApp/email support", icon: MessageCircle },
  { title: "No real or leaked exam questions", icon: ShieldCheck },
  { title: "Clear request process", icon: ShieldCheck },
];

export function TrustSection() {
  return (
    <Section className="bg-navy text-white border-t border-line">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Why students trust NCLEX Prep Nation
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Built for Ethical NCLEX Preparation
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            {contentIntegrityStatement}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-2">
          {trustPoints.map(({ icon: Icon, title }) => (
            <div className="flex items-center gap-3 bg-navy p-5" key={title}>
              <Icon aria-hidden className="shrink-0 text-teal" size={21} />
              <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
