"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C59B7E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 3-Column Panoramic Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: Stacked Couture Photo ================= */}
          <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[360px] lg:max-w-none">
              {/* Stacked Faint Layer Frames Behind */}
              <div className="absolute inset-0 rounded-3xl border border-[#C59B7E]/25 -rotate-4 translate-x-2 -translate-y-2 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl border border-[#C59B7E]/20 -rotate-2 translate-x-1 -translate-y-1 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-[#EFE6DD] -rotate-1 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B7E]/40 -rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-900 group">
                <Image
                  src="/img/cta1.jpg"
                  alt="Rosethorne Pure Mulberry Silk Couture Collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18121E]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#E6C2AC] bg-[#18121E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C59B7E]/40">
                    Pure Silk Charmeuse
                  </span>
                  <span className="text-[0.62rem] font-mono text-white/90">
                    22-Momme
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN: Editorial Narrative & Action ================= */}
          <div className="lg:col-span-4 flex flex-col items-center text-center px-2 sm:px-4 order-1 lg:order-2 my-4 lg:my-0">
            
            {/* Eyebrow */}
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-3 select-none">
              PRIVATE ATELIER INVITATION
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif text-[#18121E] leading-[1.14] tracking-tight mb-5 max-w-md">
              Step into the timeless world of <span className="italic text-[#C59B7E]">pure couture.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-8 max-w-sm">
              Whether you are curating an evening gala wardrobe or seeking bespoke fitting advice, our private atelier stylists are at your service.
            </p>

            {/* Button */}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-white bg-[#18121E] hover:bg-[#C59B7E] hover:text-[#18121E] px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              Explore Collection
            </Link>

          </div>

          {/* ================= RIGHT COLUMN: Stacked Tailoring Photo ================= */}
          <div className="lg:col-span-4 flex justify-center order-3">
            <div className="relative w-full max-w-[360px] lg:max-w-none">
              {/* Stacked Faint Layer Frames Behind */}
              <div className="absolute inset-0 rounded-3xl border border-[#C59B7E]/25 rotate-4 -translate-x-2 -translate-y-2 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl border border-[#C59B7E]/20 rotate-2 -translate-x-1 -translate-y-1 pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl bg-[#EFE6DD] rotate-1 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B7E]/40 rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-900 group">
                <Image
                  src="/img/cta2.jpg"
                  alt="Rosethorne Master Tailoring & Double-Faced Cashmere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18121E]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#E6C2AC] bg-[#18121E]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C59B7E]/40">
                    Atelier Tailoring
                  </span>
                  <span className="text-[0.62rem] font-mono text-white/90">
                    French Seams
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
