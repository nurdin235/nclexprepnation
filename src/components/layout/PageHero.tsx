import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Request Access",
  primaryHref = "/request-access",
  secondaryLabel,
  secondaryHref,
  imageSrc = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  imageAlt = "NCLEX Preparation",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[460px] flex items-center border-b border-line bg-slate-100">
      {/* Full Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
        {/* Clean NCSBN-style overlay gradient for high text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="max-w-2xl text-left">
          <Badge className="bg-clinical/10 text-clinical border-clinical/20">{eyebrow}</Badge>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-navy leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-7 text-slate-700 font-medium max-w-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="gold">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="outline" className="bg-white/80 backdrop-blur-xs">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
