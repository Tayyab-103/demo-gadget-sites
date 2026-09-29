"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const cardMeta: Record<string, { badge: string; badgeBg: string }> = {
  product1: {
    badge: "Food-Grade Silicone",
    badgeBg: "bg-primary text-white",
  },
  product2: {
    badge: "Nursery Organizer",
    badgeBg: "bg-secondary text-primary",
  },
  product3: {
    badge: "Ergonomic Carrier",
    badgeBg: "bg-primary text-white",
  },
};

export default function ProductGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-bg relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="text-xs">✨</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              {siteConfig.brandName.toUpperCase()} COLLECTION
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Curated <span className="italic text-primary/80 font-serif">Baby Essentials &amp; Gear</span>
          </h2>

          <p className="text-neutral-text/75 text-sm sm:text-base leading-relaxed">
            Thoughtfully engineered for baby comfort, gentle development, and everyday parenting peace of mind.
          </p>
        </div>

        {/* 3-Card Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const lastBundle = product.bundles && product.bundles.length > 0
              ? product.bundles[product.bundles.length - 1]
              : null;
            
            const minPrice = firstBundle
              ? parseFloat(String(firstBundle.price)).toFixed(2)
              : parseFloat(product.ssPrice || "0").toFixed(2);
            const maxPrice = lastBundle
              ? parseFloat(String(lastBundle.price)).toFixed(2)
              : minPrice;

            const meta = cardMeta[product.id] || {
              badge: "Baby Essential",
              badgeBg: "bg-primary text-white",
            };

            // Secondary image for hover effect
            const primaryImage = product.images && product.images[0] ? product.images[0] : product.image;
            const secondaryImage = product.images && product.images.length > 1
              ? product.images[1]
              : product.image;

            return (
              <div
                key={product.id}
                className="bg-white rounded-[2rem] border border-stone-200/80 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* 1:1 Aspect Ratio Image Container with Hover Swap to Secondary Image */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F8F9FE] mb-5 border border-stone-100">
                    <Link href={`/product/${product.id}`} className="block w-full h-full relative">
                      {/* Primary Image */}
                      <img
                        src={primaryImage}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          secondaryImage !== primaryImage
                            ? "group-hover:opacity-0 group-hover:scale-105"
                            : "group-hover:scale-105"
                        }`}
                        onError={(e) => {
                          e.currentTarget.src = "/img/hero1.jpg";
                        }}
                      />

                      {/* Secondary Image on Hover */}
                      {secondaryImage && secondaryImage !== primaryImage && (
                        <img
                          src={secondaryImage}
                          alt={`${product.name} alternate view`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = primaryImage;
                          }}
                        />
                      )}
                    </Link>

                    {/* Top Left Badge */}
                    <span
                      className={`absolute top-3.5 left-3.5 ${meta.badgeBg} text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm pointer-events-none z-10`}
                    >
                      {meta.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2.5 leading-snug group-hover:text-primary/80 transition-colors">
                    <Link href={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  {/* Price Range */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-xl sm:text-2xl font-bold text-primary font-serif">
                      ${minPrice} – ${maxPrice}
                    </span>
                  </div>

                  {/* Savings Tag */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1 bg-[#F8F9FE] border border-stone-200 text-primary text-[0.68rem] font-bold px-3 py-1 rounded-lg">
                      <span>✓</span>
                      <span>1 to 8 Unit Bundle Savings</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 transition-all duration-300 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg"
                  >
                    <span>View Product &amp; Bundles</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
