"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[#0E0F11] text-white flex flex-col justify-between overflow-hidden">
      
      {/* Background Seamless Kitchen Visual (dwelling into the matte dark canvas) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-end">
        <div className="relative w-full lg:w-[68%] h-full">
          <img
            src="/hero-kitchen.jpg"
            alt="Modern luxury dark kitchen with wooden island, copper whisk, shears, and digital scale"
            className="w-full h-full object-cover object-center sm:object-right"
          />

          {/* Left blend gradient (dissolves the image seamlessly into the black/dark canvas) */}
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#0E0F11] via-[#0E0F11]/90 to-transparent" />
          
          {/* Top blend gradient */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0E0F11] to-transparent" />
          
          {/* Bottom blend gradient */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0E0F11] to-transparent" />

          {/* Subtle Right edge vignette */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0E0F11]/60 to-transparent" />
        </div>
      </div>

      {/* Subtle architectural horizontal slat lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.025)_50%,transparent_100%)] bg-[length:100%_48px]" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 pt-20 pb-16 lg:pt-32 lg:pb-24 flex-1 flex items-center">
        <div className="max-w-xl text-left">
          
          {/* Main Title matching reference layout */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-black text-white leading-[1.08] tracking-tight mb-6 drop-shadow-md font-sans">
            Handcrafted <br />
            Kitchen Tools <br />
            <span className="text-white/95">For Precision</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-md mb-10 drop-shadow-sm font-normal">
            Order direct from our workshop and receive free nationwide shipping, 1-year warranty coverage, and a 60-day risk-free culinary trial.
          </p>

          {/* Glowing Pale Champagne / Gold Pill CTA Button matching reference */}
          <div>
            <Link
              href="/#shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm uppercase tracking-wider text-[#0E0F11] bg-[#E5F2C9] hover:bg-white hover:shadow-[0_0_35px_rgba(229,242,201,0.6)] transition-all duration-300 px-9 py-4 rounded-full shadow-[0_4px_25px_rgba(229,242,201,0.3)] cursor-pointer"
            >
              Explore Catalog
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Center Scroll Down Indicator matching reference */}
      <div className="relative z-10 pb-8 flex flex-col items-center justify-center">
        <a
          href="#shop"
          className="inline-flex items-center gap-2.5 text-[0.72rem] text-white/50 hover:text-white transition-colors duration-200"
          aria-label="Scroll down to explore workshop collection"
        >
          <span className="w-4 h-7 rounded-full border border-white/30 flex items-start justify-center p-1">
            <span className="w-1 h-1.5 rounded-full bg-white/75 animate-bounce" />
          </span>
          <span className="tracking-wide">Scroll down</span>
        </a>
      </div>

    </section>
  );
}
