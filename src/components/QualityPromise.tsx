"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    id: 1,
    title: "1,200 PSI Pressure Tested",
    description: "Every valve and fitting is factory hydro-tested to ensure zero leaks under heavy pressure.",
    iconColor: "#0284C7",
    iconBg: "bg-secondary/15",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Certified Lead-Free Brass",
    description: "Forged from solid brass alloy fully compliant with safe drinking water standards.",
    iconColor: "#059669",
    iconBg: "bg-emerald-500/15",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Thermal Expansion Guard",
    description: "Rated for up to 250°F continuous heat in boiler manifolds and water heater lines.",
    iconColor: "#EA580C",
    iconBg: "bg-orange-500/15",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
];

export default function QualityPromise() {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section id="quality-promise" className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="eyebrow justify-center mb-3">Foundry Quality</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            Built for <span className="text-secondary">Durability &amp; Performance</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-text/70">
            Industrial-grade engineering designed to prevent leaks and endure demanding conditions.
          </p>
        </div>

        {/* Feature Layout with Dual Overlapping Images */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT: Dual Overlapping Images */}
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl flex items-center justify-center py-6 sm:py-10">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl opacity-60 pointer-events-none" />

            {/* Back / Upper Image: feature1.jpg */}
            <div className="relative w-48 sm:w-64 md:w-72 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-bg -translate-x-6 sm:-translate-x-10 -translate-y-6 sm:-translate-y-8 z-10 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/img/feature1.jpg"
                alt="Industrial hydronic line and valve pressure hardware"
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover"
              />
            </div>

            {/* Front / Lower Image: feature2.jpg */}
            <div className="absolute w-48 sm:w-64 md:w-72 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-bg translate-x-8 sm:translate-x-12 translate-y-8 sm:translate-y-10 z-20 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/img/feature2.jpg"
                alt="Forged shutoff valve and precision pipe connection"
                fill
                sizes="(max-width: 768px) 50vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Feature Cards */}
          <div className="w-full max-w-lg space-y-4 sm:space-y-5 px-2 sm:px-0">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex items-center rounded-2xl p-4 sm:p-5 gap-4 sm:gap-5 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-secondary/10 border-secondary/30 shadow-md translate-x-1"
                      : "bg-white hover:bg-neutral-bg/70 border-black/8 hover:border-secondary/20 shadow-sm"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${feature.iconBg}`}
                    style={{ color: feature.iconColor }}
                  >
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-2 text-left sm:text-left">
              <Link
                href="/terms"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary hover:underline transition-colors"
              >
                60-Day Money-Back Trade Guarantee →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
