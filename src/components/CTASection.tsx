"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F6F0] text-[#18222F]" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Container */}
        <div className="relative bg-[#FAF7F2] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#C87D3B]/20 shadow-lg overflow-hidden">
          
          {/* Decorative Corner Accent Dots */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-2 h-2 rounded-full bg-[#0D1B2A]" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 w-2 h-2 rounded-full bg-[#0D1B2A]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
            
            {/* Left Image Card (Tilted) */}
            <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[240px] flex-shrink-0 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-2 border-white transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/img/cta-left-bag.jpg"
                  alt="Wanderloom handcrafted leather travel bag"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/nomad-leather-duffle.jpg";
                  }}
                />
              </div>
            </div>

            {/* Center Content Area */}
            <div className="flex-1 max-w-2xl text-center px-2 sm:px-6">
              
              {/* Pill Badge */}
              <div className="inline-block px-6 sm:px-8 py-2 rounded-full border-2 border-[#0D1B2A] text-sm sm:text-base font-extrabold text-[#0D1B2A] tracking-wide uppercase mb-5 bg-white/50 shadow-2xs">
                • Choose Your Products •
              </div>

              {/* Central Copy Statement */}
              <p className="text-[#0D1B2A] font-extrabold text-xs sm:text-sm md:text-base leading-relaxed tracking-tight mb-6 max-w-lg mx-auto">
                Aerospace-grade luggage and artisan full-grain leather, delivered directly to you at accessible prices. Explore our signature collection today!
              </p>

              {/* Action Pill Button */}
              <div>
                <Link
                  href="/shop"
                  className="inline-block bg-[#9E381A] hover:bg-[#852E14] text-white font-bold text-sm sm:text-base px-10 sm:px-12 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 uppercase tracking-wider"
                >
                  Explore
                </Link>
              </div>

            </div>

            {/* Right Image Card (Tilted) */}
            <div className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[240px] flex-shrink-0 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-xl border-2 border-white transform rotate-3 sm:rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/img/cta-right-traveler.jpg"
                  alt="Wanderloom traveler in airport terminal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero-luggage-travel.jpg";
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
