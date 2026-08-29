"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const metrics = [
  { value: "25,000+", label: "Globetrotters & Flyers" },
  { value: "100%", label: "Aerospace Anodized Alloy" },
  { value: `${siteConfig.trialPeriod || 14}-Day`, label: "Global Flight Guarantee" },
  { value: "4.9★", label: "Worldwide Traveler Rating" },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
              <span>✈</span>
              The Travel Engineering Standard
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D1B2A] leading-[1.15] tracking-tight mb-4 sm:mb-5 uppercase">
              Mastering The Art <br />
              <span className="text-[#C87D3B] font-light italic lowercase">Of Global Transit</span>
            </h2>

            <p className="text-[#18222F]/75 text-xs sm:text-sm md:text-base leading-relaxed font-normal mb-7 sm:mb-8 max-w-lg">
              At {siteConfig.brandName}, we believe seamless journeys require uncompromising luggage. Based in Austin, Texas, our collective crafts aerospace-grade aluminum carry-ons, Italian full-grain leather weekenders, and modular compression travel systems built to withstand the world&apos;s most demanding itineraries.
            </p>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-md mb-7 sm:mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[#C87D3B]/25 bg-white p-4 sm:p-5 text-left shadow-xs"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#0D1B2A]">
                    {m.value}
                  </div>
                  <div className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-wider text-[#C87D3B] mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-extrabold uppercase tracking-[0.14em] text-white text-xs sm:text-sm bg-[#C87D3B] hover:bg-[#D98745] transition-all duration-200 py-3.5 px-8 rounded-full shadow-lg text-center hover:scale-105 w-full sm:w-auto"
            >
              Explore Luggage &amp; Gear →
            </Link>
          </div>

          {/* Right Column: Large Campaign Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden rounded-3xl bg-black/5 shadow-2xl border border-[#C87D3B]/30">
              <Image
                src="/img/travel-atelier-craft.jpg"
                alt={`${siteConfig.brandName} luggage engineering and leather craftsmanship in Austin, Texas`}
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
