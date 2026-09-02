"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-black/[0.06] min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* Seamless dwelling background image layer */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Warm ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-[#E8DDD1]/40 rounded-full blur-3xl opacity-70" />
        
        {/* Right-aligned dwelling background image */}
        <div 
          className="absolute inset-y-0 right-0 w-full lg:w-[58%] h-full opacity-90"
          style={{
            maskImage: "radial-gradient(ellipse 85% 85% at 65% 50%, black 35%, rgba(0,0,0,0.5) 65%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 65% 50%, black 35%, rgba(0,0,0,0.5) 65%, transparent 100%)"
          }}
        >
          <img
            src="/img/hero_family_apparel.jpg"
            alt="Coordinated family wardrobe clothing"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Multi-directional soft fade gradients to melt completely into #FAF8F5 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent lg:via-[#FAF8F5]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-[#FAF8F5]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/80 via-transparent to-[#FAF8F5]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-8 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-black/[0.08] shadow-xs mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/80">
                {siteConfig.brandName} &bull; Essentials
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase text-primary tracking-tight leading-[1.08]">
              The Art of <br />
              <span className="text-secondary">Everyday Living</span> <br />
              For The Whole Family.
            </h1>

            <p className="mt-4 sm:mt-5 max-w-lg text-neutral-text/80 text-xs sm:text-sm md:text-base leading-relaxed mx-auto lg:mx-0 font-medium">
              Thoughtfully tailored organic cottons, soft fleeces, and weather-ready outers crafted for effortless family living.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary transition-all duration-300 py-3.5 px-7 sm:py-4 sm:px-9 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                Shop The Collection &rarr;
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-white/90 backdrop-blur-sm text-primary border border-black/15 hover:border-black/30 transition-all duration-300 py-3.5 px-6 sm:px-8 rounded-full text-xs uppercase tracking-widest shadow-xs"
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

        </div>
      </div>
    </section>
  );
}
