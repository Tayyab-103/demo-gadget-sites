"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "CNC Laser-Measured Tolerances",
    desc: "Every component is calibrated to strict ±0.01mm tolerances to ensure a flawless direct bolt-on OEM fit with zero modifications required.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Direct-to-Consumer Savings",
    desc: "By eliminating multi-tiered dealership distributor layers, we pass direct factory savings of up to 50% straight to drivers.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Pro-Grade Heavy-Duty Materials",
    desc: "From high-density synthetic filtration pleats to high-carbon rotor alloys and pure copper alternator windings, we build for high-mileage endurance.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "60-Day Trial & 1-Year Warranty",
    desc: "Drive with unconditional peace of mind. Test our parts on the road for 60 days with complete refund coverage and a full 1-year warranty.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ────────────────── 1. ABOUT HERO HEADER ────────────────── */}
      <section className="relative py-16 sm:py-24 bg-[#090c10] text-white border-b border-gray-800 overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[400px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-500">About Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
              <span>⚙️</span>
              <span>ENGINEERED FOR THE ROAD</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] mb-6">
              Precision Automotive Works <br />
              <span className="text-red-500">Without Dealership Markups</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-8">
              At {siteConfig.brandName}, we manufacture pro-grade filtration, high-stopping-power braking assemblies, and high-output electrical components designed to meet or exceed strict factory OEM tolerances.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-gray-800/80">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white block">10,000+</span>
              <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-500 mt-1 block">Vehicles Equipped</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white block">±0.01mm</span>
              <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-500 mt-1 block">CNC Laser Tolerance</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white block">60 Days</span>
              <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-500 mt-1 block">Risk-Free Road Trial</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white block">100%</span>
              <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-500 mt-1 block">US Warehouse Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── 2. OUR STORY & CRAFTSMANSHIP ────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Showcase with Floating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 group">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&auto=format&fit=crop&q=80"
                  alt="Torque Hollow Automotive Engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=900&auto=format&fit=crop&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Guarantee Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white border-2 border-red-500 rounded-2xl p-4 shadow-xl flex items-center gap-3.5 max-w-[260px]">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-lg flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-900 uppercase">100% Direct Fit</h4>
                  <p className="text-[0.68rem] text-gray-500">Plug &amp; play factory OEM replacement</p>
                </div>
              </div>
            </div>

            {/* Right Story Content */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-4 h-4 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-600" />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                  OUR MISSION &amp; PHILOSOPHY
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mb-6 leading-tight">
                Built For Drivers Who Demand Real Durability
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                <p>
                  Every automotive enthusiast has faced the dilemma: spend hundreds of dollars on inflated dealership markup parts, or take a gamble on unreliable, cheap aftermarket knockoffs that fail within months.
                </p>
                <p>
                  <strong>{siteConfig.brandName}</strong> was founded to end that compromise. We combine aerospace-grade CNC machining, advanced metallurgy, and strict OEM quality-control standards with direct-to-consumer delivery.
                </p>
                <p>
                  Whether you are upgrading your braking system for heavy towing, restoring engine airflow with high-pleat filtration, or powering auxiliary electrical systems with a high-amp alternator, our parts are engineered to perform flawlessly from mile one.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-6">
                <div>
                  <strong className="text-sm font-bold text-gray-900 block">{siteConfig.brandName}</strong>
                  <span className="text-xs text-gray-500">Operated by {siteConfig.corpName}</span>
                </div>
                <div className="border-l border-gray-200 pl-6">
                  <strong className="text-sm font-bold text-gray-900 block">{siteConfig.address}</strong>
                  <span className="text-xs text-gray-500">US Operations &amp; Fulfillment</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────── 3. FOUR CORE ENGINEERING PILLARS ────────────────── */}
      <section className="py-16 sm:py-24 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-red-600 mb-2 block">
              QUALITY CONTROL CHECKPOINTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-gray-900 mb-3">
              The Torque Hollow Standard
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              How our manufacturing protocol ensures total reliability under extreme operating conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── 4. FINAL ABOUT CTA BANNER ────────────────── */}
      <section className="py-14 sm:py-20 bg-[#090c10] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            <span>🛡️</span>
            <span>60-DAY SATISFACTION GUARANTEE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Ready to Upgrade Your Ride with Confidence?
          </h2>

          <p className="text-gray-400 text-xs sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Experience why over 10,000 drivers choose Torque Hollow. Select your hardware today and enjoy free express US shipping.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-red-600/40 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Shop Performance Parts</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all whitespace-nowrap"
            >
              <span>Speak to an Expert</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}