"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative bg-neutral-bg pb-8 sm:pb-12 md:pb-16 pt-2 md:pt-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Large Framed Hero Image Container */}
        <div className="relative w-full aspect-16/10 sm:aspect-16/9 md:aspect-21/10 min-h-[360px] sm:min-h-[460px] md:min-h-[580px] rounded-none overflow-hidden shadow-2xl flex items-center justify-center">
          
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
            <h1 className="font-serif font-normal text-white uppercase tracking-[0.05em] sm:tracking-[0.08em] text-2xl sm:text-4xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] leading-[1.12] drop-shadow-md select-none">
              ADD THE GREATEST <br />
              JOY OF LIVING.
            </h1>

            {/* Editorial Hero CTA */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-3 bg-white text-primary hover:bg-neutral-bg hover:scale-105 transition-all duration-300 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-[0.72rem] sm:text-[0.78rem] font-bold uppercase tracking-[0.2em] shadow-xl cursor-pointer"
              >
                <span>EXPLORE COLLECTION</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

