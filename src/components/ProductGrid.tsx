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
            Explore Our <span className="text-secondary">Sporting Gear</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base max-w-2xl mx-auto">
            Select a piece below to customize your bundle packages and prepare for your next outdoor excursion.
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
                <div className="relative aspect-square overflow-hidden rounded-xl border border-black/5 bg-neutral-bg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Summit+Hollow";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-sm font-medium text-secondary leading-snug mb-1.5 line-clamp-2 group-hover:underline">
                    {product.name}
                  </h3>
                  <p className="text-sm font-bold text-neutral-text">
                    ${minPrice.toFixed(2)} &ndash; ${maxPrice.toFixed(2)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
