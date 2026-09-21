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
    <section
      className="relative overflow-hidden text-white pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 border-b border-white/10"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, var(--primary-color) 0%, color-mix(in srgb, var(--primary-color) 85%, transparent) 50%, color-mix(in srgb, var(--secondary-color) 40%, transparent) 100%)"
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-white/70">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: "var(--secondary-color)" }}>{currentLabel}</span>
        </nav>

        {eyebrow && (
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.68rem] font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 25%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              {eyebrow}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
