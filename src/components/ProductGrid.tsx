"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

// Engineering specs & metadata for each automotive product
const productMeta: Record<
  string,
  {
    partNumber: string;
    rating: number;
    reviews: number;
    fitment: string;
    badge: string;
    specs: string[];
    discount: string;
    highlight: string;
  }
> = {
  product1: {
    partNumber: "MPA-MIR-01",
    rating: 4.9,
    reviews: 142,
    fitment: "Universal 360° Fit",
    badge: "SAFETY ESSENTIAL",
    specs: ["HD Optical Glass", "360° Wide-Angle", "Shatterproof ABS Frame"],
    discount: "-18% OFF",
    highlight: "Eliminates Dangerous Blind Spots"
  },
  product2: {
    partNumber: "MPA-MNT-02",
    rating: 4.8,
    reviews: 98,
    fitment: "Universal Dash / Windshield",
    badge: "MAGNETIC LOCK",
    specs: ["Ultra-Strong Magnet Grip", "360° Swivel Ball", "Zero-Vibration Arm"],
    discount: "-20% OFF",
    highlight: "Instant One-Handed Docking"
  },
  product3: {
    partNumber: "MPA-INT-03",
    rating: 4.9,
    reviews: 115,
    fitment: "Standard 14.5\" - 15.5\" Wheels",
    badge: "COMFORT & STYLE",
    specs: ["Ultra-Plush Microfiber", "Anti-Slip Inner Core", "3-Piece Kit Included"],
    discount: "-15% OFF",
    highlight: "Superior Grip & Climate Comfort"
  }
};

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart } = useCart();

  const categories = [
    { id: "ALL", label: "All Assemblies", count: products.length },
    { id: "Auto Safety & Visibility", label: "Safety & Mirrors", count: 1 },
    { id: "Phone & Gadget Accessories", label: "Mounts & Gadgets", count: 1 },
    { id: "Car Care & Accessories", label: "Interior & Comfort", count: 1 }
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
    addToCart(prod, 1, price, "1x Base Assembly");
    setAddedId(prod.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section className="py-14 sm:py-24 bg-[#F4FBF7]/50 border-b border-gray-200 relative overflow-hidden" id="shop">
      {/* Background Subtle Tech Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b border-gray-200">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <span className="text-[0.68rem] sm:text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100/70 border border-emerald-200/60 px-3 py-1 rounded-full">
                Factory OEM &amp; Performance Parts
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-900 uppercase">
              Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">Assemblies</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
              Precision-tested automotive upgrades calibrated to rigorous factory tolerances with verified vehicle fitment.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-[#061A14] text-white shadow-md shadow-emerald-950/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[0.65rem] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ────────────────── DISTINCT AUTOMOTIVE PRODUCT CARDS ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProducts.map((product) => {
            const meta = productMeta[product.id] || {
              partNumber: `MPA-${product.stickyId}`,
              rating: 4.9,
              reviews: 120,
              fitment: "Universal Fitment",
              badge: "OEM UPGRADE",
              specs: ["Direct Plug & Play", "Weatherproof Seal", "Factory Tolerances"],
              discount: "-18% OFF",
              highlight: "Precision Engineered Automotive Component"
            };

            const currentPrice = getPrice(product);
            const originalPrice = (Number(currentPrice) * 1.5).toFixed(2);
            const savings = (Number(originalPrice) - Number(currentPrice)).toFixed(2);

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-1.5"
              >
                {/* 1. TOP CHASSIS CAP & TECH STATUS HEADER */}
                <div className="bg-[#061A14] px-5 py-3 border-b border-emerald-900/40 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[0.68rem] font-bold tracking-wider text-emerald-300">
                      PART #{meta.partNumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.62rem] uppercase font-black tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-600/40 px-2 py-0.5 rounded">
                      {meta.badge}
                    </span>
                  </div>
                </div>

                {/* 2. PRODUCT VIEWPORT (STAGE) */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-[#F4FBF7] via-white to-white p-6 flex items-center justify-center overflow-hidden border-b border-gray-100">
                  {/* Subtle Tech Watermark Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Fitment Pill */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-gray-200 text-gray-800 text-[0.65rem] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{meta.fitment}</span>
                  </div>

                  {/* Top-Right Discount Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-black text-[0.68rem] tracking-wider px-2.5 py-1 rounded-full shadow-md shadow-emerald-950/20">
                    {meta.discount}
                  </div>

                  {/* Main Product Image with 3D Float Hover */}
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full h-full flex items-center justify-center cursor-pointer relative z-10"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-[190px] w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400?text=Auto+Assembly";
                      }}
                    />
                  </Link>

                  {/* Hover Floating Action Bar */}
                  <div className="absolute bottom-3 inset-x-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="flex-1 py-2 px-3 bg-[#061A14]/95 hover:bg-[#061A14] text-white text-[0.7rem] font-black uppercase tracking-wider rounded-xl backdrop-blur-md shadow-lg flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <span>{addedId === product.id ? "Added to Cart!" : "Quick Add"}</span>
                    </button>

                    <Link
                      href={`/product/${product.id}`}
                      className="py-2 px-3 bg-white/95 hover:bg-white text-gray-900 border border-gray-300 text-[0.7rem] font-black uppercase tracking-wider rounded-xl backdrop-blur-md shadow-lg flex items-center justify-center gap-1 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Specs</span>
                      <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* 3. CARD BODY & ENGINEERING DETAILS */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Stock Status */}
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-400 text-xs">
                          {"★".repeat(5)}
                        </div>
                        <span className="text-[0.68rem] font-black text-gray-700">
                          {meta.rating}
                        </span>
                        <span className="text-[0.65rem] text-gray-400">
                          ({meta.reviews})
                        </span>
                      </div>
                      <span className="text-[0.65rem] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        In Stock
                      </span>
                    </div>

                    {/* Category Label */}
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      {product.category || "Automotive Replacement"}
                    </span>

                    {/* Product Title */}
                    <Link
                      href={`/product/${product.id}`}
                      className="block text-base sm:text-lg font-black text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1"
                      title={product.name}
                    >
                      {product.name}
                    </Link>

                    {/* High-Impact Highlight Line */}
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1 font-medium">
                      {meta.highlight}
                    </p>

                    {/* 3 Technical Specs Micro-Tags */}
                    <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex flex-wrap gap-1.5">
                      {meta.specs.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[0.62rem] font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4. PRICING & ACTION FOOTER */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[0.65rem] uppercase font-bold text-gray-400 block tracking-wider">
                          Starting At
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-gray-900 group-hover:text-emerald-700 transition-colors">
                            ${currentPrice}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            ${originalPrice}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[0.65rem] font-black uppercase text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-2 py-0.5 rounded-md inline-block">
                          Save ${savings}
                        </span>
                        <span className="text-[0.62rem] text-gray-400 block mt-0.5">
                          {product.bundles ? `${product.bundles.length} Bundle Tiers` : "Free Shipping"}
                        </span>
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="grid grid-cols-5 gap-2">
                      <Link
                        href={`/product/${product.id}`}
                        className="col-span-4 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-md shadow-emerald-950/15 hover:shadow-lg"
                      >
                        <span>Select Package</span>
                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(e, product)}
                        title="Instant Add to Cart"
                        className="col-span-1 rounded-xl border-2 border-emerald-600/30 hover:border-emerald-600 hover:bg-emerald-50 text-emerald-700 flex items-center justify-center transition-colors cursor-pointer bg-white"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ────────────────── FOOTER TRUST STRIP ────────────────── */}
        <div className="mt-12 pt-8 border-t border-gray-200/80 flex flex-wrap items-center justify-center sm:justify-between gap-4 text-[0.72rem] text-gray-500">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              100% Fitment Guaranteed
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Fast US Warehouse Dispatch
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-gray-700">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              30-Day Hassle-Free Returns
            </span>
          </div>

          <Link
            href="/shop"
            className="font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider flex items-center gap-1 hover:underline"
          >
            <span>View Full Catalog</span>
            <span>&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
