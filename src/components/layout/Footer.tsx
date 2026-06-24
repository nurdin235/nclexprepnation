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
                <Link href="/contact" className="hover:text-white hover:underline transition-all">
                  Certificate Program
                </Link>
              </li>
              <li>
                <Link href="/score-improvement-support" className="hover:text-white hover:underline transition-all">
                  Score Improvement Support
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
            </ul>
          </div>

        </div>

        {/* Footer trust note */}
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
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.81.055.973.044 1.5.206 1.85.342.463.18.795.394 1.144.743.349.349.562.68.743 1.144.136.35.298.877.342 1.85.047 1.026.055 1.38.055 3.81s-.008 2.784-.055 3.81c-.044.973-.206 1.5-.342 1.85a3.197 3.197 0 01-.743 1.144 3.197 3.197 0 01-1.144.743c-.35.136-.877.298-1.85.342-1.026.047-1.38.055-3.81.055s-2.784-.008-3.81-.055c-.973-.044-1.5-.206-1.85-.342a3.197 3.197 0 01-1.144-.743 3.197 3.197 0 01-.743-1.144c-.136-.35-.298-.877-.342-1.85C2.008 15.025 2 14.67 2 12s.008-2.784.055-3.81c.044-.973.206-1.5.342-1.85a3.197 3.197 0 01.743-1.144 3.197 3.197 0 011.144-.743c.35-.136.877-.298 1.85-.342 1.026-.047 1.38-.055 3.81-.055zm-1.11 1.751c-2.33.008-2.6.018-3.516.06-.88.04-1.353.186-1.671.31-.421.164-.722.36-.1.037-.714a2.232 2.232 0 00-1.037 1.037c-.124.318-.27.79-.31 1.67-.042.917-.052 1.187-.06 3.517v.75c.008 2.33.018 2.6.06 3.516.04.88.186 1.353.31 1.671.164.421.36.722.714 1.037.318.318.682.524 1.037.714.318.124.79.27 1.67.31.917.042 1.187.052 3.517.06h.75c2.33-.008 2.6-.018 3.516-.06.88-.04 1.353-.186 1.671-.31a2.232 2.232 0 001.037-1.037c.124-.318.27-.79.31-1.67.042-.917.052-1.187.06-3.517v-.75c-.008-2.33-.018-2.6-.06-3.516-.04-.88-.186-1.353-.31-1.671a2.232 2.232 0 00-1.037-1.037c-.318-.124-.79-.27-1.67-.31-.917-.042-1.187-.052-3.517-.06h-.75zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.4a4.4 4.4 0 110-8.8 4.4 4.4 0 010 8.8zm6.487-11.595a1.102 1.102 0 11-2.204 0 1.102 1.102 0 012.204 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.72-.01 2.92-.01 5.84-.02 8.75-.1 1.6-.54 3.18-1.46 4.47-1.09 1.54-2.82 2.63-4.7 2.95-2.01.39-4.15-.22-5.66-1.57A8.69 8.69 0 0 1 3.6 15.65c-.1-2.36.98-4.73 2.8-6.25 1.63-1.37 3.82-1.95 5.92-1.57V12c-1.17-.18-2.4.14-3.26.96-.83.78-1.2 1.99-1 3.11.16 1.05.86 1.99 1.83 2.43.95.45 2.11.4 3.01-.13.92-.53 1.48-1.54 1.56-2.6.02-3.89.02-7.78.02-11.67-.01-1.35.01-2.7-.02-4.05z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
