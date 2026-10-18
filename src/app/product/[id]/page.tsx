"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CTASection from "@/components/CTASection";
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
      <main className="bg-neutral-bg py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden border-b border-black/5">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-30 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-black/5 shadow-sm">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-black/5 shadow-sm">
              <span className="text-[0.65rem] sm:text-[0.68rem] font-bold uppercase text-secondary tracking-[0.18em]">
                {product.category || "Fabric & Piece Goods"}
              </span>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary mt-2 mb-3 sm:mb-4 leading-snug">
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

              {/* Bundle Packages Dropdown Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <label htmlFor="package-select" className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Select Package Quantity:
                  </label>
                  <div className="relative">
                    <select
                      id="package-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const qty = parseInt(e.target.value, 10);
                        const found = product.bundles?.find((b) => b.quantity === qty);
                        if (found) setSelectedBundle(found);
                      }}
                      className="w-full bg-white border border-black/15 text-primary text-sm font-semibold rounded-2xl py-4 pl-5 pr-12 appearance-none shadow-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all cursor-pointer"
                    >
                      {product.bundles.map((bundle) => {
                        const baseItemPrice = startingPrice;
                        const regularPrice = baseItemPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const savingsText = bundle.quantity > 1 && savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";
                        const label = bundle.quantity > 1 ? `Pack of ${bundle.quantity}` : "Single Unit";
                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {label} — ${parseFloat(String(bundle.price)).toFixed(2)}{savingsText}
                          </option>
                        );
                      })}
                    </select>

                    {/* Custom Down Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mt-8">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-md hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
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
