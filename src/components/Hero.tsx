"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-130 w-130 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-130 w-130 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Main hero grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-16 md:pt-16 md:pb-20 lg:py-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:min-h-[580px]">
          
          {/* Left Column: Copy (7 cols on desktop) */}
          <div className="text-center lg:text-left lg:col-span-7 lg:py-16 xl:pr-8">
            <div className="mb-5 flex justify-center lg:justify-start">
              <span className="eyebrow eyebrow-invert">{siteConfig.brandName}</span>
            </div>

            <h1 className="mx-auto max-w-xl text-4xl font-black uppercase leading-[1.08] tracking-tight text-white md:text-5xl lg:mx-0 lg:text-[3.4rem]">
              Crafted for <br />
              <span className="block text-secondary">
                Pure Tone &amp; Resonance
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/70 md:text-base lg:mx-0">
              Artisanal acoustic hardware, calibrated tuners, and studio-grade audio accessories engineered for musicians, producers, and tone seekers.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-xs font-black uppercase tracking-widest text-primary shadow-xl shadow-secondary/20 transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-2xl"
              >
                Explore Collection
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/20 px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
              >
                Our Workshop
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
              {["Studio Calibrated", "Free Nationwide Dispatch", "1-Yr Warranty"].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/60 md:text-xs">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Seamless Dwelling Visual (5 cols on desktop) */}
          <div className="relative w-full lg:col-span-5 h-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none h-[380px] sm:h-[450px] lg:h-[540px] rounded-3xl lg:rounded-l-[3rem] lg:rounded-r-none overflow-hidden border border-white/10 lg:border-r-0 shadow-2xl bg-black/40">
              
              {/* Main integrated photography */}
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80"
                alt="Velvet Echo Musical Workshop craftsmanship"
                className="w-full h-full object-cover object-center"
              />

              {/* Edge Gradient Mask to dwell seamlessly into the dark section */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent lg:bg-gradient-to-r lg:from-primary lg:via-transparent lg:to-transparent opacity-90" />
              
              {/* Subtle top/bottom rim shading */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/80 pointer-events-none" />

              {/* Inset workshop information caption */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-10 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 backdrop-blur-md border border-secondary/30 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span className="text-[0.65rem] font-black uppercase tracking-widest text-secondary">
                    Austin, TX Workshop Bench
                  </span>
                </div>
                <div className="text-white font-bold text-sm md:text-base leading-snug drop-shadow-md">
                  Hand-inspected acoustic resonance, pitch stability &amp; signal purity.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-7 md:py-10">
          <div className="grid grid-cols-3 gap-4 text-center md:gap-8">
            <div>
              <div className="text-2xl font-black text-primary md:text-4xl">100%</div>
              <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Intonation Verified</div>
            </div>
            <div className="border-l border-black/10">
              <div className="text-2xl font-black text-primary md:text-4xl">1-Yr</div>
              <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Workshop Warranty</div>
            </div>
            <div className="border-l border-black/10">
              <div className="text-2xl font-black text-secondary md:text-4xl">4.9★</div>
              <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Player Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {["Studio Calibrated", "1-Year Warranty", "30-Day Tone Guarantee", "Free Dispatch"].map((point) => (
            <div key={point} className="flex items-center justify-center gap-3 border-b border-black/5 py-4 text-center even:border-l even:border-black/5 md:py-5 lg:border-b-0 lg:border-l lg:first:border-l-0">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-[0.65rem] font-black" aria-hidden="true">✓</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-primary md:text-xs">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
