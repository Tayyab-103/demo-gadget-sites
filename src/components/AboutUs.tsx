"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const materials = [
  {
    num: "01",
    tag: "TEXTILE PURITY",
    caption: "01 / ORGANIC MUSLIN",
    title: "100% GOTS-certified organic muslin",
    description:
      "Spun from long-staple organic cotton, our muslin is breathable, lightweight and exceptionally gentle against delicate skin. Naturally hypoallergenic and free from synthetic bleaches.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&q=85",
    quote: "A gentle start for the sweetest little milestones.",
  },
  {
    num: "02",
    tag: "SENSORY HARDWOOD",
    caption: "02 / NATURAL BEECHWOOD",
    title: "Responsibly sourced natural beechwood",
    description:
      "Sustainably harvested and hand-sanded to a velvety splinter-free finish. Naturally antimicrobial wood grains that soothe sore gums and stimulate fine-motor tactile curiosity.",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&q=85",
    quote: "Rooted in nature, hand-finished for little hands.",
  },
  {
    num: "03",
    tag: "TEETHING RELIEF",
    caption: "03 / FOOD-GRADE SILICONE",
    title: "Gentle comfort when they need it most",
    description:
      "100% food-grade platinum-cured silicone beads with dual-texture ridges. Zero BPA, phthalates, lead, or PVC — designed to massage swollen gums safely.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=85",
    quote: "Calming teething tenderness in every touch.",
  },
];

export default function AboutUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMaterial = materials[selectedIndex];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] text-[#1E2330] relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
              The Story Behind the Treasures
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-[#E5DDD0]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2330] tracking-tight leading-tight">
            The Anatomy of <span className="text-[#FF6B8B]">Tenderness</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            Every little keepsake at {siteConfig.brandName} is made with purity, comfort and care.
          </p>
        </div>

        {/* Asymmetric Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Natural Photography */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-4/5 rounded-[22px] overflow-hidden shadow-xs bg-white">
              <Image
                src={activeMaterial.image}
                alt={activeMaterial.title}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Below Image Caption & Quote */}
            <div className="mt-5 pt-2">
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#FF6B8B] mb-1">
                {activeMaterial.caption}
              </div>

              <p className="font-script text-2xl text-[#2B2D42] leading-snug my-2">
                &ldquo;{activeMaterial.quote}&rdquo;
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5DDD0]/70 flex flex-col">
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#1E2330]">
                  Hand-Inspected
                </span>
                <span className="text-xs text-gray-500 mt-0.5 font-normal">
                  Every piece is checked before it reaches your nursery.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered List */}
          <div className="lg:col-span-7 flex flex-col lg:pt-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
              The Materials
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1E2330] tracking-tight leading-snug mb-3">
              Made for their first little moments.
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-8 max-w-xl">
              We choose every material with the earliest days in mind — soft against newborn skin, naturally comforting, and made to last beyond the moment.
            </p>

            <div className="h-[1px] w-full bg-[#E5DDD0]/80 mb-6" />

            <div className="flex flex-col gap-2">
              {materials.map((mat, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={mat.num}
                    onClick={() => setSelectedIndex(index)}
                    className={`text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer relative ${
                      isActive
                        ? "bg-white shadow-xs"
                        : "hover:bg-white/60"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-[#FF6B8B] rounded-r-full" />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        <span
                          className={`text-xs font-bold tracking-widest ${
                            isActive ? "text-[#FF6B8B]" : "text-gray-400"
                          }`}
                        >
                          {mat.num}
                        </span>

                        <div>
                          <div className="text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                            {mat.tag}
                          </div>
                          <div className="text-sm sm:text-base font-black text-[#1E2330]">
                            {mat.title}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-bold transition-transform ${
                          isActive ? "text-[#FF6B8B] translate-x-1" : "text-gray-300"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {isActive && (
                      <p className="text-xs text-gray-600 leading-relaxed mt-3 pl-7 pt-1 font-normal border-t border-gray-100">
                        {mat.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#FF6B8B] hover:text-[#FA5679] transition-colors"
              >
                <span>Explore our materials</span>
                <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}