"use client";

import { SiteConfig } from "@/types";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="craft-philosophy">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-[#F8F6F2] px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                OUR CRAFT PHILOSOPHY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#121316] tracking-tight leading-tight mb-6">
              Born From The <br />
              <span className="italic text-[#E06830] font-serif">Art of Cooking</span>
            </h2>

            <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed mb-8">
              At <strong>{siteConfig.brandName}</strong>, we believe that great meals begin with reliable, well-balanced tools. We craft culinary essentials designed to eliminate kitchen frustration, elevate your prep speed, and bring professional kitchen craftsmanship into your home.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-white bg-[#121316] hover:bg-[#E06830] hover:text-white transition-all px-8 py-4 rounded-full shadow-md hover:shadow-lg"
              >
                <span>Browse Our Tools</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 aspect-[4/3] bg-stone-100 group">
              <img
                src="/img/about-workshop.jpg"
                alt="Artisan culinary workshop crafting kitchen tools"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/hero-kitchen.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[0.62rem] uppercase tracking-widest font-bold text-[#E06830] block">
                    Verified Craftsmanship
                  </span>
                  <div className="text-sm font-bold uppercase font-serif">Austin, Texas Workshop</div>
                </div>
                <div className="bg-[#E06830] text-white text-[0.65rem] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  Food Safe Certified
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}