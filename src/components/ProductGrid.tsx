"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const products = productsData as unknown as Product[];

const badges: Record<string, { label: string; className: string }> = {
  product1: { label: "Bestseller", className: "bg-primary text-primary-text" },
  product2: { label: "Puppy favorite", className: "bg-secondary text-secondary-text" },
  product3: { label: "Dogs & cats", className: "bg-white text-ink" },
};

export default function ProductGrid() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The collection"
          title={<>Pet favorites, <span className="text-gradient">ready to ship</span></>}
          description="Three everyday essentials, each available as a single item or in money-saving bundles of up to 8."
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {products.map((product) => {
            const bundles = product.bundles ?? [];
            const fromPrice = bundles[0] ? bundles[0].price : parseFloat(product.ssPrice || "0");
            const best = bundles[bundles.length - 1];
            const bestUnit = best ? (best.price / best.quantity).toFixed(2) : null;
            const badge = badges[product.id] ?? { label: "Essential", className: "bg-primary text-primary-text" };
            const isLiked = liked[product.id];
            const hoverImage = product.images?.[1];

            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col bg-white rounded-[2rem] border border-line p-3 hover:border-primary hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
              >
                <div className="relative aspect-[4/4.3] rounded-[1.5rem] overflow-hidden bg-brand-gradient-soft">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {hoverImage && (
                    <img
                      src={hoverImage}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                    />
                  )}

                  <span className={`absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm ${badge.className}`}>
                    {badge.label}
                  </span>

                  <button
                    onClick={(e) => toggleLike(product.id, e)}
                    aria-label={isLiked ? "Remove from favorites" : "Save to favorites"}
                    aria-pressed={isLiked}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className={`w-4 h-4 ${isLiked ? "fill-rose-500 stroke-rose-500" : "fill-none stroke-ink"}`} strokeWidth="2">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                  </button>

                  {bestUnit && (
                    <span className="absolute bottom-3 left-3 right-3 text-center text-xs font-semibold text-ink bg-white/90 backdrop-blur rounded-full py-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      As low as ${bestUnit} each in an {best.quantity}-pack
                    </span>
                  )}
                </div>

                <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary-deep">{product.category}</span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <span className="text-amber-400">★</span> 4.9
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-4">{product.name}</h3>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-faint font-bold block">From</span>
                      <span className="font-display text-2xl font-semibold text-ink">${fromPrice.toFixed(2)}</span>
                    </div>
                    <span className="inline-flex items-center gap-2 bg-ink text-white group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary group-hover:text-primary-text text-xs font-bold px-5 py-3 rounded-full transition-colors">
                      View options →
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
