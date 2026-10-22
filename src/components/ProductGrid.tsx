"use client";

import { useCart } from "@/context/CartContext";
import { fallbackImage, products, siteConfig, startingPrice } from "@/lib/brandIcon";
import { Product } from "@/types";
import Link from "next/link";
import { useState } from "react";

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0];
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const price = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : product.ssPrice;
    addToCart(product, quantity, price, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-3">The Lineup</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.05]">
              Gear That Earns <span className="text-secondary">Its Spot</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-3 leading-relaxed">
              A tight collection of training essentials we&apos;d actually take outside. Multi-pack bundles are available on every product page.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-[0.68rem] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border ${selectedCategory === cat
                    ? "bg-primary text-primary-text border-primary shadow-md"
                    : "bg-white text-primary/70 border-line hover:border-primary hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product, idx) => (
            <article
              key={product.id}
              className="group card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-secondary/50"
            >
              {/* Image */}
              <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />

                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-wider text-primary-text">
                  {product.category}
                </span>
                <span className="absolute top-4 right-4 text-xs font-black text-primary/25">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Hover CTA */}
                <span className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rounded-full bg-primary/95 py-2.5 text-center text-[0.68rem] font-black uppercase tracking-widest text-white">
                  View Details &amp; Bundles
                </span>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col border-t border-line p-6">
                <Link href={`/product/${product.id}`}>
                  <h3 className="mb-2 text-base sm:text-lg font-black text-primary leading-snug line-clamp-2 uppercase tracking-tight transition-colors group-hover:text-secondary-deep">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted line-clamp-2 mb-5 leading-relaxed">{product.description}</p>

                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-muted">From</span>
                    <span className="text-2xl font-black text-primary">${startingPrice(product)}</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="btn-accent px-5 py-3"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add
                  </button>
                </div>

                <p className="mt-4 flex items-center gap-1.5 text-[0.68rem] font-semibold text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                  {`Ships via ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
