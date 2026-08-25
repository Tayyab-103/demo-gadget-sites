"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-[#E5E6EB] min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-black uppercase text-[#111] mb-4">Product Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The product you are looking for does not exist or has been removed from our catalog.
          </p>
          <button
            className="inline-block font-bold text-center bg-[#111] hover:bg-[#333] text-white py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md transition-colors"
            onClick={() => router.push("/shop")}
          >
            Return to Products
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Pack";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  return (
    <>
      <Header />
      <main className="bg-[#E5E6EB] py-10 sm:py-16 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium mb-6">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#111] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#111] truncate">{product.name}</span>
          </nav>

          {/* Main Product Card */}
          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Product Gallery */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative w-full aspect-square bg-[#F5F5F7] rounded-[2rem] overflow-hidden border border-black/5">
                  <img
                    src={images[activeImageIndex] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/img/products/product1.jpg";
                    }}
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#111] text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-black/5 shadow-2xs">
                    {product.category}
                  </span>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`w-20 h-20 rounded-xl overflow-hidden bg-[#F5F5F7] border transition-all ${
                          idx === activeImageIndex
                            ? "border-[#111] ring-2 ring-black/10 scale-105"
                            : "border-black/5 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Details & Quantity Dropdown */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Category & Title */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#5B6BF0]" />
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-text/50 font-mono">
                      CERTIFIED SPEC: VS-{(product.stickyId || 1) * 750}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-[#111] tracking-tight leading-tight">
                    {product.name}
                  </h1>
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-2.5">
                  <div className="flex text-[#F59E0B] text-sm">
                    {"★★★★★"}
                  </div>
                  <span className="text-xs text-neutral-text/50 font-medium">
                    (4.9 / 5.0 • 120+ Verified Field Reviews)
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-3xl sm:text-4xl font-black text-[#111] tracking-tight">
                    ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                  </span>
                  {selectedBundle.quantity > 1 && (
                    <span className="text-xs font-semibold text-neutral-text/45">
                      (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} per unit)
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed pt-2">
                  {product.description}
                </p>

                {/* Package Quantity Dropdown Selector */}
                {product.bundles && product.bundles.length > 0 && (
                  <div className="pt-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111] mb-2.5">
                      Select Package Quantity:
                    </label>

                    <div className="relative">
                      <select
                        value={selectedBundle.quantity}
                        onChange={(e) => {
                          const qty = Number(e.target.value);
                          const found = product.bundles?.find((b) => b.quantity === qty);
                          if (found) setSelectedBundle(found);
                        }}
                        className="w-full appearance-none bg-[#F4F4F6] text-[#111] font-bold text-xs sm:text-sm px-5 py-4 rounded-xl border border-black/5 focus:border-[#111] focus:bg-white focus:outline-none transition-all cursor-pointer shadow-2xs pr-12"
                      >
                        {product.bundles.map((bundle) => {
                          const basePrice = parseFloat(product.ssPrice);
                          const regularPrice = basePrice * bundle.quantity;
                          const savings = regularPrice - bundle.price;
                          const savingsLabel = savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";

                          return (
                            <option key={bundle.quantity} value={bundle.quantity}>
                              {bundle.quantity === 1
                                ? `1 Unit (Single Pack) — $${bundle.price}`
                                : `${bundle.quantity}-Pack Bundle — $${bundle.price}${savingsLabel}`}
                            </option>
                          );
                        })}
                      </select>

                      {/* Dropdown Chevron Icon */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#111]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Add to Cart Button */}
                <div className="pt-2">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#111] hover:bg-[#333] text-white font-bold text-xs sm:text-sm py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer uppercase tracking-widest group"
                  >
                    <span>Add to Cart</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

                {/* Specifications & Standards List */}
                <div className="pt-6 border-t border-black/[0.06] grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2 text-neutral-text/70 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#5B6BF0]/10 text-[#5B6BF0] flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                    NIST Calibrated
                  </div>
                  <div className="flex items-center gap-2 text-neutral-text/70 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#5B6BF0]/10 text-[#5B6BF0] flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                    1-Year Warranty
                  </div>
                  <div className="flex items-center gap-2 text-neutral-text/70 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#5B6BF0]/10 text-[#5B6BF0] flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                    UL / CE Certified
                  </div>
                  <div className="flex items-center gap-2 text-neutral-text/70 font-medium">
                    <span className="w-4 h-4 rounded-full bg-[#5B6BF0]/10 text-[#5B6BF0] flex items-center justify-center text-[0.6rem] font-bold">✓</span>
                    Fast 1-2 Day Dispatch
                  </div>
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
