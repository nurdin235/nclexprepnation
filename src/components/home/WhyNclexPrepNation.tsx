import { Users, BookOpen, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function WhyNclexPrepNation() {
  const stats = [
    {
      icon: Users,
      label: "Helped",
      value: "3,200+ Students",
      desc: "prepare for their nursing exams",
    },
    {
      icon: BookOpen,
      label: "Trusted for",
      value: "3,500+ Practice Questions",
      desc: "designed to match the NGN format",
    },
    {
      icon: Clock,
      label: "Offering",
      value: "2,800+ Custom Study Plans",
      desc: "crafted to guide candidate study daily",
    },
  ];

  return (
    <Section className="bg-white py-16 sm:py-20 border-b border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal text-navy tracking-tight leading-tight">
            Why NCLEX Prep Nation Is the Top Choice for Nursing Exam Prep
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] text-slate-500 max-w-2xl mx-auto leading-6">
            Join thousands of nursing candidates who trust NCLEX Prep Nation. Our focused study tools and detailed explanations help you study smarter, not harder.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = idx === 0 ? Users : idx === 1 ? BookOpen : Clock;
            return (
              <div key={stat.value} className="text-center flex flex-col items-center">
                {/* Circular Icon Container matching UWorld style (light blue fill) */}
                <div className="h-20 w-20 rounded-full bg-[#e8f3fc] text-[#1769aa] flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105">
                  <Icon size={32} className="stroke-[1.8]" />
                </div>
                {/* Visual Statistics Label */}
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  {stat.label}
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1769aa] tracking-tight mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed max-w-[220px]">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer Partnership Text Block */}
        <div className="mt-16 border-t border-[#dee2e6] pt-10 text-center max-w-4xl mx-auto">
          <p className="text-[14px] sm:text-base text-slate-700 font-bold tracking-wide uppercase">
            Trusted NCLEX Partner for Future Nurses
          </p>
          <p className="mt-3 text-xs sm:text-[13px] text-slate-400 max-w-3xl mx-auto leading-6">
            We are proud to provide original study guides, practice diagnostics, and customizable question banks supporting the next generation of nursing professionals across the nation.
          </p>
        </div>
      </div>
    </Section>
  );
}

