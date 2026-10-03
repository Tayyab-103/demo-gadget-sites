"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const pillars = [
  {
    step: "01",
    title: "Heirloom Bookbinding Craftsmanship",
    desc: "Printed on 120gsm acid-free cream paper with Smyth-sewn lay-flat bindings, gold foil embossing, and durable cloth or leather spine finishes.",
  },
  {
    step: "02",
    title: "Curated Literary Selection",
    desc: "Every title, anthology, and journal is meticulously selected and annotated by our editorial curators to celebrate timeless human wisdom and storytelling.",
  },
  {
    step: "03",
    title: "Archival Preservation Standard",
    desc: "Engineered to endure generations of reading, bookmarking, and library shelf display without page yellowing, ink fading, or spine cracking.",
  },
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] py-20 sm:py-28"
      id="about"
    >
      {/* Background ambient glow spots */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#D2446D]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-[450px] w-[450px] -translate-x-1/3 rounded-full bg-[#4C0519]/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-4 border border-rose-200 shadow-xs">
              <span>📖 The Chapterhouse Standard</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000000] tracking-tight leading-[1.12]">
              Curating Enduring Stories for <br className="hidden sm:inline" />
              <span className="text-[#D2446D]">Dedicated Readers &amp; Collectors.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              We believe every great book deserves the highest standard of physical craftsmanship. From classic literature anthologies to artisan leatherbound journals, each volume in our catalog is created with reverence for traditional book arts and modern typography.
            </p>
          </div>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT — Multi-Layer Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/img/about1.jpg"
                  alt="Chapterhouse Rare Books & Reading Room"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4C0519]/85 via-[#4C0519]/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D2446D] block mb-1">
                    Columbus, Ohio Book Marketplace
                  </span>
                  <p className="text-base sm:text-lg font-black leading-tight">
                    Where literary passion meets heirloom archival printing.
                  </p>
                </div>
              </div>

              {/* Offset Secondary Floating Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block bg-white aspect-square">
                <img
                  src="/img/about2.jpg"
                  alt="Deluxe Foil Stamped Hardcovers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[0.65rem] font-bold text-white/80 block">Acid-Free Paper</span>
                  <span className="text-xs font-black text-white">Gilded Edge Binding</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-rose-100 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-[#4C0519] font-black text-lg">
                  📚
                </div>
                <div>
                  <p className="text-[0.68rem] font-bold text-gray-400 uppercase leading-none">Curated Vault</p>
                  <p className="text-xs font-black text-[#000000] leading-tight">100% Archival Grade</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — Pillars & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.step}
                  className="group bg-[#FDFDFD] p-6 sm:p-7 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md hover:border-[#D2446D]/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span className="text-2xl sm:text-3xl font-black text-[#D2446D] leading-none pt-1">
                      {pillar.step}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-[#000000] mb-1.5 group-hover:text-[#4C0519] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4C0519] hover:bg-[#D2446D] text-white font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-[#4C0519]/20 transition-all duration-200"
              >
                <span>Explore Book Catalog</span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-rose-200 hover:border-[#4C0519] bg-transparent text-[#4C0519] font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200"
              >
                Reader Concierge
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}