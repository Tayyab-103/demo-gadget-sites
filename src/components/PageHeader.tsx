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
    <section className="relative overflow-hidden bg-sunny-wash pt-36 pb-14 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 grid-paper opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-ink">{currentLabel}</span>
          </nav>
          <span className="eyebrow mb-5">{eyebrow}</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.05]">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted">{subtitle}</p>}
        </div>

        <div className="hidden md:block md:col-span-5">
          <div className="relative rotate-2 rounded-[1.75rem] bg-paper p-2.5 shadow-2xl ring-1 ring-line">
            <span className="tape -top-3 left-8 -rotate-6" />
            <img src={image} alt="" className="h-64 lg:h-72 w-full rounded-[1.3rem] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
