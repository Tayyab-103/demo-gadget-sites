"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[580px] h-[84vh] max-h-[860px] overflow-hidden bg-[#121820] text-[#FAF8F5]">
      {/* Background Image: Vivid high-res stationery & fountain pen visual */}
      <img
        src="https://images.unsplash.com/photo-1585336261026-7f91754020a5?w=1800&q=85"
        alt="Quillhaven Fine Stationery and Fountain Pens"
        className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[82%_center] opacity-80 sm:opacity-90 select-none pointer-events-none"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1800&q=85";
        }}
      />

      {/* Layer 2: Seamless Dark-to-Transparent Gradient for Left-Side Text Legibility */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(18, 24, 32, 0.98) 0%, rgba(18, 24, 32, 0.92) 36%, rgba(18, 24, 32, 0.58) 58%, rgba(18, 24, 32, 0.15) 82%, transparent 100%)",
        }}
      />

      {/* Mobile Subtle Bottom Shadow for Small Screens */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(18, 24, 32, 0.94) 0%, rgba(18, 24, 32, 0.45) 50%, transparent 80%)",
        }}
      />

      {/* Bottom Gradient Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(18, 24, 32, 1) 0%, transparent 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-16 sm:pt-20">
        <div className="max-w-2xl">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.4rem] font-serif font-bold text-[#FAF8F5] leading-[1.08] tracking-tight mb-4 sm:mb-5">
            Words Preserved <br />
            <span className="text-[#C5A059] italic font-normal font-serif">In Timeless Craft.</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-[#FAF8F5]/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal mb-7 sm:mb-9">
            Precision-balanced fountain pens, full-grain leather bound journals with 160 GSM bleedproof parchment, and hand-cast solid brass desk accessories engineered for visionary prose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold uppercase tracking-[0.14em] text-[#121820] text-xs sm:text-sm bg-[#C5A059] hover:bg-[#D4AF37] transition-all duration-200 py-3.5 px-8 rounded-full shadow-lg text-center hover:scale-105"
            >
              Explore Collections →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-serif text-xs sm:text-sm border border-[#C5A059]/60 text-[#FAF8F5] hover:bg-[#C5A059]/20 transition-all duration-200 py-3.5 px-7 rounded-full text-center backdrop-blur-xs"
            >
              Our Atelier Heritage
            </Link>
          </div>

          {/* Highlights Mini-Bar */}
          <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-[#C5A059]/20 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg text-[0.65rem] sm:text-xs text-[#FAF8F5]/70">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C5A059]">✓</span>
              <span>160 GSM Zero Bleed</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C5A059]">✓</span>
              <span>Solid Brass Casting</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C5A059]">✓</span>
              <span>14-Day Studio Trial</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
