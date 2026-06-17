"use client";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

type SubjectItem = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  bgColor: string;
  hoverColor: string;
};

const subjects: SubjectItem[] = [
  {
    id: 1,
    title: "NCLEX Pharmacology Practice Questions",
    description:
      "Practice NCLEX pharmacology questions covering the drug classes, adverse effects, and nursing interventions most tested on exam day.",
    imageSrc:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80",
    href: "/practice-questions#pharmacology",
    bgColor: "bg-slate-50/70 border-line hover:border-clinical/30",
    hoverColor: "group-hover:bg-clinical group-hover:text-white",
  },
  {
    id: 2,
    title: "NCLEX Cardiac Practice Questions",
    description:
      "Practice cardiovascular NCLEX questions covering the conditions and interventions most tested on exam day.",
    imageSrc:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    bgColor: "bg-[#fdf0ea] border-[#fde2d5] hover:border-[#bf5137]/30",
    href: "/practice-questions#cardiology",
    hoverColor: "group-hover:bg-[#bf5137] group-hover:text-white",
  },
  {
    id: 3,
    title: "NCLEX Endocrine Practice Questions",
    description:
      "Practice endocrine NCLEX questions covering hormonal disorders, crisis management, and the labs that trigger most exam items.",
    imageSrc:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80",
    bgColor: "bg-slate-50/70 border-line hover:border-clinical/30",
    href: "/practice-questions#endocrine",
    hoverColor: "group-hover:bg-clinical group-hover:text-white",
  },
  {
    id: 4,
    title: "NCLEX Pediatrics Practice Questions",
    description:
      "Practice pediatric NCLEX questions covering growth and development milestones, common childhood conditions, and the nursing interventions most tested on exam day.",
    imageSrc:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=400&q=80",
    bgColor: "bg-slate-50/70 border-line hover:border-clinical/30",
    href: "/practice-questions#pediatrics",
    hoverColor: "group-hover:bg-clinical group-hover:text-white",
  },
];

export function PracticeSubjects() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2e3e4f] tracking-tight leading-tight">
            NCLEX Practice Questions <span className="font-normal text-slate-500">by</span> Subject & System
          </h2>
          {/* Accent Line */}
          <div className="mx-auto mt-4 h-1.5 w-14 rounded bg-[#bf5137]" />
          
          <p className="mt-5 text-[#556779] text-sm sm:text-base font-semibold">
            Drill into the subjects and body systems tested most on the NCLEX; each with free practice questions, expert video breakdowns.
          </p>
        </div>

        {/* 2x2 Grid of Subject Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {subjects.map((subj) => (
            <Link key={subj.id} href={subj.href} className="group block">
              <Card
                className={`flex flex-col sm:flex-row h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${subj.bgColor}`}
              >
                {/* Left Side: Image container */}
                <div className="relative w-full sm:w-[40%] min-h-[160px] sm:min-h-full overflow-hidden shrink-0">
                  <img
                    src={subj.imageSrc}
                    alt={subj.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-navy/5 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Right Side: Content Details */}
                <div className="p-6 sm:p-7 flex flex-1 flex-col justify-between relative pr-16">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#2e3e4f] group-hover:text-clinical transition-colors leading-snug mb-3">
                      {subj.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] leading-relaxed text-[#556779] font-medium">
                      {subj.description}
                    </p>
                  </div>

                  {/* Circular indicator button on far right */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <div
                      className={`h-9 w-9 rounded-full bg-white border border-line flex items-center justify-center text-navy shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:translate-x-1 ${subj.hoverColor}`}
                    >
                      <ArrowRight size={14} className="stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
