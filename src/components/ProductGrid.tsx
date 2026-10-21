"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";
import { Product, SiteConfig } from "@/types";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredImageIndex, setHoveredImageIndex] = useState<{ [productId: string]: number }>({});

  const categories = [
    { id: "all", label: "All Gear" },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: cat,
      label: cat,
    })),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="shop">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader ? (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Shop the Collection</span>
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-neutral-text tracking-tight leading-[1.1]">
                Picked for players. <span className="text-gradient">Priced for players.</span>
              </h2>
              <p className="mt-4 text-muted text-sm md:text-base">
                Pick-ups, play-ins and plug-ins — everything ships free with {siteConfig.shippingCarrier}. Buy more and save with bundle pricing.
              </p>
            </div>
            <Link href="/shop" className="btn-ghost self-start md:self-auto px-6 py-3 text-xs uppercase tracking-widest">
              View All <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : (
          <div className="text-center mb-12">
            <span className="eyebrow">Shop</span>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-neutral-text tracking-tight">
              All <span className="text-gradient">Music Gear</span>
            </h1>
          </div>
        )}

        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-brand-gradient text-primary-text border-transparent shadow-lg shadow-primary/25"
                      : "bg-surface text-muted border-line hover:text-neutral-text hover:border-primary/50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const maxBundle = product.bundles && product.bundles[product.bundles.length - 1];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.4).toFixed(2);

            let savingsPercent = 0;
            if (firstBundle && maxBundle && maxBundle.quantity > 1) {
              const standardPriceForMax = Number(firstBundle.price) * maxBundle.quantity;
              savingsPercent = Math.round(((standardPriceForMax - Number(maxBundle.price)) / standardPriceForMax) * 100);
            }

            const activeImgIdx = hoveredImageIndex[product.id] ?? 0;
            const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
            const activeImage = productImages[activeImgIdx] || product.image;

            return (
              <div key={product.id} className="card card-hover group relative flex flex-col overflow-hidden">
                {/* Image */}
                <div className="p-3 pb-0 relative">
                  <Link href={`/product/${product.id}`} className="block relative aspect-[4/3] rounded-[1.35rem] overflow-hidden bg-surface-2">
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = product.image;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg/70 via-transparent to-transparent" />

                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-neutral-bg/75 backdrop-blur-md text-neutral-text text-[0.62rem] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-line">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gradient" />
                      {product.category}
                    </span>

                    {savingsPercent > 0 && (
                      <span className="absolute top-3 right-3 bg-brand-gradient text-primary-text text-[0.62rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                        Save {savingsPercent}%
                      </span>
                    )}

                  </Link>
                    {productImages.length > 1 && (
                      <div className="absolute bottom-3 left-6 z-10 flex items-center gap-1.5">
                        {productImages.slice(0, 4).map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onMouseEnter={() => setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }))}
                            onClick={(e) => {
                              e.preventDefault();
                              setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }));
                            }}
                            aria-label={`Show image ${i + 1}`}
                            className={`w-9 h-9 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                              activeImgIdx === i ? "border-primary scale-105" : "border-white/20 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-[0.65rem] font-extrabold uppercase tracking-widest mb-2">
                    <span className="text-faint">
                      <span className="text-amber-400">★★★★★</span>
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      In Stock
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-neutral-text tracking-tight leading-snug mb-2 line-clamp-1 group-hover:text-primary-light transition-colors">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-5 line-clamp-2">{product.description}</p>

                  {product.bundles && product.bundles.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.bundles.slice(0, 4).map((b, idx) => (
                        <Link
                          key={idx}
                          href={`/product/${product.id}`}
                          className="px-2.5 py-1 rounded-lg bg-neutral-bg border border-line text-[0.68rem] font-bold text-muted hover:border-primary/60 hover:text-neutral-text transition-colors"
                        >
                          <span className="text-primary-light">{b.quantity}x</span> ${b.price}
                        </Link>
                      ))}
                      {product.bundles.length > 4 && (
                        <span className="px-1.5 py-1 text-[0.68rem] font-bold text-faint self-center">
                          +{product.bundles.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-auto pt-5 border-t border-line flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[0.62rem] uppercase tracking-wider font-extrabold text-faint">Starting at</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-neutral-text tracking-tight">${currentPrice}</span>
                        <span className="text-xs sm:text-sm font-bold text-faint line-through">${originalPrice}</span>
                      </div>
                    </div>

                    <Link href={`/product/${product.id}`} className="btn-primary group/btn py-3 px-5 text-xs uppercase tracking-wider">
                      View
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-[0.62rem] font-bold text-faint pt-4 mt-4 border-t border-line">
                    <span>✓ Free {siteConfig.shippingCarrier} Shipping</span>
                    <span>↺ {siteConfig.trialPeriod}-Day Returns</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
