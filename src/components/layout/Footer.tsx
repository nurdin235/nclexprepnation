import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { getWhatsAppHref, siteConfig } from "@/data/site";

export function Footer() {
  const whatsappHref = getWhatsAppHref(
    "Hello NCLEX Prep Nation, I would like to ask a question regarding your study materials and access plans.",
  );

  return (
    <footer className="bg-navy border-t border-white/10 text-white">
      {/* Primary 5-Column Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          
          {/* Column 1: Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/nclex-rn" className="hover:text-white hover:underline transition-all">
                  NCLEX-RN Program
                </Link>
              </li>
              <li>
                <Link href="/nclex-pn" className="hover:text-white hover:underline transition-all">
                  NCLEX-PN Program
                </Link>
              </li>
              <li>
                <Link href="/practice-questions" className="hover:text-white hover:underline transition-all">
                  Practice Questions Bank
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white hover:underline transition-all">
                  Prep Articles & Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white hover:underline transition-all">
                  Candidate Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Prep Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal">
              Prep Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/packages" className="hover:text-white hover:underline transition-all">
                  Exam Prep Materials
                </Link>
              </li>
              <li>
                <Link href="/certificate" className="hover:text-white hover:underline transition-all">
                  Certificate Program
                </Link>
              </li>
              <li>
                <Link href="/score-improvement-support" className="hover:text-white hover:underline transition-all">
                  Score Improvement Support
                </Link>
              </li>
              <li>
                <Link href="/student" className="hover:text-white hover:underline transition-all">
                  Student Portal Login
                </Link>
              </li>
              <li>
                <Link href="/request-access" className="hover:text-white hover:underline transition-all">
                  Request Platform Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/resources" className="hover:text-white hover:underline transition-all">
                  Resource Dashboard
                </Link>
              </li>
              <li>
                <Link href="/official-nclex-resources" className="hover:text-white hover:underline transition-all">
                  Official Resources Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline transition-all">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-all">
                  Contact Support Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal">
              Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <span className="block text-[10px] text-slate-400">General Support:</span>
                <a className="hover:text-white hover:underline" href={`mailto:${siteConfig.emails.support}`}>
                  {siteConfig.emails.support}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-400">Materials:</span>
                <a className="hover:text-white hover:underline" href={`mailto:${siteConfig.emails.materials}`}>
                  {siteConfig.emails.materials}
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-400">Certificate:</span>
                <a className="hover:text-white hover:underline" href={`mailto:${siteConfig.emails.certificate}`}>
                  {siteConfig.emails.certificate}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-teal hover:text-white transition-colors"
                >
                  <MessageCircle size={14} />
                  <span>Chat with Tutor</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/disclaimer" className="hover:text-white hover:underline transition-all">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white hover:underline transition-all">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white hover:underline transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white hover:underline transition-all">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/content-integrity-policy" className="hover:text-white hover:underline transition-all">
                  Content Integrity Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer block */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-[11px] leading-5 text-slate-400">
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="mt-6 border-t border-white/5 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} NCLEX Prep Nation. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}


