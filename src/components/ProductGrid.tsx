"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();

  const toggleWishlist = (productId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  const filteredProducts = activeTab === "All"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7] border-b border-black/5" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="category-subtitle">
            <b>new</b> collections
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1">
            Featured Products
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex items-center gap-2 sm:gap-6 border-b border-black/10 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`py-3 px-2 text-xs font-bold uppercase tracking-[0.14em] whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  activeTab === cat
                    ? "border-primary text-primary font-extrabold"
                    : "border-transparent text-neutral-text/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = !!wishlist[product.id];

            return (
              <article key={product.id} className="fashion-card group flex flex-col justify-between">
                <div>
                  {/* Image Container with Badges & Wishlist */}
                  <div className="fashion-card-image-wrap aspect-[3/4] mb-4 relative">
                    <Link href={`/product/${product.id}`} className="block w-full h-full">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="fashion-card-image w-full h-full object-cover"
                        loading="lazy"
                      />
                    </Link>

                    {/* Top Corner Controls */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      {/* Tag Badge */}
                      <div className="flex flex-col gap-1 pointer-events-auto">
                        {product.tag === "Sale" && (
                          <span className="item-tag item-tag_red">Sale</span>
                        )}
                        {product.tag === "New" && (
                          <span className="item-tag item-tag_green">New</span>
                        )}
                      </div>
                    </div>

                    {/* Quick Add & View Detail Overlay on Hover (Desktop) */}
                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => addToCart(product, 1, product.ssPrice, "Quick Add", "M")}
                        className="flex-1 py-2.5 bg-primary text-white text-[0.68rem] font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-secondary transition-colors cursor-pointer"
                      >
                        + Add To Bag
                      </button>
                      <Link
                        href={`/product/${product.id}`}
                        className="flex-1 py-2.5 bg-white text-primary text-[0.68rem] font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors text-center border border-black/10 flex items-center justify-center"
                      >
                        View Detail
                      </Link>
                    </div>
                  </div>

                  {/* Product Details */}
                  <h3 className="font-heading text-sm font-bold text-primary uppercase tracking-wide leading-snug line-clamp-1 mb-1.5">
                    <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                </div>

                <div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-bold text-sm text-primary">
                      ${product.ssPrice}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-neutral-text/40 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Mobile Action Buttons */}
                  <div className="flex sm:hidden items-center gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => addToCart(product, 1, product.ssPrice, "Quick Add", "M")}
                      className="flex-1 py-2 bg-primary text-white text-[0.68rem] font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-secondary transition-colors cursor-pointer"
                    >
                      + Add To Bag
                    </button>
                    <Link
                      href={`/product/${product.id}`}
                      className="flex-1 py-2 bg-white text-primary text-[0.68rem] font-bold uppercase tracking-wider rounded-lg border border-black/10 text-center hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Link href="/shop" className="fashion-button">
            See all products
          </Link>
        </div>

      </div>
    </section>
  );
}
