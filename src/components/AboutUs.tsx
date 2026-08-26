"use client";

import React from "react";
import Link from "next/link";

const heritagePillars = [
  {
    title: "58 HRC Carbon Steel Metallurgy",
    desc: "Drop-forged from manganese and Japanese SK5 steel to prevent bending under leverage.",
    stat: "58 HRC",
    tag: "Hardness",
  },
  {
    title: "FSC Solid Ash Hardwood Handles",
    desc: "Turned on traditional wood lathes and sealed with botanical linseed oil.",
    stat: "100% FSC",
    tag: "Hardwood",
  },
  {
    title: "Soil Depth Laser Calibration",
    desc: "Precision engraved measurement markings for bulb planting and seed depth.",
    stat: "Laser Depth",
    tag: "Precision",
  },
  {
    title: "Lifetime Foundry Warranty",
    desc: "Every instrument is unconditionally guaranteed against metallurgical failure.",
    stat: "Lifetime",
    tag: "Guarantee",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 border-b border-black/5" id="about">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              FOUNDRY HERITAGE
            </span>
            <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans leading-tight">
            Rooted in Soil, <br />
            <span className="text-[#265C1E]">Forged with Honor</span>
          </h2>
          
          <p className="mt-4 text-[#11281A]/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            We reject flimsy stamped-metal garden tools. At Thornwick, every trowel, bypass pruner, and hand cultivator is built as an heirloom tool meant to be passed down through generations of gardeners.
          </p>
        </div>

        {/* Dual Visual Gallery + Heritage Metrics Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Dual Garden Tool Photography Frame */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-neutral-200">
              <img
                src="/img/products/garden_tools/pruner_main.jpg"
                alt="Precision bypass pruning shears cutting stems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-[0.7rem] font-extrabold uppercase tracking-wider">
                Bypass Pruning Shears
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-neutral-200 mt-6">
              <img
                src="/img/products/garden_tools/cultivator_1.jpg"
                alt="3-prong hand cultivator aerating rich topsoil"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-[0.7rem] font-extrabold uppercase tracking-wider">
                Hand Soil Cultivator
              </div>
            </div>
          </div>

          {/* Right: 4 Heritage Feature Pillar Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {heritagePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-black/5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.62rem] font-bold text-[#265C1E] uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                      <span className="text-xs font-black text-[#132B1C]">
                        {pillar.stat}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#11281A] mb-1.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-text/70 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions Banner */}
            <div className="mt-4 p-5 rounded-2xl bg-white border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#11281A] uppercase tracking-wider">
                  Guaranteed 60-Day Soil Trial
                </div>
                <div className="text-[0.68rem] text-neutral-text/60">
                  Try our tools in your garden risk-free with free returns.
                </div>
              </div>

              <Link
                href="/shop"
                className="bg-[#265C1E] hover:bg-[#1E4A17] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-colors flex-shrink-0"
              >
                Shop The Forge
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}