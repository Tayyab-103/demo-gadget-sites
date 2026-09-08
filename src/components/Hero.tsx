"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  const [activeHero, setActiveHero] = useState<"hero" | "hero1">("hero");

  return (
    <section className="relative bg-neutral-bg pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 overflow-hidden w-full">
      {/* Ambient Backdrop Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-gradient-to-b from-secondary/15 via-primary/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Actions (6 cols) */}
          <div className="lg:col-span-6 text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-4">
              <span className="text-xs">🐾</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                {siteConfig.brandName.toUpperCase()}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-primary tracking-tight leading-[1.12] mb-4 sm:mb-5">
              Wholesome Pet Care, <br />
              <span className="text-secondary italic font-serif">Supplies &amp; Essentials,</span> <br />
              All in One Place
            </h1>

            <p className="text-neutral-text/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-6 sm:mb-8">
              Explore thoughtfully engineered travel carrier backpacks, dental chew toys, and self-cleaning litter care essentials crafted for the health, joy, and comfort of your furry companions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2.5 bg-secondary text-white hover:bg-primary transition-all duration-300 px-7 sm:px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                <span>Shop Pet Supplies</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Dual-Image Showcase (6 cols) */}
          <div className="lg:col-span-6 relative w-full">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Main Hero Image Card (7 cols) */}
              <div
                onClick={() => setActiveHero("hero")}
                className={`col-span-7 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl border-2 transition-all duration-500 cursor-pointer aspect-[4/5] bg-stone-100 group ${
                  activeHero === "hero"
                    ? "border-secondary ring-4 ring-secondary/20 scale-[1.02]"
                    : "border-stone-200 opacity-90 hover:opacity-100"
                }`}
              >
                <img
                  src="/img/hero.jpg"
                  alt="Pet Supplies & Companion Care"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/product1.jpg";
                  }}
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-white text-[0.65rem] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                    🐾 Premium Pet Care
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <span className="text-[0.62rem] uppercase tracking-wider font-bold text-secondary block mb-1">
                    Pet Lifestyle
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                    Joyful Play &amp; Travel
                  </h3>
                </div>
              </div>

              {/* Secondary Hero Image Card (5 cols) */}
              <div
                onClick={() => setActiveHero("hero1")}
                className={`col-span-5 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl border-2 transition-all duration-500 cursor-pointer aspect-[4/5] bg-stone-100 group ${
                  activeHero === "hero1"
                    ? "border-secondary ring-4 ring-secondary/20 scale-[1.02]"
                    : "border-stone-200 opacity-90 hover:opacity-100"
                }`}
              >
                <img
                  src="/img/hero1.jpg"
                  alt="Pet Food & Supplies Essentials"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/product2.jpg";
                  }}
                />

                {/* Floating Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-secondary text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    ⭐ Bestsellers
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                  <span className="text-[0.62rem] uppercase tracking-wider font-bold text-secondary block mb-0.5">
                    Essential Supplies
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-bold text-white leading-tight">
                    Curated for Pets
                  </h3>
                </div>
              </div>

            </div>

            {/* Quick Link Pill Below Hero */}
            <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-neutral-text/70">
              <span className="text-secondary text-sm">✓</span>
              <span>Featuring new seasonal arrivals &amp; multi-pack volume tiers</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
