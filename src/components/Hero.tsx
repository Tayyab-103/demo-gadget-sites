"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[82vh] min-h-[580px] max-h-[860px] sm:h-[88vh] lg:h-[92vh] overflow-hidden bg-black">
      {/* Layer 1: One full-bleed <img> spanning 100% of the container */}
      <img
        src="/img/hero-athletes.jpg"
        alt="Vantage Thread Activewear Collection"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] sm:object-[78%_center] z-0 pointer-events-none select-none"
      />

      {/* Layer 2: Transparent dark gradient overlay over the ENTIRE image fading seamlessly toward the right */}
      <div
        className="absolute inset-0 w-full h-full z-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.68) 28%, rgba(0, 0, 0, 0.32) 50%, rgba(0, 0, 0, 0) 72%)",
        }}
      />

      {/* Subtle bottom shadow on small mobile screens for perfect text legibility */}
      <div
        className="absolute inset-0 w-full h-full z-1 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.25) 45%, transparent 70%)",
        }}
      />

      {/* Layer 3: Hero Content Overlay — Left 6-7% Aligned and Vertically Centered */}
      <div className="relative z-10 w-full h-full flex items-center px-[6%] sm:px-[7%]">
        <div className="w-full max-w-[460px]">
          
          {/* Large uppercase condensed bold headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black text-white leading-[0.98] tracking-tight uppercase mb-4">
            PERFORMANCE<br />
            MEETS <span className="text-secondary">STYLE.</span>
          </h1>

          {/* Short white supporting paragraph constrained to ~400-450px */}
          <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-[430px] font-normal mb-8">
            Premium activewear designed to move with you, every step of the way.
          </p>

          {/* Two horizontal CTA buttons related to the brand */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-black text-xs sm:text-sm bg-secondary hover:brightness-110 transition-all duration-200 py-3 px-6 sm:px-7 rounded-[4px] shadow-sm text-center"
            >
              Shop Apparel
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-white text-xs sm:text-sm border border-white/80 bg-black/20 hover:bg-white/15 transition-all duration-200 py-3 px-6 sm:px-7 rounded-[4px] text-center backdrop-blur-xs"
            >
              Our Heritage
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
