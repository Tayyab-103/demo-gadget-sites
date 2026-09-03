"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] text-white relative overflow-hidden border-t border-white/5" id="about">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Our Craft Philosophy
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-6">
              Born From The <br />
              <span className="text-white/80">Art of Cooking</span>
            </h2>

            <p className="text-white/70 text-sm leading-relaxed mb-8">
              At <strong>{siteConfig.brandName}</strong>, we believe that great meals begin with reliable, well-balanced tools. We craft culinary essentials designed to eliminate kitchen frustration, elevate your prep speed, and bring professional kitchen craftsmanship into your home.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#121316] bg-[#E5F2C9] hover:bg-white transition-all px-7 py-3.5 rounded-lg shadow-sm"
              >
                Browse Our Tools &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/3 bg-[#1A1C20]">
              <img
                src="/images/about-workshop.jpg"
                alt="Master craftsmen hand-finishing copper cookware and kitchen tools in artisan workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[0.62rem] uppercase tracking-widest font-bold text-[#E5F2C9] block">
                    Verified Craftsmanship
                  </span>
                  <div className="text-sm font-extrabold uppercase">Austin, Texas Workshop</div>
                </div>
                <div className="bg-[#E5F2C9] text-[#121316] text-[0.65rem] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
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