"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import siteConfigData from "../../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle, SiteConfig } from "@/types";
import ProductCarousel from "@/components/ProductCarousel";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<"specs" | "fitment" | "shipping">("specs");
  const [addedAnimation, setAddedAnimation] = useState(false);

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  // Set default selected bundle
  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center bg-[#f8fafc]">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-black">
            !
          </div>
          <h2 className="text-2xl font-black uppercase text-gray-900 mb-2">Part Assembly Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-xs sm:text-sm">
            The automotive part you are looking for does not exist or has been relocated.
          </p>
          <button
            className="inline-block font-bold text-center bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white transition-all py-3.5 px-8 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md shadow-emerald-900/20"
            onClick={() => router.push("/shop")}
          >
            Explore Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const startingPrice = parseFloat(product.ssPrice || "0");

  const handleBundleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value, 10);
    const found = product.bundles?.find((b) => b.quantity === qty);
    if (found) {
      setSelectedBundle(found);
    } else {
      setSelectedBundle({ quantity: qty, price: startingPrice * qty });
    }
  };

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle Set` : "Single Unit";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const currentSavings = ((startingPrice * selectedBundle.quantity) - parseFloat(String(selectedBundle.price)));

  return (
    <>
      <Header />
      <main className="bg-[#f8fafc] min-h-screen py-8 sm:py-12 relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-6 flex-wrap">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-emerald-600 transition-colors">Product</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ────────────────── LEFT COLUMN: CAROUSEL & IMAGES (6 Cols) ────────────────── */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-sm sticky top-24">
                <ProductCarousel
                  images={product.images && product.images.length > 0 ? product.images : [product.image]}
                  name={product.name}
                />

                {/* Quick Trust Badges Strip Under Image */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-100 text-center">
                  <div className="p-2 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <span className="text-emerald-600 text-sm block mb-0.5">⚙️</span>
                    <span className="text-[0.65rem] font-bold text-gray-900 uppercase block">±0.01mm Fit</span>
                    <span className="text-[0.58rem] text-gray-500 block">Direct Bolt-On</span>
                  </div>
                  <div className="p-2 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <span className="text-emerald-600 text-sm block mb-0.5">🛡️</span>
                    <span className="text-[0.65rem] font-bold text-gray-900 uppercase block">{siteConfig.trialPeriod || 14}-Day Trial</span>
                    <span className="text-[0.58rem] text-gray-500 block">100% Refundable</span>
                  </div>
                  <div className="p-2 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <span className="text-emerald-600 text-sm block mb-0.5">⚡</span>
                    <span className="text-[0.65rem] font-bold text-gray-900 uppercase block">Same-Day</span>
                    <span className="text-[0.58rem] text-gray-500 block">US Dispatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ────────────────── RIGHT COLUMN: DETAILS & SELECTORS (6 Cols) ────────────────── */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                
                {/* Category & Stock Status */}
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className="text-[0.68rem] font-black uppercase text-emerald-700 tracking-[0.2em] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    {product.category || "OEM Performance Hardware"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-green-700 font-bold bg-green-50 px-2.5 py-0.5 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>In Stock &bull; Ships in 24hrs</span>
                  </div>
                </div>

                {/* Product Title */}
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-2 mb-3 leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Review Summary */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100 flex-wrap">
                  <div className="flex text-amber-400 text-sm">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-xs font-bold text-gray-900">4.9 / 5.0</span>
                  <span className="text-xs text-gray-400">&bull;</span>
                  <span className="text-xs text-gray-500 font-medium">128 Verified Buyer Reviews</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-600">
                    ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                  </span>
                  {selectedBundle.quantity > 1 && (
                    <span className="text-xs sm:text-sm font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                      ${(parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2)} / unit
                    </span>
                  )}
                  {currentSavings > 0 && (
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-md ml-auto">
                      Save ${currentSavings.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                  {product.description}
                </p>

                {/* ────────────────── PACKAGE QUANTITY DROPDOWN SELECTOR ────────────────── */}
                <div className="mb-6 p-4.5 bg-emerald-50/40 rounded-2xl border border-emerald-100">
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="package-select" className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
                      <span>Select Package Quantity:</span>
                    </label>
                    <span className="text-[0.68rem] text-emerald-700 font-bold uppercase tracking-wider">
                      Bundle &amp; Save
                    </span>
                  </div>

                  <div className="relative">
                    <select
                      id="package-select"
                      value={selectedBundle.quantity}
                      onChange={handleBundleChange}
                      className="w-full appearance-none bg-white border-2 border-gray-300 hover:border-emerald-500 focus:border-emerald-600 focus:outline-none rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-gray-900 cursor-pointer shadow-xs transition-colors pr-10"
                    >
                      {product.bundles && product.bundles.length > 0 ? (
                        product.bundles.map((bundle) => {
                          const base = startingPrice * bundle.quantity;
                          const sav = base - bundle.price;
                          return (
                            <option key={bundle.quantity} value={bundle.quantity}>
                              {bundle.quantity === 1
                                ? `1 Unit — $${parseFloat(String(bundle.price)).toFixed(2)} (Standard)`
                                : `${bundle.quantity}-Pack Set — $${parseFloat(String(bundle.price)).toFixed(2)} ${sav > 0 ? `(Save $${sav.toFixed(2)})` : ""}`}
                            </option>
                          );
                        })
                      ) : (
                        <option value={1}>1 Unit — ${startingPrice.toFixed(2)}</option>
                      )}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full font-black text-sm uppercase tracking-wider py-4.5 px-8 rounded-xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    addedAnimation
                      ? "bg-green-600 text-white scale-[1.02]"
                      : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-[0.99] text-white shadow-emerald-600/30 hover:shadow-emerald-600/50"
                  }`}
                >
                  <span>{addedAnimation ? "✓ Added To Cart!" : "Add To Cart"}</span>
                  <span className="text-base">&rarr;</span>
                </button>

                {/* Assurance Note */}
                <p className="text-center text-[0.68rem] text-gray-400 mt-3">
                  🔒 Guaranteed Safe Checkout &bull; {siteConfig.trialPeriod || 14}-Day Money-Back Guarantee &bull; Free US Shipping
                </p>
              </div>

              {/* ────────────────── TABS: FITMENT, SPECS & WARRANTY ────────────────── */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-5 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab("specs")}
                    className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === "specs"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Engineering Specs
                  </button>
                  <button
                    onClick={() => setActiveTab("fitment")}
                    className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === "fitment"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Direct Bolt-On Fitment
                  </button>
                  <button
                    onClick={() => setActiveTab("shipping")}
                    className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === "shipping"
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Warranty &amp; Shipping
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {activeTab === "specs" && (
                    <ul className="space-y-2">
                      <li className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="font-bold text-gray-900">Manufacturing Tolerance:</span>
                        <span>±0.01mm CNC Calibrated</span>
                      </li>
                      <li className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="font-bold text-gray-900">Material Grade:</span>
                        <span>Aerospace / Heavy-Duty OEM Alloy</span>
                      </li>
                      <li className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="font-bold text-gray-900">Quality Certification:</span>
                        <span>ISO / TS 16949 Automotive Compliant</span>
                      </li>
                      <li className="flex justify-between py-1.5">
                        <span className="font-bold text-gray-900">Manufacturer:</span>
                        <span>{siteConfig.brandName}</span>
                      </li>
                    </ul>
                  )}

                  {activeTab === "fitment" && (
                    <div className="space-y-2">
                      <p>
                        Designed for 100% plug-and-play installation without cutting, welding, or ECU re-calibration.
                      </p>
                      <p className="text-gray-500 text-xs">
                        If you have fitment verification questions for your specific vehicle make/model/year, reach out to our master specialists at <strong className="text-gray-800">{siteConfig.email}</strong>.
                      </p>
                    </div>
                  )}

                  {activeTab === "shipping" && (
                    <div className="space-y-2">
                      <p>
                        <strong>Standard Shipping:</strong> Orders placed before 3:00 PM EST ship the same business day from our Texas distribution facility.
                      </p>
                      <p>
                        <strong>Coverage:</strong> All purchases include a {siteConfig.trialPeriod || 14}-Day Trial and a 1-Year Comprehensive Replacement Warranty.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
