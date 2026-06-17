import type { NavigationItem } from "@/types";

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "NCLEX-RN", href: "/nclex-rn" },
  { label: "NCLEX-PN", href: "/nclex-pn" },
  { label: "Practice Questions", href: "/practice-questions" },
  { label: "Resources", href: "/resources" },
  { label: "Packages", href: "/packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation: Record<string, NavigationItem[]> = {
  prep: [
    { label: "NCLEX-RN", href: "/nclex-rn" },
    { label: "NCLEX-PN", href: "/nclex-pn" },
    { label: "Practice Questions", href: "/practice-questions" },
    { label: "Resources", href: "/resources" },
  ],
  services: [
    { label: "Exam Prep Materials", href: "/resources" },
    { label: "Certificate", href: "/contact" },
    {
      label: "Score Improvement Support",
      href: "/score-improvement-support",
    },
    { label: "Packages", href: "/packages" },
  ],
  support: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    {
      label: "Official NCLEX Resources",
      href: "/official-nclex-resources",
    },
  ],
  legal: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Refund Policy", href: "/refund-policy" },
    {
      label: "Content Integrity Policy",
      href: "/content-integrity-policy",
    },
  ],
};
