"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="eyebrow justify-center mb-4">The Range</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Explore Our <span className="text-secondary">Training Gear</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base max-w-2xl mx-auto">
            Select a product below to customize your bundle pack and start training smarter today.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {products.map((product, idx) => {
            const isEven = idx % 2 === 0;
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            // Fake an original price for the crossed-out effect to match the design screenshot
            const originalPrice = (Number(currentPrice) * 1.3).toFixed(2);

            return (
              <div
                key={product.id}
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 lg:gap-24`}
              >
                {/* Image Section */}
                <Link href={`/product/${product.id}`} className="w-full md:w-1/2 relative flex justify-center group z-10">
                  <div className="relative w-full max-w-[420px] aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400?text=Gear";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                    <span className="absolute top-5 left-5 bg-secondary text-primary text-[0.62rem] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 md:px-4">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-neutral-text tracking-tighter mb-4 leading-none">
                    {product.name}
                  </h3>

                  <p className="text-neutral-text/60 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                    <Link
                      href={`/product/${product.id}`}
                      className="group inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-4 px-10 rounded-full text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-secondary/20"
                    >
                      Shop Now
                    </Link>

                    <div className="flex items-center gap-3">
                      <span className="text-3xl md:text-4xl font-black text-neutral-text">
                        ${currentPrice}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-secondary line-through opacity-80">
                        ${originalPrice}
                      </span>
                    </div>
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
