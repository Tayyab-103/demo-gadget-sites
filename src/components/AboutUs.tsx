"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    number: "01",
    title: "100% Organic Combed Cottons",
    desc: "Spun exclusively from long-staple organic cotton fibers, free from synthetic pesticides and harsh chemical finishes.",
  },
  {
    number: "02",
    title: "Pre-Shrunk & Double-Stitched",
    desc: "Every weave undergoes pre-shrink wash testing and reinforced twin-needle stitching to endure active family life.",
  },
  {
    number: "03",
    title: "OEKO-TEX Non-Toxic Dyes",
    desc: "Skin-friendly, colorfast dyeing processes that are safe for infants and adults alike with zero toxic runoff.",
  },
  {
    number: "04",
    title: "Direct Family Bundle Pricing",
    desc: "We eliminate wholesale markups so you can outfit children and parents in premium textiles at fair costs.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06]" id="about">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Top Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Atelier &amp; Craft
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary leading-tight">
              Clothing Built For Real Family Life
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 text-neutral-text/70 text-sm md:text-base leading-relaxed">
            <p>
              At <strong className="text-primary font-bold">{siteConfig.brandName}</strong>, we started with a simple belief: family clothing should be simple, exceptionally soft, and built to survive daily wear and washing.
            </p>
            <p>
              We craft foundational wardrobe staples from pure combed organic cottons, soft-brushed French terry fleeces, and weather-resistant outers that look tailored and feel effortless all day.
            </p>
          </div>
        </div>

        {/* Visual Showcase + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Studio Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-white">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80"
                alt="Apparel craftsmanship and textile design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 rounded-2xl border border-black/[0.06] shadow-xs hover:border-secondary/40 transition-colors"
              >
                <span className="text-lg font-black text-secondary font-mono block mb-1.5">
                  {pillar.number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-neutral-text/65 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}