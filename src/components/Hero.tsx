"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative bg-neutral-bg pb-12 sm:pb-16 md:pb-24 pt-2 md:pt-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Large Framed Hero Image Container (Exact OTTO Screenshot Layout) */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/10 min-h-[440px] sm:min-h-[520px] md:min-h-[620px] rounded-none overflow-hidden shadow-2xl flex items-center justify-center">
          
          {/* Background Photography */}
          <img
            src="/img/brand/hero_otto.jpg"
            alt={`${siteConfig.brandName} - Comfortable Living Spaces`}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Cinematic Dark Overlay for Contrast */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Centered Large Editorial Headline */}
          <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto flex flex-col items-center">
            <h1 className="font-serif font-normal text-white uppercase tracking-[0.06em] sm:tracking-[0.08em] text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.1] sm:leading-[1.12] drop-shadow-md select-none">
              ADD THE GREATEST <br />
              JOY OF{" "}
              <span className="border border-white/90 px-5 sm:px-9 md:px-12 py-0.5 sm:py-1.5 md:py-2.5 rounded-full inline-block align-middle my-1 transition-all duration-500 hover:bg-white/10">
                LIVING.
              </span>
            </h1>
          </div>

        </div>

      </div>
    </section>
  );
}
