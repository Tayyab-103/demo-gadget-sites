"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-black/[0.06]">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Editorial Copy (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/80">
                {siteConfig.brandName} &bull; Essentials
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black uppercase text-primary tracking-tight leading-[1.1]">
              The Art of <br />
              <span className="text-secondary">Everyday Living</span> <br />
              For The Whole Family.
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-neutral-text/70 text-xs sm:text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
              Thoughtfully tailored organic crew tees, soft French terry fleeces, and all-weather outers designed to move effortlessly with parents and youth through life&apos;s daily adventures.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary transition-all duration-300 py-3.5 px-7 sm:py-4 sm:px-9 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                Shop The Collection &rarr;
              </Link>
              <Link
                href="/#about"
                className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-white text-primary border border-black/15 hover:border-black/30 transition-all duration-300 py-3 sm:py-3.5 px-6 sm:px-8 rounded-full text-xs uppercase tracking-widest shadow-xs"
              >
                Our Craft &amp; Story
              </Link>
            </div>

            {/* Feature Badges */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-black/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-primary">100% Organic</div>
                <div className="text-[0.62rem] sm:text-[0.68rem] text-neutral-text/60 mt-0.5">Combed Ring-Spun</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-primary">Pre-Shrunk</div>
                <div className="text-[0.62rem] sm:text-[0.68rem] text-neutral-text/60 mt-0.5">Shape Retention</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-primary">Non-Toxic</div>
                <div className="text-[0.62rem] sm:text-[0.68rem] text-neutral-text/60 mt-0.5">OEKO-TEX Certified</div>
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-secondary">60-Day Fit</div>
                <div className="text-[0.62rem] sm:text-[0.68rem] text-neutral-text/60 mt-0.5">Hassle-Free Returns</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Picture (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1000&q=80"
                  alt="Coordinated family wardrobe clothing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
