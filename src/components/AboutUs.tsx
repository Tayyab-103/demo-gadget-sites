"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const labMetrics = [
  { value: "10,000+", label: "Active Athletes Equipped" },
  { value: "500+", label: "Lab Stress Test Cycles" },
  { value: "99.4%", label: "Satisfaction Benchmark" },
  { value: "1-Year", label: "Zero-Hassle Direct Coverage" },
];

const pillars = [
  {
    title: "Relentless Durability",
    desc: "Every product is built with military-grade resilience to withstand daily drops, sweat, and high-intensity loads.",
  },
  {
    title: "Athlete-Driven Ergonomics",
    desc: "Engineered from physical feedback by real lifters, runners, and physiotherapists to optimize grip, weight, and ease.",
  },
  {
    title: "Direct-to-Athlete Pricing",
    desc: "By cutting out retail middlemen and excessive sponsor markups, we deliver pro-tier gear at an honest cost.",
  },
  {
    title: "Precision Recovery Tech",
    desc: "Targeted vibration frequencies, bio-telemetry sensors, and resistance grades that deliver measurable physical results.",
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span className="eyebrow justify-center mb-4">Our DNA</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Engineered For The <span className="text-secondary bg-primary px-3 py-1 rounded-xl">Obsessed</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-text/70 leading-relaxed">
            {siteConfig.brandName} was born from a simple belief: high-performance gear shouldn&apos;t cost a small fortune, and everyday training tools should never snap or give out mid-set.
          </p>
        </div>

        {/* 2-Column Split: Visual Left & Story/Features Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl bg-neutral-bg border border-black/5 group">
              <Image
                src="https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=900&q=80"
                alt={`${siteConfig.brandName} Performance Testing`}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 inset-x-6 z-10 rounded-2xl bg-white/95 backdrop-blur-md p-4 border border-black/5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary font-black">
                    ⚡
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wide text-primary">
                      Austin, Texas Lab
                    </div>
                    <div className="text-[0.7rem] text-neutral-text/60">
                      Tested under extreme torque &amp; high impact
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 4 Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-neutral-bg p-6 border border-black/5 hover:border-secondary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-secondary text-xs font-black">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm font-black uppercase tracking-tight text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-text/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-primary text-white border border-white/10 shadow-lg">
              {labMetrics.map((metric, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-black text-secondary">
                    {metric.value}
                  </div>
                  <div className="text-[0.62rem] font-bold uppercase tracking-wider text-white/60 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-black uppercase tracking-widest text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 shadow-md"
              >
                Shop Pro Gear
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}