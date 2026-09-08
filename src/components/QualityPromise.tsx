"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promisePillars = [
  {
    number: "01",
    icon: "🛡️",
    title: "100% Certified Food-Grade Metallurgy",
    description: "Every tool is forged from high-purity, non-reactive 304 and 420J2 surgical stainless alloys. Free from lead, cadmium, toxic coatings, or cheap fillers.",
    badge: "LFGB & FDA Compliant",
    detail: "Non-porous hygienic surfaces that prevent bacterial build-up.",
  },
  {
    number: "02",
    icon: "🔥",
    title: "High-Heat Thermal & Stress Resilience",
    description: "Engineered to withstand temperatures up to 480°F (250°C). Our whisk wires and shear pivots never warp, anneal, or lose structural temper balance.",
    badge: "Oven & Dishwasher Safe",
    detail: "Tested under intensive commercial bakery & restaurant cycles.",
  },
  {
    number: "03",
    icon: "⚖️",
    title: `${siteConfig.trialPeriod}-Day Risk-Free Culinary Trial`,
    description: `Put our kitchen essentials to work in your own home recipes. If they don't elevate your prep speed and tactile comfort, receive a swift 100% full refund.`,
    badge: "Zero-Risk Guarantee",
    detail: "No restocking fees. Hassle-free prepaid returns.",
  },
  {
    number: "04",
    icon: "📜",
    title: "365-Day Domestic Workshop Warranty",
    description: "Every purchase is backed by a 1-year atelier warranty covering weld integrity, blade micro-serrations, handle balance, and digital scale precision.",
    badge: "1-Year Atelier Coverage",
    detail: "Direct replacement or repair from our domestic facility.",
  },
];

const quickStats = [
  { value: "100%", label: "Toxin-Free Food-Safe Steel" },
  { value: "480°F", label: "Max Thermal Heat Threshold" },
  { value: `${siteConfig.trialPeriod} Days`, label: "Risk-Free Recipe Trial" },
  { value: "365 Days", label: "Comprehensive Warranty" },
];

export default function QualityPromise() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="quality">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E06830]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#F8F6F2] px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                THE FOUNDRY STANDARD OF EXCELLENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
              The {siteConfig.brandName} <br />
              <span className="text-[#E06830] italic font-serif">Uncompromising Quality Promise</span>
            </h2>

            <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
              We design tools meant to become lifelong heirlooms on your countertop, backed by transparent craftsmanship and risk-free culinary guarantees.
            </p>
          </div>

          <div className="self-start md:self-end">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-3.5 px-7 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
            >
              <span>Explore Guaranteed Tools</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Top 4 Quick Metric Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-12 sm:mb-16">
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#F8F6F2] border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-center items-center text-center shadow-2xs hover:border-[#E06830]/50 transition-colors"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#121316] mb-1">
                {stat.value}
              </span>
              <span className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider font-bold text-[#121316]/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 4-Card Luxury Quality Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {promisePillars.map((item) => (
            <div
              key={item.number}
              className="bg-white rounded-[2rem] border border-stone-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#E06830]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#121316] text-[#E06830] flex items-center justify-center text-lg shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-xs font-black text-[#E06830] font-serif uppercase tracking-widest">
                      PILLAR {item.number}
                    </span>
                  </div>

                  <span className="bg-[#F8F6F2] border border-stone-200 text-[#121316] text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] mb-3 leading-snug group-hover:text-[#E06830] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#121316]/75 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Detail */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-[#121316]/80">
                <span className="text-[#E06830] font-bold">✓</span>
                <span className="text-[0.75rem]">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout Banner */}
        <div className="bg-[#121316] text-white rounded-[2.5rem] p-8 sm:p-10 border border-white/10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#E06830] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg">
              🛡️
            </div>

            <div>
              <div className="text-[0.65rem] uppercase font-bold tracking-[0.2em] text-[#E06830] mb-1">
                OUR PROMISE IS IN WRITING
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Order With Absolute Confidence Today
              </h4>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl">
                Every shipment includes our official guarantee certificate, direct workshop care instructions, and a pre-printed returns protocol.
              </p>
            </div>
          </div>

          <Link
            href="/shop"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#E06830] text-white hover:bg-white hover:text-[#121316] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            <span>Claim Risk-Free Tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}