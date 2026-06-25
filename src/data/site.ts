const configuredWhatsAppNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

export type RequestAccessWhatsAppDetails = {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  examType: string;
  packageInterest: string;
  message?: string;
  preferredContact: string;
};

export const examTypeLabels: Record<string, string> = {
  "nclex-rn": "NCLEX-RN",
  "nclex-pn": "NCLEX-PN",
  "not-sure": "Not sure yet",
};

export const packageInterestLabels: Record<string, string> = {
  "exam-prep-materials": "Exam Prep Materials",
  certificate: "Certificate Program",
  "score-improvement": "Score Improvement Support",
  starter: "Starter Package",
  premium: "Premium Package",
  "guided-support": "Guided Support",
  recommendation: "I need a recommendation",
};

export const preferredContactLabels: Record<string, string> = {
  whatsapp: "WhatsApp",
  email: "Email",
  both: "Both WhatsApp and Email",
};

export function formatExamType(value: string) {
  return examTypeLabels[value] || value;
}

export function formatPackageInterest(value: string) {
  return packageInterestLabels[value] || value;
}

export function formatPreferredContact(value: string) {
  return preferredContactLabels[value] || value;
}

export const siteConfig = {
  name: "NCLEX Prep Nation",
  url: "https://nclexprepnation.com",
  description:
    "NCLEX Prep Nation is an independent NCLEX preparation platform for nursing candidates preparing for NCLEX-RN and NCLEX-PN. The platform provides study materials, practice questions, NGN-style case studies, diagnostic support, guided preparation, and exam readiness resources for candidates in the United States, Canada, and internationally.",
  whatsappNumber: configuredWhatsAppNumber || "12495146148",
  emails: {
    support: "support@nclexprepnation.com",
    info: "info@nclexprepnation.com",
    materials: "materials@nclexprepnation.com",
    certificate: "certificate@nclexprepnation.com",
    admin: "admin@nclexprepnation.com",
  },
  social: {
    tiktok: "https://www.tiktok.com/@nclexprepnation1?_r=1&_t=ZN-97E9bS93hFG",
    instagram: "https://www.instagram.com/nationnclexprep?igsh=MTdxcmpkbjV5MGFvaQ%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1DnLeqD4eU/?mibextid=wwXIfr",
  },
  disclaimer:
    "NCLEX Prep Nation is an independent educational preparation platform. NCLEX® is a registered trademark of the National Council of State Boards of Nursing, Inc. NCLEX Prep Nation is not affiliated with or endorsed by NCSBN or Pearson VUE.",
  ctaLabels: {
    diagnostic: "Start Free Diagnostic",
    materials: "View Prep Materials",
    whatsapp: "Contact Us on WhatsApp",
    requestAccess: "Request Access",
  },
};

export const defaultWhatsAppMessage =
  "Hello NCLEX Prep Nation, I would like to know more about your NCLEX prep services.";

export function getWhatsAppHref(message = defaultWhatsAppMessage) {
  if (!siteConfig.whatsappNumber) {
    return "/contact";
  }

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}

export function getPackageWhatsAppHref(packageName: string) {
  return getWhatsAppHref(
    `Hello NCLEX Prep Nation, I am interested in the ${packageName} and would like to know how to request access.`,
  );
}

export function buildRequestAccessWhatsAppMessage(
  details: RequestAccessWhatsAppDetails,
) {
  return [
    "Hello NCLEX Prep Nation, I would like to request support.",
    "",
    `Full Name: ${details.fullName}`,
    `Email: ${details.email}`,
    `WhatsApp Number: ${details.whatsapp}`,
    `Country: ${details.country}`,
    `Exam Type: ${formatExamType(details.examType)}`,
    `Interested Service/Package: ${formatPackageInterest(
      details.packageInterest,
    )}`,
    `Preferred Contact Method: ${formatPreferredContact(
      details.preferredContact,
    )}`,
    `Message: ${details.message?.trim() || "No extra message provided."}`,
    "",
    "Please contact me with the next steps.",
  ].join("\n");
}

export function getRequestAccessWhatsAppHref(
  details: RequestAccessWhatsAppDetails,
) {
  return getWhatsAppHref(buildRequestAccessWhatsAppMessage(details));
}

export const contentIntegrityStatement =
  "NCLEX Prep Nation provides original educational preparation materials. We do not provide real or leaked NCLEX exam questions.";

export const footerDisclaimer = siteConfig.disclaimer;
