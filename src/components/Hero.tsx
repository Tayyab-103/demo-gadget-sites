"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";
import HeroCarousel from "@/components/HeroCarousel";

const rotatingPhrases = ["Living Space", "Cozy Sanctuary", "Dream Bedroom", "Dining Area"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Full-bleed background carousel */}
      <div className="relative flex min-h-[600px] items-center overflow-hidden md:min-h-[680px]">
        <HeroCarousel />

        {/* Readability overlay */}
        <div className="absolute inset-0 z-10 bg-primary/45" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />

        {/* Content */}
        <div className="relative z-20 mx-auto w-full max-w-4xl px-6 py-20 text-center md:py-28">
          <div className="mb-6 flex justify-center">
            <span className="eyebrow eyebrow-invert">{siteConfig.brandName}</span>
          </div>

          <h1 className="mx-auto max-w-2xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl">
            Elevate Your{" "}
            <span className="block text-secondary">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
            Thoughtfully crafted furniture, lighting, and textiles — designed to bring comfort, durability, and timeless styling to your home.
          </p>

          <div className="mt-9 flex justify-center">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-sm font-bold uppercase tracking-widest text-secondary-text shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Shop The Collection
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {["Artisanal Joinery", "Lifetime Guarantee", "60-Day Comfort Trial", "White-Glove Shipping"].map((point) => (
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
