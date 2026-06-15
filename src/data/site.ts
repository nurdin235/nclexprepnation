const configuredWhatsAppNumber = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""
).replace(/\D/g, "");

export const siteConfig = {
  name: "NCLEX Prep Nation",
  url: "https://nclexprepnation.com",
  description:
    "NCLEX preparation platform with exam prep materials, practice questions, diagnostic testing, certificate support, score improvement guidance, and guided study resources.",
  whatsappNumber: configuredWhatsAppNumber,
  emails: {
    support: "support@nclexprepnation.com",
    info: "info@nclexprepnation.com",
    materials: "materials@nclexprepnation.com",
    certificate: "certificate@nclexprepnation.com",
    admin: "admin@nclexprepnation.com",
  },
  disclaimer:
    "NCLEX\u00ae is a registered trademark of the National Council of State Boards of Nursing, Inc. NCLEX Prep Nation is an independent educational preparation platform and is not affiliated with, sponsored by, or endorsed by NCSBN, Pearson VUE, or any nursing regulatory body. All questions and resources are original educational materials created for exam preparation purposes.",
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

export const contentIntegrityStatement =
  "NCLEX Prep Nation provides original educational preparation materials. We do not provide real or leaked NCLEX exam questions.";

export const footerDisclaimer = siteConfig.disclaimer;
