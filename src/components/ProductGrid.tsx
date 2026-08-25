"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] relative overflow-hidden" id="products">
      {/* Subtle diagonal line pattern matching Hero aesthetic */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 80px,
            #000 80px,
            #000 81px
          )`,
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#111]" />
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-text/45">
                Precision Hardware
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111] leading-tight">
              Featured Products
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-text/60 max-w-md">
            Certified electrical instruments and power conversion units built for mission-critical reliability.
          </p>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 3).map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/[0.04] hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden bg-[#F3F4F6] mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `/img/products/product${(idx % 3) + 1}.jpg`;
                      }}
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="bg-white/90 backdrop-blur-md text-[#111] text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm border border-black/5">
                        0{idx + 1}
                      </span>
                      <span className="bg-[#111] text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[0.65rem] font-mono font-bold tracking-widest text-[#5B6BF0] uppercase">
                      MODEL: VS-{(idx + 1) * 750}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#111] tracking-tight group-hover:text-[#5B6BF0] transition-colors leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-text/60 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[0.62rem] font-semibold text-neutral-text/40 uppercase tracking-wider">
                      Starting at
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-[#111] tracking-tight">
                        ${currentPrice}
                      </span>
                      <span className="text-sm font-semibold text-neutral-text/40 line-through">
                        ${originalPrice}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="w-12 h-12 rounded-full bg-[#111] group-hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 flex-shrink-0"
                    aria-label={`View ${product.name}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform transition-transform duration-300 group-hover:rotate-45"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Quality Reassurance */}
        <div className="mt-12 sm:mt-16 bg-[#111] text-white rounded-[2rem] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-black tracking-tight">
              Need Bulk Electrical Components or Custom Spec?
            </h4>
            <p className="text-xs sm:text-sm text-white/60">
              Direct factory pricing with comprehensive OEM warranty and certified test certificates.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#111] hover:bg-[#FEF08A] transition-colors text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full shadow-md flex-shrink-0"
          >
            Contact Engineering
          </Link>
        </div>

      </div>
    </section>
  );
}
