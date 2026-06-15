"use client";

import { useState } from "react";
import {
  BookCheck,
  Layout,
  BarChart3,
  Calendar,
  Lock,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Award
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { QBankWidget } from "@/components/practice/QBankWidget";
import { TestimonialCarousel } from "@/components/testimonials/TestimonialCarousel";
import { prepPackages } from "@/data/packages";
import { faqs } from "@/data/faqs";
import { getWhatsAppHref } from "@/data/site";

const benefits = [
  {
    title: "Visual Rationales",
    text: "Review detailed diagrams and charts illustrating key pathophysiology and anatomy concepts for correct and incorrect options.",
    icon: BookCheck,
    color: "text-clinical bg-clinical/10",
  },
  {
    title: "Realistic QBank Interface",
    text: "Practice with NCLEX-style SATA, prioritization, and single-choice questions designed to reflect the real testing experience.",
    icon: Layout,
    color: "text-teal bg-teal/10",
  },
  {
    title: "Performance & Tracking",
    text: "Monitor progress by topic, analyze weak areas, check time spent per question, and review history inside your student dashboard.",
    icon: BarChart3,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Structured Study Plans",
    text: "Follow checklists, study guides, and pharmacology summaries designed to give you a clear day-by-day path forward.",
    icon: Calendar,
    color: "text-amber-600 bg-amber-50",
  },
];


export default function PracticeQuestionsPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const whatsappHref = getWhatsAppHref(
    "Hello NCLEX Prep Nation, I would like to request access to the Premium QBank.",
  );

  return (
    <div className="bg-white">
      {/* 1. UWorld-style Hero Banner */}
      <section className="relative overflow-hidden bg-navy text-white text-center py-20 px-4 sm:px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1250&q=80"
            alt="Nursing student practicing questions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#07162b]/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-[11px] font-black uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full mb-4">
            Practice Environment
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Practice with Free NCLEX®-Style Sample Questions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-7">
            Build strong clinical judgment and test your baseline knowledge. Practice with 10 free sample questions, review detailed rationales, and analyze correct and incorrect choices.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button href="#qbank-practice" variant="gold" className="px-6">
              Start Free QBank Sample
            </Button>
            <Button href="/free-diagnostic" variant="outline" className="text-white border-white/30 hover:border-white hover:text-white bg-transparent">
              Take Diagnostic Test
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Interactive QBank Widget Section */}
      <Section id="qbank-practice" className="py-16 sm:py-20 bg-soft/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Sample Question Bank
            </h2>
            <p className="mt-2 text-sm text-muted">
              Select your answers and click Submit. Review the correct options, detailed explanations, and clinical summaries.
            </p>
          </div>

          <QBankWidget />
        </div>
      </Section>

      {/* 3. UWorld-style Active Learning Benefits Grid */}
      <Section className="py-16 sm:py-20 border-t border-b border-line bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-clinical">Our Difference</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Active Learning Designed to Strengthen Clinical Judgment
            </h2>
            <p className="mt-3 text-sm text-muted">
              NCLEX Prep Nation helps you move past simple memorization to deep conceptual understanding.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <Card key={b.title} className="p-6 border border-line bg-white flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className={`rounded-lg p-3 ${b.color} mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-base font-bold text-navy">{b.title}</h3>
                  <p className="mt-2.5 text-xs leading-5 text-muted">{b.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4. Testimonials Section */}
      <Section className="py-16 sm:py-20 bg-soft/30 border-b border-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-clinical">Success Stories</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Trusted by Hundreds of Nursing Candidates
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </Section>

      {/* 5. Subscription Packages Pricing Section */}
      <Section id="pricing" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-clinical">Packages</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Choose the Access Level That Fits Your Preparation Needs
            </h2>
            <p className="mt-3 text-sm text-muted">
              Submit your request and our team will contact you via WhatsApp or email with confirmation and payment instructions.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {prepPackages.slice(0, 4).map((p) => (
              <Card
                key={p.slug}
                className={`p-6 flex flex-col justify-between border ${
                  p.featured
                    ? "border-clinical bg-soft/50 ring-2 ring-clinical/10 relative"
                    : "border-line bg-white"
                } hover:shadow-md transition-shadow`}
              >
                {p.featured && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-clinical text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                    {p.bestFor}
                  </span>
                  <h3 className="text-lg font-bold text-navy">{p.name}</h3>
                  <div className="my-4 flex items-baseline gap-1">
                    <span className="text-3xl font-black text-navy">{p.price}</span>
                    <span className="text-xs text-muted">/ package</span>
                  </div>
                  <p className="text-xs text-muted leading-5">{p.description}</p>
                  
                  {/* Features list */}
                  <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-navy font-medium">
                        <Check size={14} className="text-teal shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-line">
                  <Button
                    href={`/request-access?package=${p.slug}`}
                    variant={p.slug === "free" ? "outline" : "gold"}
                    className="w-full text-xs py-2 min-h-10 font-bold"
                  >
                    {p.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Manual booking note */}
          <div className="mt-10 text-center max-w-xl mx-auto bg-soft border border-line rounded-lg p-4 flex items-center justify-center gap-3">
            <ShieldCheck className="text-clinical shrink-0" size={20} />
            <p className="text-[11px] text-muted text-left leading-4">
              <strong>Personalized Booking</strong>: After submitting a request, our team contacts you within a few hours to explain payment methods and grant your student credentials.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. FAQ Accordion Section */}
      <Section id="faq" className="py-16 sm:py-20 bg-soft/50 border-t border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-clinical">FAQ</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.slice(0, 6).map((f, idx) => (
              <div
                key={idx}
                className="bg-white border border-line rounded-lg overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-navy hover:text-clinical transition-colors text-sm sm:text-base gap-4"
                >
                  <span>{f.question}</span>
                  {openFaqIdx === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaqIdx === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-muted leading-6 border-t border-slate-50 animate-fadeIn">
                    {f.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* More questions banner */}
          <div className="mt-10 text-center space-y-4">
            <div>
              <Button href="/faq" variant="outline" className="text-xs">
                View All Frequently Asked Questions
              </Button>
            </div>
            <div className="pt-2">
              <p className="text-xs text-muted">
                Still have questions about our packages or study materials?
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-teal hover:underline text-xs mt-2"
              >
                <MessageCircle size={14} />
                Chat directly with our Prep Team on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
