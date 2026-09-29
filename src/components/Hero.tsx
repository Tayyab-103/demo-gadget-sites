"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  const [activeHero, setActiveHero] = useState<"hero2" | "hero1">("hero2");

  return (
    <section className="relative bg-neutral-bg pt-6 pb-8 sm:pt-10 sm:pb-12 md:pt-16 md:pb-16 overflow-hidden w-full">
      {/* Ambient Backdrop Glows */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[450px] bg-gradient-to-b from-secondary/30 via-primary/5 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -bottom-16 left-4 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Actions (6 cols) */}
          <div className="lg:col-span-6 text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5 sm:mb-4">
              <span className="text-xs">✨</span>
              <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-primary truncate max-w-[240px] sm:max-w-none">
                {siteConfig.brandName.toUpperCase()}
              </span>
            </div>

            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-primary tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5">
              Pure Comfort, <br />
              <span className="text-primary/80 italic font-serif">Gentle Care &amp; Essentials,</span> <br />
              For Your Little One
            </h1>

            <p className="text-neutral-text/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-6 sm:mb-8">
              Explore thoughtfully designed ergonomic bouncers, all-position carriers, portable diaper caddies, and sensory play gyms crafted for the comfort, safety, and joy of your baby.
            </p>

            {/* Action Buttons: Responsive stacking on mobile */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg text-center"
              >
                <span>Shop Baby Essentials</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary border border-primary/20 hover:bg-neutral-bg transition-all duration-300 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xs text-center"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Mobile Guarantee Trust Strip */}
            <div className="flex items-center gap-2 text-[0.72rem] sm:text-xs font-semibold text-neutral-text/75">
              <span className="text-primary text-sm font-bold">✓</span>
              <span>Featuring newborn essentials &amp; volume bundle savings</span>
            </div>
          </div>

          {/* Right Column: Hero Dual-Image Showcase (6 cols) */}
          <div className="lg:col-span-6 relative w-full mt-2 sm:mt-0">
            <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Primary Main Hero Image Card (7 cols) */}
              <div
                onClick={() => setActiveHero("hero2")}
                className={`col-span-7 relative rounded-2xl sm:rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-2 transition-all duration-500 cursor-pointer aspect-[3/4] sm:aspect-[4/5] bg-stone-100 group ${
                  activeHero === "hero2"
                    ? "border-primary ring-2 sm:ring-4 ring-secondary/40 scale-[1.01] sm:scale-[1.02]"
                    : "border-stone-200 opacity-90 hover:opacity-100"
                }`}
              >
                <img
                  src="/img/hero2.jpg"
                  alt="Baby Products & Parenting Essentials"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/Baby Bouncer.jpg";
                  }}
                />

                {/* Floating Top Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10">
                  <span className="bg-primary text-white text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md backdrop-blur-md">
                    ✨ Pure &amp; Gentle
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 md:p-6 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent text-white">
                  <span className="text-[0.52rem] sm:text-[0.62rem] uppercase tracking-wider font-bold text-[#FFDBE5] block mb-0.5 sm:mb-1">
                    Baby Lifestyle
                  </span>
                  <h3 className="font-serif text-xs sm:text-base md:text-lg font-bold text-white leading-tight">
                    Nurturing &amp; Snug
                  </h3>
                </div>
              </div>

              {/* Secondary Hero Image Card (5 cols) */}
              <div
                onClick={() => setActiveHero("hero1")}
                className={`col-span-5 relative rounded-2xl sm:rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-2 transition-all duration-500 cursor-pointer aspect-[3/4] sm:aspect-[4/5] bg-stone-100 group ${
                  activeHero === "hero1"
                    ? "border-primary ring-2 sm:ring-4 ring-secondary/40 scale-[1.01] sm:scale-[1.02]"
                    : "border-stone-200 opacity-90 hover:opacity-100"
                }`}
              >
                <img
                  src="/img/hero1.jpg"
                  alt="Baby Essentials & Nursery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/Baby Carrier.jpg";
                  }}
                />

                {/* Floating Top Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10">
                  <span className="bg-secondary text-primary text-[0.52rem] sm:text-[0.62rem] font-bold uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                    ⭐ Best
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4 md:p-5 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent text-white">
                  <span className="text-[0.52rem] sm:text-[0.62rem] uppercase tracking-wider font-bold text-[#FFDBE5] block mb-0.5">
                    Essential
                  </span>
                  <h3 className="font-serif text-[0.72rem] sm:text-sm md:text-base font-bold text-white leading-tight">
                    For Babies
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
