"use client";

import React from "react";
import Link from "next/link";

const brandTags = [
  { name: "SuperHero Universe", discount: "25% Off" },
  { name: "CuddlePals Plush", discount: "20% Off" },
  { name: "Montessori Woodworks", discount: "15% Off" },
  { name: "Everglade Games", discount: "10% Off" },
  { name: "Cyberace RC", discount: "25% Off" },
  { name: "Architect Blocks", discount: "20% Off" },
  { name: "WonderDolls Co.", discount: "15% Off" },
  { name: "SplashMaster Summer", discount: "10% Off" },
  { name: "PuzzleMania STEM", discount: "20% Off" },
  { name: "Rainbow Toddlers", discount: "25% Off" },
  { name: "Galactic Racers", discount: "15% Off" },
  { name: "Magic Kingdom Toys", discount: "20% Off" },
];

export default function BrandsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white font-sans border-b border-black/5" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Featured Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Shop By <span className="text-[#ff4370]">Brands &amp; Series</span>
          </h2>
        </div>

        {/* 12 Brand Blocks Grid matching Kiddex */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandTags.map((brand, idx) => (
            <Link
              key={idx}
              href="/shop"
              className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-[#f8fafc] border border-black/6 hover:border-[#ff4370]/30 hover:bg-[#fff5f8] transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-xs flex items-center justify-center text-xl mb-3 border border-black/5">
                🎯
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors leading-tight mb-1">
                {brand.name}
              </h4>
              <span className="text-[0.68rem] font-black text-[#ff4370] uppercase tracking-wider bg-[#ff4370]/10 px-2 py-0.5 rounded-full">
                {brand.discount}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
