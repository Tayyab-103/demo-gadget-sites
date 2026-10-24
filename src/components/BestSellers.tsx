"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";
import { Product, SiteConfig } from "@/types";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

export default function BestSellers() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const prev = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const next = () => setStartIndex((prev) => Math.min(maxIndex, prev + 1));

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/5" id="bestsellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="category-subtitle">
              <b>top</b> products
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary mt-1">
              Best Sellers at {siteConfig.brandName}
            </h3>
            <p className="text-neutral-text/60 text-xs sm:text-sm mt-2 max-w-lg">
              Our most celebrated silhouettes, crafted from fine linen, organic cotton, and soft cashmere knits.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              disabled={startIndex === 0}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous best sellers"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              disabled={startIndex >= maxIndex}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
              aria-label="Next best sellers"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <article key={product.id} className="fashion-card group flex flex-col justify-between">
              <div>
                <div className="fashion-card-image-wrap aspect-[3/4] mb-3 relative">
                  <Link href={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="fashion-card-image w-full h-full object-cover"
                      loading="lazy"
                    />
                  </Link>

                  <div className="absolute top-3 left-3">
                    {product.tag && (
                      <span className={`item-tag ${product.tag === "Sale" ? "item-tag_red" : "item-tag_green"}`}>
                        {product.tag}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="font-heading text-xs sm:text-sm font-bold text-primary uppercase tracking-wide line-clamp-1 mb-1">
                  <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                    {product.name}
                  </Link>
                </h4>
              </div>

              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-bold text-sm text-primary">
                  ${product.ssPrice}
                </span>
                {product.oldPrice && (
                  <span className="text-xs text-neutral-text/40 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
