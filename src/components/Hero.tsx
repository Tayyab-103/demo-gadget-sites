"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";

const rotatingPhrases = [
  "Peak Performance",
  "Muscle Recovery",
  "Bio Telemetry",
  "Everyday Strength",
];

const siteConfig = siteConfigData as unknown as SiteConfig;

const proofPoints = [
  { label: "Stress Tested", val: "100+ Hours" },
  { label: "Fast Shipping", val: "24h Dispatch" },
  { label: "Trial Period", val: "60 Days" },
  { label: "Warranty", val: "1-Year Full" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center overflow-hidden bg-[#0A0B0E] text-white py-12 sm:py-16 md:py-20">
      {/* Background Image dwelling in Hero - visible on the right side */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/img/hero_bg.jpg"
          alt="Athletic Performance Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-right-center lg:object-center opacity-70 sm:opacity-80"
        />
        
        {/* Directional gradient: solid dark on left for typography readability, open on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E] via-[#0A0B0E]/90 sm:via-[#0A0B0E]/75 via-45% md:via-55% to-[#0A0B0E]/20 lg:to-transparent" />
        
        {/* Top and bottom subtle vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0E]/80 via-transparent to-[#0A0B0E]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
            <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wider text-white/80">
              {siteConfig.brandName} • 2026 Collection
            </span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] text-white">
            Engineered For <br />
            <span className="text-white/90">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-white/70 leading-relaxed font-normal">
            Pro-grade athletic training gadgets, percussion therapy, and bio-wearables engineered for everyday champions.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 sm:px-8 py-3.5 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A0B0E] transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              <span>Shop Collection</span>
              <span>→</span>
            </Link>

            <a
              href="#tech-specs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 sm:px-7 py-3.5 text-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-white hover:bg-white/10 transition-all duration-200"
            >
              Explore Specs
            </a>
          </div>

          {/* Proof Points */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            {proofPoints.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-[0.62rem] font-semibold uppercase tracking-wider text-white/50">
                  {item.label}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                  {item.val}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
