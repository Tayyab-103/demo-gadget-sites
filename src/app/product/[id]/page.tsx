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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-[#F8F6F0] text-[#18222F]">
          <h2 className="text-2xl font-extrabold uppercase text-[#0D1B2A] mb-4">Travel Gear Piece Not Found</h2>
          <p className="text-[#18222F]/60 mb-8 max-w-md mx-auto text-sm font-normal">
            The luggage or travel gear piece you are seeking does not exist or has been archived in our catalog.
          </p>
          <button
            className="inline-block font-extrabold text-center whitespace-nowrap bg-[#0D1B2A] text-white border border-[#C87D3B] hover:bg-[#C87D3B] transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-lg"
            onClick={() => router.push("/shop")}
          >
            Return to Luggage Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Expedition Set` : "Single Unit";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-[#F8F6F0] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-[#C87D3B]/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#C87D3B]/25 shadow-lg">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C87D3B]/25 shadow-lg flex flex-col">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D1B2A] mt-1 mb-3 leading-snug tracking-tight uppercase">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5 text-[#C87D3B]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#18222F]/65 font-bold uppercase tracking-wider">(96 Verified Flight Reviews)</span>
              </div>

              {/* Price Display */}
              <div className="text-3xl font-black text-[#0D1B2A] mb-5 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-bold text-[#18222F]/50">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-[#18222F]/75 mb-6 text-xs sm:text-sm leading-relaxed border-t border-[#C87D3B]/15 pt-4 font-normal">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1B2A] mb-2">
                    Select Expedition Package:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-[#C87D3B]/35 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold text-[#0D1B2A] bg-[#F8F6F0] cursor-pointer focus:outline-none focus:border-[#C87D3B] focus:ring-1 focus:ring-[#C87D3B] transition-all shadow-2xs"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Fleet of ${bundle.quantity} Units (Family / Expedition)` : "Single Unit";
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
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1B2A]"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-extrabold text-center whitespace-nowrap bg-[#C87D3B] text-white hover:bg-[#D98745] transition-all duration-200 py-3.5 sm:py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-lg hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add to Flight Bag
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Specifications & Materials */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-[#C87D3B]/15 pt-6 mt-4">
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0D1B2A] mb-1.5 uppercase tracking-tight">
                    Transit Specifications &amp; Engineering
                  </h3>
                  <p className="text-xs text-[#18222F]/65 mb-4 leading-relaxed font-normal">
                    Precision-engineered with aerospace anodized aluminum, Japanese Hinomoto 360° whisper wheels, TSA certified locking mechanisms, and vegetable-tanned full-grain Italian leather accents. Backed by our 100-day flight trial.
                  </p>

                  <div className="bg-[#F8F6F0] border border-[#C87D3B]/20 rounded-xl p-3 flex items-center justify-center">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications and details`}
                      className="max-w-full h-auto rounded-lg max-h-[260px] object-cover bg-white p-1 border border-[#C87D3B]/20"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&q=80";
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
      <NewsletterPopup />
    </>
  );
}
