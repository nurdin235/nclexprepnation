import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getWhatsAppHref } from "@/data/site";

export function NcsbnPreFooter() {
  const whatsappHref = getWhatsAppHref("Hello NCLEX Prep Nation, I would like to subscribe to updates and request access.");

  return (
    <Section className="bg-navy text-white py-12 sm:py-16 text-center border-t border-white/10">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-8">
          Stay Current with NCLEX Prep Nation
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Subscribe to our direct support channels or submit package requests to receive study updates, practice questions, and structured exam preparation assistance.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button href={whatsappHref} variant="whatsapp" className="inline-flex items-center gap-2">
            <MessageCircle size={18} />
            Connect on WhatsApp
          </Button>
          <Button href="/request-access" className="border-white bg-white text-navy hover:bg-teal hover:border-teal">
            Request Program Access
          </Button>
        </div>
      </div>
    </Section>
  );
}
