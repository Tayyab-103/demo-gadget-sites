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
    <section className="relative overflow-hidden bg-black text-white pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-secondary">{currentLabel}</span>
        </nav>

        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-white/70 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </div>

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/75 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
