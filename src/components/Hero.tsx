"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[640px] sm:min-h-[720px] md:min-h-[800px] overflow-hidden bg-[#18121E] text-white flex items-center pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24">
      {/* Background Image */}
      <img
        src="/img/fashion-hero.jpg"
        alt="Rosethorne Fashion Atelier Couture Collection"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] sm:object-center opacity-85 select-none pointer-events-none"
      />

      {/* Gradient Fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#18121E] via-[#18121E]/80 to-transparent md:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#18121E] via-transparent to-[#18121E]/70 pointer-events-none md:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          
          {/* Eyebrow */}
          <span className="text-[0.68rem] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#E6C2AC] block mb-4 select-none">
            THE 2026 COUTURE REPERTOIRE
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.08] tracking-tight mb-5">
            Elegance Draped <br />
            <span className="italic font-normal text-[#E6C2AC]">In Pure Silk.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
            Mastercrafted 22-momme pure mulberry silk slip dresses, sculpted double-faced cashmere trench coats, and French Chantilly lace evening gowns.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-[#18121E] bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 transition-all py-3.5 px-8 rounded-full text-center shadow-lg shadow-[#C59B7E]/20 uppercase tracking-wider"
            >
              Explore Collection ↗
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors py-3.5 px-5 text-center underline underline-offset-8 decoration-1 decoration-[#C59B7E]/50 hover:decoration-[#C59B7E] uppercase tracking-wider"
            >
              The Atelier Story
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-3 max-w-md text-[0.7rem] sm:text-xs text-slate-300 font-medium">
            <div>✦ 22-Momme Silk</div>
            <div>✦ French Chantilly</div>
            <div>✦ 14-Day Fit Trial</div>
          </div>

        </div>
      </div>
    </section>
  );
}
