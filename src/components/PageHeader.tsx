"use client";

import type { ReactNode } from "react";
import Link from "next/link";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  currentLabel: string;
}

export default function PageHeader({ eyebrow, title, subtitle, image, currentLabel }: PageHeaderProps) {
  return (
    <section className="bg-brand-soft relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-80 w-80 -translate-y-1/2 rotate-6 rounded-[2.5rem] bg-cover bg-center opacity-90 shadow-2xl ring-8 ring-white md:block lg:right-16"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container-page relative z-10 py-16 text-center md:py-24 md:text-left">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold text-ink/50 md:justify-start">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary">{currentLabel}</span>
        </nav>

        <span className="eyebrow">{eyebrow}</span>

        <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-ink md:mx-0 md:max-w-xl md:text-5xl lg:max-w-2xl">
          {title}
        </h1>

        {subtitle && <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink/60 md:mx-0 md:text-base">{subtitle}</p>}
      </div>
    </section>
  );
}
