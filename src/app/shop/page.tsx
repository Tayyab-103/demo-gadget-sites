"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productsData from "../../../config/products.json";
import siteConfigData from "../../../config/site-config.json";
import { Product, SiteConfig } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

const categories = [
  "All Collections",
  ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
];

const faqs = [
  {
    q: "What makes North Star art supplies ASTM Class I & II archival?",
    a: "Our pigment batches are formulated without cheap fillers or volatile extenders, passing rigorous accelerated lightfastness testing. This ensures your artwork retains brilliance for 100+ years under museum gallery lighting."
  },
  {
    q: "How do bundle discounts work across studio orders?",
    a: "You can purchase individual units or save significantly with our multi-unit bundle packs (up to 8 packs per product). The highest discounts are automatically applied in your cart."
  },
  {
    q: "What is your return and studio satisfaction policy?",
    a: "We offer a 60-day full studio satisfaction guarantee. If any brush, tube, or canvas does not meet your artistic standards, simply contact us for an easy exchange or full refund."
  },
  {
    q: "How fast is shipping and what carrier do you use?",
    a: `All orders are carefully packed with archival protective boxing and dispatched nationwide via ${siteConfig.shippingCarrier} within 24–48 hours, arriving within ${siteConfig.shippingPeriod} business days.`
  }
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (selectedCategory !== "All Collections") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => {
        const pA = a.bundles?.[0]?.price ?? Number(a.ssPrice);
        const pB = b.bundles?.[0]?.price ?? Number(b.ssPrice);
        return Number(pA) - Number(pB);
      });
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => {
        const pA = a.bundles?.[0]?.price ?? Number(a.ssPrice);
        const pB = b.bundles?.[0]?.price ?? Number(b.ssPrice);
        return Number(pB) - Number(pA);
      });
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const firstBundle = product.bundles?.[0];
    const price = firstBundle ? firstBundle.price : product.ssPrice;
    addToCart(product, 1, price, "Single Studio Unit");
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        {/* Atelier Catalog Hero Banner */}
        <section className="relative overflow-hidden bg-primary text-white py-16 md:py-24 border-b border-white/10">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary/10 blur-2xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-secondary font-bold">Artisan Catalog</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl mx-auto">
              The Master Atelier <span className="text-secondary">Catalog</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Curated fine art pigments, handcrafted Kolinsky &amp; synthetic brushes, and triple-primed Belgian linen canvases engineered for professional studios and dedicated creators.
            </p>
          </div>
        </section>

        {/* Catalog Control Bar & Filters */}
        <section className="sticky top-[73px] sm:top-[81px] z-30 bg-white/95 backdrop-blur-md border-b border-black/8 py-4 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-text shadow-sm"
                        : "bg-neutral-bg text-neutral-text/70 hover:bg-black/5 hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
                {/* Live Search */}
                <div className="relative flex-1 md:w-64">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-text/40"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search catalog..."
                    className="w-full pl-9 pr-8 py-2 bg-neutral-bg border border-black/10 rounded-full text-xs font-medium focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[0.65rem] font-bold text-neutral-text/50 hover:text-primary"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full sm:w-auto bg-neutral-bg border border-black/10 rounded-full px-3 py-2 text-xs font-semibold text-neutral-text focus:outline-none focus:border-secondary cursor-pointer"
                >
                  <option value="featured">Featured Order</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex items-center bg-neutral-bg p-1 rounded-full border border-black/5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      viewMode === "grid" ? "bg-white text-primary shadow-xs" : "text-neutral-text/50 hover:text-primary"
                    }`}
                    aria-label="Grid View"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      viewMode === "list" ? "bg-white text-primary shadow-xs" : "text-neutral-text/50 hover:text-primary"
                    }`}
                    aria-label="List View"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product Listing Area */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-black/5 shadow-xs p-8">
                <div className="w-16 h-16 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">No art supplies found</h3>
                <p className="text-sm text-neutral-text/60 max-w-md mx-auto mb-6">
                  We couldn&rsquo;t find any items matching &ldquo;{searchQuery}&rdquo;. Try adjusting your search or filtering by another category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All Collections");
                    setSearchQuery("");
                  }}
                  className="bg-primary text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  Reset Catalog Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              /* GRID VIEW */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => {
                  const firstBundle = product.bundles?.[0];
                  const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
                  const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
                  const bundleCount = product.bundles?.length || 1;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl border border-black/8 overflow-hidden shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col"
                    >
                      {/* Product Thumbnail Container */}
                      <Link href={`/product/${product.id}`} className="relative aspect-4/3 w-full overflow-hidden bg-neutral-bg block">
                        <img
                          src={product.image || product.images?.[0] || ""}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/500x400?text=Art+Supply";
                          }}
                        />
                      </Link>

                      {/* Card Body */}
                      <div className="p-6 flex flex-col flex-1">

                        <Link href={`/product/${product.id}`} className="block">
                          <h3 className="text-lg sm:text-xl font-black uppercase text-primary tracking-tight group-hover:text-secondary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-xs sm:text-sm text-neutral-text/70 mt-2 line-clamp-3 leading-relaxed flex-1">
                          {product.description}
                        </p>

                        {/* Price & Action Row */}
                        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                          <div>
                            <span className="text-[0.62rem] uppercase tracking-wider text-neutral-text/50 block">From</span>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-black text-primary">${currentPrice}</span>
                              <span className="text-xs font-bold text-neutral-text/40 line-through">${originalPrice}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => handleQuickAdd(product, e)}
                              className="p-3 rounded-full bg-secondary/15 text-primary hover:bg-secondary transition-colors cursor-pointer"
                              title="Quick Add 1 Unit"
                              aria-label="Quick Add"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                              </svg>
                            </button>
                            <Link
                              href={`/product/${product.id}`}
                              className="bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all duration-200 shadow-sm"
                            >
                              Configure
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* LIST VIEW */
              <div className="flex flex-col gap-6">
                {filteredProducts.map((product) => {
                  const firstBundle = product.bundles?.[0];
                  const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
                  const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl border border-black/8 p-6 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex flex-col md:flex-row items-center gap-8"
                    >
                      <Link href={`/product/${product.id}`} className="w-full md:w-64 aspect-4/3 rounded-2xl overflow-hidden bg-neutral-bg flex-shrink-0 relative">
                        <img
                          src={product.image || product.images?.[0] || ""}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-secondary text-primary text-[0.6rem] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                          {product.category}
                        </span>
                      </Link>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-1 text-secondary text-xs mb-1.5">
                          {"★★★★★".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                          ))}
                          <span className="text-[0.68rem] font-bold text-neutral-text/50 ml-1.5">(4.9/5.0)</span>
                        </div>

                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-xl font-black uppercase text-primary hover:text-secondary transition-colors">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-xs sm:text-sm text-neutral-text/70 mt-2 leading-relaxed">
                          {product.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-text/70">
                          <span className="text-green-700">✓ Ready to Dispatch</span>
                          <span>✦ ASTM Archival Quality</span>
                          <span>🛡️ 60-Day Studio Guarantee</span>
                        </div>
                      </div>

                      <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between gap-4 border-t md:border-t-0 pt-4 md:pt-0 border-black/5">
                        <div className="text-left md:text-right">
                          <span className="text-[0.62rem] uppercase tracking-wider text-neutral-text/50 block">Studio Pack From</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-black text-primary">${currentPrice}</span>
                            <span className="text-sm font-bold text-neutral-text/40 line-through">${originalPrice}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => handleQuickAdd(product, e)}
                            className="p-3 rounded-full bg-secondary/15 text-primary hover:bg-secondary transition-colors cursor-pointer"
                            title="Quick Add 1 Unit"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                              <line x1="3" y1="6" x2="21" y2="6" />
                              <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                          </button>
                          <Link
                            href={`/product/${product.id}`}
                            className="bg-primary text-white hover:bg-secondary hover:text-primary font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* Studio Craftsmanship Pillars */}
        <section className="bg-white py-16 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="eyebrow justify-center mb-3">Atelier Standards</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-primary">
                Why Professional Artists Choose <span className="text-secondary">{siteConfig.brandName}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Single-Origin Minerals",
                  desc: "Unadulterated pigments ground to optimal micron sizes for unsurpassed tinting strength."
                },
                {
                  title: "Triple-Balanced Handles",
                  desc: "Hardwood brush shafts weighted for ergonomic precision through hours of sustained painting."
                },
                {
                  title: "Belgian Archival Linen",
                  desc: "Medium texture linen primed with acid-free gesso that will not degrade or crack over time."
                },
                {
                  title: "Certified Direct Dispatch",
                  desc: `Every bundle is inspected and sealed in studio-grade packaging prior to ${siteConfig.shippingCarrier} dispatch.`
                }
              ].map((feat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-bg border border-black/5 hover:border-secondary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm mb-4">
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-bold text-primary mb-2">{feat.title}</h4>
                  <p className="text-xs text-neutral-text/70 leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-neutral-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="eyebrow justify-center mb-3">Studio Inquiries</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-primary">
                Frequently Asked <span className="text-secondary">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-primary text-sm sm:text-base hover:text-secondary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-secondary text-xl font-bold ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-text/75 leading-relaxed border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Studio Consultation CTA */}
        <section className="bg-primary text-white py-14 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-3">
              Need Assistance Selecting Your Studio Materials?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto mb-6">
              Our art supply specialists are on standby to provide pigment recommendations, brush guides, and bulk bundle support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-secondary text-primary font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white transition-colors"
              >
                Call Support: {siteConfig.phone}
              </a>
              <Link
                href="/contact"
                className="bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                Send Studio Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
