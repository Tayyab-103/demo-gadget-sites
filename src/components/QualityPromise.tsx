"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative bg-[#FAF8F6] pt-20 sm:pt-24 md:pt-28 pb-0 text-[#18121E] border-t border-[#C59B7E]/20 overflow-hidden"
    >
      {/* Subtle Contour Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="couture-lines" width="700" height="700" patternUnits="userSpaceOnUse">
              <path
                d="M50 350 C150 180, 550 180, 650 350 C550 520, 150 520, 50 350 Z M120 350 C200 230, 500 230, 580 350 C500 470, 200 470, 120 350 Z M190 350 C250 280, 450 280, 510 350 C450 420, 250 420, 190 350 Z"
                fill="none"
                stroke="#18121E"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#couture-lines)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Column: Clean Eyebrow */}
          <div className="lg:col-span-4 flex items-center">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] select-none">
              THE ATELIER PROMISE
            </span>
          </div>

          {/* Right Column: Headline & Subtitle */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-4">
              Designed For Where <br />
              <span className="italic text-[#C59B7E]">True Elegance Begins.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-light mb-6">
              22-momme pure mulberry silk, double-faced cashmere, and French Chantilly lace backed by our risk-free {siteConfig.trialPeriod || 14}-day fit and drape trial.
            </p>

            <div>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#18121E] hover:text-[#C59B7E] transition-colors underline underline-offset-8 decoration-1 decoration-[#C59B7E]/50 uppercase tracking-wider"
              >
                <span>Explore The Collection</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 font-mono text-sm">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Hanging Rail Presentation */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-2 bg-gradient-to-r from-[#C59B7E] via-[#E6C2AC] to-[#C59B7E] rounded-full relative z-20 shadow-sm" />
        <div className="relative -mt-2 w-full aspect-[16/9] sm:aspect-[2.2/1] overflow-hidden rounded-b-3xl shadow-xl">
          <Image
            src="/img/couture-garment-rail.jpg"
            alt={`${siteConfig.brandName} couture garment rail`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

    </section>
  );
}
