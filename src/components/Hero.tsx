"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary min-h-[580px] md:min-h-[640px] flex items-center">
      {/* Background ambient warm acoustic guitar photo dwelling in the background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right lg:bg-[center_right_15%] bg-no-repeat opacity-45"
        style={{ backgroundImage: `url('/img/hero_guitar_master_a.jpg')` }}
      />

      {/* Dark gradient vignettes for seamless ambient dwelling */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-primary/85 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-transparent to-primary/80" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-130 w-130 rounded-full bg-secondary/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-130 w-130 rounded-full bg-secondary/10 blur-3xl" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 w-full">
        <div className="max-w-2xl">
          <div className="mb-5 flex justify-start">
            <span className="eyebrow eyebrow-invert">{siteConfig.brandName}</span>
          </div>

          <h1 className="text-4xl font-black uppercase leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[3.8rem]">
            Crafted for <br />
            <span className="block text-secondary">
              Pure Tone &amp; Resonance
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            Artisanal acoustic hardware, calibrated tuners, and studio-grade audio accessories engineered for musicians, producers, and tone seekers.
          </p>

          <div className="mt-10 flex flex-col items-stretch sm:items-center gap-4 sm:flex-row justify-start">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-xs font-black uppercase tracking-widest text-primary shadow-xl shadow-secondary/20 transition-all duration-300 hover:bg-white hover:text-primary hover:shadow-2xl"
            >
              Explore Collection
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary"
            >
              Our Workshop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
