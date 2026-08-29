"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const secondaryPromises = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
    title: "Aerospace Impact Armor",
    desc: "Aircraft-grade 6061-T6 aluminum shell with cold-forged corner blocks that absorb terminal baggage impacts.",
    badge: "Indestructible Alloy",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    ),
    title: "Japanese Hinomoto 360° Glide",
    desc: "Whisper-silent ball bearings tested across 150 km of cobblestones with under 36 dB acoustic output.",
    badge: "Silent Dual Spinners",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Dual TSA Integrated Security",
    desc: "Keyless 3-digit combination latches for seamless customs inspection without broken zippers or cut locks.",
    badge: "TSA Certified Master Key",
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-[#F8F6F0] py-16 sm:py-20 md:py-24 text-[#18222F] border-t border-[#C87D3B]/20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✈</span>
            The Wanderloom Promise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            Engineering Precision <span className="text-[#C87D3B] font-light italic lowercase">You Can Trust</span>
          </h2>
          <p className="mx-auto mt-2.5 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-[#18222F]/70 font-normal">
            Every piece is built to endure the world&apos;s most demanding flight routes.
          </p>
        </div>

        {/* Bento Trust Architecture: Flagship Hero Guarantee + 3 Precision Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Flagship Hero Guarantee Card (Left 5 Cols) */}
          <div className="lg:col-span-5 bg-[#0D1B2A] text-white rounded-3xl p-7 sm:p-9 border border-[#C87D3B]/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Background Radial Glow */}
            <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#C87D3B]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Trust Crest Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#C87D3B] text-white flex items-center justify-center text-2xl shadow-lg mb-6 group-hover:scale-105 transition-transform">
                ✈
              </div>

              <span className="text-[0.68rem] font-mono font-bold uppercase tracking-widest text-[#C87D3B] block mb-2">
                FLAGSHIP COMMITMENT
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-4 leading-tight">
                {siteConfig.trialPeriod || 14}-Day Worldwide <br />
                <span className="text-[#C87D3B] font-light italic lowercase">Flight Trial</span>
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal mb-8">
                Pack your wardrobe, board your flight, and test our gear anywhere on earth. If you are not 100% satisfied, return it hassle-free for a complete refund.
              </p>

              {/* Quick Checkpoints */}
              <div className="flex flex-col gap-2.5 text-xs text-white/90">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-[#0D1B2A] flex items-center justify-center text-[0.62rem] font-bold">✓</span>
                  <span>100% Full Refund Coverage</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-[#0D1B2A] flex items-center justify-center text-[0.62rem] font-bold">✓</span>
                  <span>Zero Restocking or Return Fees</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-[#0D1B2A] flex items-center justify-center text-[0.62rem] font-bold">✓</span>
                  <span>Lifetime Structural Chassis Warranty</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C87D3B] hover:text-[#E5985A] transition-colors"
              >
                Review Guarantee Terms →
              </Link>
            </div>
          </div>

          {/* 3 Stacked / Grid Precision Pillars (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 justify-between">
            {secondaryPromises.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 rounded-3xl bg-white p-6 sm:p-7 border border-[#C87D3B]/20 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#C87D3B]/50 hover:-translate-y-0.5"
              >
                <div className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0D1B2A] text-[#C87D3B] transition-all duration-300 group-hover:bg-[#C87D3B] group-hover:text-white shadow-xs">
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#0D1B2A] uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <span className="hidden sm:inline-block text-[0.62rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F8F6F0] text-[#C87D3B] border border-[#C87D3B]/25">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#18222F]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
