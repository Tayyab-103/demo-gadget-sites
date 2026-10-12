"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { BoltIcon } from "@/components/Icons";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addToCart, setIsCartOpen } = useCart();

  const categories = [
    { id: "all", label: "All Products" },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: cat,
      label: cat,
    })),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product, price: number | string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, price);
    setIsCartOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="shop">
      {/* Subtle Background Ambience */}
      <div className="absolute top-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-extrabold text-xs tracking-widest uppercase mb-3 border border-secondary/30 shadow-xs">
              <BoltIcon className="w-3.5 h-3.5 fill-secondary text-secondary shrink-0" />
              <span>Advanced Hardware Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-primary mb-3 tracking-tight">
              Featured <span className="text-secondary">Products</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium">
              Precision GaN power stations, cyber acoustic audio, and smart wireless circuit docks.
            </p>

            {/* Filter Tabs */}
            {categories.length > 2 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-primary text-secondary shadow-sm border border-primary"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className="group relative w-full bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between p-5 sm:p-6"
              >
                {/* 1. Header: Category and Title */}
                <div className="mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary mb-1">
                    {product.category || "Smart Gadget"}
                  </div>
                  <h3 className="text-base sm:text-lg font-black uppercase text-primary tracking-tight leading-snug group-hover:text-secondary transition-colors duration-200 line-clamp-1">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                </div>

                {/* 2. Image Container */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden flex items-center justify-center p-4 my-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full h-full flex items-center justify-center"
                    aria-label={`View details for ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/img/products/product01.jpg";
                      }}
                    />
                  </Link>
                </div>

                {/* 3. Footer: Price & Responsive Action Buttons */}
                <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-primary group-hover:text-secondary transition-colors duration-200 tracking-tight">
                        ${currentPrice}
                      </span>
                      <span className="text-sm font-semibold text-gray-400 line-through">
                        ${originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Responsive Equal-Sized Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full">
                    <Link
                      href={`/product/${product.id}`}
                      className="h-10 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 active:scale-95 text-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center text-center transition-all border border-gray-200"
                    >
                      Details
                    </Link>
                    <button
                      type="button"
                      onClick={(e) => handleAddToCart(product, currentPrice, e)}
                      className="h-10 px-3 rounded-xl bg-secondary hover:brightness-105 active:scale-95 text-secondary-text font-black text-xs uppercase tracking-wider shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer transition-all border border-secondary/40"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Add</span>
                    </button>
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
