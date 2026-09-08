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
        <main className="w-full max-w-6xl mx-auto px-6 py-28 text-center bg-[#F3EEFF]">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto mb-4">🧸</div>
          <h2 className="text-2xl font-black text-[#1E1040] mb-4">Baby Treasure Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">
            The keepsake you are looking for does not exist or may have moved to a new home.
          </p>
          <button
            className="inline-block font-bold text-center bg-[#7C3AED] text-white hover:bg-[#6D28D9] transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md shadow-purple-300/30"
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
      <main className="bg-gradient-to-br from-[#F3EEFF] via-white to-[#EDE9FE] py-10 sm:py-16 lg:py-20 relative min-h-[80vh]">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-violet-200/20 blur-2xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
            <span className="text-purple-300">/</span>
            <Link href="/#shop" className="hover:text-[#7C3AED] transition-colors">Collection</Link>
            <span className="text-purple-300">/</span>
            <span className="text-[#1E1040] font-bold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Product Image (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-lg">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Right: Product Details (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-purple-100 shadow-lg flex flex-col">

              {/* Category badge */}
              <span className="text-[0.68rem] font-bold uppercase text-[#7C3AED] tracking-[0.2em] mb-1 block">
                {product.category || "Organic Baby Essential"}
              </span>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-black text-[#1E1040] tracking-tight leading-snug mb-3">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex text-amber-400 gap-0.5 text-xs">{"★".repeat(5)}</div>
                <span className="text-xs text-gray-400 font-medium">
                  5.0 (98+ Verified Parent Reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-purple-100">
                <span className="text-3xl font-black text-[#1E1040]">
                  ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </span>

                {selectedBundle.quantity > 1 && (
                  <span className="text-xs text-gray-500 font-semibold">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / each)
                  </span>
                )}

                {savings > 0 && (
                  <span className="bg-purple-100 text-[#7C3AED] text-xs font-bold px-2.5 py-0.5 rounded-full">
                    Save ${savings.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Package Quantity Dropdown */}
              <div className="mb-6 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <label htmlFor="package-select" className="block text-xs font-bold uppercase tracking-wider text-[#1E1040] mb-2">
                  Select Package Quantity:
                </label>

                <div className="relative">
                  <select
                    id="package-select"
                    value={selectedBundleIndex}
                    onChange={(e) => setSelectedBundleIndex(Number(e.target.value))}
                    className="w-full bg-white border-2 border-purple-200 hover:border-[#7C3AED] text-[#1E1040] font-bold text-xs sm:text-sm rounded-xl py-3 px-4 pr-10 focus:outline-none focus:border-[#7C3AED] transition-colors cursor-pointer appearance-none shadow-sm"
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

                  {/* Chevron Icon */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#7C3AED]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-2 text-[0.7rem] text-[#7C3AED] font-bold">
                    💜 You are saving ${savings.toFixed(2)} on this multi-pack bundle!
                  </div>
                )}
              </div>

              {/* Toast Feedback */}
              {addedToast && (
                <div className="mb-4 bg-[#1E1040] text-white py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-between animate-in fade-in duration-150">
                  <span>✨ Added {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}x` : ""} to your Baby Bag!</span>
                  <span className="text-purple-300">✓</span>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                className="w-full py-4 px-8 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-purple-300/30 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                <span>Add to Bag</span>
                <span>→</span>
              </button>

              {/* Trust Guarantee Bullets */}
              <div className="mt-8 pt-6 border-t border-purple-100 grid grid-cols-2 gap-3 text-[0.72rem] text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED] font-black">✓</span>
                  <span>100% GOTS Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED] font-black">✓</span>
                  <span>BPA &amp; Lead Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED] font-black">✓</span>
                  <span>Free 3-5 Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#7C3AED] font-black">✓</span>
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
