"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] bg-[#0E0F11] text-white flex flex-col justify-center overflow-hidden">
      
      {/* Background Seamless Kitchen Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-end">
        <div className="relative w-full lg:w-[68%] h-full">
          <img
            src="/hero-kitchen.jpg"
            alt="Modern luxury dark kitchen with wooden island, copper whisk, shears, and digital scale"
            className="w-full h-full object-cover object-center sm:object-right opacity-40 sm:opacity-80 lg:opacity-100"
          />

          {/* Full dark overlay on small screens to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] via-[#0E0F11]/80 to-[#0E0F11]/50 lg:hidden" />

          {/* Left blend gradient for desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#0E0F11] via-[#0E0F11]/90 to-transparent" />
          
          {/* Top blend gradient */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-[#0E0F11] to-transparent" />
          
          {/* Bottom blend gradient */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#0E0F11] to-transparent" />

          {/* Subtle Right edge vignette */}
          <div className="hidden sm:block absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0E0F11]/60 to-transparent" />
        </div>
      </div>

      {/* Subtle architectural horizontal slat lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_100%)] bg-[length:100%_48px]" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 py-16 sm:py-24 lg:py-32 flex-1 flex items-center">
        <div className="max-w-xl text-left">
          
          {/* Eyebrow badge on mobile */}
          <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-[#E5F2C9]/20 bg-[#E5F2C9]/5 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E5F2C9] animate-pulse" />
            <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#E5F2C9]">
              Artisan Kitchen Workshop
            </span>
          </div>

          {/* Main Title matching reference layout */}
          <h1 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-black text-white leading-[1.12] sm:leading-[1.08] tracking-tight mb-5 sm:mb-6 drop-shadow-md font-sans">
            Handcrafted <br />
            Kitchen Tools <br />
            <span className="text-[#E5F2C9]">For Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base text-white/75 leading-relaxed max-w-md mb-8 sm:mb-10 drop-shadow-sm font-normal">
            Order direct from our workshop and receive free nationwide shipping, 1-year warranty coverage, and a 60-day risk-free culinary trial.
          </p>

          {/* Glowing Pale Champagne CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0E0F11] bg-[#E5F2C9] hover:bg-white hover:shadow-[0_0_35px_rgba(229,242,201,0.6)] transition-all duration-300 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full shadow-[0_4px_25px_rgba(229,242,201,0.3)] cursor-pointer text-center"
            >
              Explore Catalog
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-white hover:text-[#E5F2C9] border border-white/20 hover:border-white/40 transition-all duration-300 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full cursor-pointer text-center"
            >
              Our Atelier
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
