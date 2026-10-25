"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const galleryPanels = [
  {
    src: "/img/about-gallery-1.jpg",
    alt: "Wanderloom flagship aluminum luggage and leather weekender at scenic mountain terminal",
    caption: "Aviation Scenic Terminal",
    tag: "Flagship Suite",
  },
  {
    src: "/img/about-gallery-2.jpg",
    alt: "Aerospace aluminum chassis corner with brass rivets and TSA combination lock",
    caption: "Impact Armor & TSA Locks",
    tag: "6061 Alloy",
  },
  {
    src: "/img/about-gallery-3.jpg",
    alt: "Handcrafted full-grain Italian leather weekender duffle bag detail",
    caption: "Italian Vegetable Leather",
    tag: "Artisan Atelier",
  },
  {
    src: "/img/about-gallery-4.jpg",
    alt: "Traveler gliding aluminum carry-on spinner through modern glass concourse",
    caption: "Effortless 360° Transit",
    tag: "Global In-Flight",
  },
];

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Index Indicator */}
        <div className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#18222F]/50 uppercase mb-4 sm:mb-6">
          (01) About Us
        </div>

        {/* 2-Column Header Section: Big Bold Title (Left) + Refined Editorial Narrative (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
          
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black text-[#0D1B2A] leading-tight tracking-tight uppercase">
              About Us
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-1">
            <p className="text-xs sm:text-sm md:text-base text-[#18222F]/80 leading-relaxed font-normal mb-5">
              Engineered in Austin, Texas. We craft aerospace aluminum luggage, Italian full-grain leather weekenders, and modular compression packing systems for seamless journeys.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#C87D3B] hover:text-[#9E381A] transition-colors group"
              >
                <span>Discover Signature Collections</span>
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Architectural Multi-Perspective Image Banner */}
        <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-white p-2 sm:p-3.5 border border-[#C87D3B]/25 shadow-xl">
          
          {/* Subtle Blueprint Grid Lines Background Accent */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {galleryPanels.map((panel, idx) => (
              <div
                key={idx}
                className={`group relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden bg-[#0D1B2A] shadow-sm transition-shadow duration-300 hover:shadow-xl`}
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  priority={idx === 0}
                />

                {/* Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/85 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#0D1B2A]/80 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[0.5rem] sm:text-[0.65rem] font-extrabold uppercase tracking-widest text-[#C87D3B] border border-[#C87D3B]/30 shadow-xs">
                  {panel.tag}
                </div>

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-white text-[0.6rem] sm:text-xs font-bold tracking-tight">
                  <span className="bg-black/60 backdrop-blur-md px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl border border-white/10 truncate">
                    {panel.caption}
                  </span>
                  <span className="hidden sm:flex w-6 h-6 rounded-full bg-[#C87D3B] text-white items-center justify-center text-[0.65rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
