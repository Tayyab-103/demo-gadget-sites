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
      className="relative bg-[#F8FAFC] pt-16 sm:pt-20 pb-0 text-[#0A0F1D] border-t border-slate-200 overflow-hidden"
    >
      {/* Subtle Contour Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo-lines" width="700" height="700" patternUnits="userSpaceOnUse">
              <path
                d="M50 350 C150 180, 550 180, 650 350 C550 520, 150 520, 50 350 Z M120 350 C200 230, 500 230, 580 350 C500 470, 200 470, 120 350 Z M190 350 C250 280, 450 280, 510 350 C450 420, 250 420, 190 350 Z"
                fill="none"
                stroke="#0A0F1D"
                strokeWidth="1.2"
              />
              <path
                d="M0 120 C250 0, 450 240, 700 120 M0 580 C250 460, 450 700, 700 580"
                fill="none"
                stroke="#0A0F1D"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo-lines)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center mb-10 sm:mb-14">
          
          {/* Left Column: Clean Eyebrow */}
          <div className="lg:col-span-4 flex items-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 select-none">
              BUILT FOR EVERYDAY LIFE
            </span>
          </div>

          {/* Right Column: Headline & Subtitle */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-4">
              Dressed for Every <br />
              <span className="font-bold text-[#0A0F1D]">Family Moment.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl font-normal mb-5">
              Soft cotton basics, cozy loungewear, and play-ready kids&apos; styles, all backed by our {siteConfig.trialPeriod || 14}-day happy fit guarantee.
            </p>

            <div>
              <Link
                href="/shop"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A0F1D] hover:text-blue-600 transition-colors underline underline-offset-8 decoration-1 decoration-[#0A0F1D]/40"
              >
                <span>Explore Collection</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 font-mono text-sm">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Hanging Rail Presentation */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-2 bg-[#0A0F1D] rounded-full relative z-20" />
        <div className="relative -mt-2 w-full aspect-[16/9] sm:aspect-[2.2/1] overflow-hidden">
          <Image
            src="/img/hanging-uniforms-rail.jpg"
            alt={`${siteConfig.brandName} collection`}
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
