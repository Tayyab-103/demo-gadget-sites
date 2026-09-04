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
  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 pt-36 pb-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Gear Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The sporting goods item you are looking for does not exist or has been updated in our catalog.</p>
          <button
            className="inline-block font-black text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            Return to Gear Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Unit";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-md">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-md">
              <span className="text-[0.7rem] font-black uppercase text-secondary tracking-[0.2em]">
                {product.category || "Sporting Goods & Fitness Gear"}
              </span>

              <h1 className="text-2xl md:text-3xl font-black uppercase text-primary mt-2 mb-4 leading-snug tracking-tight">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-neutral-text/55 font-bold">(42 Verified Athlete Reviews)</span>
              </div>

              <div className="text-3xl font-black text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-bold text-neutral-text/50 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/80 mb-8 text-xs md:text-sm leading-relaxed border-t border-black/5 pt-5">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-black uppercase tracking-wider text-primary mb-3">Select Athlete Package:</h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-black/15 rounded-2xl px-5 py-4 text-sm font-bold text-primary bg-white cursor-pointer focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all shadow-sm"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Pack of ${bundle.quantity} Units (Team Volume)` : "Single Unit";
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
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-secondary text-secondary-text border border-transparent hover:brightness-110 transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications & Packaging */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-black/5 pt-8 mt-8">
                  <h3 className="text-base md:text-lg font-black text-primary mb-2 uppercase tracking-tight">Biomechanical Specs &amp; Build Quality</h3>
                  <p className="text-xs text-neutral-text/60 mb-5 leading-relaxed">
                    Engineered in Austin, TX with high-density ballistic nylon and reinforced stress points. Backed by our 14-day field guarantee.
                  </p>

                  <div className="bg-neutral-bg border border-black/5 rounded-2xl p-5 flex items-center justify-center shadow-inner">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications and details`}
                      className="max-w-full h-auto rounded-xl max-h-[300px] object-cover bg-white p-1 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&q=80";
                      }}
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
