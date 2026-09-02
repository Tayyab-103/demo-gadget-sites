"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {showHeader && (
          <div className="text-center mb-16 md:mb-20">
            <span className="eyebrow justify-center mb-3">Workshop Collection</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
              Artisanal Tone &amp; <span className="text-secondary">Studio Essentials</span>
            </h2>
            <p className="text-neutral-text/65 text-sm md:text-base max-w-2xl mx-auto">
              Engineered with acoustic precision, heavy-duty alloy casting, and low-noise shielding for pristine stage and studio performance.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-16 md:gap-24">
          {products.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 lg:gap-20`}
              >
                {/* Image Section */}
                <Link href={`/product/${product.id}`} className="w-full md:w-1/2 relative flex justify-center group z-10">
                  <div className="relative w-full max-w-[440px] aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 bg-neutral-bg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400?text=Instrument";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 bg-secondary text-primary text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                      {product.category}
                    </span>

                    {/* Studio badge */}
                    <div className="absolute bottom-5 right-5 bg-primary/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      Studio Tested
                    </div>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:px-2">
                  <span className="text-xs font-black uppercase tracking-widest text-secondary mb-2">
                    Item #{product.stickyId} • {product.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-primary tracking-tight mb-4 leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-neutral-text/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <Link
                      href={`/product/${product.id}`}
                      className="group inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3.5 px-9 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-primary/10 hover:shadow-secondary/20"
                    >
                      Select Bundle
                      <span className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>

                    <div className="flex items-center gap-3">
                      <span className="text-3xl md:text-4xl font-black text-primary">
                        ${currentPrice}
                      </span>
                      <span className="text-lg md:text-xl font-bold text-neutral-text/35 line-through">
                        ${originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Trust list */}
                  <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="text-xs font-bold text-neutral-text/70 flex items-center gap-1.5">
                      <span className="text-secondary font-black">✓</span> 1-Year Warranty
                    </span>
                    <span className="text-xs font-bold text-neutral-text/70 flex items-center gap-1.5">
                      <span className="text-secondary font-black">✓</span> Free Nationwide Dispatch
                    </span>
                    <span className="text-xs font-bold text-neutral-text/70 flex items-center gap-1.5">
                      <span className="text-secondary font-black">✓</span> 30-Day Tone Trial
                    </span>
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
