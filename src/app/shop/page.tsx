"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterBanner from "@/components/NewsletterBanner";
import productsData from "../../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const categoryList = [
  "All",
  "Tops & Blouses",
  "Knitwear & Sweaters",
  "Skirts & Bottoms",
];

const colorList = [
  "Black",
  "Blue",
  "Red",
  "Yellow",
  "Green",
  "Cream",
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(150);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSearch(searchQuery.trim());
    setCurrentPage(1);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (submittedSearch) {
      const q = submittedSearch.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Price filter
    result = result.filter((p) => parseFloat(p.ssPrice) <= maxPrice);

    // Sorting
    if (sortBy === "price-low") {
      result.sort((a, b) => parseFloat(a.ssPrice) - parseFloat(b.ssPrice));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseFloat(b.ssPrice) - parseFloat(a.ssPrice));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, submittedSearch, maxPrice, sortBy]);

  // Pagination (6 items per page)
  const itemsPerPage = 8;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAF9F7]">
        
        {/* Inner Top Header Banner */}
        <section className="bg-white py-10 md:py-14 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary mb-3">
                  Shop Catalog
                </h1>
                <nav aria-label="Breadcrumb" className="breadcrumbs-list">
                  <Link href="/">Home</Link>
                  <span className="breadcrumbs-separator" />
                  <span className="text-primary font-bold">Shop</span>
                </nav>
              </div>

              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden shadow-sm bg-[#EAE6E1]">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&q=80"
                  alt="Modern Meadow Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main 2-Column Shop Layout (matching shop.html) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ================= LEFT COLUMN: FILTERS & WIDGETS (4 cols) ================= */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Search Widget */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search catalog..."
                  className="w-full bg-white border border-black/15 rounded-full px-5 py-3.5 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Submit Search"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {/* Filters Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm space-y-8">
                
                {/* Categories Widget */}
                <div>
                  <h2 className="font-heading text-base font-bold uppercase tracking-wider text-primary pb-3 border-b border-black/10 mb-4">
                    Categories
                  </h2>
                  <ul className="space-y-2.5">
                    {categoryList.map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCurrentPage(1);
                          }}
                          className={`w-full flex items-center justify-between text-xs uppercase tracking-wider py-1 transition-colors cursor-pointer ${
                            selectedCategory === cat
                              ? "font-extrabold text-secondary"
                              : "text-neutral-text/70 hover:text-primary font-medium"
                          }`}
                        >
                          <span>{cat}</span>
                          <span className="text-[0.65rem] text-neutral-text/40">
                            {cat === "All"
                              ? products.length
                              : products.filter((p) => p.category === cat).length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price Slider Widget */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-black/10 mb-4">
                    <h3 className="font-heading text-base font-bold uppercase tracking-wider text-primary">
                      Price Filter
                    </h3>
                    <span className="font-bold text-xs text-primary">${maxPrice}</span>
                  </div>

                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />

                  <div className="flex items-center justify-between text-[0.68rem] text-neutral-text/50 mt-2 font-mono">
                    <span>$15</span>
                    <span>$150 max</span>
                  </div>
                </div>

                {/* Colors Checkbox Widget */}
                <div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-wider text-primary pb-3 border-b border-black/10 mb-4">
                    Colors
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {colorList.map((color) => {
                      const isChecked = selectedColors.includes(color);
                      return (
                        <label key={color} className="flex items-center gap-2 cursor-pointer text-xs text-neutral-text/75 hover:text-primary">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleColorToggle(color)}
                            className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                          />
                          <span>{color}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Reset Filter Button */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSubmittedSearch("");
                    setSearchQuery("");
                    setMaxPrice(150);
                    setSelectedColors([]);
                    setCurrentPage(1);
                  }}
                  className="fashion-button-outline w-full text-xs py-2.5 cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>

              {/* Reviewed by you Widget (matching shop.html) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm space-y-4">
                <h3 className="font-heading text-base font-bold uppercase tracking-wider text-primary pb-3 border-b border-black/10">
                  Reviewed by You
                </h3>
                
                <div className="divide-y divide-black/5">
                  {products.slice(0, 3).map((item) => (
                    <article key={item.id} className="py-3 flex items-center gap-3 group">
                      <Link href={`/product/${item.id}`} className="w-14 h-18 rounded-lg overflow-hidden bg-neutral-bg flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </Link>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-xs font-bold text-primary uppercase truncate mb-1">
                          <Link href={`/product/${item.id}`} className="hover:text-secondary">
                            {item.name}
                          </Link>
                        </h4>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-bold text-primary">${item.ssPrice}</span>
                          {item.oldPrice && (
                            <span className="text-[0.65rem] text-neutral-text/40 line-through">${item.oldPrice}</span>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Season Sale Promotional Banner Card (matching shop.html) */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] p-8 flex flex-col justify-end text-white shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                  alt="Season Sale Banner"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <span className="item-tag item-tag_red mb-2 inline-block">
                    Exclusive
                  </span>
                  <h4 className="font-heading text-2xl font-bold uppercase tracking-tight mb-2">
                    Season Sale
                  </h4>
                  <p className="text-white/80 text-xs leading-relaxed mb-4">
                    Take an extra 15% off signature wrap skirts and knits.
                  </p>
                  <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-secondary hover:text-white flex items-center gap-2">
                    Shop now <span>→</span>
                  </Link>
                </div>
              </div>

            </aside>

            {/* ================= RIGHT COLUMN: CATALOG & CONTROLS (8 cols) ================= */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Shop Panel: Item Count & Sort Select */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-black/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-neutral-text/70">
                  There are <strong className="text-primary font-bold">{filteredProducts.length}</strong> apparel items in this category
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-neutral-text/50 uppercase tracking-wider font-semibold">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#FAF9F7] border border-black/15 rounded-lg px-3 py-1.5 text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="relevance">By Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Product Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Product Cards Grid */}
              {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {paginatedProducts.map((product) => {
                    const isWishlisted = !!wishlist[product.id];

                    return (
                      <article key={product.id} className="fashion-card group flex flex-col justify-between bg-white rounded-2xl p-4 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                        <div>
                          <div className="fashion-card-image-wrap aspect-[3/4] mb-3 relative rounded-xl overflow-hidden bg-[#FAF9F7]">
                            <Link href={`/product/${product.id}`} className="block w-full h-full">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="fashion-card-image w-full h-full object-cover"
                                loading="lazy"
                              />
                            </Link>

                            {/* Top Corner Controls */}
                            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                              <div>
                                {product.tag === "Sale" && (
                                  <span className="item-tag item-tag_red">Sale</span>
                                )}
                                {product.tag === "New" && (
                                  <span className="item-tag item-tag_green">New</span>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={(e) => toggleWishlist(product.id, e)}
                                className={`pointer-events-auto w-7 h-7 rounded-full bg-white/90 shadow flex items-center justify-center transition-all ${
                                  isWishlisted ? "text-red-500 scale-110" : "text-black/40 hover:text-red-500"
                                }`}
                                aria-label="Add to wishlist"
                              >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                              </button>
                            </div>

                            {/* Quick Add Overlay on Hover */}
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <button
                                type="button"
                                onClick={() => addToCart(product, 1, product.ssPrice, "Quick Add", "M")}
                                className="w-full py-2 bg-primary text-white text-[0.65rem] font-bold uppercase tracking-widest rounded shadow hover:bg-secondary transition-colors"
                              >
                                + Quick Add
                              </button>
                            </div>
                          </div>

                          <h3 className="font-heading text-xs sm:text-sm font-bold text-primary uppercase tracking-wide line-clamp-1 mb-1">
                            <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                              {product.name}
                            </Link>
                          </h3>
                        </div>

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
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-sm p-8">
                  <p className="text-neutral-text/50 text-sm mb-4">No garments match your selected filter criteria.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSubmittedSearch("");
                      setMaxPrice(150);
                    }}
                    className="fashion-button text-xs py-2 px-6"
                  >
                    Clear Filter
                  </button>
                </div>
              )}

              {/* Page Navigation Pagination (matching shop.html) */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-8">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-full border border-black/15 bg-white flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                    aria-label="Previous Page"
                  >
                    ←
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-full font-bold text-xs transition-colors cursor-pointer ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "bg-white border border-black/15 text-primary hover:bg-neutral-bg"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-full border border-black/15 bg-white flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
                    aria-label="Next Page"
                  >
                    →
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Newsletter Banner at Bottom of Shop (matching shop.html) */}
        <NewsletterBanner />

      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
