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
    <section className="relative overflow-hidden bg-primary text-primary-text pt-32 pb-14 sm:pt-36 sm:pb-16 md:pt-44 md:pb-20">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${image}')` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" aria-hidden="true" />
      <div className="absolute inset-0 peak-pattern opacity-30" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/55">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-secondary">{currentLabel}</span>
        </nav>

        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.02]">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/75">{subtitle}</p>}
      </div>
    </section>
  );
}
