"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart } = useCart();

  const uniqueCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  );

  const categories = [
    { id: "ALL", label: "All Products" },
    ...uniqueCategories.map((cat) => ({ id: cat, label: cat }))
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const getPrice = (prod: Product) => {
    const firstBundle = prod.bundles && prod.bundles[0];
    return firstBundle ? firstBundle.price : parseFloat(prod.ssPrice || "0");
  };

  const handleQuickAdd = (e: React.MouseEvent, prod: Product) => {
    e.preventDefault();
    e.stopPropagation();
    const price = getPrice(prod);
    addToCart(prod, 1, price, "Single Unit");
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section className="product-section py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="shop">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Title & Section Title */}
        <div className="product-title page-title text-secondary text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
          Products
        </div>
        <div className="sec-title mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight uppercase">
            Our Products
          </h2>
        </div>

        {/* Top Content Bar: Filters on Left, View More on Right */}
        <div className="top-content flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-10 border-b border-black/10">
          <div className="left-content">
            <ul className="post-filter in-block flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-secondary text-secondary-text shadow-sm"
                        : "bg-white text-neutral-text/75 border border-black/10 hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-content shrink-0">
            <Link
              href="/shop"
              className="btn-one btn-border inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-text px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300"
            >
              <span>View More</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Product Grid / Masonry Layout (Centred) */}
        <div className="row filter-layout centred grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const currentPrice = getPrice(product);
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className="single-product-section group bg-white rounded-2xl border border-black/8 overflow-hidden shadow-xs hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col text-center"
              >
                {/* Image Box */}
                <div className="img-box relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-gray-100 p-2 sm:p-3 flex items-center justify-center border-b border-black/5">
                  <Link href={`/product/${product.id}`} className="w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-gray-900/5">
                    <figure className="w-full h-full flex items-center justify-center m-0 overflow-hidden">
                      <img
                        src={product.image || product.images?.[0] || ""}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/400x400?text=Product";
                        }}
                      />
                    </figure>
                  </Link>

                  {/* Subtle Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-primary border border-black/10 text-[0.62rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10">
                    {product.category}
                  </span>
                </div>

                {/* Lower Content */}
                <div className="lower-content p-6 flex flex-col items-center flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1 mb-2">
                    <Link href={`/product/${product.id}`}>{product.name}</Link>
                  </h4>

                  {/* Price */}
                  <div className="price flex items-baseline justify-center gap-2 mb-6">
                    <span className="text-2xl font-black text-primary">${currentPrice}</span>
                    <span className="text-xs font-semibold text-neutral-text/40 line-through">${originalPrice}</span>
                  </div>

                  {/* Actions: Quick Add + Select Options */}
                  <div className="w-full flex items-center justify-center gap-2 mt-auto pt-3 border-t border-black/5">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="p-2.5 rounded-xl border border-black/10 hover:border-secondary hover:bg-secondary/10 text-primary transition-all duration-200 cursor-pointer shrink-0"
                      title="Quick Add 1 Unit"
                      aria-label="Quick Add"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </button>

                    <Link
                      href={`/product/${product.id}`}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-primary hover:bg-secondary text-primary-text hover:text-secondary-text font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>{addedId === product.id ? "Added to Cart!" : "Select Options"}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
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
