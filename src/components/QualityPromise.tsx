"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function QualityPromise() {
  return (
    <section
      id="standards"
      className="relative bg-primary text-white py-10 sm:py-14 md:py-16"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header */}
        <div className="flex items-center gap-3 sm:gap-6 mb-6">
          {/* White Oval Pill Badge with '02' */}
          <span className="bg-white text-primary font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl px-3.5 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
            02
          </span>

          {/* Heading */}
          <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-white leading-none break-words">
            OUR STANDARDS
          </h2>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-white/10 mb-6 sm:mb-10 md:mb-12" />

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Content Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            {/* Title with Dash */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-5">
              <span className="w-5 sm:w-8 h-0.5 bg-[#E2D9C8] mt-2.5 sm:mt-4 flex-shrink-0" />
              <h3 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.04em] text-[#E2D9C8] leading-[1.1]">
                ARTISAN LIVING &amp; <br />
                CRAFTSMANSHIP
              </h3>
            </div>

            {/* Content Paragraphs in Concise, Less Detailed Typography */}
            <div className="flex flex-col gap-2.5 sm:gap-3.5 text-xs sm:text-[0.82rem] font-medium uppercase tracking-[0.12em] sm:tracking-[0.14em] leading-relaxed text-white/75 sm:pl-11">
              <p>
                OUR ARTISANS WORK WITH SOLID HARDWOODS, ORGANIC TEXTILES, AND VEIN-CUT TRAVERTINE TO CRAFT ENDURING LIVING SPACES.
              </p>
              <p>
                BUILT FOR TACTILE INTEGRITY AND TIMELESS COMFORT, BACKED BY OUR DEDICATED CRAFT WARRANTY.
              </p>
            </div>

          </div>

          {/* Right Column: Framed Lifestyle Interior Image */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-4/3 sm:aspect-16/11 overflow-hidden shadow-2xl border border-white/10 bg-black/20">
              <Image
                src="/img/brand/quality_craft.jpg"
                alt={`${siteConfig.brandName} Craftsmanship Standards`}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}