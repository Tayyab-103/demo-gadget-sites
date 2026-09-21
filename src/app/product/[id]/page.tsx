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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-white text-black">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Art Supply Not Found</h2>
          <p className="text-black/60 mb-8 max-w-md mx-auto text-sm">
            The art or craft supply item you are looking for does not exist or has been updated in our catalog.
          </p>
          <button
            className="inline-block font-black text-center whitespace-nowrap transition-all py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider cursor-pointer shadow-md hover:scale-105"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "var(--primary-text-color)",
            }}
            onClick={() => router.push("/shop")}
          >
            Return to Art Catalog
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

  return (
    <>
      <Header />
      <main className="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-black/6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-primary-tint rounded-3xl p-4 sm:p-6 border border-black/8 shadow-xs">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-black/8 shadow-sm flex flex-col">
              <span
                className="text-[0.68rem] font-bold uppercase tracking-wider mb-1"
                style={{ color: "var(--secondary-color)" }}
              >
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black uppercase text-primary mt-1 mb-3 leading-snug tracking-tight">
                {product.name}
              </h1>

              {/* Price Display */}
              <div className="text-3xl font-black text-primary mb-4 flex items-baseline gap-2 font-mono">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-bold text-black/40">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-black/70 mb-6 text-xs sm:text-sm leading-relaxed border-t border-black/6 pt-4 font-normal">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-black mb-2 font-mono">
                    Select Studio Quantity:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-black/15 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-black bg-white cursor-pointer focus:outline-none transition-all shadow-xs"
                      style={{
                        borderColor: "rgba(0,0,0,0.15)",
                      }}
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Studio Pack of ${bundle.quantity} Units` : "Single Unit";
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
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap transition-all duration-200 py-3.5 sm:py-4 px-8 rounded-xl w-full cursor-pointer text-xs uppercase tracking-widest shadow-md hover:scale-[1.01]"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "var(--primary-text-color)",
                  }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications */}
              <div className="border-t border-black/6 pt-6 mt-4">
                <h3 className="text-sm sm:text-base font-black text-primary mb-1.5 uppercase tracking-tight">
                  Studio Guarantee &amp; Standards
                </h3>
                <p className="text-xs text-black/60 mb-4 leading-relaxed">
                  Crafted to fine art archival standards. Backed by our 14-day studio satisfaction guarantee.
                </p>

                {product.showIngredients && product.ingredientsImage && (
                  <div className="bg-primary-tint border border-black/6 rounded-xl p-3 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications`}
                      className="max-w-full h-auto rounded-lg max-h-[260px] object-cover bg-white p-1 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80";
                      }}
                    />
                  </div>
                )}
              </div>

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
