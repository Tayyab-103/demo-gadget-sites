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
import QualityPromise from "@/components/QualityPromise";
import NewsletterPopup from "@/components/NewsletterPopup";

const products = productsData as unknown as Product[];

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  // Set default selected bundle
  const defaultBundle: Bundle =
    product?.bundles && product.bundles.length > 0
      ? product.bundles[0]
      : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-[#F8FAFC] text-[#0A0F1D]">
          <h2 className="text-2xl font-black uppercase text-[#0A0F1D] mb-4">Product Not Found</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm font-normal">
            The item you are looking for does not exist or is no longer available in our collection.
          </p>
          <button
            className="inline-block font-extrabold text-center whitespace-nowrap bg-[#0A0F1D] text-white border border-blue-500 hover:bg-blue-600 transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg"
            onClick={() => router.push("/shop")}
          >
            Return to Shop
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Piece Family Pack` : "Single Item";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-blue-500/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-blue-500/20 shadow-xl shadow-blue-500/5">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-500/20 shadow-xl shadow-blue-500/5 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[0.68rem] font-mono font-bold uppercase tracking-[0.2em] text-blue-700 w-fit mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                {product.category || "Family Clothing"}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1D] mt-1 mb-3 leading-snug tracking-tight uppercase">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5 text-blue-600">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">(148 Verified Family Reviews)</span>
              </div>

              {/* Price Display */}
              <div className="text-3xl font-black text-[#0A0F1D] mb-5 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-bold text-slate-400">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-slate-600 mb-6 text-xs sm:text-sm leading-relaxed border-t border-blue-500/15 pt-4 font-normal">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A0F1D] mb-2">
                    Select Family Pack:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-blue-500/30 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-[#0A0F1D] bg-[#F8FAFC] cursor-pointer focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Family Pack of ${bundle.quantity} (Bundle & Save)` : "Single Item";
                        const price = parseFloat(String(bundle.price)).toFixed(2);
                        const savingsText = bundle.quantity > 1 && savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";

                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {label} — ${price}{savingsText}
                          </option>
                        );
                      })}
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-600"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-extrabold text-center whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-all duration-200 py-3.5 sm:py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add to Bag
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications & Materials */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-blue-500/15 pt-6 mt-4">
                  <h3 className="text-sm sm:text-base font-black text-[#0A0F1D] mb-1.5 uppercase tracking-tight">
                    Fabric &amp; Care Details
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
                    Made with soft, breathable cotton and cotton-blend fabrics that are pre-shrunk, colorfast, and machine washable. Backed by our 14-day happy fit guarantee.
                  </p>

                  <div className="bg-[#F8FAFC] border border-blue-500/20 rounded-xl p-3 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications and details`}
                      className="max-w-full h-auto rounded-lg max-h-[260px] object-cover bg-white p-1 border border-blue-500/20"
                    />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <QualityPromise />
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
