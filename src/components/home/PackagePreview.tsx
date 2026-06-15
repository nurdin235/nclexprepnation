import { Check } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { prepPackages } from "@/data/packages";
import { cn } from "@/lib/utils";

export function PackagePreview() {
  return (
    <Section className="border-t border-line">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical">
            Preparation packages
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Choose the Support That Fits Your Preparation
          </h2>
        </div>
        <Button href="/packages" variant="outline">
          Compare All Packages
        </Button>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {prepPackages.map((item) => (
          <Card
            className={cn(
              "flex h-full flex-col p-6",
              item.featured && "border-clinical ring-1 ring-clinical bg-soft/20",
            )}
            key={item.slug}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-navy">{item.name}</h3>
              {item.featured ? <Badge>Popular</Badge> : null}
            </div>
            <p className="mt-3 text-2xl font-extrabold text-clinical">
              {item.price}
            </p>
            <p className="mt-2 text-xs font-semibold text-clinical">
              {item.bestFor}
            </p>
            <p className="mt-2 text-xs leading-5 text-muted flex-1">
              {item.description}
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-line pt-4 flex-1">
              {item.features.map((feature) => (
                <li className="flex gap-2 text-xs text-ink" key={feature}>
                  <Check
                    aria-hidden
                    className="mt-0.5 shrink-0 text-success"
                    size={14}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className="mt-6 w-full text-xs"
              href={
                item.slug === "free"
                  ? "/free-diagnostic"
                  : `/request-access?package=${item.slug}`
              }
              variant={item.featured ? "primary" : "outline"}
            >
              {item.cta}
            </Button>
          </Card>
        ))}
      </div>
      <p className="mt-8 border-l-3 border-clinical bg-soft px-5 py-4 text-sm leading-7 text-muted">
        Payments are handled through a manual request process. After submitting
        a request, our team will contact you by WhatsApp or email with package
        details, payment instructions, and access confirmation.
      </p>
    </Section>
  );
}
