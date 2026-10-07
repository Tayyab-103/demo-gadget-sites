"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";

const rotatingPhrases = ["Create Boldly", "Paint Freely", "Craft Masterpieces", "Inspire Wonder"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Radiant accent glow shape */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-80 sm:h-125 w-80 sm:w-125 rounded-full bg-secondary/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-64 sm:h-96 w-64 sm:w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:grid-cols-2 lg:gap-12">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
            <span className="eyebrow eyebrow-invert text-[0.68rem] sm:text-xs">
              {siteConfig.brandName} Atelier
            </span>
          </div>

          <h1 className="mx-auto max-w-xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black uppercase leading-[1.08] tracking-tight text-white lg:mx-0">
            Supplies Crafted to{" "}
            <span className="block text-secondary mt-1">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="mx-auto mt-5 sm:mt-6 max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-white/70 lg:mx-0">
            Master-grade pigments, handcrafted studio brushes, and premium archival surfaces curated for passionate painters, illustrators, and craft artisans.
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
            <Link
              href="/#shop"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-8 sm:px-9 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-primary shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-white hover:text-primary"
            >
              <span>Shop The Atelier</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-8 sm:px-9 py-3.5 text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              How We Work
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 lg:justify-start flex-wrap">
            {["Free Tracked Shipping", "60-Day Guarantee", "100% Archival Quality"].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-widest text-white/70 md:text-xs">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual collage */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none mt-4 lg:mt-0">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80"
              alt="Artist in atelier mixing oil and acrylic pigments on studio palette"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="animate-float absolute -left-2 top-4 sm:-left-6 sm:top-8 z-20 rounded-2xl border border-black/5 bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-xl">
            <div className="text-xl sm:text-2xl font-black text-primary">15k+</div>
            <div className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/60">
              Artists Equipped
            </div>
          </div>

          {/* Floating secondary image */}
          <div
            className="animate-float absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 z-20 h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 overflow-hidden rounded-2xl border-4 border-primary shadow-xl"
            style={{ animationDelay: "1.2s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=500&q=80"
              alt="Handcrafted fine art paint brushes arranged in studio"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Rating chip */}
          <div
            className="animate-float absolute right-3 top-3 sm:right-6 sm:top-6 z-20 flex items-center gap-2 rounded-full bg-secondary px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl"
            style={{ animationDelay: "0.6s" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-[0.68rem] sm:text-xs font-black text-primary">4.9/5 Master Rating</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-10 md:py-14">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center md:gap-8">
            <div>
              <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-primary">15k+</div>
              <div className="mt-1 sm:mt-1.5 text-[0.55rem] sm:text-[0.62rem] md:text-[0.7rem] font-bold uppercase tracking-widest text-neutral-text/60">
                Artists &amp; Creators
              </div>
            </div>
            <div className="border-l border-primary/15">
              <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-primary">100%</div>
              <div className="mt-1 sm:mt-1.5 text-[0.55rem] sm:text-[0.62rem] md:text-[0.7rem] font-bold uppercase tracking-widest text-neutral-text/60">
                Archival Lightfast
              </div>
            </div>
            <div className="border-l border-primary/15">
              <div className="text-xl sm:text-2xl md:text-4xl font-extrabold text-secondary">4.9★</div>
              <div className="mt-1 sm:mt-1.5 text-[0.55rem] sm:text-[0.62rem] md:text-[0.7rem] font-bold uppercase tracking-widest text-neutral-text/60">
                Studio Reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {["Museum Grade Pigments", "Studio Tested", "60-Day Returns", "Tracked Shipping"].map((point) => (
            <div key={point} className="flex items-center justify-center gap-2 sm:gap-3 border-b border-black/5 py-4 sm:py-5 text-center even:border-l even:border-black/5 md:py-6 lg:border-b-0 lg:border-l lg:first:border-l-0">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text text-[0.6rem] sm:text-xs font-bold" aria-hidden="true">✓</span>
              <span className="text-[0.6rem] sm:text-[0.68rem] font-bold uppercase tracking-widest text-primary md:text-xs">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
