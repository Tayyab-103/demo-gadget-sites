"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const productHighlights: { [key: string]: string[] } = {
  product1: ["Carbon steel scoop", "Depth markings", "Comfort grip"],
  product2: ["SK5 steel blades", "Spring-loaded action", "Safety lock"],
  product3: ["Three rigid tines", "Hardwood handle", "Weeds & aerates"],
};

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product) => {
    const bundle = product.bundles && product.bundles[0] ? product.bundles[0] : { quantity: 1, price: parseFloat(product.ssPrice) };
    const unitPrice = (parseFloat(String(bundle.price)) / bundle.quantity).toFixed(2);
    const label = bundle.quantity > 1 ? `${bundle.quantity}-Tool Pack Bundle` : "Single Tool";
    addToCart(product, bundle.quantity, unitPrice, label);
  };

  return (
    <section className="py-16 md:py-24 bg-surface" id="shop">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">The Collection</span>
              <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-primary mt-4 leading-tight">
                Three tools. <em className="text-secondary">Every</em> garden job.
              </h2>
            </div>
            <p className="text-sm text-neutral-text/70 max-w-sm leading-relaxed">
              Dig, prune and weed with a hand-tool kit that covers the whole growing season — buy one or bundle up and save.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => {
            const minPrice = product.bundles && product.bundles[0] ? product.bundles[0].price.toFixed(2) : product.ssPrice;
            const originalPrice = (Number(minPrice) * 1.35).toFixed(2);
            const highlights = productHighlights[product.id] || ["Built to last", "Comfort grip", "Garden tested"];
            const altImage = product.images?.find((img) => img !== product.image);

            return (
              <article
                key={product.id}
                className="group flex flex-col bg-white rounded-[1.75rem] border border-black/5 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Link href={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-neutral-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-all duration-700 group-hover:scale-105 ${altImage ? "group-hover:opacity-0" : ""}`}
                  />
                  {altImage && (
                    <Image
                      src={altImage}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                      aria-hidden
                    />
                  )}
                  <span className="absolute top-4 left-4 bg-white/95 text-primary text-[0.65rem] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                  <span className="absolute top-4 right-4 bg-secondary text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full">
                    Save 25%
                  </span>
                </Link>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-primary tracking-tight leading-snug">
                    <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-neutral-text/70 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 bg-neutral-bg px-2.5 py-1 rounded-full text-[0.7rem] font-medium text-neutral-text/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex items-baseline justify-between gap-3 pb-4 border-b border-black/5">
                      <span className="text-[0.65rem] uppercase tracking-wider text-neutral-text/50 font-semibold">Starting from</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-sm text-neutral-text/40 line-through">${originalPrice}</span>
                        <span className="text-2xl font-extrabold text-primary">${minPrice}</span>
                      </span>
                    </div>

                    <div className="pt-4 grid grid-cols-2 gap-2 sm:gap-2.5">
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex items-center justify-center h-11 px-3 rounded-full border border-black/10 text-primary text-sm font-semibold hover:border-primary transition-colors whitespace-nowrap"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="inline-flex items-center justify-center gap-2 h-11 px-3 rounded-full bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 hidden min-[360px]:block">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Add to Cart
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
