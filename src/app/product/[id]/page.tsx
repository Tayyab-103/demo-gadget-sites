"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";
import ProductCarousel from "@/components/ProductCarousel";
import Link from "next/link";

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

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-extrabold uppercase text-[#11281A] mb-4">Tool Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The garden instrument you are searching for does not exist or has been retired.</p>
          <Link
            className="inline-block font-bold text-center whitespace-nowrap bg-[#265C1E] text-white hover:bg-[#1E4A17] transition-all py-3.5 px-8 rounded-lg text-xs uppercase tracking-widest cursor-pointer shadow-md"
            href="/shop"
          >
            Explore Workshop Catalog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Tool Pack Bundle` : "Single Instrument";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value, 10);
    const matchingBundle = product.bundles?.find((b) => b.quantity === qty) || {
      quantity: qty,
      price: startingPrice * qty,
    };
    setSelectedBundle(matchingBundle);
  };

  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6] py-10 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-text/50 mb-8">
            <Link href="/" className="hover:text-[#265C1E] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#265C1E] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#11281A] truncate">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Product Image Section */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
              
              {/* Trust Badges under carousel */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-black/5 text-center">
                <div className="p-2">
                  <span className="block text-[#265C1E] text-xs sm:text-sm font-bold">★ 58 HRC</span>
                  <span className="text-[0.62rem] uppercase font-bold text-neutral-text/50">Tempered Steel</span>
                </div>
                <div className="p-2 border-x border-black/10">
                  <span className="block text-[#265C1E] text-xs sm:text-sm font-bold">FSC Timber</span>
                  <span className="text-[0.62rem] uppercase font-bold text-neutral-text/50">Solid Hardwood</span>
                </div>
                <div className="p-2">
                  <span className="block text-[#265C1E] text-xs sm:text-sm font-bold">Lifetime</span>
                  <span className="text-[0.62rem] uppercase font-bold text-neutral-text/50">Foundry Warranty</span>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-sm">
              <span className="text-[0.65rem] font-bold uppercase text-[#265C1E] tracking-[0.2em] block mb-1">
                {product.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#11281A] mb-3 leading-tight font-sans">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex gap-1 text-[#265C1E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-neutral-text/60 font-bold">(4.9 • 85 Verified Garden Reviews)</span>
              </div>

              {/* Pricing Display */}
              <div className="text-3xl sm:text-4xl font-extrabold text-[#132B1C] mb-6 flex items-baseline gap-3">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-medium text-neutral-text/50">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / each)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/75 mb-6 text-xs sm:text-sm leading-relaxed border-t border-black/5 pt-4">
                {product.description}
              </p>

              {/* QUANTITY SELECTOR DROPDOWN */}
              <div className="mb-6 bg-[#FAF9F6] p-4 rounded-2xl border border-black/5">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="quantity-select" className="text-xs font-bold uppercase tracking-wider text-[#11281A]">
                    Select Quantity:
                  </label>
                  <span className="text-xs font-bold text-[#265C1E]">
                    {selectedBundle.quantity > 1 ? `${selectedBundle.quantity} Tools Selected` : "1 Single Instrument"}
                  </span>
                </div>

                <div className="relative">
                  <select
                    id="quantity-select"
                    value={selectedBundle.quantity}
                    onChange={handleDropdownChange}
                    className="w-full bg-white border border-black/15 rounded-xl px-4 py-3 text-xs sm:text-sm font-bold text-[#11281A] focus:outline-none focus:border-[#265C1E] appearance-none cursor-pointer pr-10 shadow-2xs"
                  >
                    {product.bundles && product.bundles.length > 0 ? (
                      product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {bundle.quantity === 1
                              ? `1 Unit — $${bundle.price.toFixed(2)}`
                              : `${bundle.quantity} Units Pack — $${bundle.price.toFixed(2)} ($${(bundle.price / bundle.quantity).toFixed(2)}/ea) ${savings > 0 ? `(Save $${savings.toFixed(2)})` : ""}`}
                          </option>
                        );
                      })
                    ) : (
                      [1, 2, 3, 4, 5].map((q) => (
                        <option key={q} value={q}>
                          {q} {q === 1 ? "Unit" : "Units"} — ${(startingPrice * q).toFixed(2)}
                        </option>
                      ))
                    )}
                  </select>

                  {/* Dropdown Arrow Indicator */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#11281A]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="inline-flex items-center justify-center gap-2.5 font-bold text-center bg-[#265C1E] text-white hover:bg-[#1E4A17] transition-all py-4 px-8 rounded-lg w-full cursor-pointer text-xs uppercase tracking-wider shadow-md hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add {selectedBundle.quantity} to Cart — ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                  <span>→</span>
                </button>
              </div>

              {/* Guarantee notice */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-black/5 flex items-center gap-3 text-xs text-neutral-text/70">
                <span className="text-base flex-shrink-0">🛡️</span>
                <div>
                  <strong>Free Express Shipping</strong> nationwide with 60-day soil trial &amp; lifetime metallurgy warranty.
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
