import { BookOpen, Award, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type OfferItem = {
  icon: typeof BookOpen;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
};

const offers: OfferItem[] = [
  {
    icon: BookOpen,
    title: "Exam Prep Materials",
    subtitle: "High-Yield QBank & Study Guides",
    description: "Prepare with confidence using our comprehensive question banks, detailed interactive rationales, and structured nursing study materials custom-tailored to the official NCLEX-RN & NCLEX-PN test plans.",
    ctaText: "Explore Materials",
    ctaHref: "/packages",
    badge: "Popular",
  },
  {
    icon: Award,
    title: "Course Certificates",
    subtitle: "Official Completion & Recognition",
    description: "Request a preparation completion certificate after finishing our designated preparatory path. Contact us via WhatsApp or email to get details about completion criteria.",
    ctaText: "Contact Us for Certificate Info",
    ctaHref: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Scores Upgrading",
    subtitle: "Personalized Diagnostic Analytics",
    description: "Pinpoint your critical weak areas through targeted mock testing and advanced diagnostic insights. Systematically upgrade your scores and clinical judgment capabilities until you reach passing criteria.",
    ctaText: "Start Diagnostic Test",
    ctaHref: "/free-diagnostic",
  },
];

export function WhatWeOffer() {
  return (
    <Section className="bg-white py-20 sm:py-24 border-b border-line relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-soft rounded-full filter blur-3xl opacity-60 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 rounded-full filter blur-3xl opacity-60 translate-y-1/2 pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[11px] font-black uppercase tracking-widest text-clinical bg-clinical/10 border border-clinical/20 px-3 py-1 rounded-full mb-4">
            Our Core Value
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight leading-tight">
            What We Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Comprehensive tools, official completion recognition, and targeted diagnostics engineered to guide you step-by-step toward NCLEX success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.title}
                className="group relative flex flex-col justify-between p-8 bg-white border border-line hover:border-clinical/30 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-clinical to-teal opacity-0 group-hover:opacity-100 transition-opacity" />

                {offer.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-extrabold uppercase tracking-widest text-white bg-teal px-2.5 py-1 rounded-full shadow-xs">
                    {offer.badge}
                  </span>
                )}

                <div>
                  {/* Icon Container with border and soft background */}
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-soft border border-line text-clinical mb-6 group-hover:bg-clinical group-hover:text-white group-hover:border-clinical transition-all duration-300">
                    <Icon size={26} className="stroke-[2.2]" />
                  </div>

                  <p className="text-xs font-extrabold text-teal uppercase tracking-widest mb-2">
                    {offer.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-navy tracking-tight mb-4">
                    {offer.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-6 mb-8 font-medium">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-50 mt-auto">
                  <Button
                    href={offer.ctaHref}
                    variant={index === 0 ? "gold" : "outline"}
                    className="w-full flex items-center justify-center gap-2 font-bold text-xs py-3"
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional callout for Core NCLEX Coverage */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-soft/50 p-8 sm:p-10 text-center">
            {/* Subtle decorative blurs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full filter blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-clinical/10 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-clinical bg-clinical/10 border border-clinical/20 px-3 py-1 rounded-full mb-4">
                Core NCLEX Coverage & Exam Realism
              </span>
              <p className="text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
                Our prep questions cover the core NCLEX subject areas and are designed based on current exam patterns and high-yield testing topics. They are structured to closely reflect the difficulty level and format you should expect in your exam, which helps candidates build familiarity and confidence before test day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
