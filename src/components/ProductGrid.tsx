"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredImageIndex, setHoveredImageIndex] = useState<{ [productId: string]: number }>({});

  const categories = [
    { id: "all", label: "All Items" },
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
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] relative overflow-hidden" id="shop">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#D2446D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#4C0519]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
              <span>📖 Curated Literary Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#000000] mb-3 tracking-tight">
              Featured <span className="text-[#D2446D]">Collection</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium">
              Archival hardcovers, artisan reading sets, and timeless literary masterpieces.
            </p>
          </div>
        )}

        {/* Responsive Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

            const activeImgIdx = hoveredImageIndex[product.id] ?? 0;
            const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
            const activeImage = productImages[activeImgIdx] || product.image;

            return (
              <div
                key={product.id}
                className="group w-full bg-white rounded-2xl sm:rounded-3xl border border-rose-100/80 hover:border-[#D2446D]/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Image Section */}
                <div className="p-3.5 sm:p-4 pb-0">
                  <Link
                    href={`/product/${product.id}`}
                    className="block relative aspect-4/3 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-stone-100 border border-rose-100/50"
                  >
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/img/gallery1.jpg";
                      }}
                    />
                  </Link>

                  {/* Thumbnail Selector */}
                  {productImages.length > 1 && (
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3">
                      {productImages.slice(0, 4).map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`View image ${i + 1}`}
                          onMouseEnter={() =>
                            setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }))
                          }
                          onClick={() =>
                            setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }))
                          }
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md overflow-hidden border transition-all cursor-pointer ${
                            activeImgIdx === i
                              ? "border-[#D2446D] ring-2 ring-[#D2446D]/20 scale-105"
                              : "border-gray-200 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = product.image;
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Info & Details */}
                <div className="p-4 sm:p-5 pt-3 sm:pt-4 flex flex-col flex-grow justify-between gap-3">
                  <div>
                    {/* Product Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#000000] tracking-tight leading-snug group-hover:text-[#D2446D] transition-colors mb-1.5 capitalize line-clamp-1">
                      <Link href={`/product/${product.id}`}>{product.name}</Link>
                    </h3>

                    {/* Product Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Responsive Pricing and Action Footer */}
                  <div className="pt-3 border-t border-rose-100/70 flex items-center justify-between gap-2.5 sm:gap-3 mt-auto">
                    <div className="min-w-0">
                      <div className="text-[0.65rem] uppercase tracking-wider font-semibold text-gray-400">
                        Price
                      </div>
                      <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                        <span className="text-lg sm:text-2xl font-black text-[#4C0519] tracking-tight">
                          ${currentPrice}
                        </span>
                        <span className="text-xs font-semibold text-gray-400 line-through">
                          ${originalPrice}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-[#4C0519] hover:bg-[#D2446D] text-white font-bold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>View Product</span>
                      <span className="text-sm leading-none">→</span>
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
