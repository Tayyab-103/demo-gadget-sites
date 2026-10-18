"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const metrics = [
  { value: "45,000+", label: "Families Dressed" },
  { value: "0-14Y+", label: "Baby To Adult Sizes" },
  { value: `${siteConfig.trialPeriod || 14}-Day`, label: "Fit Guarantee" },
  { value: "4.9★", label: "Parent Rating" },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200 select-none" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Narrative & Metrics */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 select-none">
              Our Family Promise
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1D] leading-tight tracking-tight mb-4">
              Clothing The Whole <br />
              <span className="text-slate-600 font-semibold text-2xl sm:text-3xl md:text-4xl">Family, Every Day.</span>
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-lg">
              Based in Winston-Salem, North Carolina. We bring together comfortable, affordable everyday clothing for babies, kids, teens, and adults, so busy families can find quality basics, play clothes, and loungewear all in one place.
            </p>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-4 text-left shadow-2xs"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1D]">
                    {m.value}
                  </div>
                  <div className="text-[0.68rem] font-mono font-bold uppercase tracking-wider text-slate-500 mt-1">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-white bg-[#0A0F1D] hover:bg-slate-800 transition-all py-3.5 px-8 rounded-full text-center uppercase tracking-wider shadow-xs active:scale-95"
            >
              Explore Shop →
            </Link>
          </div>

          {/* Right Column: Family Photo */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-md border border-slate-200">
              <Image
                src="/img/tailoringstandards.jpg"
                alt={`${siteConfig.brandName} family clothing`}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
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
