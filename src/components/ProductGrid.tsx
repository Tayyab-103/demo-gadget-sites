"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";
import { Product, SiteConfig } from "@/types";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

const badgeMapping: Record<string, string> = {
  product1: "Best seller",
  product2: "Baker's pick",
  product3: "Everyday prep",
};

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-28 bg-neutral-bg" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow">The collection</span>
            <h2 className="section-title mt-4">Three tools you&rsquo;ll reach for every day</h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            Each one is chosen for balance, easy cleaning and honest materials. Free {siteConfig.shippingCarrier} shipping
            on every order.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const badge = badgeMapping[product.id] || "Featured";
            const minPrice = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;

            return (
              <article key={product.id} className="group card overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-neutral-bg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Kitchen+Tool";
                    }}
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-surface/95 px-3 py-1 text-[0.7rem] font-semibold text-ink shadow-sm">
                    {badge}
                  </span>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-medium text-muted">{product.category}</span>
                  <Link href={`/product/${product.id}`} className="mt-1 text-lg font-bold text-ink leading-snug hover:text-secondary transition-colors">
                    {product.name}
                  </Link>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{product.description}</p>

                  <div className="mt-6 pt-5 border-t border-line flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[0.7rem] text-muted">From</span>
                      <span className="text-xl font-extrabold text-ink">${parseFloat(String(minPrice)).toFixed(2)}</span>
                    </div>
                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-text px-4 py-2.5 text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      View tool
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
