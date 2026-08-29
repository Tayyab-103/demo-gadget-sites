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
    <section className="relative overflow-hidden bg-[#121820] text-[#FAF8F5] pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 border-b border-[#C5A059]/30">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-[#121820]/80 to-[#121820]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-3.5 sm:mb-4 flex items-center justify-center gap-2 text-[0.68rem] font-serif uppercase tracking-widest text-[#FAF8F5]/60">
          <Link href="/" className="hover:text-[#C5A059] transition-colors">Atelier Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#C5A059]">{currentLabel}</span>
        </nav>

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3.5 sm:mb-4">
          <span>✦</span>
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#FAF8F5] leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#FAF8F5]/80 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
