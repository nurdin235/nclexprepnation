import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "gold";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-clinical text-white border-clinical hover:bg-navy hover:border-navy",
  secondary: "bg-teal text-navy border-teal hover:bg-[#159488]",
  outline:
    "bg-white text-navy border-line hover:border-clinical hover:text-clinical",
  ghost: "border-transparent text-navy hover:bg-soft",
  whatsapp:
    "border-[#128c7e] bg-[#128c7e] text-white hover:border-[#0d756a] hover:bg-[#0d756a]",
  gold:
    "bg-gold text-navy border-gold hover:bg-gold-hover hover:border-gold-hover",
};

export function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-clinical/20 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
