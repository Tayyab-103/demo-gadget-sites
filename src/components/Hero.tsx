"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 pb-0 bg-[#f8fafc] text-black min-h-[90vh] flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        
        {/* Main Hero Grid — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 flex-1 items-stretch">
          
          {/* Left Column: Headline + Description */}
          <div className="flex flex-col justify-center py-8 sm:py-12 lg:py-16">

            {/* Bold headline with arrow */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#0f2b48] tracking-tight leading-[1.02] mb-6">
              <span className="flex items-center gap-3 flex-wrap">
                <span>BUILT FOR</span>
                <svg className="w-10 h-6 sm:w-14 sm:h-8 text-[#f59e0b]" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="2" y1="12" x2="42" y2="12" />
                  <polyline points="34 4 42 12 34 20" />
                </svg>
              </span>
              <span className="block">COMMERCIAL <span className="text-[#f59e0b]">TEAMS</span></span>
              <span className="block">NOT JUST <span className="text-[#0f2b48]">WORKDAYS</span></span>
            </h1>

            <p className="text-black/70 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-8 font-normal">
              Pro-grade commercial uniforms, heavy-duty industrial work shirts, reinforced utility trousers, and safety workwear engineered for maximum shift durability.
            </p>
          </div>

          {/* Right Column: Large Hero Image with Shop Now */}
          <div className="relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-0 bg-black/5 group shadow-lg border border-black/5">
            <img
              src="/img/herosection1.jpg"
              alt={`${siteConfig.brandName} workforce uniform collection`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2238]/60 via-transparent to-transparent" />
            
            {/* Shop Now floating button */}
            <Link
              href="/shop"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0f2b48] text-white flex items-center justify-center text-[0.62rem] sm:text-xs font-black uppercase tracking-wider shadow-2xl hover:bg-[#f59e0b] hover:text-[#0f2b48] hover:scale-110 transition-all duration-300 border-2 border-white/30 z-10"
            >
              <span className="text-center leading-tight">SHOP<br />NOW</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row: 2 Category Cards + CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 py-6 sm:py-8">
          
          {/* Category Card 1 */}
          <Link href="/shop" className="group relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[180px] bg-black/5 border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300">
            <img
              src="/img/herosection2.jpg"
              alt="Industrial work shirts collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-black uppercase tracking-wider">Industrial Shirts</span>
            </div>
          </Link>

          {/* Category Card 2 */}
          <Link href="/shop" className="group relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[180px] bg-black/5 border border-black/5 shadow-sm hover:shadow-lg transition-all duration-300">
            <img
              src="/img/herosection3.jpg"
              alt="Commercial safety apparel and outerwear collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3.5">
              <span className="text-white text-xs font-black uppercase tracking-wider">Safety &amp; Outerwear</span>
            </div>
          </Link>

          {/* CTA Buttons — spanning right 2 columns */}
          <div className="sm:col-span-2 flex items-end justify-end gap-3 py-2 sm:py-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 justify-center font-black uppercase tracking-wider text-[#0f2b48] text-xs sm:text-sm bg-white hover:bg-[#e2e8f0] border border-black/10 transition-all duration-200 py-3.5 px-7 rounded-xl text-center shadow-sm"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 justify-center font-black uppercase tracking-wider text-white text-xs sm:text-sm bg-[#0f2b48] hover:bg-[#0b2238] transition-all duration-200 py-3.5 px-7 rounded-xl text-center shadow-md hover:scale-105"
            >
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
