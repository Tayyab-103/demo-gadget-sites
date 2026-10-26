"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { products, fallbackImage, firstPrice } from "@/lib/brandIcon";

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0];
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const price = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : product.ssPrice;
    addToCart(product, quantity, price, "Single Unit");
  };

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-paper" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">The desk shop</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
              Supplies that make work <span className="hl">feel lighter</span>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A small, carefully chosen range of pens, notebooks and gift sets — each one picked because it earns its spot on the desk.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-ink text-paper shadow-md"
                    : "border border-line text-muted hover:border-primary hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, i) => (
            <article
              key={product.id}
              id={product.id}
              className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary"
            >
              <Link
                href={`/product/${product.id}`}
                className={`relative flex aspect-[4/3.4] items-center justify-center overflow-hidden p-8 ${
                  i % 2 === 0 ? "bg-surface" : "bg-sun"
                }`}
              >
                <div className="absolute inset-0 grid-paper opacity-50" aria-hidden="true" />
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand-gradient opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90" aria-hidden="true" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative h-full w-full rounded-2xl object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-ink shadow-sm backdrop-blur">
                  {product.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary-deep">
                    {product.name}
                  </h3>
                </Link>
                <p className="mt-2 mb-6 text-sm leading-relaxed text-muted line-clamp-3">{product.description}</p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5">
                  <div>
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-wider text-faint">Price</span>
                    <span className="font-display text-2xl font-bold text-ink">${firstPrice(product).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/product/${product.id}`} className="btn-ghost px-4 py-2.5 text-xs">
                      Details
                    </Link>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="btn-primary h-11 w-11 p-0"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
