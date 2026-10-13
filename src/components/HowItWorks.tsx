"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Atelier Selection",
    subtitle: "Precision Chef Tools",
    desc: "Choose from our collection of commercial 304 stainless steel whisks, calibrated 0.1g digital scales, or multi-prep culinary shears.",
    image: "/images/how-it-works-tools.jpg",
    badge: "Commercial Grade"
  },
  {
    step: "02",
    title: "Protective Packaging",
    subtitle: "Inspected & Packed",
    desc: `Each utensil is inspected for flawless balance, coated in protective food-safe finishing, and prepared for dispatch via ${siteConfig.shippingCarrier}.`,
    image: "/images/how-it-works-packaging.jpg",
    badge: "100% Quality Checked"
  },
  {
    step: "03",
    title: "Culinary Mastery",
    subtitle: "60-Day Kitchen Trial",
    desc: "Arrives in 3-5 business days ready for high-heat cooking and pastry prep, fully backed by our 1-year replacement warranty.",
    image: "/images/how-it-works-mastery.jpg",
    badge: "Risk-Free Trial"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] text-white relative overflow-hidden border-t border-white/5" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                The Workshop Method
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Our Craft <span className="text-white/80">&amp; Process</span>
            </h2>
          </div>

          <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">
            From precision metallurgy to prompt delivery at your doorstep, experience our streamlined direct-from-workshop standard.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group bg-[#16171A] rounded-2xl p-6 border border-white/10 hover:border-white/25 hover:bg-[#1A1C20] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="text-3xl font-black text-white/20 group-hover:text-[#E5F2C9] transition-colors duration-300">
                  {item.step}
                </span>
                <span className="bg-white/5 border border-white/10 text-white font-bold text-[0.62rem] uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              {/* Image Preview */}
              <div className="aspect-16/10 rounded-xl overflow-hidden mb-6 bg-black/40 relative border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x250?text=Workshop";
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-widest text-[#E5F2C9] mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-lg font-black uppercase text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line Indicator */}
              <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                <div className="h-full w-0 bg-[#E5F2C9] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}