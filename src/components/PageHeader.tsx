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
    <section className="relative overflow-hidden bg-[#0D1B2A] text-white pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 border-b border-[#C87D3B]/30">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-[#0D1B2A]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-3.5 sm:mb-4 flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-widest text-white/60 font-semibold">
          <Link href="/" className="hover:text-[#C87D3B] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#C87D3B]">{currentLabel}</span>
        </nav>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
