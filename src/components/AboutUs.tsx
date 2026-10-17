"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutUs() {
  return (
    <div>
      {/* Inner Top Header Banner */}
      <section className="bg-[#FAF9F7] py-12 md:py-16 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary mb-3">
                About Us
              </h1>
              <nav aria-label="Breadcrumb" className="breadcrumbs-list">
                <Link href="/">Home</Link>
                <span className="breadcrumbs-separator" />
                <span className="text-primary font-bold">About</span>
              </nav>
            </div>

            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-sm bg-[#EAE6E1]">
              <img
                src="/img/about1.png"
                alt="Modern Meadow Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Company Editorial Section */}
      <article className="py-16 md:py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="category-subtitle">
              our <b>story</b>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1 mb-4">
              All About Our Company
            </h2>
            <p className="text-neutral-text/75 text-sm md:text-base leading-relaxed">
              Curated contemporary womenswear crafted with timeless silhouettes, premium natural textiles, and effortless everyday elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            
            {/* Col 1: The Beginning */}
            <section className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5 flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-extrabold text-secondary block mb-2">
                  2016
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-primary mb-4">
                  The Beginning of Our Journey
                </h3>
                <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
                  Founded with a vision to redefine ready-to-wear womenswear, Modern Meadow began as a boutique studio focusing on pure linen and organic cotton essentials. These years of dedication formed our enduring standard of quality and customer trust.
                </p>
              </div>
            </section>

            {/* Col 2: Stat 1 */}
            <div className="bg-[#181818] text-white p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg">
              <span className="font-heading text-5xl sm:text-6xl font-bold text-secondary mb-2">
                2587+
              </span>
              <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white mb-2">
                Garments Crafted
              </h4>
              <p className="text-white/60 text-xs max-w-[200px]">
                Carefully patterned, hand-finished, and curated for your daily wardrobe.
              </p>
            </div>

            {/* Col 3: Stat 2 */}
            <div className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5 flex flex-col justify-center items-center text-center">
              <span className="font-heading text-5xl sm:text-6xl font-bold text-primary mb-2">
                5649+
              </span>
              <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">
                Satisfied Clients
              </h4>
              <p className="text-neutral-text/60 text-xs max-w-[200px]">
                Loyal patrons across the nation enjoying flattering fit and easy care.
              </p>
            </div>

            {/* Col 4: Who Are We Now? */}
            <section className="bg-[#FAF9F7] p-8 rounded-3xl border border-black/5 flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-extrabold text-secondary block mb-2">
                  Today
                </span>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-primary mb-4">
                  Who Are We Now?
                </h3>
                <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
                  We now partner with certified European and American weavers. Our in-house stylists provide personalized size guidance, fabric care recommendations, and outfit pairings tailored to every season.
                </p>
              </div>
            </section>

          </div>

        </div>
      </article>
    </div>
  );
}