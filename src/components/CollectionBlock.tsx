"use client";

import React from "react";
import Link from "next/link";

export default function CollectionBlock() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="collections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Counter Header */}
        <div className="flex justify-start mb-10">
          <div className="collection-title">
            <span className="collection-title__count">2587</span>
            <span className="collection-title__plus">+</span>
            <span className="collection-title__text">Curated styles for you</span>
          </div>
        </div>

        {/* 4 Collections Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Accessories (4 cols) */}
          <div className="lg:col-span-4 relative group rounded-2xl overflow-hidden bg-[#F5F2EB] aspect-[4/5] flex flex-col justify-end p-8 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
              alt="Fashion Accessories Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-secondary block mb-1">
                accessories
              </span>
              <h4 className="font-heading text-2xl font-bold uppercase tracking-tight mb-3">
                Fashion for this summer
              </h4>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-white hover:text-secondary flex items-center gap-2">
                Shop now <span>→</span>
              </Link>
            </div>
            <Link href="/shop" className="absolute inset-0 z-20" aria-label="Shop Accessories" />
          </div>

          {/* Card 2: Season Sale Banner (8 cols) */}
          <div className="lg:col-span-8 relative group rounded-2xl overflow-hidden bg-[#EDE8E1] aspect-auto min-h-[380px] lg:min-h-0 flex flex-col justify-center p-8 md:p-12 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80"
              alt="Season Sale Contemporary Womenswear"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
            <div className="relative z-10 text-white max-w-md">
              <span className="item-tag item-tag_red mb-4 inline-block">
                Season Sale
              </span>
              <h4 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4 leading-tight">
                Seasonal <span className="text-secondary">Sale</span>
              </h4>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                Curated contemporary womenswear crafted for effortless comfort, modern tailoring, and versatile everyday layering.
              </p>
              <Link href="/shop" className="fashion-button">
                Shop the sale
              </Link>
            </div>
            <Link href="/shop" className="absolute inset-0 z-20" aria-label="Shop Season Sale" />
          </div>

          {/* Card 3: Sweaters (6 cols) */}
          <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden bg-[#F5F2EB] aspect-[4/3] flex flex-col justify-end p-8 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1000&q=80"
              alt="Knitwear and Sweaters Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-secondary block mb-1">
                sweaters &amp; knitwear
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3">
                New Autumn Arrivals
              </h4>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-white hover:text-secondary flex items-center gap-2">
                Shop now <span>→</span>
              </Link>
            </div>
            <Link href="/shop" className="absolute inset-0 z-20" aria-label="Shop Knitwear" />
          </div>

          {/* Card 4: Dresses (6 cols) */}
          <div className="lg:col-span-6 relative group rounded-2xl overflow-hidden bg-[#F5F2EB] aspect-[4/3] flex flex-col justify-end p-8 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&q=80"
              alt="Dresses and Evening Wear Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative z-10 text-white">
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-secondary block mb-1">
                dresses
              </span>
              <h4 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3">
                Trendy look for every day
              </h4>
              <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-white hover:text-secondary flex items-center gap-2">
                Shop now <span>→</span>
              </Link>
            </div>
            <Link href="/shop" className="absolute inset-0 z-20" aria-label="Shop Dresses" />
          </div>

        </div>

        {/* Bottom Counter & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-black/5">
          <div className="collection-title">
            <span className="collection-title__count">5649</span>
            <span className="collection-title__plus">+</span>
            <span className="collection-title__text">Satisfied clients worldwide</span>
          </div>

          <Link href="/shop" className="fashion-button-outline">
            View all collections
          </Link>
        </div>

      </div>
    </section>
  );
}
