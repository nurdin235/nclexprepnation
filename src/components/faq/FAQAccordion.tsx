"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import type { FAQItem } from "@/types";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`border rounded-lg overflow-hidden transition-all duration-200 ${
              isOpen
                ? "border-clinical bg-soft/30 shadow-sm"
                : "border-line bg-white hover:border-slate-300 hover:shadow-xs"
            }`}
          >
            {/* Header/Question Trigger */}
            <button
              onClick={() => toggleIdx(idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-150 cursor-pointer"
            >
              <div className="flex items-start gap-3.5">
                <HelpCircle
                  className={`mt-0.5 shrink-0 ${
                    isOpen ? "text-clinical" : "text-muted"
                  }`}
                  size={20}
                />
                <span
                  className={`text-sm sm:text-base font-bold leading-6 transition-colors ${
                    isOpen ? "text-clinical" : "text-navy hover:text-clinical"
                  }`}
                >
                  {item.question}
                </span>
              </div>
              <span className={`ml-4 shrink-0 transition-transform duration-200 text-muted ${isOpen ? "text-clinical rotate-180" : ""}`}>
                <ChevronDown size={20} />
              </span>
            </button>

            {/* Answer Content */}
            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 pl-11 sm:pl-12 text-xs sm:text-sm text-muted leading-6 border-t border-slate-100/60 pt-4 animate-fadeIn bg-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
