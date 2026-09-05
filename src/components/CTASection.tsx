"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20 overflow-hidden" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column / Flanked Image Composition (Matching Reference Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 items-center">
          
          {/* LEFT STACKED IMAGE CARD */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              
              {/* Stacked decorative layer 1 (outermost contour) */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-4xl border border-[#C5A059]/30 pointer-events-none -rotate-2" />
              
              {/* Stacked decorative layer 2 (middle contour) */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-3xl sm:rounded-4xl border border-[#C5A059]/40 pointer-events-none -rotate-1" />

              {/* Main Photo Card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/40 bg-white group">
                <img
                  src="/img/cta1.jpg"
                  alt="Fine stationery desk essentials and writing tools"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro badge */}
                <div className="absolute bottom-3.5 left-3.5 bg-[#121820]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/30 text-[0.62rem] font-serif uppercase tracking-wider text-[#FAF8F5]">
                  Austin Studio Flatlay
                </div>
              </div>

            </div>
          </div>

          {/* CENTER EDITORIAL CONTENT & CTA BUTTON */}
          <div className="lg:col-span-4 flex flex-col items-center text-center px-2 sm:px-4 order-1 lg:order-2">
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-[#121820] leading-[1.12] tracking-tight mb-4 sm:mb-5">
              Equip your desk for <br />
              <span className="text-[#C5A059] italic font-normal">enduring prose.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#1A202C]/75 leading-relaxed font-normal mb-8 max-w-sm">
              We craft fine stationery for thoughtful authors, curious minds, and ambitious scribes who appreciate the weight of words written by hand.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-serif text-xs sm:text-sm font-bold tracking-wider text-[#FAF8F5] bg-[#121820] hover:bg-[#C5A059] hover:text-[#121820] px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:scale-105"
            >
              Explore Collections
            </Link>

          </div>

          {/* RIGHT STACKED IMAGE CARD */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start order-3">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              
              {/* Stacked decorative layer 1 (outermost contour) */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-4xl border border-[#C5A059]/30 pointer-events-none rotate-2" />
              
              {/* Stacked decorative layer 2 (middle contour) */}
              <div className="absolute -inset-1.5 sm:-inset-2 rounded-3xl sm:rounded-4xl border border-[#C5A059]/40 pointer-events-none rotate-1" />

              {/* Main Photo Card */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/40 bg-white group">
                <img
                  src="/img/cta2.jpg"
                  alt={`${siteConfig.brandName} handcrafted desk tools and notebooks`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121820]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Micro badge */}
                <div className="absolute bottom-3.5 right-3.5 bg-[#121820]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/30 text-[0.62rem] font-serif uppercase tracking-wider text-[#FAF8F5]">
                  160 GSM Milled Cotton
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
