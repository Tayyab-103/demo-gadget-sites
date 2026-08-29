"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[660px] md:min-h-[720px] overflow-hidden bg-[#0A0F1D] text-white flex items-center pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      {/* Background Image */}
      <img
        src="/img/hero-uniforms.jpg"
        alt="Ironvale Commercial Uniforms"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-center opacity-85 select-none pointer-events-none"
      />

      {/* Gradient Fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent md:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60 pointer-events-none md:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          
          {/* Eyebrow */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-white/70 mb-4 select-none">
            WORKFORCE APPAREL
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[1.08] tracking-tight mb-4">
            Equip Your Crew <br />
            <span className="font-bold text-white">For Peak Duty.</span>
          </h1>

          {/* Concise Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-lg">
            Tactical workwear, antimicrobial scrubs, and executive culinary coats engineered for continuous shift durability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-white bg-[#0A0F1D] border border-white/40 hover:border-white hover:bg-white/10 transition-all py-3.5 px-8 rounded-full text-center"
            >
              Explore Collection ↗
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors py-3.5 px-4 text-center underline underline-offset-8 decoration-1 decoration-white/30 hover:decoration-white"
            >
              Our Story
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-8 pt-5 border-t border-white/15 grid grid-cols-3 gap-3 max-w-md text-[0.68rem] sm:text-xs text-slate-300 font-medium">
            <div>1000D Cordura</div>
            <div>Silvadur™ Protection</div>
            <div>14-Day Fit Trial</div>
          </div>

        </div>
      </div>
    </section>
  );
}
