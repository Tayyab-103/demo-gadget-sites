"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const guarantees = [
  {
    title: "100% Certified Food-Safe",
    desc: "Strictly crafted with non-reactive, toxin-free, and corrosion-resistant commercial grade 304 and 420J2 stainless alloys.",
    tag: "FDA & LFGB"
  },
  {
    title: "High-Heat Thermal Resilience",
    desc: "Engineered to withstand temperatures up to 480°F (250°C) without warping, tarnishing, or losing temper balance.",
    tag: "Oven & Dishwasher Safe"
  },
  {
    title: "60-Day Culinary Trial",
    desc: "Test our tools in your real kitchen recipes. If you aren't completely thrilled, return them for a 100% full refund.",
    tag: "Risk-Free"
  },
  {
    title: "365-Day Atelier Warranty",
    desc: "Full comprehensive coverage against manufacturing defects, loose welds, blade chips, or electronic scale inaccuracies.",
    tag: "Replacement Guarantee"
  }
];

export default function QualityPromise() {
  return (
    <section className="py-20 md:py-28 bg-[#0E0F11] text-white relative overflow-hidden border-t border-white/5" id="quality">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/5 bg-[#16171A] relative">
              <img
                src="/images/quality-promise-chef.jpg"
                alt="Head chef inspecting copper and stainless steel kitchen tool in workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[#E5F2C9] text-[0.62rem] font-bold uppercase tracking-widest mb-1">
                  Standard of Excellence
                </div>
                <h3 className="text-lg font-bold uppercase text-white mb-2">
                  Commercial Kitchen Tested
                </h3>
                <p className="text-xs text-white/60">
                  Every batch is tested for metallurgy purity and balance before dispatch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Guarantees List */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Our Guarantee To You
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-8">
              The {siteConfig.brandName} <br />
              <span className="text-white/80">Quality Promise</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {guarantees.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-[#16171A] p-6 rounded-xl border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                      <span className="bg-white/5 border border-white/10 text-white/90 text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm text-white uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#0E0F11] bg-[#E5F2C9] hover:bg-white transition-all px-8 py-3.5 rounded-lg shadow-sm"
              >
                Shop Guaranteed Tools &rarr;
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}