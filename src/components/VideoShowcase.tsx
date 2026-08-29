"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="atelier-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            The Atelier in Motion
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.15]">
            Engineered For The <span className="text-[#C5A059] italic font-normal">Pinnacle Of Expression</span>
          </h2>
          <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
            Glimpse inside our Austin craft studio. Discover how our fountain pens, leather bookbindings, and milled papers perform under wet ink strokes.
          </p>
        </div>

        {/* Dual Dynamic Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Nib Precision */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#121820] text-[#FAF8F5] shadow-xl border border-[#C5A059]/30 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 md:p-9 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1000&q=80"
              alt="Fountain pen nib ink flow craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-[#121820]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[0.62rem] font-bold uppercase tracking-widest text-[#121820] mb-3 shadow-md">
                Precision Calligraphy &amp; Nib
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5] tracking-tight mb-2">
                German Iridium Smooth Ink Evacuation
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed mb-4 font-normal">
                Fine-tuned feed channels eliminate ink railroading, scratching, and blotting across all paper grains.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-serif uppercase tracking-wider text-[#C5A059]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
                Dual Cartridge &amp; Piston Converter
              </div>
            </div>
          </div>

          {/* Card 2: Bookbinding & Cotton Paper */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#121820] text-[#FAF8F5] shadow-xl border border-[#C5A059]/30 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 md:p-9 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=1000&q=80"
              alt="Hand-bound leather journal with archival paper"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121820] via-[#121820]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A059] text-[0.62rem] font-bold uppercase tracking-widest text-[#121820] mb-3 shadow-md">
                Master Bookbinding &amp; Paper
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5] tracking-tight mb-2">
                160 GSM Bleedproof Milled Cotton
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed mb-4 font-normal">
                Smyth-sewn binding allows pages to open completely flat at 180° for uninterrupted drafting and journaling.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-serif uppercase tracking-wider text-[#C5A059]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
                Vegetable-Tanned Full-Grain Leather
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
