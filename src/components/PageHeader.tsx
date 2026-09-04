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
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-secondary">{currentLabel}</span>
        </nav>

        <span className="eyebrow eyebrow-invert mb-5 justify-center">{eyebrow}</span>

        <h1 className="mx-auto max-w-2xl text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
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
