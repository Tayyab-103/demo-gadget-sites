"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresList = [
  {
    number: "01",
    title: "Fast US Transit",
    subtitle: `Delivered nationwide via ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days with live tracking`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    number: "02",
    title: "14-Day Play Guarantee",
    subtitle: `${siteConfig.trialPeriod || 14}-Day risk-free trial with instant 100% money-back & free missing piece replacements`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7v6h6"></path>
        <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Heirloom Craftsmanship",
    subtitle: "Sustainably sourced Baltic birch, solid walnut, and non-toxic splinter-free finishes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Maker Guild Satisfaction",
    subtitle: "Over 14,000+ happy hobbyists, board game enthusiasts, and families building together",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-black/[0.06] font-sans" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#A36B42] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] inline-flex items-center gap-3">
            OUR COLLECTIVE PROMISE
            <span className="w-8 h-[2px] bg-[#A36B42] inline-block" />
          </span>
        </div>

        {/* Horizontal Rows List with top, dividing, and bottom borders */}
        <div className="border-t border-b border-black/10 divide-y divide-black/10">
          {featuresList.map((item) => (
            <div
              key={item.number}
              className="group flex items-center justify-between py-6 sm:py-8 px-3 sm:px-6 hover:bg-white/70 transition-all duration-300 cursor-default"
            >
              {/* Left Number & Title */}
              <div className="flex items-center">
                <span className="text-black/40 group-hover:text-[#A36B42] font-mono text-sm sm:text-base font-semibold mr-6 sm:mr-10 transition-colors">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#191716] group-hover:text-[#A36B42] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-black/60 text-xs sm:text-sm mt-0.5 hidden sm:block">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Right Circle Icon Badge */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#191716] text-white flex items-center justify-center group-hover:bg-[#A36B42] group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0 ml-4">
                {item.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
