import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Tone = "dark" | "light" | "gold" | "ghost";

const toneClass: Record<Tone, string> = {
  dark: "bg-espresso text-ivory hover:bg-espresso-deep border border-transparent",
  light: "bg-ivory text-espresso hover:bg-cream border border-transparent",
  gold: "bg-gold text-espresso-deep hover:brightness-105 border border-transparent",
  ghost: "bg-transparent text-current border border-current/40 hover:border-current",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.7rem] uppercase tracking-luxe transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function ExternalCta({
  href,
  tone = "dark",
  className = "",
  children,
  ...rest
}: { href: string; tone?: Tone; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${toneClass[tone]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export function LinkCta({
  to,
  tone = "dark",
  className = "",
  children,
  search,
}: {
  to: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  search?: Record<string, string>;
}) {
  return (
    <Link
      to={to}
      search={search as never}
      className={`${base} ${toneClass[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonCta({
  tone = "dark",
  className = "",
  children,
  ...rest
}: { tone?: Tone; children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${toneClass[tone]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`block text-[0.65rem] uppercase tracking-luxe ${
        light ? "text-ivory/70" : "text-wood"
      }`}
    >
      {children}
    </span>
  );
}
