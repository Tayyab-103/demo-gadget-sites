"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    title: "GaN Fast Power Architecture",
    description:
      "Engineered with aerospace-grade Gallium Nitride semiconductors for ultra-dense power transfer and low thermal emission.",
    offset: "md:translate-y-3",
    icon: (
      <svg
        className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Multi-Tier Circuit Protection",
    description:
      "Integrated microchips prevent over-voltage, short circuits, over-current, and temperature spikes 24/7.",
    offset: "md:-translate-y-2",
    icon: (
      <svg
        className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: `${siteConfig.trialPeriod}-Day Performance Guarantee`,
    description:
      `Test your gear risk-free with our full ${siteConfig.trialPeriod}-day satisfaction guarantee and dedicated engineering support.`,
    offset: "md:translate-y-3",
    icon: (
      <svg
        className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50/80 relative overflow-hidden" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Pill Badge */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 bg-primary text-secondary px-6 sm:px-7 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md border border-secondary/30 cursor-default">
            <span>⚡ The Circuit Advantage</span>
          </div>
        </div>

        {/* 3-Card Features Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2 pb-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 md:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col items-center text-center group ${feature.offset}`}
            >
              {/* Feature Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-sm group-hover:scale-105 transition-transform duration-300 flex-shrink-0 border border-secondary/30">
                {feature.icon}
              </div>

              {/* Horizontal Divider Line */}
              <div className="w-full border-t border-gray-100 mb-6 sm:mb-7" />

              {/* Feature Title */}
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 leading-snug tracking-tight">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
