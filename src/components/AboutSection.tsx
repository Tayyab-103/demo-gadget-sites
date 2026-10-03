"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const aboutFeatures = [
  {
    iconEmoji: "⚡",
    iconBg: "bg-primary border-secondary/40 text-secondary",
    title: "GaN Fast Silicon Innovations",
    description: "Engineered with ultra-pure Gallium Nitride crystals for high-density power delivery, 40% cooler operating temperatures, and maximum charging efficiency.",
  },
  {
    iconEmoji: "🔬",
    iconBg: "bg-primary border-secondary/40 text-secondary",
    title: "100% Laboratory Quality Control",
    description: "Each circuit component undergoes automated oscilloscope frequency testing, drop resistance certification, and thermal stress analysis.",
  },
  {
    iconEmoji: "🛡️",
    iconBg: "bg-primary border-secondary/40 text-secondary",
    title: `${siteConfig.trialPeriod}-Day Risk-Free Performance Guarantee`,
    description: `Enjoy fast tracked shipping via ${siteConfig.shippingCarrier} with full coverage, responsive support, and hassle-free returns on all electronic gear.`,
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header at Top */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary text-secondary px-4 py-1.5 rounded-full border border-secondary/30 shadow-xs mb-3.5">
            <span className="text-xs">⚡</span>
            <span className="text-[0.68rem] font-black uppercase tracking-[0.2em]">
              ABOUT {siteConfig.brandName}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight mb-3 uppercase">
            Pioneering Precision <span className="text-secondary">Hardware Engineering</span>
          </h2>
          
          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            At {siteConfig.brandName}, we combine transparent cyber aesthetics with cutting-edge semiconductor architecture. Our mission is to build the fastest, most reliable charging docks, wireless acoustics, and high-performance electronic accessories.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mt-4 sm:mt-6">
          
          {/* Left Column: Featured Image */}
          <div className="lg:col-span-6 w-full pt-1 sm:pt-3">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-900">
              <img
                src="/img/thumbnail-28.jpg"
                alt={siteConfig.brandName}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/img/thumbnail-24.jpg";
                }}
              />
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-6 sm:gap-7">
              {aboutFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center text-lg sm:text-xl flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200 ${item.iconBg}`}
                  >
                    <span>{item.iconEmoji}</span>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
