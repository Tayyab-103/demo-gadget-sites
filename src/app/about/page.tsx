"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#E5E6EB] py-10 sm:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#111]">About Us</span>
          </nav>

          {/* =========================================================
              HERO CARD
              ========================================================= */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4F4F6] border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-[#111]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                Who We Are
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black uppercase text-[#111] tracking-tight leading-[1.08] italic">
                Engineered For Precision, Built For Resilience
              </h1>

              <p className="text-sm sm:text-base text-neutral-text/65 leading-relaxed pt-2">
                At {siteConfig.brandName}, we design and supply industrial-grade electrical testing instruments, thermal diagnostic tools, and pure sine wave power modules for commercial installations, power utilities, and off-grid facilities.
              </p>
            </div>
          </div>

          {/* =========================================================
              BENTO GRID: 4 CORE PILLARS
              ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="text-2xl font-black text-[#111] font-mono block mb-4">
                  01
                </span>
                <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                  Calibrated Precision
                </h3>
                <p className="text-xs text-neutral-text/60 leading-relaxed">
                  Every testing instrument undergoes multi-point laboratory calibration before dispatch to ensure NIST-traceable accuracy.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 text-[0.65rem] font-bold uppercase tracking-wider text-[#5B6BF0]">
                IEC / NIST Certified
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="text-2xl font-black text-[#111] font-mono block mb-4">
                  02
                </span>
                <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                  Jobsite Durability
                </h3>
                <p className="text-xs text-neutral-text/60 leading-relaxed">
                  Built with shock-absorbing silicone casings and heavy-duty thermal heat-sinks engineered for harsh field environments.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 text-[0.65rem] font-bold uppercase tracking-wider text-[#5B6BF0]">
                Drop & Shock Tested
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="text-2xl font-black text-[#111] font-mono block mb-4">
                  03
                </span>
                <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                  Grid Safety First
                </h3>
                <p className="text-xs text-neutral-text/60 leading-relaxed">
                  High-voltage isolation safeguards, non-contact detection, and inrush capture protect technicians against dangerous spikes.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 text-[0.65rem] font-bold uppercase tracking-wider text-[#5B6BF0]">
                CAT IV 600V Rated
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <span className="text-2xl font-black text-[#111] font-mono block mb-4">
                  04
                </span>
                <h3 className="text-lg font-bold text-[#111] mb-2 leading-snug">
                  1-Year Warranty
                </h3>
                <p className="text-xs text-neutral-text/60 leading-relaxed">
                  Comprehensive manufacturer coverage against defects with swift replacement support from our technical engineering desk.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-black/5 text-[0.65rem] font-bold uppercase tracking-wider text-[#5B6BF0]">
                Full Commercial Coverage
              </div>
            </div>

          </div>

          {/* =========================================================
              STORY & METRICS ROW
              ========================================================= */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Image */}
              <div className="lg:col-span-6 rounded-[2rem] overflow-hidden bg-[#1A1D24] shadow-md h-[320px] sm:h-[380px]">
                <img
                  src="/img/aboutus.jpg"
                  alt="Industrial Electrical Engineering Facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Mission & Stats */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black text-[#111] tracking-tight">
                  Powering Modern Electrical Infrastructure
                </h2>

                <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed">
                  Whether troubleshooting complex commercial control cabinets or setting up pure sine wave backup power systems, our instruments deliver unwavering repeatability.
                </p>

                {/* 3 Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/[0.06]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#111] font-mono">
                      99.9%
                    </div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-neutral-text/45 mt-1">
                      Accuracy Rating
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#111] font-mono">
                      49K+
                    </div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-neutral-text/45 mt-1">
                      Units Deployed
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#111] font-mono">
                      100%
                    </div>
                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-neutral-text/45 mt-1">
                      Lab Tested
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2.5 bg-[#111] hover:bg-[#333] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition-all"
                  >
                    <span>Explore Products</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
