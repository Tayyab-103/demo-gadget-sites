"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const metrics = [
  { value: "22-Momme", label: "Pure Mulberry Silk" },
  { value: "100%", label: "Hand-Rolled Finishes" },
  { value: `${siteConfig.trialPeriod || 14}-Day`, label: "Fit & Drape Trial" },
  { value: "4.9★", label: "Haute Couture Rating" },
];

export default function AboutUs() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-2 select-none">
              THE ATELIER HERITAGE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#18121E] leading-[1.12] tracking-tight mb-5">
              Mastering The Art <br />
              <span className="italic text-[#C59B7E]">Of Parisian Draping.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-lg">
              Designed for the modern connoisseur. At {siteConfig.brandName}, we marry heritage French draping techniques with noble fibers — pure 22-momme mulberry silk, double-faced cashmere, and corded Chantilly lace tailored for unforgettable moments.
            </p>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-3.5 w-full max-w-md mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[#C59B7E]/20 bg-[#FAF8F6] p-4 text-left shadow-xs"
                >
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#18121E]">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-white bg-[#18121E] hover:bg-[#C59B7E] hover:text-[#18121E] transition-all py-3.5 px-8 rounded-full text-center uppercase tracking-wider shadow-md"
            >
              Explore Collection ↗
            </Link>
          </div>

          {/* Right Column: Atelier Photo */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border border-[#C59B7E]/25">
              <Image
                src="/img/fashion-atelier-craft.jpg"
                alt={`${siteConfig.brandName} tailoring atelier craftsmanship`}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
