"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";
import HeroCarousel from "@/components/HeroCarousel";

const rotatingPhrases = ["Cherish Forever", "Wear Every Day", "Gift Beautifully", "Pass Down"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Angled accent shape */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-6">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="eyebrow eyebrow-invert">{siteConfig.brandName} Atelier</span>
          </div>

          <h1 className="mx-auto max-w-xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:mx-0 lg:text-[3.6rem]">
            Pieces Made to{" "}
            <span className="block text-secondary">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base lg:mx-0">
            Fine jewelry, watches, clocks, and silverware, hand-finished and thoughtfully priced — curated for everyday wear and gifts worth keeping.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-white"
            >
              Shop The Collection
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-9 py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex items-center justify-center gap-6 lg:justify-start">
            {["Free Shipping", "60-Day Returns", "1-Yr Warranty"].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-white/55 md:text-xs">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual collage */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-lg">
          <HeroCarousel />
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {["Hand Inspected", "1-Year Warranty", "60-Day Returns", "Free Shipping"].map((point) => (
            <div key={point} className="flex items-center justify-center gap-3 border-b border-black/5 py-5 text-center even:border-l even:border-black/5 md:py-6 lg:border-b-0 lg:border-l lg:first:border-l-0">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text text-xs font-bold" aria-hidden="true">✓</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-primary md:text-xs">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
