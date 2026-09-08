"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    number: "01",
    title: "Laser-Precision Fit",
    desc: "Micro-tolerance CNC cut joints engineered to snap smoothly together with zero glue or adhesives.",
  },
  {
    number: "02",
    title: "Sustainably Sourced Wood",
    desc: "Eco-certified Baltic birch, smooth solid walnut, and non-toxic food-safe finishes built to endure.",
  },
  {
    number: "03",
    title: "Deep Tactical Gameplay",
    desc: "Thoughtfully balanced game mechanics that stimulate strategic thinking, social play, and replayability.",
  },
  {
    number: "04",
    title: "100% Complete Set Promise",
    desc: "Every gear, meeple, card, and blueprint strictly inspected with lifetime free missing piece support.",
  },
];

export default function AboutUs() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06] font-sans" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Our Craft &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#191716] leading-tight">
              Igniting Curiosity, Strategy &amp; Play
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center text-black/75 text-sm md:text-base leading-relaxed">
            <p>
              At <strong className="text-[#191716] font-bold">{siteConfig.brandName}</strong>, we believe the greatest moments happen around a tabletop or maker workbench. We curate and craft mechanical 3D wooden models, engaging tabletop strategy games, and timeless classic puzzles that bring families and enthusiasts together away from screens.
            </p>
          </div>
        </div>

        {/* Visual Showcase + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Studio Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-white group">
              <img
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop"
                alt="Wonderwick Hobby Workshop and Board Game Design"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#E5B887] block mb-1">
                  AUSTIN, TEXAS ATELIER
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white/90">
                  Where tactile craftsmanship meets the thrill of tabletop competition.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white p-6 rounded-2xl border border-black/[0.06] shadow-xs hover:border-[#A36B42]/40 transition-colors"
              >
                <span className="text-lg font-black text-[#A36B42] font-mono block mb-1.5">
                  {pillar.number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#191716] mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-black/65 text-xs leading-relaxed">
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