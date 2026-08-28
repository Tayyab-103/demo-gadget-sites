"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const trustTiles = [
  {
    icon: "🌿",
    title: "100% Non-Toxic & Safe",
    desc: "BPA-free, hypoallergenic & food-grade pet-safe materials.",
  },
  {
    icon: "🩺",
    title: "Vet Endorsed Standards",
    desc: "Anatomically contoured for joint comfort & coat health.",
  },
  {
    icon: "🛡️",
    title: "Chew & Stress Tested",
    desc: "Built to withstand energetic daily play and curious paws.",
  },
  {
    icon: "❤️",
    title: "14-Day Happy Tail Trial",
    desc: "100% risk-free money-back satisfaction guarantee.",
  },
];

export default function AboutUs() {
  return (
    <section className="relative bg-[#FBF9F5] py-12 sm:py-16 md:py-20 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary block mb-3">
            DEVOTED TO THE WELL-BEING OF EVERY PET
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-4">
            Our Mercantile <span className="italic text-secondary font-serif">Heritage</span>
          </h2>
          <p className="text-neutral-text/75 text-sm sm:text-base leading-relaxed">
            At {siteConfig.brandName}, we believe our dogs and cats aren&apos;t just companions — they are cherished family members who deserve the highest standard of care, comfort, and playtime joy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* FEATURED VISUAL (Large Card - 5 cols) */}
          <div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden border border-stone-200/60 shadow-sm min-h-[420px] lg:min-h-full flex flex-col justify-between group">
            {/* Background Image */}
            <Image
              src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&q=80"
              alt={`${siteConfig.brandName} companion care`}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#182825]/85 via-black/20 to-transparent pointer-events-none" />

            {/* Top Floating Frosted Pill */}
            <div className="relative z-10 p-6 sm:p-8">
              <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-primary tracking-wide">
                  Starpath Pet Labs • Verified Pet Safety
                </span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-6 sm:p-8 text-white">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-1">
                OUR PROMISE
              </span>
              <p className="font-serif text-base sm:text-lg font-medium leading-snug">
                “Every essential we curate is tested on our own beloved companions first.”
              </p>
              <span className="text-[0.7rem] text-white/60 block mt-2">
                Austin, Texas • Est. 2024
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN (Bento Stack - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Top Bento Card: STORY & MISSION */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-9 md:p-10 border border-stone-200/60 shadow-xs">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-2">
                OUR MISSION &amp; PHILOSOPHY
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4 leading-tight">
                Thoughtful Essentials for Happier, Healthier Pets
              </h3>

              <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed mb-8">
                We founded {siteConfig.brandName} after noticing how much of today&apos;s pet gear relied on cheap, brittle plastics that broke easily and shed synthetic micro-particles. We set out to change that by designing durable, veterinarian-approved goods that support pet wellness, improve grooming comfort, and ignite playtime curiosity.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/#shop"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#182825] text-white hover:bg-secondary transition-all duration-300 py-3.5 px-8 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
                >
                  <span>Explore Pet Essentials</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-center bg-transparent text-primary border border-stone-300 hover:border-primary hover:bg-[#FBF9F5] transition-all duration-300 py-3.5 px-7 rounded-full text-xs uppercase tracking-widest"
                >
                  Ask Our Pet Concierge
                </Link>
              </div>
            </div>

            {/* Bottom Bento Card: TRUST TILES (2x2 Mini-Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustTiles.map((tile) => (
                <div
                  key={tile.title}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/60 shadow-xs transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-secondary/40 cursor-default group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FBF9F5] border border-stone-200/50 flex items-center justify-center text-xl mb-3.5 group-hover:scale-110 group-hover:bg-secondary/10 transition-transform duration-300">
                    {tile.icon}
                  </div>

                  <h4 className="font-serif text-sm sm:text-base font-bold text-primary mb-1.5 leading-snug group-hover:text-secondary transition-colors">
                    {tile.title}
                  </h4>

                  <p className="text-neutral-text/65 text-xs leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}