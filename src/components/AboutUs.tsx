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
      "Woven from long-staple organic cotton with zero synthetic bleaching or chemical sizing. Breathable, ultra-absorbent, and naturally hypoallergenic — it grows softer with every gentle wash, cradling your baby from the very first hour.",
    image: "/img/about1.jpg",
    quote: "Softer than a whisper, gentler than a cloud.",
  },
  {
    num: "02",
    tag: "SENSORY HARDWOOD",
    caption: "02 / NATURAL BEECHWOOD",
    title: "Responsibly harvested natural beechwood",
    description:
      "Each piece is hand-cut from sustainably managed forests, then sanded to a velvet-smooth finish by skilled artisans. Naturally antimicrobial wood grains soothe sore gums and spark the tactile curiosity that helps little minds grow.",
    image: "/img/about2.jpg",
    quote: "Rooted in nature. Finished with love.",
  },
  {
    num: "03",
    tag: "TEETHING COMFORT",
    caption: "03 / FOOD-GRADE SILICONE",
    title: "Gentle relief when they need it most",
    description:
      "Platinum-cured food-grade silicone with dual-texture massage ridges. Completely free from BPA, phthalates, lead, and PVC — designed by parents and approved by paediatricians for safe, soothing teething comfort every single day.",
    image: "/img/about3.jpg",
    quote: "Every gnaw, every smile — safely held.",
  },
];

export default function AboutUs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeMaterial = materials[selectedIndex];

  return (
    <section className="py-20 md:py-28 bg-white text-[#1E1040] relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
              The Story Behind the Treasures
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1040] tracking-tight leading-tight">
            The Anatomy of <span className="text-[#7C3AED]">Tenderness</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            Every keepsake at {siteConfig.brandName} begins with a single question — is it pure enough for the smallest, most precious hands?
          </p>
        </div>

        {/* Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Photography */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-4/5 rounded-[22px] overflow-hidden shadow-lg bg-purple-50 ring-1 ring-purple-100">
              <Image
                src={activeMaterial.image}
                alt={activeMaterial.title}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-opacity duration-500"
              />
            </div>

            <div className="mt-5 pt-2">
              <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7C3AED] mb-1">
                {activeMaterial.caption}
              </div>

              <p className="font-script text-2xl text-[#1E1040] leading-snug my-2">
                &ldquo;{activeMaterial.quote}&rdquo;
              </p>

              <div className="mt-4 pt-3 border-t border-purple-100 flex flex-col">
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-[#1E1040]">
                  Hand-Inspected
                </span>
                <span className="text-xs text-gray-500 mt-0.5 font-normal">
                  Every piece is quality-checked before reaching your nursery.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Numbered List */}
          <div className="lg:col-span-7 flex flex-col lg:pt-4">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">
              The Materials
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1E1040] tracking-tight leading-snug mb-3">
              Made for their first little moments.
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-8 max-w-xl">
              We choose every thread, every grain, every bead with the earliest days in mind — soft against newborn skin, naturally comforting, and built to last well beyond the milestone.
            </p>

            <div className="h-[1px] w-full bg-purple-100 mb-6" />

            <div className="flex flex-col gap-2">
              {materials.map((mat, index) => {
                const isActive = selectedIndex === index;
                return (
                  <button
                    key={mat.num}
                    onClick={() => setSelectedIndex(index)}
                    className={`text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer relative ${
                      isActive ? "bg-purple-50 shadow-sm" : "hover:bg-purple-50/50"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-[#7C3AED] rounded-r-full" />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        <span className={`text-xs font-bold tracking-widest ${isActive ? "text-[#7C3AED]" : "text-gray-400"}`}>
                          {mat.num}
                        </span>
                        <div>
                          <div className="text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-0.5">
                            {mat.tag}
                          </div>
                          <div className="text-sm sm:text-base font-black text-[#1E1040]">
                            {mat.title}
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold transition-transform ${isActive ? "text-[#7C3AED] translate-x-1" : "text-gray-300"}`}>
                        →
                      </span>
                    </div>

                    {isActive && (
                      <p className="text-xs text-gray-600 leading-relaxed mt-3 pl-7 pt-1 font-normal border-t border-purple-100">
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
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
              >
                <span>Explore our collection</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}