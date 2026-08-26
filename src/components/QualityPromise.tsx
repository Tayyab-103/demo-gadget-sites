"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "58 HRC Tempered Carbon Steel",
    desc: "Every blade undergoes controlled oil quenching to achieve optimum hardness — resisting chips, rock impacts, and blade deflection under heavy leverage.",
  },
  {
    title: "Lifetime Metallurgy Guarantee",
    desc: "If any Thornwick forging ever cracks, snaps, or fails under standard gardening use, we will repair or replace it unconditionally.",
  },
  {
    title: "100% Plastic-Free Craft & Packaging",
    desc: "From lathe-turned solid hardwood handles and brass rivets to recyclable kraft packaging, our products honor the earth we cultivate.",
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-black/5"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-14">
        
        {/* Left-Aligned Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              OUR QUALITY PROMISE
            </span>
            <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
            Built to Outlast <span className="text-[#265C1E]">A Lifetime of Seasons</span>
          </h2>

          <p className="mt-3 text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
            Gardening should be a lifelong pursuit, not an annual cycle of replacing bent tools. We guarantee every instrument that leaves our workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* LEFT — WORKSHOP CRAFT IMAGE */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-3xl bg-neutral-900 shadow-md min-h-[380px] md:min-h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&auto=format&fit=crop&q=80"
              alt="Hand-forged carbon steel garden tools in rich soil"
              className="absolute inset-0 block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1000&auto=format&fit=crop&q=80";
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#132B1C]/90 via-[#132B1C]/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs uppercase font-bold text-[#78C470] tracking-widest block mb-1">
                Hand-Forged in Small Batches
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold">
                Inspected &amp; Certified in Austin, Texas
              </h3>
              <p className="text-xs text-white/80 mt-1 max-w-md">
                Every single piece is individually hand-checked for weight balance, blade bevel, and grain alignment.
              </p>
            </div>
          </div>

          {/* RIGHT — GUARANTEE PILLARS */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl border border-black/5 bg-[#FAF9F6] p-6 sm:p-8 lg:p-10 shadow-xs">
            <div>
              <div className="flex flex-col gap-5">
                {promises.map((promise, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-2xl border border-black/5 shadow-xs">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#265C1E]/10 text-[#265C1E] font-black text-xs font-mono">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#11281A] mb-1">
                        {promise.title}
                      </h4>
                      <p className="text-xs text-neutral-text/70 leading-relaxed">
                        {promise.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Stamp */}
            <div className="mt-8 pt-5 border-t border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#132B1C] text-white flex items-center justify-center font-bold text-xs">
                  TW
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-[#11281A] tracking-wider">
                    Thornwick Foundry Seal
                  </div>
                  <div className="text-[0.65rem] text-neutral-text/50">
                    Lifetime Metallurgy Guarantee
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-[#265C1E] uppercase tracking-widest block">
                  60-Day Trial
                </span>
                <span className="text-[0.65rem] text-neutral-text/50">
                  Risk-Free Soil Guarantee
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}