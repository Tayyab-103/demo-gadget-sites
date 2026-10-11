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

  // Set default selected bundle (usually the 1 bottle or the most popular one)
  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Product Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The product you are looking for does not exist or has been removed from our catalog.</p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Home
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    // Calculate unit price for cart context
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Pack";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-12 md:py-20 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-30 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-md">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md">
              <span className="text-[0.68rem] font-bold uppercase text-secondary tracking-[0.18em]">
                {product.category || "Fine Art Supplies"}
              </span>

              <h1 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-4 leading-snug">
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
                <span className="text-xs text-neutral-text/45 font-medium">(14 Verified Customer Reviews)</span>
              </div>

              <div className="text-2xl font-extrabold text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-medium text-neutral-text/40 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/75 mb-8 text-xs md:text-sm leading-relaxed border-t border-black/5 pt-5">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <label
                    htmlFor="package-quantity-select"
                    className="block text-xs font-bold uppercase tracking-wider text-primary mb-3"
                  >
                    SELECT PACKAGE QUANTITY:
                  </label>
                  <div className="relative">
                    <select
                      id="package-quantity-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const qty = Number(e.target.value);
                        const match = product.bundles?.find((b) => b.quantity === qty);
                        if (match) setSelectedBundle(match);
                      }}
                      className="w-full appearance-none bg-white border-2 border-secondary rounded-2xl py-3.5 px-5 pr-12 text-sm md:text-base font-bold text-primary focus:outline-none focus:ring-2 focus:ring-secondary/20 cursor-pointer shadow-sm transition-all"
                    >
                      {product.bundles.map((bundle) => {
                        const baseItemPrice = startingPrice;
                        const regularPrice = baseItemPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label =
                          bundle.quantity === 1
                            ? `Single Unit — $${parseFloat(String(bundle.price)).toFixed(2)}`
                            : `Pack of ${bundle.quantity} — $${parseFloat(String(bundle.price)).toFixed(2)}${
                                savings > 0 ? ` (Save $${savings.toFixed(2)})` : ""
                              }`;

                        return (
                          <option
                            key={bundle.quantity}
                            value={bundle.quantity}
                            className="text-primary font-medium py-1"
                          >
                            {label}
                          </option>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-primary">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-10 mt-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* What's In The Box */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-black/5 pt-8 mt-10">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-3">What&apos;s In The Box</h3>
                  <p className="text-xs text-neutral-text/50 mb-6 leading-relaxed">
                    Every unit ships fully assembled and ready to use, backed by a 1-year manufacturer&apos;s warranty against defects.
                  </p>

                  <div className="bg-neutral-bg border border-black/5 rounded-xl p-6 flex items-center justify-center shadow-inner">
                    <img
                      src={product.ingredientsImage}
                      alt="Product packaging"
                      className="max-w-full h-auto rounded-lg max-h-[350px] object-contain bg-white p-2 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x300?text=Packaging";
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
