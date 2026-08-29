"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="aviation-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✈</span>
            Engineering In Motion
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            Stress-Tested For <span className="text-[#C87D3B] font-light italic lowercase">Global Flight</span>
          </h2>
          <p className="text-[#18222F]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
            Glimpse inside our testing labs. Discover how our aluminum luggage chassis, silent Hinomoto wheels, and ballistic weaves perform under extreme transit loads.
          </p>
        </div>

        {/* Dual Dynamic Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Aluminum Shell & Impact Resilience */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0D1B2A] text-white shadow-xl border border-[#C87D3B]/30 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 md:p-9 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="/img/products/aviator-aluminum-spinner.jpg"
              alt="Aerospace aluminum suitcase durability"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C87D3B] text-[0.62rem] font-extrabold uppercase tracking-widest text-white mb-3 shadow-md">
                Aerospace Alloy Chassis
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Anodized Aluminum &amp; Corner Shields
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 font-normal">
                Engineered to absorb baggage handler impacts while safeguarding laptops, cameras, and wardrobe items in climate-sealed chambers.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#C87D3B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C87D3B] animate-ping" />
                Dual TSA Integrated Latches
              </div>
            </div>
          </div>

          {/* Card 2: Hinomoto Wheels & Leather Craft */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0D1B2A] text-white shadow-xl border border-[#C87D3B]/30 min-h-[380px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-8 md:p-9 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="/img/travel-atelier-craft.jpg"
              alt="Handcrafted leather luggage and silent wheels"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C87D3B] text-[0.62rem] font-extrabold uppercase tracking-widest text-white mb-3 shadow-md">
                Master Craft &amp; Glide
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Italian Full-Grain &amp; Hinomoto 360°
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 font-normal">
                Reinforced hand-burnished leather handles paired with Japanese silent-glide ball bearings for effortless terminal maneuvering.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#C87D3B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C87D3B] animate-ping" />
                1000D Ballistic Cordura Weave
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
