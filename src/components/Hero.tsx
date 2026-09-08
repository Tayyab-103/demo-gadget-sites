"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#07130E] text-white">
      
      {/* ─── 1. CINEMATIC BACKGROUND VIDEO ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-105"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Multi-Layer Emerald & Gold Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E17]/95 via-[#0C1E17]/80 to-[#0C1E17]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17] via-transparent to-[#07130E]/70 z-10" />
        <div className="absolute inset-0 bg-[#0C1E17]/30 backdrop-blur-[1px] z-10" />
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* ─── 2. MAIN HERO CONTENT CONTAINER ─── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-36 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0C1E17]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg shadow-black/40 mb-6">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              Haute Joaillerie & Fine Diamonds
            </span>
            <span className="hidden sm:inline text-white/30 text-xs">|</span>
            <span className="hidden sm:inline text-white/70 text-[0.65rem] uppercase tracking-widest font-semibold">
              Atelier Certified
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight uppercase text-white leading-[1.05] mb-6">
            <span className="block text-white drop-shadow-md">
              TIMELESS HEIRLOOMS,
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E2A9] to-[#D4AF37] drop-shadow-lg">
              SOLID 18K GOLD & GEMS
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10 drop-shadow-sm">
            Discover handcrafted 18-karat solid gold jewelry, conflict-free diamond solitaires, lustrous South Sea pearls, and vibrant emeralds. Each heirloom piece is individually hallmarked and nestled in our signature lacquer case.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] font-bold text-xs uppercase tracking-[0.18em] shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore Jewelry Collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans text-sm">
                &rarr;
              </span>
            </Link>

            <Link
              href="/#features"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] hover:bg-white/10 font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer"
            >
              Why Choose Us
            </Link>
          </div>

        </div>
      </div>

      {/* ─── 3. PROOF PILLARS STRIP ─── */}
      <div className="relative z-20 bg-[#06100C]/90 backdrop-blur-md border-t border-[#D4AF37]/20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {[
            { label: "18K Gold & 925 Silver", desc: "Certified Atelier Hallmarked" },
            { label: "GIA Certified Gems", desc: "Conflict-Free Brilliant Stones" },
            { label: `${siteConfig.trialPeriod || 14}-Day Inspection`, desc: "Hassle-Free Money-Back Guarantee" },
            { label: "Complimentary Delivery", desc: `Insured ${siteConfig.shippingCarrier || "UPS"} Express Transit` },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-center gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center text-xs font-black shrink-0">
                ✦
              </span>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  {item.label}
                </span>
                <span className="block text-[0.68rem] text-white/55 font-light">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
