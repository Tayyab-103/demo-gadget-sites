"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const tabLabels = [
  { id: "All Collection", label: "All Collection", mobileLabel: "All Toys" },
  { id: "Action Figures", label: "Action Figures", mobileLabel: "Action Figures" },
  { id: "Plushies & Soft Toys", label: "Plushies & Soft Toys", mobileLabel: "Plushies & Toys" },
  { id: "STEM Puzzles", label: "STEM Puzzles", mobileLabel: "STEM Puzzles" },
];

export default function CollectionTabs() {
  const [activeTab, setActiveTab] = useState("All Collection");
  const { addToCart } = useCart();

  const filteredProducts = products.filter((p) => {
    if (activeTab === "All Collection") return true;
    if (activeTab === "Action Figures") return p.category.includes("Action");
    if (activeTab === "Plushies & Soft Toys") return p.category.includes("Plush");
    if (activeTab === "STEM Puzzles") return p.category.includes("STEM");
    return true;
  });

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-white font-sans border-b border-black/5" id="collection">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-10 gap-3 sm:gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
              Handpicked Catalog
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-2 sm:mt-3 leading-tight">
              Select From <span className="text-[#ff4370]">Collection</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff4370] hover:text-[#1e293b] transition-colors w-fit"
          >
            View All Toys ({products.length}) →
          </Link>
        </div>

        {/* Tab Buttons - Fully responsive on 320px screens */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-2 sm:pb-3 mb-6 sm:mb-8 no-scrollbar scroll-smooth touch-pan-x -mx-1 sm:mx-0 px-1 sm:px-0">
          {tabLabels.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 px-3 sm:py-2.5 sm:px-5 rounded-full text-[0.68rem] xs:text-xs md:text-sm font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-[#ff4370] text-white shadow-md shadow-[#ff4370]/30 ring-2 ring-[#ff4370]/20"
                    : "bg-[#f8fafc] text-black/70 hover:bg-[#ff4370]/10 hover:text-[#ff4370] border border-black/5"
                }`}
              >
                <span className="sm:hidden">{tab.mobileLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {displayProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="toy-card group flex flex-col p-3.5 sm:p-4 bg-white border border-black/8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-[#ff4370]/30"
              >
                {/* Image */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#f8fafc] mb-3.5 sm:mb-4 block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-[#1e293b]/85 backdrop-blur-xs text-white text-[0.62rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {product.category.split("&")[0].trim()}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-[#ffb703] text-xs font-bold mb-1">
                      <span>★★★★★</span>
                      <span className="text-black/40 text-[0.68rem] font-semibold">(4.9)</span>
                    </div>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-xs sm:text-sm font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors line-clamp-2 leading-snug mb-2">
                        {product.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-black/6 mt-2">
                    <span className="text-base sm:text-lg font-black text-[#ff4370]">
                      ${product.ssPrice}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1, product.ssPrice, "Single Unit")}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1e293b] text-white hover:bg-[#ff4370] transition-colors flex items-center justify-center cursor-pointer shadow-xs hover:scale-105"
                      aria-label="Add to cart"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
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