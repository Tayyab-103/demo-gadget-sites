"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Archival-Grade Canvas & Media",
    desc: "Built with non-yellowing, acid-free fibers and premium binding mediums for long-lasting artwork.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Creator Guarantee",
    desc: "Test our art and craft supplies in your creative studio. If you're not satisfied, return within 14 days for a full refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Rich Color & Precision Flow",
    desc: "Crafted with high pigment loading for maximum coverage, vibrant blending, and smooth application.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="py-16 sm:py-20 md:py-24 text-white border-t border-white/10"
      style={{ backgroundColor: "var(--primary-color)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 25%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Certified Craft Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08]">
            Quality &amp; <span style={{ color: "var(--secondary-color)" }}>Reliability</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-white/80 font-normal">
            Every product from {siteConfig.brandName} is curated for artists, painters, and craft workshops who demand peak performance.
          </p>
        </div>

        {/* 3 Quality Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/10 border border-white/15 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-md border border-white/20"
                style={{ backgroundColor: "color-mix(in srgb, var(--secondary-color) 70%, var(--primary-color))" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 text-base sm:text-lg font-black text-white uppercase tracking-tight">
                {promise.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/75">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/90 hover:text-white transition-colors underline"
          >
            Review 14-Day Studio Trial &amp; Return Terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
