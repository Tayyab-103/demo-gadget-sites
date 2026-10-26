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
import Features from "@/components/Features";
import NewsletterPopup from "@/components/NewsletterPopup";
import { siteConfig, fallbackImage } from "@/lib/brandIcon";

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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-surface text-ink">
          <h2 className="text-2xl font-display font-bold uppercase text-ink mb-4">Stationery Piece Not Found</h2>
          <p className="text-ink/60 mb-8 max-w-md mx-auto text-sm font-normal">
            The fine writing instrument or stationery item you are seeking does not exist or has been archived in our catalog.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-ink text-paper border border-primary hover:bg-primary hover:text-ink transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
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
    const label = selectedBundle.quantity > 1 ? `Pack of ${selectedBundle.quantity}` : "Single Unit";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-surface pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-primary/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-primary/25 shadow-sm">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-primary/25 shadow-sm flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-[0.68rem] font-display uppercase tracking-[0.24em] text-primary-deep w-fit mb-3">
                <span>✦</span>
                {product.category || "Stationery"}
              </div>

              <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink mt-1 mb-3 leading-snug tracking-tight">
                {product.name}
              </h1>

              {/* Price Display */}
              <div className="text-3xl font-display font-bold text-ink mb-5 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-semibold text-ink/50">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-ink/75 mb-6 text-xs sm:text-sm leading-relaxed border-t border-primary/15 pt-4 font-normal">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-display font-bold uppercase tracking-wider text-ink mb-2">
                    Choose quantity:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-primary/35 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-display font-bold text-ink bg-surface cursor-pointer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-2xs"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Pack of ${bundle.quantity}` : "Single Unit";
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
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-ink hover:bg-secondary transition-all duration-200 py-3.5 sm:py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-md hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications & Materials */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-primary/15 pt-6 mt-4">
                  <h3 className="text-sm sm:text-base font-display font-bold text-ink mb-1.5 uppercase tracking-tight">
                    Product Details
                  </h3>
                  <p className="text-xs text-ink/65 mb-4 leading-relaxed font-normal">
                    {`A closer look at what's included. Every order is backed by our ${siteConfig.trialPeriod}-day trial.`}
                  </p>

                  <div className="bg-surface border border-primary/20 rounded-xl p-3 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications and details`}
                      className="max-w-full h-auto rounded-lg max-h-[260px] object-cover bg-white p-1 border border-primary/20"
                      onError={(e) => {
                        e.currentTarget.src =
                          fallbackImage;
                      }}
                    />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Features />
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
