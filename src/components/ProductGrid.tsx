"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const firstBundle = product.bundles?.[0];
    const price = firstBundle ? firstBundle.price : product.ssPrice;
    addToCart(product, 1, price, "Single Studio Unit");
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="eyebrow justify-center mb-4">Studio Collection</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Explore Our <span className="text-secondary">Artisan Supplies</span>
          </h2>
          <p className="text-neutral-text/70 text-sm md:text-base max-w-2xl mx-auto">
            Select a studio essential below to configure your bundle pack and bring exceptional archival craftsmanship to your easel.
          </p>
        </div>

        {/* 3-Column Product Cards Grid (Matching ShopPage Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {products.map((product) => {
            const firstBundle = product.bundles?.[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const bundleCount = product.bundles?.length || 1;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-black/8 overflow-hidden shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col"
              >
                {/* Product Thumbnail Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-4/3 w-full overflow-hidden bg-neutral-bg block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/500x400?text=Art+Supply";
                    }}
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="bg-secondary text-primary text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>
                  <span className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm text-white text-[0.65rem] font-bold px-2.5 py-1 rounded-lg">
                    {bundleCount} Studio Bundle Options
                  </span>
                </Link>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-secondary text-xs mb-2">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                    <span className="text-[0.68rem] font-bold text-neutral-text/50 ml-1.5">
                      (4.9 Studio Score)
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`} className="block">
                    <h3 className="text-lg sm:text-xl font-black uppercase text-primary tracking-tight group-hover:text-secondary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm text-neutral-text/70 mt-2 line-clamp-3 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Feature Badges */}
                  <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between gap-2 text-[0.68rem] text-neutral-text/60">
                    <span className="flex items-center gap-1 font-semibold text-primary">
                      <span className="text-green-600">✓</span> In Stock
                    </span>
                    <span className="font-semibold text-secondary">ASTM Archival</span>
                    <span className="text-neutral-text/50">FedEx Tracked</span>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[0.62rem] uppercase tracking-wider text-neutral-text/50 block">From</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-primary">${currentPrice}</span>
                        <span className="text-xs font-bold text-neutral-text/40 line-through">${originalPrice}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className="p-3 rounded-full bg-secondary/15 text-primary hover:bg-secondary transition-colors cursor-pointer"
                        title="Quick Add 1 Unit"
                        aria-label="Quick Add"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </button>
                      <Link
                        href={`/product/${product.id}`}
                        className="bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 shadow-sm"
                      >
                        Configure
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All In Shop Link Banner */}
        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2.5 bg-neutral-bg hover:bg-secondary/15 text-primary border border-black/10 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200"
          >
            <span>View All Studio Supplies &amp; Bundles</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
