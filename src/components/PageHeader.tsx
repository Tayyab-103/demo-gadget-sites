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
    <section className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-y-0 right-0 w-full md:w-3/5 bg-cover bg-center opacity-40 md:opacity-70"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/30" />
      <div className="absolute inset-0 bg-topo" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-widest text-white/60">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-secondary">{currentLabel}</span>
        </nav>

        <span className="eyebrow eyebrow-invert mb-4">{eyebrow}</span>

        <h1 className="max-w-3xl text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.02]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
      <div className="relative z-10 h-1.5 bg-secondary" aria-hidden="true" />
    </section>
  );
}
