"use client";

import React from "react";
import Link from "next/link";
import { products, fallbackImage, siteConfig } from "@/lib/brandIcon";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import SectionHeading from "@/components/SectionHeading";

export default function ProductGrid({ showHeading = true }: { showHeading?: boolean }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0];
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const price = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : product.ssPrice;
    addToCart(product, quantity, price, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-neutral-bg" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="The collection"
              title={
                <>
                  Gear up for <span className="hl">every session</span>
                </>
              }
              subtitle="Three pieces that cover a full training day, from the first warmup set to the walk home."
            />
            <Link href="/shop" className="btn-ghost text-primary hover:bg-primary hover:text-primary-text self-start md:self-auto mb-10 md:mb-14">
              View all
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price.toFixed(2) : product.ssPrice;
            const topBundle = product.bundles && product.bundles[product.bundles.length - 1];

            return (
              <article
                key={product.id}
                className="group card flex flex-col overflow-hidden p-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)]"
              >
                <Link href={`/product/${product.id}`} className="relative block aspect-[4/4.2] overflow-hidden rounded-[1.1rem] bg-mist">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.16em] text-primary shadow-sm">
                    {product.category}
                  </span>
                  <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-black">
                    0{idx + 1}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col px-3.5 pt-5 pb-3">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-lg font-black uppercase tracking-tight text-ink leading-snug group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="mt-2 text-[0.82rem] text-muted line-clamp-2 leading-relaxed">{product.description}</p>

                  {topBundle && topBundle.quantity > 1 && (
                    <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold-ink">
                      Packs up to {topBundle.quantity} · free {siteConfig.shippingCarrier} shipping
                    </p>
                  )}

                  <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">From</span>
                      <span className="text-2xl font-black text-primary">${currentPrice}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="hidden sm:inline-flex h-11 items-center px-4 rounded-full border border-line text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink hover:border-primary transition-colors"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-text transition-all hover:bg-secondary-dark hover:scale-105 cursor-pointer"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    </div>
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
