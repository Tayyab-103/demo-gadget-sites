"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-6 border-b border-black/[0.08]">
          <div className="max-w-2xl">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Foundational Staples
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
              The 3 Wardrobe Essentials
            </h2>
          </div>
          <p className="text-neutral-text/70 text-sm md:text-base max-w-md">
            Certified organic combed cotton, French terry fleece, and all-weather outerwear.
          </p>
        </div>

        {/* 3-Column Fashion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#FAF8F5] rounded-3xl overflow-hidden border border-black/[0.06] hover:border-secondary/40 hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-[4/5] overflow-hidden bg-[#ECE8E1] block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/500x600?text=Apparel";
                    }}
                  />
                  
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-xs border border-black/[0.05]">
                    {product.category}
                  </span>
                </Link>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary">
                        Staple 0{idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5D7CA] border border-black/10" title="Natural Ecru" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4A5D4E] border border-black/10" title="Sage Olive" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#2B3542] border border-black/10" title="Midnight Navy" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-primary mb-2.5 leading-snug group-hover:text-secondary transition-colors">
                      <Link href={`/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-neutral-text/65 text-xs md:text-sm leading-relaxed mb-6 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-[0.62rem] text-neutral-text/50 uppercase tracking-wider block">
                        Starting at
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-primary">
                          ${currentPrice}
                        </span>
                        <span className="text-xs text-neutral-text/40 line-through">
                          ${originalPrice}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center gap-1.5 bg-primary text-white hover:bg-secondary transition-all text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-full shadow-xs"
                    >
                      View Style &rarr;
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
