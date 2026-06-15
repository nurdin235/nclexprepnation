export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type PrepPackage = {
  name: string;
  slug: string;
  bestFor: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type StatusTone =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "error";
