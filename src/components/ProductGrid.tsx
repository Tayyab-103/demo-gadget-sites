"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06] font-sans" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Curated Maker Collection
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
              Featured Hobby Kits &amp; Games
            </h2>
          </div>
          <p className="text-black/70 text-sm md:text-base max-w-md">
            Laser-cut 3D mechanical woodcraft, tactical tabletop realms, and heirloom tournament chess.
          </p>
        </div>

        {/* 3-Column Hobby Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.45).toFixed(2);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#FAF8F5] rounded-3xl overflow-hidden border border-black/[0.06] hover:border-[#A36B42]/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#ECE8E1] block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                  
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#191716] text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xs border border-black/[0.05]">
                    {product.category}
                  </span>

                  <span className="absolute top-4 right-4 bg-[#A36B42] text-white text-[0.65rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    Kit 0{idx + 1}
                  </span>
                </Link>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-[#191716] mb-2.5 leading-snug group-hover:text-[#A36B42] transition-colors line-clamp-2">
                      <Link href={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-black/65 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2 font-normal">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-[0.62rem] text-black/50 uppercase tracking-wider block font-semibold">
                        Starting at
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-[#A36B42]">
                          ${currentPrice}
                        </span>
                        <span className="text-xs text-black/40 line-through">
                          ${originalPrice}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center gap-1.5 bg-[#191716] text-white hover:bg-[#A36B42] transition-all text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full shadow-xs cursor-pointer"
                    >
                      View Kit &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
