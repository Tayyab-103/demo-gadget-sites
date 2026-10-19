"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import productsData from "../../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const ageRanges = [
  "All Ages",
  "0-12 Months",
  "1-3 Years",
  "4-6 Years",
  "7-9 Years",
  "10+ Years & Family",
];

const categoryList = [
  "All Categories",
  "Action Figures & Hero Toys",
  "Plushies & Soft Toys",
  "STEM & Learning Puzzles",
  "Board Games & Family Fun",
  "Vehicles & RC Toys",
  "Building & Construction",
  "Dolls & Interactive Play",
  "Outdoor & Water Games",
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(40);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory =
          selectedCategory === "All Categories" || p.category === selectedCategory;
        const matchesSearch =
          !searchQuery ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = parseFloat(p.ssPrice) <= maxPrice;
        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return parseFloat(a.ssPrice) - parseFloat(b.ssPrice);
        if (sortBy === "price-high") return parseFloat(b.ssPrice) - parseFloat(a.ssPrice);
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return 0; // popular / default
      });
  }, [selectedCategory, searchQuery, maxPrice, sortBy]);

  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="Toy & Game Catalog"
          title="The Toy & Game Collection"
          subtitle="Explore action figures, plush animals, Montessori wooden puzzles, family board games, RC cars, and magnetic blocks."
          image="/img/hero-banner.jpg"
          currentLabel="Toy Shop"
        />

        <section className="py-14 sm:py-16 md:py-20 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Sidebar Filters matching Kiddex shop-sidebar */}
              <div className="lg:col-span-3 space-y-8 bg-[#f8fafc] p-6 sm:p-7 rounded-3xl border border-black/6">
                
                {/* Search in Shop */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1e293b] mb-3">
                    Search Toys
                  </h4>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by keyword..."
                      className="w-full bg-white border border-black/10 rounded-2xl py-2.5 pl-3.5 pr-8 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370]"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black text-sm"
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter by Price */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#1e293b]">
                      Max Price:
                    </h4>
                    <span className="text-xs font-black text-[#ff4370]">
                      ${maxPrice}.00
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="40"
                    step="2"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#ff4370] cursor-pointer"
                  />
                  <div className="flex justify-between text-[0.65rem] text-black/50 mt-1">
                    <span>$10</span>
                    <span>$40</span>
                  </div>
                </div>

                {/* Categories Filter */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1e293b] mb-3">
                    Categories
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {categoryList.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left py-2 px-3 rounded-xl transition-all cursor-pointer font-bold ${
                            isSelected
                              ? "bg-[#ff4370] text-white shadow-xs"
                              : "text-black/70 hover:bg-white hover:text-[#ff4370]"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Select Age Filter from Kiddex */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1e293b] mb-3">
                    Select Age
                  </h4>
                  <div className="space-y-1.5 text-xs">
                    {ageRanges.map((age) => {
                      const isSelected = selectedAge === age;
                      return (
                        <button
                          key={age}
                          onClick={() => setSelectedAge(age)}
                          className={`w-full text-left py-2 px-3 rounded-xl transition-all cursor-pointer font-bold ${
                            isSelected
                              ? "bg-[#1e293b] text-white shadow-xs"
                              : "text-black/70 hover:bg-white hover:text-black"
                          }`}
                        >
                          {age}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Reset Filters */}
                {(selectedCategory !== "All Categories" || selectedAge !== "All Ages" || searchQuery || maxPrice < 40) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All Categories");
                      setSelectedAge("All Ages");
                      setSearchQuery("");
                      setMaxPrice(40);
                    }}
                    className="w-full py-2.5 rounded-xl bg-white border border-black/10 text-xs font-black text-[#ff4370] hover:bg-[#fff0f4] transition-all cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                )}

              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-9">
                
                {/* Item Sorting Bar matching Kiddex */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-black/8 gap-4">
                  <div className="text-xs sm:text-sm font-bold text-black/60">
                    Showing <span className="text-[#1e293b] font-black">{filteredProducts.length}</span> of <span className="text-[#1e293b] font-black">{products.length}</span> toys &amp; games
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <span className="text-black/60">Sort:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="py-1.5 px-3 rounded-xl bg-[#f8fafc] border border-black/10 text-xs font-bold text-[#1e293b] focus:outline-none"
                      >
                        <option value="popular">Most Popular</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Alphabetical</option>
                      </select>
                    </div>

                    {/* Grid / List Toggle */}
                    <div className="flex items-center gap-1 bg-[#f8fafc] p-1 rounded-xl border border-black/8">
                      <button
                        onClick={() => setViewMode("grid")}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                          viewMode === "grid" ? "bg-[#ff4370] text-white" : "text-black/60 hover:text-black"
                        }`}
                        title="Grid View"
                      >
                        ⊞
                      </button>
                      <button
                        onClick={() => setViewMode("list")}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
                          viewMode === "list" ? "bg-[#ff4370] text-white" : "text-black/60 hover:text-black"
                        }`}
                        title="List View"
                      >
                        ☰
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Catalog Display */}
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 bg-[#f8fafc] rounded-3xl p-8">
                    <p className="text-sm font-bold text-black/60 mb-4">
                      No toys match your selected filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedCategory("All Categories");
                        setSelectedAge("All Ages");
                        setSearchQuery("");
                        setMaxPrice(40);
                      }}
                      className="py-2.5 px-6 rounded-full bg-[#ff4370] text-white text-xs font-black uppercase tracking-wider cursor-pointer shadow-sm"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="toy-card group flex flex-col p-4 bg-white border border-black/8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-[#ff4370]/30 hover:-translate-y-1"
                      >
                        <Link
                          href={`/product/${product.id}`}
                          className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f8fafc] mb-4 block"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <span className="absolute top-2.5 left-2.5 bg-[#ff4370] text-white text-[0.62rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                            Popular
                          </span>
                        </Link>

                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1 text-[#ffb703] text-xs font-bold mb-1">
                              <span>★★★★★</span>
                              <span className="text-black/40 text-[0.68rem] font-semibold">(4.9)</span>
                            </div>
                            <span className="text-[0.65rem] font-black uppercase text-[#ff4370] block">
                              {product.category}
                            </span>
                            <Link href={`/product/${product.id}`}>
                              <h3 className="text-sm sm:text-base font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors line-clamp-2 leading-snug mt-1 mb-2">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-xs text-black/60 line-clamp-2 mb-4 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3.5 border-t border-black/6 mt-auto">
                            <span className="text-lg font-black text-[#ff4370]">
                              ${product.ssPrice}
                            </span>
                            <button
                              onClick={() => addToCart(product, 1, product.ssPrice, "Single Unit")}
                              className="py-2 px-4 rounded-xl bg-[#ff4370] hover:bg-[#e63560] text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
                            >
                              <span>Add</span>
                              <span>+</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="p-5 rounded-3xl bg-white border border-black/8 hover:border-[#ff4370]/30 transition-all flex flex-col sm:flex-row items-center gap-5 shadow-xs hover:shadow-md"
                      >
                        <Link href={`/product/${product.id}`} className="w-full sm:w-36 h-36 rounded-2xl overflow-hidden bg-black/5 flex-shrink-0">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-black text-[#ff4370] uppercase">{product.category}</span>
                          <Link href={`/product/${product.id}`}>
                            <h3 className="text-base font-black text-[#1e293b] hover:text-[#ff4370] transition-colors mt-0.5 mb-1.5">
                              {product.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-black/60 line-clamp-2 mb-3 leading-relaxed">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-4">
                            <span className="text-xl font-black text-[#ff4370]">${product.ssPrice}</span>
                            <button
                              onClick={() => addToCart(product, 1, product.ssPrice, "Single Unit")}
                              className="py-2 px-5 rounded-full bg-[#ff4370] hover:bg-[#e63560] text-white text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Promotional banner mid-page from Kiddex */}
                <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#ff4370] to-[#ff758c] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#ffb703] bg-white/15 px-3 py-1 rounded-full">
                      Special Offer
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                      Super Discount on First Purchase
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm mt-1">
                      Unlock free tracked delivery and 15% off all bundle packs today.
                    </p>
                  </div>
                  <Link
                    href="/cart"
                    className="py-3.5 px-8 rounded-full bg-white text-[#ff4370] hover:bg-[#ffb703] hover:text-[#1e293b] text-xs font-black uppercase tracking-wider transition-all shadow-md whitespace-nowrap cursor-pointer"
                  >
                    View Cart →
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
