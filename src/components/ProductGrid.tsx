"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const productHighlights: { [key: string]: string[] } = {
  product1: ["58 HRC Manganese Steel", "FSC Ash Hardwood Handle", "Calibrated Soil Depth Marks"],
  product2: ["Japanese SK5 Steel Blades", "Drop-Forged Alloy Handles", "1-Inch Clean Branch Cut"],
  product3: ["Triple Manganese Tines", "European Beechwood Grip", "Root Bed Aeration"],
};

export default function ProductGrid() {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product) => {
    const bundle = product.bundles && product.bundles[0] ? product.bundles[0] : { quantity: 1, price: parseFloat(product.ssPrice) };
    const unitPrice = (parseFloat(String(bundle.price)) / bundle.quantity).toFixed(2);
    const label = bundle.quantity > 1 ? `${bundle.quantity}-Tool Pack Bundle` : "Single Instrument";
    addToCart(product, bundle.quantity, unitPrice, label);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-b border-black/5" id="shop">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Left-Aligned Section Header (Matching First Two Sections) */}
        <div className="max-w-2xl mb-12 md:mb-16 text-left">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              THE FOUNDRY COLLECTION
            </span>
            <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
            Heirloom Hand <span className="text-[#265C1E]">Garden Tools</span>
          </h2>

          <p className="mt-3 text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
            Drop-forged carbon steel and FSC-certified hardwood garden tools crafted for a lifetime of planting.
          </p>
        </div>

        {/* Clean Alternating Product Showcases */}
        <div className="flex flex-col gap-10 md:gap-14">
          {products.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const minPrice = product.bundles && product.bundles[0] ? product.bundles[0].price.toFixed(2) : product.ssPrice;
            const originalPrice = (Number(minPrice) * 1.35).toFixed(2);
            const highlights = productHighlights[product.id] || ["Forged Steel", "Solid Hardwood", "Lifetime Warranty"];

            return (
              <div
                key={product.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 bg-[#FAF9F6] p-6 sm:p-8 lg:p-10 rounded-3xl border border-black/5 shadow-xs hover:shadow-md transition-all duration-300`}
              >
                {/* Product Image Frame */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border border-black/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1000&auto=format&fit=crop&q=80";
                      }}
                    />
                    
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-[#132B1C]/90 backdrop-blur-sm text-white text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-xs">
                      {product.category}
                    </span>

                    {/* Lifetime Guarantee Badge */}
                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#265C1E] text-[0.6rem] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-xs">
                      ★ Lifetime Warranty
                    </span>
                  </div>
                </div>

                {/* Product Summary Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#265C1E] mb-1.5">
                      Foundry Instrument #0{product.stickyId}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#11281A] tracking-tight mb-3 font-sans leading-tight">
                      <Link href={`/product/${product.id}`} className="hover:text-[#265C1E] transition-colors">
                        {product.name}
                      </Link>
                    </h3>

                    <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* 3 Key Feature Chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center gap-1.5 bg-white border border-black/5 px-3 py-1.5 rounded-lg text-[0.68rem] font-bold text-[#11281A] shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#265C1E]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Actions Strip */}
                  <div className="pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-neutral-text/50 uppercase tracking-wider">
                        From
                      </span>
                      <span className="text-3xl font-black text-[#132B1C]">
                        ${minPrice}
                      </span>
                      <span className="text-sm font-bold text-neutral-text/40 line-through">
                        ${originalPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-lg bg-white border border-black/15 text-[#11281A] hover:border-[#265C1E] hover:text-[#265C1E] transition-colors"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="inline-flex items-center justify-center gap-1.5 font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-lg bg-[#265C1E] hover:bg-[#1E4A17] text-white transition-colors cursor-pointer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Add to Cart
                      </button>
                    </div>
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
