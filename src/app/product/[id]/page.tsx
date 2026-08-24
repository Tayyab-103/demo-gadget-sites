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
import ProductCarousel from "@/components/ProductCarousel";

const products = productsData as unknown as Product[];

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  const bundles: Bundle[] = product?.bundles && product.bundles.length > 0
    ? product.bundles
    : [{ quantity: 1, price: parseFloat(product?.ssPrice || "0") }];

  const [selectedBundleIndex, setSelectedBundleIndex] = useState<number>(0);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-6xl mx-auto px-6 py-28 text-center bg-[#FAF7F2]">
          <h2 className="text-2xl font-black text-[#1E2330] mb-4">Baby Treasure Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
            The keepsake you are looking for does not exist or has been moved.
          </p>
          <button
            className="inline-block font-bold text-center bg-[#FF6B8B] text-white hover:bg-[#FA5679] transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Home
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const selectedBundle = bundles[selectedBundleIndex] || bundles[0];
  const startingPrice = parseFloat(product.ssPrice);
  const regularPrice = startingPrice * selectedBundle.quantity;
  const savings = regularPrice - selectedBundle.price;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Pack";
    addToCart(product, selectedBundle.quantity, unitPrice, label);

    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] py-10 sm:py-16 lg:py-20 relative min-h-[80vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[#FF6B8B] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#shop" className="hover:text-[#FF6B8B] transition-colors">Collection</Link>
            <span>/</span>
            <span className="text-[#1E2330] font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Image Section (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Right: Product Details Section (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xs flex flex-col">
              
              {/* Category */}
              <span className="text-[0.68rem] font-bold uppercase text-[#FF6B8B] tracking-[0.2em] mb-1 block">
                {product.category || "Organic Baby Essential"}
              </span>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-[#1E2330] tracking-tight leading-snug mb-3">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex text-amber-400 gap-0.5 text-xs">
                  {"★".repeat(5)}
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  5.0 (98+ Verified Parent Reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl font-black text-[#1E2330]">
                  ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </span>
                
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs text-gray-500 font-semibold">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / each)
                  </span>
                )}

                {savings > 0 && (
                  <span className="bg-[#FFF0F4] text-[#FF6B8B] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Save ${savings.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
                {product.description}
              </p>

              {/* =========================================================================
                  DROPDOWN BUTTON FOR PACKAGE QUANTITY (As requested by user)
                 ========================================================================= */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FFF9EE] border border-[#FFE8B8]">
                <label htmlFor="package-select" className="block text-xs font-bold uppercase tracking-wider text-[#1E2330] mb-2">
                  Select Package Quantity:
                </label>

                <div className="relative">
                  <select
                    id="package-select"
                    value={selectedBundleIndex}
                    onChange={(e) => setSelectedBundleIndex(Number(e.target.value))}
                    className="w-full bg-white border-2 border-[#FFD0DD] hover:border-[#FF6B8B] text-[#1E2330] font-bold text-xs sm:text-sm rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-[#FF6B8B] transition-colors cursor-pointer appearance-none shadow-xs"
                  >
                    {bundles.map((bundle, idx) => {
                      const bundleSavings = (startingPrice * bundle.quantity) - bundle.price;
                      return (
                        <option key={bundle.quantity} value={idx}>
                          {bundle.quantity > 1 ? `Pack of ${bundle.quantity}` : "Single Pack"} — ${parseFloat(String(bundle.price)).toFixed(2)} {bundleSavings > 0 ? `(Save $${bundleSavings.toFixed(2)})` : ""}
                        </option>
                      );
                    })}
                  </select>

                  {/* Custom Dropdown Chevron Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#FF6B8B]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-2 text-[0.7rem] text-[#FF6B8B] font-bold">
                    ✨ You are saving ${savings.toFixed(2)} on this multi-pack bundle!
                  </div>
                )}
              </div>

              {/* Toast Feedback */}
              {addedToast && (
                <div className="mb-4 bg-[#2D264B] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-between animate-in fade-in duration-150">
                  <span>✨ Added {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}x` : ""} to your Baby Bag!</span>
                  <span className="text-pink-300">✓</span>
                </div>
              )}

              {/* Add to Cart Actions */}
              <button
                className="w-full py-4 px-8 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                <span>Add to Bag</span>
                <span>→</span>
              </button>

              {/* Purity Guarantee bullet points */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 text-[0.72rem] text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B8B]">✓</span>
                  <span>100% GOTS Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B8B]">✓</span>
                  <span>BPA &amp; Lead Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B8B]">✓</span>
                  <span>Free 3-5 Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FF6B8B]">✓</span>
                  <span>30-Day Love Guarantee</span>
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
