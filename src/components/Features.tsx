"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    title: "Exceptional Concierge Service",
    desc: "We stand with you every step of the way, offering culinary tool support, replacement guarantees, and care guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    badge: "24/7 Support"
  },
  {
    title: "Premium Quality Metallurgy",
    desc: "We use strictly 304 and 420J2 food-grade stainless steels to ensure durability, rust resistance, and lasting kitchen beauty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    ),
    badge: "Food Safe"
  },
  {
    title: "Chef-Engineered Ergonomics",
    desc: "Balanced weight distribution and calibrated strain-relief handles bring professional commercial precision into your home.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    badge: "1-Yr Warranty"
  }
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-[#0E0F11] text-white relative overflow-hidden border-t border-white/5" id="features">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading matching reference "WHY CHOOSE OUR KITCHEN?" */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-sans">
            Why Choose Our <br className="sm:hidden" />
            <span className="text-white/90">Workshop?</span>
          </h2>
        </div>

        {/* 3 Boxed Feature Cards matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#16171A] border border-white/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-white/25 hover:bg-[#1A1C20] transition-all duration-300 shadow-lg"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full border border-white/15 bg-white/5 text-[#E5F2C9] flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-white/60 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
