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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-[#FAF8F6] text-[#18121E]">
          <h2 className="text-2xl font-serif font-bold text-[#18121E] mb-4">Couture Piece Not Found</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm font-light">
            The requested creation is currently not available in our digital atelier catalogue.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-[#18121E] text-white hover:bg-[#C59B7E] hover:text-[#18121E] transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg"
            onClick={() => router.push("/shop")}
          >
            Return to Collection
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Piece Ensemble Set` : "Single Atelier Piece";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-[#FAF8F6] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-[#C59B7E]/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#C59B7E]/25 shadow-xl">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C59B7E]/25 shadow-xl flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18121E]/5 border border-[#C59B7E]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C59B7E] w-fit mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B7E] animate-pulse" />
                {product.category || "Haute Couture"}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#18121E] mt-1 mb-3 leading-snug tracking-tight">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5 text-[#C59B7E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">(148 Verified Patron Reviews)</span>
              </div>

              {/* Price Display */}
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#18121E] mb-5 flex items-baseline gap-3">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-sans font-semibold text-slate-400">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / piece)
                  </span>
                )}
              </div>

              <p className="text-slate-600 mb-6 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4 font-light">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#18121E] mb-2.5">
                    Select Atelier Ensemble Tier:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-[#C59B7E]/30 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#18121E] bg-[#FAF8F6] cursor-pointer focus:outline-none focus:border-[#C59B7E] transition-all shadow-xs"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Ensemble of ${bundle.quantity} Pieces (Wardrobe Tier)` : "Single Atelier Piece";
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C59B7E]"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 text-[#18121E] transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-lg shadow-[#C59B7E]/20"
                  onClick={handleAddToCart}
                >
                  Acquire Atelier Piece
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications & Materials */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-slate-100 pt-6 mt-4">
                  <h3 className="text-sm sm:text-base font-serif font-bold text-[#18121E] mb-2 tracking-tight">
                    Fabric Specifications &amp; Atelier Drape
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed font-light">
                    Mastercrafted from 22-momme pure mulberry silk, French corded Chantilly lace, and Mongolian cashmere. Backed by our risk-free 14-day fit and drape guarantee.
                  </p>

                  <div className="bg-[#FAF8F6] border border-[#C59B7E]/20 rounded-2xl p-3.5 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} craftsmanship details`}
                      className="max-w-full h-auto rounded-xl max-h-[260px] object-cover bg-white p-1 border border-[#C59B7E]/20"
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
