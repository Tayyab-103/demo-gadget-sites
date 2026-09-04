"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="w-full bg-neutral-bg pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
            {/* Top Light Blue Hero Card */}
            <div className="bg-[#EBF4FA] border border-sky-100/80 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-11 flex flex-col justify-between flex-1 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-normal mb-2 sm:mb-3">
                  Shop With Us And See How Great We Are!
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-black text-slate-900 tracking-tight leading-[1.12] mb-3 sm:mb-4">
                  {siteConfig.brandName || "Northcrest Sporting Zone"}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium mb-6 sm:mb-8 leading-relaxed max-w-lg">
                  One click away from getting what you want
                </p>
              </div>

              <div>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center bg-[#0B132B] hover:bg-[#1E293B] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Show More
                </Link>
              </div>
            </div>

            {/* Bottom 2-Card Row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {/* Bottom-Left Image Card */}
              <Link
                href="/shop"
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 h-40 sm:h-52 md:h-56 lg:h-60 shadow-sm border border-slate-200/60 block"
              >
                <img
                  src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&q=80"
                  alt="Athletic Weight Equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </Link>

              {/* Bottom-Right Image Card with Circle Arrow Button */}
              <Link
                href="/shop"
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 h-40 sm:h-52 md:h-56 lg:h-60 shadow-sm border border-slate-200/60 block"
              >
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="Sports & Conditioning Gear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Circular Blue Action Button */}
                <div
                  aria-label="View collection"
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white flex items-center justify-center shadow-lg shadow-sky-900/30 group-hover:scale-110 transition-all duration-300 z-10"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column - Tall Hero Image Card */}
          <div className="lg:col-span-6">
            <Link
              href="/shop"
              className="group relative rounded-3xl sm:rounded-[2rem] overflow-hidden bg-slate-900 min-h-[340px] sm:min-h-[440px] lg:min-h-full h-full shadow-sm border border-slate-200/60 block"
            >
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=85"
                alt="Elite Athletic Training Gear"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
