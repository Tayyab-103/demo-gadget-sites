"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-4">The Collection</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Explore Our <span className="text-secondary">Travel Gear</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base max-w-2xl mx-auto">
            Select a piece below to customize your bundle and get ready for your next trip.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {products.map((product) => {
            const bundles = product.bundles;
            const minPrice = bundles && bundles.length > 0 ? bundles[0].price : Number(product.ssPrice);
            const maxPrice = bundles && bundles.length > 0 ? bundles[bundles.length - 1].price : Number(product.ssPrice);

            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/5 bg-neutral-bg shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-secondary/20">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Travel+Gear";
                    }}
                  />
                  {product.category && (
                    <span className="absolute top-3 left-3 bg-primary/85 backdrop-blur-md text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="pt-4 px-1">
                  <div className="flex items-center gap-1.5 text-secondary mb-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      ))}
                    </div>
                    <span className="text-[0.68rem] text-neutral-text/45 font-medium">(4.9)</span>
                  </div>

                  <h3 className="text-base font-bold text-primary leading-snug mb-1 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline justify-between mt-2">
                    <p className="text-base font-black text-neutral-text">
                      ${minPrice.toFixed(2)} <span className="text-xs font-normal text-neutral-text/50">&ndash; ${maxPrice.toFixed(2)}</span>
                    </p>
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View <span className="text-sm">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
