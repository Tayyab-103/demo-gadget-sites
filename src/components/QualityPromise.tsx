"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative bg-neutral-bg py-12 sm:py-16 md:py-20 lg:py-24 text-primary border-b border-black/5"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2 sm:mb-3 inline-block">
          The {siteConfig.brandName} Standard
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-primary tracking-tight mb-8 sm:mb-12 md:mb-14">
          Quality You Can Feel
        </h2>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* Item 1: Natural Fibers */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3.5 sm:mb-4 rounded-xl bg-neutral-bg text-secondary flex items-center justify-center border border-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1.5 sm:mb-2">
              Natural Fibers
            </h3>
            <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
              Pure cotton, linen, jute, and wool sourced for softness, breathability, and years of everyday use.
            </p>
          </div>

          {/* Item 2: Master Curation */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3.5 sm:mb-4 rounded-xl bg-neutral-bg text-secondary flex items-center justify-center border border-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m9 9 6 6" />
                <path d="m15 9-6 6" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1.5 sm:mb-2">
              Hand-Inspected
            </h3>
            <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
              Every piece is checked for weave, stitching, and colorfastness before it is folded and shipped to you.
            </p>
          </div>

          {/* Item 3: 60-Day Guarantee */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 mb-3.5 sm:mb-4 rounded-xl bg-neutral-bg text-secondary flex items-center justify-center border border-black/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-primary mb-1.5 sm:mb-2">
              60-Day Guarantee
            </h3>
            <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
              Shop with confidence. If it is not right for you, we offer an easy 60-day replacement or refund.
            </p>
          </div>
        </div>

        <div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Browse Fabrics
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}