"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  hideHeader?: boolean;
}

export default function ProductGrid({ hideHeader = false }: ProductGridProps) {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    const price = parseFloat(product.ssPrice).toFixed(2);
    addToCart(product, 1, price, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200 select-none" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Editorial Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3">
              Shop The Family Collection
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] leading-tight mb-4">
              Everyday Clothing. For Every Age.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-lg mx-auto">
              Soft cotton basics, play-ready kids&apos; sets, and cozy matching pajamas made for real family life.
            </p>
          </div>
        )}

        {/* 3-Column Clean Modern Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => {
            const isHovered = hoveredProduct === product.id;
            const altImage = product.images && product.images.length > 1 ? product.images[1] : product.image;
            const price = parseFloat(product.ssPrice).toFixed(2);

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-300"
              >
                {/* Product Image Frame */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block aspect-[4/4.5] w-full overflow-hidden bg-slate-100"
                >
                  {/* Primary & Hover Image Crossfade */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={altImage}
                    alt={`${product.name} Alternate View`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="bg-[#0A0F1D]/85 backdrop-blur-xs text-white px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </Link>

                {/* Product Details */}
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    {/* Title */}
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0A0F1D] group-hover:text-blue-600 transition-colors leading-snug mb-2">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Concise Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6 font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase text-slate-400">Price</span>
                      <div className="text-2xl font-extrabold text-[#0A0F1D] tracking-tight">
                        ${price}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex items-center justify-center border border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-[#0A0F1D] py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center"
                      >
                        View Detail
                      </Link>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center justify-center bg-[#0A0F1D] hover:bg-slate-800 text-white py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 cursor-pointer text-center"
                      >
                        Add To Bag
                      </button>
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
