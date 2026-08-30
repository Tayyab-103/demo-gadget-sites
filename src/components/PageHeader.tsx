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
    <section className="relative overflow-hidden bg-[#18121E] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 border-b border-[#C59B7E]/20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18121E] via-[#18121E]/80 to-[#18121E]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-widest text-[#E6C2AC] font-semibold">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white font-bold">{currentLabel}</span>
        </nav>

        {/* Eyebrow Tag */}
        <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#C59B7E] mb-4 select-none">
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-serif text-white leading-tight tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
