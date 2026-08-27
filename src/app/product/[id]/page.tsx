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
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Hardware Item Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The musical item you are looking for is not in our current workshop catalog.</p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/products")}
          >
            Return to Store
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Studio Bundle` : "Single Unit";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);
  const regularPrice = startingPrice * selectedBundle.quantity;
  const currentSavings = regularPrice - selectedBundle.price;

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-12 md:py-20 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-30 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-xl">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-xl">
              <span className="text-[0.68rem] font-black uppercase text-secondary tracking-[0.22em]">
                {product.category || "Artisan Instrument Hardware"}
              </span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mt-2 mb-4 leading-tight uppercase">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="flex gap-0.5 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-neutral-text/50 font-semibold">(28 Verified Musician Reviews)</span>
              </div>

              <div className="text-3xl font-black text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-bold text-neutral-text/40 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/70 mb-8 text-xs md:text-sm leading-relaxed border-t border-black/5 pt-5">
                {product.description}
              </p>

              {/* Dropdown for Select Package Quantity */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <label htmlFor="package-select" className="block text-xs font-black uppercase tracking-wider text-primary mb-3">
                    Select Package Quantity:
                  </label>
                  
                  <div className="relative">
                    <select
                      id="package-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const qty = Number(e.target.value);
                        const found = product.bundles?.find((b) => b.quantity === qty);
                        if (found) setSelectedBundle(found);
                      }}
                      className="w-full appearance-none bg-neutral-bg border-2 border-black/10 rounded-2xl px-5 py-4 pr-12 text-sm font-bold text-primary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all cursor-pointer shadow-sm"
                    >
                      {product.bundles.map((bundle) => {
                        const savings = startingPrice * bundle.quantity - bundle.price;
                        const unitRate = (parseFloat(String(bundle.price)) / bundle.quantity).toFixed(2);
                        const label = bundle.quantity === 1 ? "1 Unit" : `Pack of ${bundle.quantity}`;
                        const savingsText = savings > 0 ? ` — Save $${savings.toFixed(2)}` : "";

                        return (
                          <option key={bundle.quantity} value={bundle.quantity} className="text-primary font-medium py-2">
                            {label} • ${parseFloat(String(bundle.price)).toFixed(2)} (${unitRate}/unit){savingsText}
                          </option>
                        );
                      })}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Selected Package Confirmation Card */}
                  <div className="mt-4 p-4 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-primary text-xs font-black flex-shrink-0">
                        ✓
                      </span>
                      <div>
                        <span className="text-xs font-black text-primary uppercase tracking-wide block">
                          {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Studio Bundle` : "Single Unit Pack"}
                        </span>
                        <span className="text-[0.68rem] text-neutral-text/60">
                          ${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} per unit
                        </span>
                      </div>
                    </div>

                    {selectedBundle.quantity > 1 && currentSavings > 0 && (
                      <span className="bg-secondary text-primary text-[0.65rem] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        Save ${currentSavings.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-8 mt-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-xl"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* What's In The Box */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-black/5 pt-8 mt-8">
                  <h3 className="text-sm md:text-base font-black uppercase text-primary mb-2">Workshop Packaging &amp; Warranty</h3>
                  <p className="text-xs text-neutral-text/55 mb-5 leading-relaxed">
                    Ships in custom padded protective housing, backed by our 1-year workshop warranty against defects and 30-day tone trial.
                  </p>

                  <div className="bg-neutral-bg border border-black/5 rounded-2xl p-5 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt="Workshop product and packaging"
                      className="max-w-full h-auto rounded-xl max-h-[300px] object-cover bg-white p-1 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x300?text=Hardware";
                      }}
                    />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
