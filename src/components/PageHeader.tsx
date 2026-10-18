"use client";

import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  currentLabel: string;
}

export default function PageHeader({ eyebrow, title, subtitle, image, currentLabel }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary">{currentLabel}</span>
        </nav>

        <span className="mb-5 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary-text">{eyebrow}</span>

        <h1 className="mx-auto max-w-2xl text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 max-w-xl text-sm md:text-base leading-relaxed text-white/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
