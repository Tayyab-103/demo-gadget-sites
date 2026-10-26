"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const guaranteeCards = [
  {
    badgeTop: String(siteConfig.trialPeriod || 14),
    badgeBottom: "Days",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80",
    author: "QUALITY ASSURANCE",
    title: `${siteConfig.trialPeriod || 14}-Day Money-Back Guarantee`,
    desc: `Test on your vehicle for ${siteConfig.trialPeriod || 14} days. If not completely satisfied, return for a full refund.`,
    link: "/terms",
  },
  {
    badgeTop: "100%",
    badgeBottom: "Fit",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    author: "OEM SPECIFICATIONS",
    title: "Precision Fitment Tolerances",
    desc: "CNC-machined and laser-measured for seamless bolt-on fitment with zero modifications.",
    link: "/about",
  },
  {
    badgeTop: "1",
    badgeBottom: "Year",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop&q=80",
    author: "WARRANTY PROTECTION",
    title: "1-Year Full Coverage Warranty",
    desc: "Full 12-month coverage protecting all mechanical and electrical parts against defects.",
    link: "/terms",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#fafafa] border-b border-gray-200" id="guarantee">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── HEADER ROW (Matching Screenshot) ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-gray-200">
          {/* Left Title: ⦿ GUARANTEE & PROMISE */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-emerald-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              GUARANTEE &amp; PROMISE
            </h2>
          </div>

          {/* Right Action: VIEW ALL GUARANTEES */}
          <Link
            href="/terms"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-emerald-600 border-b-2 border-emerald-600 pb-0.5 self-start sm:self-auto transition-colors"
          >
            VIEW ALL GUARANTEES
          </Link>
        </div>

        {/* ────────────────── 3 GUARANTEE CARDS (Matching Blog Card Layout) ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {guaranteeCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Floating Emerald Badge */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
                {/* Emerald Square Badge Top Left */}
                <div className="absolute top-3.5 left-3.5 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-md w-11 h-12 flex flex-col items-center justify-center shadow-lg leading-none p-1">
                  <span className="text-sm font-black tracking-tight">{card.badgeTop}</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider mt-0.5 opacity-90">{card.badgeBottom}</span>
                </div>

                {/* Card Top Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = card.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Author / Tag */}
                <span className="text-[0.68rem] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {card.author}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug mb-3 line-clamp-2">
                  <Link href={card.link}>
                    {card.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-3 font-normal">
                  {card.desc}
                </p>

                {/* Action Link */}
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-900 group-hover:text-emerald-600 transition-colors mt-auto"
                >
                  <span>READ MORE</span>
                  <span className="text-sm font-bold transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}