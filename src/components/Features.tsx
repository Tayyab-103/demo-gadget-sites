"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const torquePerks = [
  {
    title: "CNC Laser-Measured Tolerances (±0.01mm)",
    desc: "100% direct bolt-on plug-and-play installation with zero trimming, drilling, or vehicle modifications.",
    icon: "⚡",
  },
  {
    title: "Direct-to-Consumer Savings (Up to 50% Off)",
    desc: "We cut out dealership distributor markups to deliver pro-grade hardware at honest driver prices.",
    icon: "💰",
  },
  {
    title: "1-Year Comprehensive Full Warranty",
    desc: "Total hardware peace of mind covering mechanical and electrical assembly defects with free replacement.",
    icon: "🛡️",
  },
  {
    title: "60-Day Risk-Free Money-Back Guarantee",
    desc: "Test our components on your vehicle for two full months. If you're not 100% thrilled, return for a full refund.",
    icon: "🔄",
  },
  {
    title: "Free Same-Day Tracked UPS Shipping",
    desc: "Dispatched direct from our US fulfillment hub with live tracking sent straight to your email.",
    icon: "🚚",
  },
];

const oemDrawbacks = [
  "3x to 5x price markups to fund dealership middleman profits",
  "Restricted 30-day return windows with 15%–20% restocking fees",
  "Complicated warranty claims requiring dealer service appointments",
];

const genericDrawbacks = [
  "Inconsistent casting tolerances that vibrate and wear out prematurely",
  "Loose fitment often requiring modification, cutting, or adapters",
  "Zero real warranty when components degrade or fail under load",
];

export default function Features() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#f9fafb] to-[#f0f2f5] border-b border-gray-200" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-12 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              WHY CHOOSE US
            </h2>
          </div>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">
            ENGINEERED EXCELLENCE VS. THE ALTERNATIVES
          </span>
        </div>

        {/* ────────────────── 2-COLUMN BATTLE CARD SHOWCASE ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* LEFT: THE WINNER — TORQUE HOLLOW HERO CARD (Cols 7) */}
          <div className="lg:col-span-7 bg-[#0c0f14] text-white rounded-3xl p-7 sm:p-10 border-2 border-red-600 shadow-2xl shadow-red-950/30 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Red Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Gold Standard Header Pill */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white text-[0.68rem] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md mb-6">
                <span>🏆</span>
                <span>THE PRO-GRADE STANDARD &bull; {siteConfig.brandName}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white leading-tight mb-3">
                Precision Performance <br />
                <span className="text-red-500">Without The Dealership Tax</span>
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 font-normal max-w-xl">
                We bridge the gap between expensive dealership parts and unreliable cheap knockoffs. High-performance materials built to exact OEM specifications.
              </p>

              {/* Perks List */}
              <div className="space-y-4 mb-8">
                {torquePerks.map((perk, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 hover:border-red-500/60 rounded-2xl p-3.5 sm:p-4 transition-all duration-200 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                        {perk.title}
                      </h4>
                      <p className="text-[0.72rem] sm:text-xs text-gray-400 leading-relaxed mt-0.5">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-400 font-semibold flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>60-Day Money-Back Trial &bull; 1-Year Warranty</span>
              </div>

              <Link
                href="/#shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-full shadow-lg shadow-red-600/40 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                <span>Shop The 3 Parts</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: THE ALTERNATIVES — DEALERSHIP VS CHEAP KNOCKOFFS (Cols 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Card 1: Dealership OEM */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    <span>🏷️</span>
                    <span>DEALERSHIP OEM</span>
                  </div>
                  <span className="text-xs font-bold text-red-600">3x–5x Price Markup</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                  Overpriced with Rigid Policies
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  High retail price inflation designed to cover dealership overhead and distributor layers.
                </p>

                <ul className="space-y-2.5 text-xs text-gray-600">
                  {oemDrawbacks.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 text-[0.7rem] text-gray-400 font-semibold">
                High price tag, zero bundle savings
              </div>
            </div>

            {/* Card 2: Cheap Generic Knockoffs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-red-200">
                    <span>⚠️</span>
                    <span>GENERIC CHEAP PARTS</span>
                  </div>
                  <span className="text-xs font-bold text-red-600">High Failure Rate</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                  Inconsistent Castings &amp; Failure Risks
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  Low upfront cost with poor tolerances, brittle materials, and no real customer support.
                </p>

                <ul className="space-y-2.5 text-xs text-gray-600">
                  {genericDrawbacks.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 text-[0.7rem] text-gray-400 font-semibold">
                Frequent premature replacements required
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────── STATS & HIGHLIGHT BAR ────────────────── */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 block leading-none">±0.01mm</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-600 mt-1 block">CNC Laser Tolerance</span>
          </div>
          <div className="border-l border-gray-200">
            <span className="text-2xl sm:text-3xl font-black text-gray-900 block leading-none">Up to 50%</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-600 mt-1 block">Direct Factory Savings</span>
          </div>
          <div className="border-l border-gray-200">
            <span className="text-2xl sm:text-3xl font-black text-gray-900 block leading-none">60 Days</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-600 mt-1 block">Money-Back Guarantee</span>
          </div>
          <div className="border-l border-gray-200">
            <span className="text-2xl sm:text-3xl font-black text-gray-900 block leading-none">100%</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-red-600 mt-1 block">Guaranteed OEM Fit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
