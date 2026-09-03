"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[#191716] text-white relative overflow-hidden" id="cta">
      {/* Background photo texture */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('/img/how_step1.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#191716]/80 via-[#191716]/60 to-[#191716]/90" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-2.5">
            Seasonal Family Edition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-5">
            Elevate Your Family&apos;s <br />
            <span className="text-secondary">Everyday Wardrobe</span>
          </h2>

          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Outfit parents, children, and youth in certified organic cottons, soft-brushed fleeces, and weather-ready outers. Direct bundle savings up to 40%.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-secondary text-white hover:bg-white hover:text-primary transition-all duration-300 py-3.5 px-9 rounded-full text-xs uppercase tracking-widest shadow-md"
            >
              Shop Family Bundles &rarr;
            </Link>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-white/10 border border-white/20 text-white hover:bg-white hover:text-primary transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest backdrop-blur-xs"
            >
              Wardrobe Concierge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
