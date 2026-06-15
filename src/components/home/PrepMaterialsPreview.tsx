import { Beaker, BookOpen, CalendarCheck, FileText, HeartPulse, ClipboardList, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const materials = [
  { title: "Study guides", icon: FileText, desc: "Structured blueprints covering high-yield NCLEX concepts." },
  { title: "Topic summaries", icon: GraduationCap, desc: "Condensed nursing outlines for rapid system reviews." },
  { title: "Pharmacology guide", icon: Beaker, desc: "Key medication classifications, safety rules, and side effects." },
  { title: "Lab values guide", icon: ClipboardList, desc: "Essential therapeutic ranges, indicators, and nursing actions." },
  { title: "Prioritization guide", icon: HeartPulse, desc: "ABC, safety, and delegation frameworks for clinical judgment." },
  { title: "NGN case studies", icon: BookOpen, desc: "Interactive clinical judgment scenarios aligned with NGN formats." },
  { title: "Mock exams", icon: FileText, desc: "Full-length practice testing to simulate exam-day stamina." },
  { title: "Exam day checklist", icon: CalendarCheck, desc: "Logistics, identification requirements, and registration rules." },
];

export function PrepMaterialsPreview() {
  return (
    <Section className="border-t border-line bg-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Preparation resources
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Exam Prep Materials Organized for Focused Study
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Access our original educational resources designed to build stable knowledge foundation and clarify exam priorities.
          </p>
        </div>
        <Button href="/resources">
          Get Study Materials
        </Button>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {materials.map((item) => {
          const Icon = item.icon;
          return (
            <Card className="p-5 flex flex-col justify-between" key={item.title}>
              <div>
                <div className="inline-flex rounded-md bg-white p-2.5 text-clinical border border-line">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-bold text-navy text-base">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted">{item.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
