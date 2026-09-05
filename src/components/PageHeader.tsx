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
    <section className="relative overflow-hidden bg-[#0A0F1D] text-white pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 border-b border-slate-800 select-none">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-[#0A0F1D]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-[0.68rem] uppercase tracking-widest text-slate-400 font-bold font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">{currentLabel}</span>
        </nav>

        {/* Eyebrow Tag */}
        <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 select-none">
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
