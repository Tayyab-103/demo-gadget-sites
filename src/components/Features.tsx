"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresList = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    title: "Timely Delivery",
    description: "Enjoy lightning-fast shipping, our treat!",
    badge: `Free ${siteConfig.shippingCarrier} Tracked`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    ),
    title: "Excellent Assistance",
    description: "Quick, courteous, and dependable support",
    badge: "24-Hr Workshop Reply",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    ),
    title: "Flexible Returns",
    description: "Shop Worry-Free with Our Return Policy",
    badge: `${siteConfig.trialPeriod}-Day Trial`,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "Privacy Protection",
    description: "Your information is always safe with us.",
    badge: "256-Bit SSL Encrypted",
  },
];

export default function Features() {
  return (
    <section className="py-14 sm:py-18 md:py-20 bg-white text-[#121316] relative overflow-hidden border-y border-stone-200/80" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F8F6F2] px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
              WHY CHOOSE {siteConfig.brandName.toUpperCase()}
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#121316] tracking-tight leading-tight">
            Crafted For Excellence, <br className="hidden sm:block" />
            <span className="text-[#E06830] italic font-serif">Backed By Total Peace of Mind</span>
          </h2>
        </div>

        {/* 4-Card Light & Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuresList.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F6F2] rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#E06830]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon & Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-[#E06830] flex items-center justify-center shadow-xs group-hover:bg-[#121316] group-hover:text-[#E06830] group-hover:border-[#121316] transition-all duration-300">
                    {item.icon}
                  </div>

                  <span className="bg-white border border-stone-200 text-[#121316] text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#121316] mb-2 group-hover:text-[#E06830] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#121316]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Verification Tag */}
              <div className="pt-4 mt-5 border-t border-stone-200/70 flex items-center gap-2 text-xs font-semibold text-[#121316]/80">
                <span className="text-[#E06830]">✓</span>
                <span className="text-[0.7rem] uppercase tracking-wider font-bold">Verified Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
