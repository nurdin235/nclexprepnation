"use client";

import { Menu, MessageCircle, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { getWhatsAppHref } from "@/data/site";

type NavItem = {
  label: string;
  href: string;
};

const navigationData: NavItem[] = [
  { label: "Prep Materials", href: "/packages" },
  { label: "NCLEX-RN", href: "/nclex-rn" },
  { label: "NCLEX-PN", href: "/nclex-pn" },
  { label: "Practice Questions", href: "/practice-questions" },
  { label: "Certificate", href: "/certificate" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = getWhatsAppHref(
    "Hello NCLEX Prep Nation, I would like to know more about your NCLEX prep services.",
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white shadow-xs">

      {/* 2. Main Navigation Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo with Emblem */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <svg
              className="h-9 w-9 text-clinical"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                fill="currentColor"
                fillOpacity="0.12"
              />
              <path d="M12 8v8" />
              <path d="M9 11h6" />
            </svg>
            <span className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-navy leading-none">NCLEX</span>
              <span className="text-[10px] font-bold text-teal tracking-widest uppercase leading-tight mt-0.5">
                PREP NATION
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav className="flex items-center gap-5 xl:gap-7">
              {navigationData.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[14px] xl:text-[15px] font-bold text-navy hover:text-clinical transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Search Icon at the End */}
            <button className="text-navy hover:text-clinical p-1.5 transition-colors cursor-pointer" aria-label="Search site">
              <Search size={20} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburguer menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2 text-navy hover:text-clinical transition-colors border border-line rounded-md"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-32 z-40 flex flex-col bg-white lg:hidden border-t border-line animate-fadeIn">
          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-3">
            {navigationData.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy hover:text-clinical border-b border-slate-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Footer Action Buttons */}
          <div className="border-t border-line bg-slate-50 p-4 space-y-3 shrink-0">
            <div className="grid grid-cols-2 gap-3">
              <Button href="/free-diagnostic" onClick={() => setMobileMenuOpen(false)} className="min-h-10 text-xs py-2">
                Free Diagnostic
              </Button>
              <Button href="/request-access" onClick={() => setMobileMenuOpen(false)} variant="gold" className="min-h-10 text-xs py-2">
                Request Access
              </Button>
            </div>
            
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-[#128c7e] text-xs font-bold text-white hover:bg-[#0d756a] transition-colors"
            >
              <MessageCircle size={13} />
              <span>Contact Support on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

