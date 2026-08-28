"use client";

import React, { useRef } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product, Bundle } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

// Curated quantity tiers to surface as their own cards — 2 per product (entry
// price point + best-value bundle) keeps the carousel to a tight 6 cards.
const FEATURED_QUANTITIES = [1, 8];

interface Tile {
  product: Product;
  bundle: Bundle;
  image: string;
  isBestValue: boolean;
}

function buildTiles(): Tile[] {
  const tiles: Tile[] = [];
  products.forEach((product) => {
    if (!product.bundles || product.bundles.length === 0) return;
    const featured = product.bundles.filter((b) => FEATURED_QUANTITIES.includes(b.quantity));
    const maxQty = Math.max(...featured.map((b) => b.quantity));
    featured.forEach((bundle, idx) => {
      const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
      tiles.push({
        product,
        bundle,
        image: gallery[idx % gallery.length],
        isBestValue: bundle.quantity === maxQty && maxQty > 1,
      });
    });
  });
  return tiles;
}

const tiles = buildTiles();

export default function ProductGrid() {
  const { addToCart } = useCart();
  const trackRef = useRef<HTMLDivElement>(null);

  const handleQuickAdd = (product: Product, bundle: Bundle) => {
    const unitPrice = (bundle.price / bundle.quantity).toFixed(2);
    const label = bundle.quantity > 1 ? `${bundle.quantity}-Pack Bundle` : "Single Unit";
    addToCart(product, bundle.quantity, unitPrice, label);
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-4">The Trade Catalog</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Explore The <span className="text-secondary">Collection</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base max-w-2xl mx-auto">
            Pick your quantity below — every bundle is priced to save more the more you stock up.
          </p>
        </div>

        <div className="relative">
          {/* Prev / Next controls */}
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Previous products"
            className="absolute -left-2 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white text-primary shadow-lg transition-all hover:bg-primary hover:text-primary-text sm:-left-4 md:h-12 md:w-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Next products"
            className="absolute -right-2 top-[38%] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white text-primary shadow-lg transition-all hover:bg-primary hover:text-primary-text sm:-right-4 md:h-12 md:w-12"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Carousel track */}
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 py-1"
          >
            {tiles.map(({ product, bundle, image, isBestValue }) => {
              const basePrice = product.bundles && product.bundles[0] ? product.bundles[0].price : Number(product.ssPrice);
              const regularPrice = basePrice * bundle.quantity;
              const savingsPercent = Math.round(100 - (bundle.price / regularPrice) * 100);
              const unitPrice = (bundle.price / bundle.quantity).toFixed(2);
              const label = bundle.quantity > 1 ? `${bundle.quantity}-Pack` : "Single Unit";

              return (
                <div
                  key={`${product.id}-${bundle.quantity}`}
                  data-card
                  className="group relative flex w-[72%] flex-shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:w-[46%] lg:w-[calc(33.333%-14px)]"
                >
                  {/* Image */}
                  <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-neutral-bg">
                    <img
                      src={image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400?text=Electrical";
                      }}
                    />

                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.55rem] font-black uppercase tracking-widest text-primary shadow-sm backdrop-blur-sm">
                      {label}
                    </span>

                    {savingsPercent > 0 && (
                      <span
                        className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[0.55rem] font-black uppercase tracking-widest shadow-sm ${
                          isBestValue ? "bg-primary text-primary-text" : "bg-secondary text-secondary-text"
                        }`}
                      >
                        {isBestValue ? "Best Value" : `Save ${savingsPercent}%`}
                      </span>
                    )}

                    {/* Hover reveal: product description */}
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <p className="translate-y-2 text-[0.68rem] leading-relaxed text-white/90 transition-transform duration-300 line-clamp-4 group-hover:translate-y-0 md:text-xs">
                        {product.description}
                      </p>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-3.5 md:p-4">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="mb-1 text-sm font-bold text-primary leading-snug transition-colors duration-300 line-clamp-1 group-hover:text-secondary md:text-base">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mb-2 text-[0.65rem] text-neutral-text/45 uppercase tracking-widest font-semibold">
                      ${unitPrice} / unit
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/5 pt-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-black text-primary md:text-lg">${bundle.price.toFixed(2)}</span>
                        {savingsPercent > 0 && (
                          <span className="text-xs font-bold text-neutral-text/35 line-through">${regularPrice.toFixed(2)}</span>
                        )}
                      </div>

                      <button
                        onClick={() => handleQuickAdd(product, bundle)}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text shadow-md transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-lg"
                        aria-label={`Add ${label} of ${product.name} to cart`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="9" cy="21" r="1" />
                          <circle cx="20" cy="21" r="1" />
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
