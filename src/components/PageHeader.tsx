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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#fff9fa] to-white text-[#1e293b] pt-28 pb-12 sm:pt-36 sm:pb-16 md:pt-40 md:pb-18 border-b border-black/5 font-sans">
      {/* Decorative background shapes */}
      <div className="absolute top-8 left-12 w-28 h-28 rounded-full bg-[#ffb703]/20 blur-xl pointer-events-none" />
      <div className="absolute bottom-6 right-16 w-40 h-40 rounded-full bg-[#ff4370]/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Kiddex Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-black/50">
          <Link href="/" className="hover:text-[#ff4370] transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#ff4370]">{currentLabel}</span>
        </nav>

        {eyebrow && (
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#ff4370]/10 text-[#ff4370] text-xs font-black uppercase tracking-wider mb-3">
            {eyebrow}
          </span>
        )}

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] leading-tight tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-black/65 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
