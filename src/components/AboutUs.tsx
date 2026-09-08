"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const metrics = [
  { value: "15,000+", label: "Creators & Executives" },
  { value: "160 GSM", label: "Zero-Bleed Archival Cotton" },
  { value: "14-Day", label: "Studio Practice Guarantee" },
  { value: "4.9★", label: "Master Calligrapher Rating" },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
              <span>✦</span>
              The Atelier Heritage &amp; Craft
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#121820] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Preserving The Art <br />
              <span className="text-[#C5A059] italic font-normal">Of Timeless Thought</span>
            </h2>

            <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-7 sm:mb-8 max-w-lg">
              At {siteConfig.brandName}, we believe great ideas deserve heirloom vessels. Based in Austin, Texas, our atelier crafts fine writing instruments, Smyth-sewn leather journals, and architectural desk accessories designed to inspire deep focus, elegant prose, and enduring clarity.
            </p>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-md mb-7 sm:mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[#C5A059]/25 bg-white p-4 sm:p-5 text-left shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#121820]">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-wider text-[#C5A059] mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold uppercase tracking-[0.14em] text-[#121820] text-xs sm:text-sm bg-[#C5A059] hover:bg-[#D4AF37] transition-all duration-200 py-3.5 px-8 rounded-full shadow-md text-center hover:scale-105 w-full sm:w-auto"
            >
              Shop All Products →
            </Link>
          </div>

          {/* Right Column: Large Campaign Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden rounded-3xl bg-black/5 shadow-xl border border-[#C5A059]/30">
              <Image
                src="/img/heritage1.jpg"
                alt={`${siteConfig.brandName} master bookbinding and stationery craftsmanship in Austin, Texas`}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
