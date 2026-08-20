"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import TypewriterText from "@/components/TypewriterText";

const rotatingPhrases = ["Train Harder", "Recover Faster", "Move Smarter", "Perform Longer"];

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Angled accent shape */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-14 pb-16 md:pt-20 md:pb-24 lg:grid-cols-2 lg:gap-8">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <span className="eyebrow eyebrow-invert">{siteConfig.brandName} Gear Lab</span>
          </div>

          <h1 className="mx-auto max-w-xl text-4xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-6xl lg:mx-0 lg:text-[3.6rem]">
            Gear Built to{" "}
            <span className="block text-secondary">
              <TypewriterText phrases={rotatingPhrases} />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base lg:mx-0">
            Engineered training gadgets for strength, recovery, and everyday performance — tested by athletes, priced for real training budgets.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-secondary px-9 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary shadow-lg shadow-secondary/20 transition-all duration-300 hover:bg-white"
            >
              Shop The Range
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
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=900&q=80"
              alt="Athlete training with performance gear"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="animate-float absolute -left-4 top-8 z-20 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl md:-left-10">
            <div className="text-2xl font-black text-primary">10k+</div>
            <div className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50">Athletes Equipped</div>
          </div>

          {/* Floating secondary image */}
          <div
            className="animate-float absolute -bottom-8 -right-4 z-20 h-32 w-32 overflow-hidden rounded-2xl border-4 border-primary shadow-xl md:-right-10 md:h-40 md:w-40"
            style={{ animationDelay: "1.2s" }}
          >
            <img
              src="https://images.unsplash.com/photo-1616803689943-5601631c7fec?w=500&q=80"
              alt="Athlete completing a training rep outdoors"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Rating chip */}
          <div
            className="animate-float absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 shadow-xl md:right-8"
            style={{ animationDelay: "0.6s" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-xs font-black text-primary">4.9/5 Rated</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10 md:py-14">
          <div className="grid grid-cols-3 gap-4 text-center md:gap-8">
            <div>
              <div className="text-2xl font-extrabold text-primary md:text-4xl">10k+</div>
              <div className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Athletes Equipped</div>
            </div>
            <div className="border-l border-primary/15">
              <div className="text-2xl font-extrabold text-primary md:text-4xl">1-Yr</div>
              <div className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Warranty Coverage</div>
            </div>
            <div className="border-l border-primary/15">
              <div className="text-2xl font-extrabold text-secondary md:text-4xl">4.9★</div>
              <div className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50 md:text-[0.7rem]">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Proof points */}
      <div className="relative z-10 border-t border-black/5 bg-neutral-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {["Field Tested", "1-Year Warranty", "60-Day Returns", "Free Shipping"].map((point) => (
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
