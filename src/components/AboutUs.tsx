"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section
      className="py-10 sm:py-14 md:py-16 bg-neutral-bg relative"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header (Shown only when enabled) */}
        {showHeader && (
          <>
            <div className="flex items-center gap-3 sm:gap-6 mb-6">
              <span className="bg-primary text-white font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl px-3.5 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
                01
              </span>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-primary leading-none break-words">
                ABOUT ALDERWYN
              </h2>
            </div>

            <div className="w-full h-px bg-black/10 mb-6 sm:mb-10 md:mb-12" />
          </>
        )}

        {/* Asymmetrical 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Shorter/Square Image (Ends Higher than the Right Image) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-square overflow-hidden shadow-lg border border-black/5 bg-white">
              <Image
                src="/img/brand/about_studio.jpg"
                alt={`${siteConfig.brandName} artisan design studio`}
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Statement Text on Top + Landscape Image Below (Extending Lower) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-7">
            
            {/* Editorial Statement (Concise, Less Detailed) */}
            <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] leading-relaxed text-neutral-text/90">
              AT ALDERWYN, WE CRAFT BESPOKE LIVING FURNISHINGS, HANDWOVEN TEXTILES, AND ARTISAN ACCENTS TO ELEVATE MODERN HOMES.
            </p>

            {/* Landscape Styled Living Room Image extending further down */}
            <div className="relative w-full aspect-16/10 overflow-hidden shadow-lg border border-black/5 bg-white">
              <Image
                src="/img/brand/hero_interior.jpg"
                alt={`${siteConfig.brandName} comfortable living interior styling`}
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}