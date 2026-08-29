"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[720px] md:min-h-[760px] lg:min-h-[820px] overflow-hidden bg-[#0D1B2A] text-[#F8F6F0] flex items-center pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20">
      {/* Background Image: Luxury airport lounge luggage photograph */}
      <img
        src="/img/hero-luggage-travel.jpg"
        alt="Wanderloom Luxury Aluminum Suitcases and Travel Duffle Bags"
        className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[82%_center] lg:object-[85%_center] opacity-85 sm:opacity-95 select-none pointer-events-none"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=1800&q=85";
        }}
      />

      {/* Subtle Top Gradient for Header Transition */}
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13, 27, 42, 0.85) 0%, rgba(13, 27, 42, 0.3) 60%, transparent 100%)",
        }}
      />

      {/* Seamless Dark-to-Transparent Gradient for Left-Side Text Legibility */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(13, 27, 42, 0.97) 0%, rgba(13, 27, 42, 0.92) 36%, rgba(13, 27, 42, 0.58) 58%, rgba(13, 27, 42, 0.15) 80%, transparent 100%)",
        }}
      />

      {/* Mobile Subtle Shadow */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(13, 27, 42, 0.95) 0%, rgba(13, 27, 42, 0.45) 50%, transparent 80%)",
        }}
      />

      {/* Bottom Gradient Fade into page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 sm:h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(13, 27, 42, 1) 0%, rgba(13, 27, 42, 0.5) 45%, transparent 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C87D3B]/20 border border-[#C87D3B]/40 text-[#E5985A] text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] mb-4 backdrop-blur-xs">
            <span>✈</span> Aerospace Engineering Meets Global Transit
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-extrabold text-white leading-[1.08] tracking-tight mb-4 sm:mb-5 uppercase">
            Depart With <br />
            <span className="text-[#C87D3B] font-light italic">Effortless Grace.</span>
          </h1>

          {/* Supporting paragraph */}
          <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal mb-7 sm:mb-8">
            Precision-milled aerospace aluminum spinners, Italian full-grain leather weekender duffles, and modular vacuum-compression packing systems designed for the modern global traveler.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-extrabold uppercase tracking-[0.16em] text-white text-xs sm:text-sm bg-[#C87D3B] hover:bg-[#D98745] transition-all duration-200 py-3.5 px-8 rounded-full shadow-xl text-center hover:scale-105"
            >
              Explore Luggage &amp; Gear →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold uppercase tracking-wider border border-white/40 text-white hover:bg-white/10 transition-all duration-200 py-3.5 px-7 rounded-full text-center backdrop-blur-xs"
            >
              Our Engineering Standard
            </Link>
          </div>

          {/* Highlights Mini-Bar */}
          <div className="mt-7 sm:mt-10 pt-4 sm:pt-5 border-t border-[#C87D3B]/25 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg text-[0.65rem] sm:text-xs text-white/80">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C87D3B]">✓</span>
              <span>Japanese Hinomoto 360°</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C87D3B]">✓</span>
              <span>Dual TSA Integrated Locks</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[#C87D3B]">✓</span>
              <span>100-Day Global Trial</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
