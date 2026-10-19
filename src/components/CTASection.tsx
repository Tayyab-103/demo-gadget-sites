"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Banner Card */}
        <div className="relative bg-gradient-to-r from-[#ff4370] via-[#ff5d87] to-[#ff758c] rounded-3xl sm:rounded-[2.5rem] shadow-xl overflow-hidden py-16 sm:py-20 px-6 sm:px-12 text-white text-center">

          {/* Floating decorative elements */}
          <div className="absolute top-6 left-10 text-4xl opacity-25 select-none pointer-events-none">⭐</div>
          <div className="absolute bottom-6 right-12 text-4xl opacity-25 select-none pointer-events-none">🧸</div>
          <div className="absolute top-10 right-16 text-3xl opacity-25 select-none pointer-events-none">🚀</div>
          <div className="absolute bottom-8 left-14 text-3xl opacity-25 select-none pointer-events-none">🎲</div>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-[#ffb703] text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-xs">
              Happiness Delivered to Your Door
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Ready To Bring More Joy &amp; Laughter Home?
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto font-normal">
              Explore our best-selling action figures, cuddly plushies, Montessori learning puzzles, and family board games from {siteConfig.brandName}.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 justify-center font-black uppercase tracking-wider text-[#1e293b] text-xs sm:text-sm bg-[#ffb703] hover:bg-white transition-all duration-200 py-4 px-10 rounded-full shadow-lg hover:scale-105 cursor-pointer"
              >
                Explore Toy Catalog
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 justify-center font-black uppercase tracking-wider text-white text-xs sm:text-sm bg-black/20 hover:bg-black/30 transition-all duration-200 py-4 px-8 rounded-full border border-white/20 cursor-pointer"
              >
                Our 14-Day Guarantee
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
