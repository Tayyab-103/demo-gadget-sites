"use client";

import TypewriterText from "@/components/TypewriterText";
import { SiteConfig } from "@/types";
import Link from "next/link";
import React from "react";
import siteConfigData from "../../config/site-config.json";

const rotatingPhrases = ["Living Space", "Cozy Sanctuary", "Dream Bedroom", "Dining Area"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Full-bleed background video */}
      <div className="relative flex min-h-[600px] items-center overflow-hidden md:min-h-[680px]">
        <video
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0 opacity-40"
        />

        {/* Readability overlay */}
        <div className="absolute inset-0 z-10 bg-primary/65" />
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

      {/* Proof points scrolling ticker */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg overflow-hidden py-4 md:py-5">
        <div className="flex items-center">
          <div className="marquee-track flex items-center gap-16 w-max">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                {["Artisanal Joinery", "Lifetime Guarantee", "60-Day Comfort Trial", "White-Glove Shipping"].map((point) => (
                  <div key={`${point}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text text-[10px] font-bold" aria-hidden="true">✓</span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-primary md:text-xs">{point}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
