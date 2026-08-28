"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const metrics = [
  { value: "10,000+", label: "Athletes Equipped" },
  { value: "4-Way", label: "AeroWeave™ Stretch" },
  { value: "14-Day", label: "Field Trial Guarantee" },
  { value: "4.9★", label: "Athlete Durability Rating" },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-black/60 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Apparel Heritage &amp; Design
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary leading-[1.04] tracking-tight mb-5">
              Engineered For <span className="text-secondary">Real Movement</span>
            </h2>

            <p className="text-black/70 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-8 max-w-lg">
              At {siteConfig.brandName}, we design pro-grade athletic apparel around real human movement, thermal regulation, and unyielding fabric durability. Designed in Austin, Texas for athletes who refuse to compromise.
            </p>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-black/8 bg-black/3 p-4 sm:p-5 text-left"
                >
                  <div className="text-2xl sm:text-3xl font-black text-primary font-mono">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-wider text-black/50 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-black text-xs sm:text-sm bg-secondary hover:brightness-110 transition-all duration-200 py-3.5 px-8 rounded-full shadow-sm text-center"
            >
              Explore Apparel Catalog →
            </Link>
          </div>

          {/* Right Column: Large Campaign Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden rounded-3xl bg-black/5 shadow-md border border-black/8">
              <Image
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1400&q=85"
                alt={`${siteConfig.brandName} athletic activewear campaign in Austin, Texas`}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
