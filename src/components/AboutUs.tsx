"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    title: "Commercial 304 Steel",
    desc: "100% food-grade, corrosion-proof, and designed to endure high heat and dishwashing cycles.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Precision Calibration",
    desc: "Digital scales calibrated to 0.1g accuracy, ensuring consistent doughs and ingredient ratios.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    title: "Balanced Ergonomics",
    desc: "Weighted handles relieve wrist fatigue during high-volume whipping and intensive kitchen prep.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    title: "1-Year Full Warranty",
    desc: "Every single tool is backed by our full 365-day replacement policy for complete confidence.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    )
  }
];

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] text-white relative overflow-hidden border-t border-white/5" id="about">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Our Craft Philosophy
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              Born From The <br />
              <span className="text-white/80">Art of Cooking</span>
            </h2>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              At <strong>{siteConfig.brandName}</strong>, we believe that great meals begin with reliable, well-balanced tools. We craft culinary essentials designed to eliminate kitchen frustration, elevate your prep speed, and bring professional kitchen craftsmanship into your home.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#121316] bg-[#E5F2C9] hover:bg-white transition-all px-7 py-3.5 rounded-lg shadow-sm"
              >
                Browse Our Tools &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/3 bg-[#1A1C20]">
              <img
                src="/images/about-workshop.jpg"
                alt="Master craftsmen hand-finishing copper cookware and kitchen tools in artisan workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[0.62rem] uppercase tracking-widest font-bold text-[#E5F2C9] block">
                    Verified Craftsmanship
                  </span>
                  <div className="text-sm font-extrabold uppercase">Austin, Texas Workshop</div>
                </div>
                <div className="bg-[#E5F2C9] text-[#121316] text-[0.65rem] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                  Food Safe Certified
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-[#16171A] p-6 rounded-xl border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#E5F2C9] flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-sm uppercase tracking-tight text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}