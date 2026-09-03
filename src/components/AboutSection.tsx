"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden border-t border-black/[0.04]">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Image with Overlaid Badges */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <img
                src="/img/aboutus.jpg"
                alt="Voltspire electrical engineering facility and master technicians at work"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Pill Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#111] text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                  Dedicated Engineering Team
                </span>
              </div>

              {/* Bottom Overlaid Stats Card */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/50 shadow-lg z-10">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-[#111] font-mono">99.9%</div>
                    <div className="text-[0.6rem] sm:text-[0.68rem] text-neutral-text/50 font-semibold uppercase tracking-wider mt-0.5">
                      Accuracy
                    </div>
                  </div>
                  <div className="border-x border-black/10">
                    <div className="text-lg sm:text-2xl font-black text-[#111] font-mono">49K+</div>
                    <div className="text-[0.6rem] sm:text-[0.68rem] text-neutral-text/50 font-semibold uppercase tracking-wider mt-0.5">
                      Units Deployed
                    </div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-black text-[#111] font-mono">100%</div>
                    <div className="text-[0.6rem] sm:text-[0.68rem] text-neutral-text/50 font-semibold uppercase tracking-wider mt-0.5">
                      Lab Tested
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Content, & Pillars */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F4F6] border border-black/5 shadow-2xs mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-text/60">
                  ABOUT VOLTSPIRE
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-[2.8rem] font-black uppercase tracking-tight text-[#111] leading-[1.1] mb-4">
                Empowering Electricians With <br />
                <span className="text-neutral-text/45 font-medium not-italic">
                  Uncompromising Standards
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed font-normal">
                At {siteConfig.brandName}, we design and supply certified electrical testing equipment, high-carbon driver bits, and continuous power cabling for commercial infrastructure, industrial facilities, and demanding field environments.
              </p>
            </div>

            {/* 3 Value Pillars */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F9F9FB] border border-black/[0.04]">
                <div className="w-9 h-9 rounded-xl bg-[#111] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111] mb-1">
                    Multi-Point Laboratory Calibration
                  </h4>
                  <p className="text-xs text-neutral-text/60 leading-relaxed">
                    All testing instruments and True-RMS multimeters undergo electronic bench testing before packaging to ensure instant NIST-traceable reliability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F9F9FB] border border-black/[0.04]">
                <div className="w-9 h-9 rounded-xl bg-[#111] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111] mb-1">
                    Industrial Metallurgy &amp; Dielectric Insulation
                  </h4>
                  <p className="text-xs text-neutral-text/60 leading-relaxed">
                    High-carbon S2 alloy steel magnetic bits and 24AWG pure oxygen-free copper conductors engineered for relentless daily duty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F9F9FB] border border-black/[0.04]">
                <div className="w-9 h-9 rounded-xl bg-[#111] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111] mb-1">
                    Commercial Warranty &amp; Fast Fulfillment
                  </h4>
                  <p className="text-xs text-neutral-text/60 leading-relaxed">
                    Nationwide tracked {siteConfig.shippingCarrier} dispatch within 1-2 business days, supported by our {siteConfig.trialPeriod}-day trial guarantee.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#5B6BF0] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 shadow-md group"
              >
                <span>Read Our Full Story</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#F4F4F6] hover:bg-[#EAEAEF] text-[#111] text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors border border-black/5"
              >
                Browse Equipment
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
