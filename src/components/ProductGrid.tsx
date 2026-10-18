"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg py-16 md:py-24" id="shop">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center gap-6 text-center md:mb-16 md:flex-row md:items-end md:justify-between md:text-left">
          <div className="max-w-xl">
            <span className="eyebrow mb-5 justify-center md:justify-start">The Collection</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Shop Our <span className="marker">Bestsellers</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-text/60 md:text-base">
              Choose a piece, pick your bundle and save more when you buy for yourself and someone special.
            </p>
          </div>
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 whitespace-nowrap border-b-2 border-primary pb-1 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:text-secondary"
          >
            View All Pieces
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const bundleCount = product.bundles?.length ?? 0;

            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/5 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-accent-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x500?text=Jewelry";
                    }}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-ink shadow-sm backdrop-blur">
                    {product.category}
                  </span>

                  {/* Hover CTA */}
                  <div className="absolute inset-x-4 bottom-4 transition-all duration-500 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    <span className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg">
                      Choose Your Bundle →
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-xl font-bold leading-snug text-ink">{product.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-text/55">{product.description}</p>

                  <div className="mt-6 flex items-end justify-between border-t border-black/5 pt-5">
                    <div>
                      <div className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/45">Starting at</div>
                      <div className="text-2xl font-black text-ink">${currentPrice}</div>
                    </div>
                    {bundleCount > 1 && (
                      <span className="rounded-full bg-accent-light px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-wider text-ink">
                        {bundleCount} bundle options
                      </span>
                    )}
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
