"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 border-b border-black/5" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Image */}
          <div className="relative lg:col-span-6 rounded-3xl overflow-hidden shadow-lg aspect-4/3 lg:aspect-5/4">
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000&q=80"
              alt={`${siteConfig.brandName} Studio Workspace`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/800x600?text=Studio";
              }}
            />
          </div>

          {/* Content */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            <span className="text-[0.7rem] md:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-3">
              Our Studio Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-primary leading-[1.12] tracking-tight mb-4 font-serif">
              Crafted for Creators,<br />
              <span className="text-secondary">Built for Legacy</span>
            </h2>

            <p className="text-[#5A554E] text-sm md:text-base leading-relaxed mb-6 font-normal">
              At {siteConfig.brandName}, we honor the relationship between artist and material. We curate and craft archival pigment inks, cold-pressed cotton papers, and sable brushes that elevate your creative output and stand the test of time.
            </p>

            <Link
              href="/#shop"
              className="inline-flex items-center gap-2.5 bg-primary hover:bg-secondary text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore Catalog
              <span className="text-sm">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}