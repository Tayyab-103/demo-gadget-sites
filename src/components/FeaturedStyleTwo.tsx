"use client";

import React from "react";
import Link from "next/link";

export default function FeaturedStyleTwo() {
  return (
    <section className="py-12 sm:py-16 bg-[#fffafb] font-sans border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Puzzle for Kids $50 (3 cols on desktop) */}
          <div className="md:col-span-3 rounded-3xl p-6 sm:p-7 bg-[#fff0f4] border border-[#ff4370]/15 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
            <div>
              <span className="text-[0.68rem] font-black uppercase tracking-wider text-[#ff4370] bg-[#ff4370]/10 px-2.5 py-1 rounded-full">
                Hot Deal
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] mt-3 mb-2 leading-tight">
                Puzzle for Kids
              </h3>
              <div className="text-sm font-bold text-black/60 mb-4">
                <span>From</span> <strong className="text-[#ff4370] text-lg">$50 Only</strong>
              </div>
            </div>
            <div>
              <Link
                href="/shop?category=Puzzles"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#ff4370] font-black text-xs uppercase tracking-wider border border-[#ff4370]/30 hover:bg-[#ff4370] hover:text-white transition-all shadow-xs"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Card 2: Special Offer Buy One Get One (6 cols on desktop) */}
          <div className="md:col-span-6 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#ff4370] via-[#ff5882] to-[#ffb703] text-white flex flex-col justify-between shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs mb-3 text-white">
                Special Offer
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2 tracking-tight">
                Buy One Get One
              </h3>
              <p className="text-xs sm:text-sm text-white/90 max-w-md">
                Select matching action figures, soft plush toys, and STEM building sets. Mix and match for the perfect sibling gift.
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-[#ff4370] font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-black/90 hover:text-white transition-all shadow-md"
              >
                Claim Offer Now →
              </Link>
            </div>
          </div>

          {/* Card 3: Puzzle for Kids $40 (3 cols on desktop) */}
          <div className="md:col-span-3 rounded-3xl p-6 sm:p-7 bg-[#fff8e7] border border-[#ffb703]/25 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all group">
            <div>
              <span className="text-[0.68rem] font-black uppercase tracking-wider text-[#d97706] bg-[#ffb703]/20 px-2.5 py-1 rounded-full">
                Best Seller
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] mt-3 mb-2 leading-tight">
                Puzzle for Kids
              </h3>
              <div className="text-sm font-bold text-black/60 mb-4">
                <span>From</span> <strong className="text-[#d97706] text-lg">$40 Only</strong>
              </div>
            </div>
            <div>
              <Link
                href="/shop?category=Puzzles"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#d97706] font-black text-xs uppercase tracking-wider border border-[#ffb703]/40 hover:bg-[#ffb703] hover:text-[#1e293b] transition-all shadow-xs"
              >
                Shop Now →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
