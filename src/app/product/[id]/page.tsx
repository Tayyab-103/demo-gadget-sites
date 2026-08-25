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
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The wardrobe piece you are looking for does not exist or has been archived.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-primary transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
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
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Family Bundle` : "Single Piece";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Product Image Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-black/5 shadow-md">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-black/5 shadow-md">
              <span className="text-[0.65rem] sm:text-[0.68rem] font-bold uppercase text-secondary tracking-[0.2em]">
                {product.category || "Family Wardrobe Essential"}
              </span>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mt-2 mb-3 sm:mb-4 leading-tight">
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
                <span className="text-xs text-neutral-text/50 font-medium">(28 Verified Family Reviews)</span>
              </div>

              <div className="text-3xl font-black text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-medium text-neutral-text/40 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / piece)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/75 mb-8 text-xs md:text-sm leading-relaxed border-t border-black/5 pt-5">
                {product.description}
              </p>

              {/* Bundle Packages Selector (Dropdown) */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8 bg-[#FAF8F5] p-6 rounded-2xl border border-black/[0.06]">
                  <label htmlFor="bundle-select" className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Select Family Bundle Quantity:
                  </label>
                  
                  <div className="relative">
                    <select
                      id="bundle-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const qty = parseInt(e.target.value, 10);
                        const found = product.bundles?.find((b) => b.quantity === qty);
                        if (found) setSelectedBundle(found);
                      }}
                      className="w-full bg-white border border-black/15 text-primary text-sm font-semibold rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all cursor-pointer shadow-xs appearance-none"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const savingsText = bundle.quantity > 1 && savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";
                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {bundle.quantity > 1 ? `${bundle.quantity} Pieces Family Pack` : "1 Piece (Single Pack)"} &mdash; ${parseFloat(String(bundle.price)).toFixed(2)}{savingsText}
                          </option>
                        );
                      })}
                    </select>

                    {/* Custom Dropdown Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>

                  {/* Selected Bundle Summary Tag */}
                  <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-black/[0.06]">
                    <span className="text-neutral-text/60">
                      Unit Price: <strong className="text-primary font-bold">${(parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2)}</strong> / piece
                    </span>
                    {selectedBundle.quantity > 1 && (startingPrice * selectedBundle.quantity - selectedBundle.price) > 0 && (
                      <span className="bg-secondary text-white text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                        Save ${(startingPrice * selectedBundle.quantity - selectedBundle.price).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Add to Cart Action */}
              <div className="flex gap-4 mb-8 mt-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-white transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add To Wardrobe Cart &rarr;
                </button>
              </div>

              {/* Fabric & Sizing Guide */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-black/5 pt-8 mt-8">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-2">
                    Fabric Composition &amp; Craft Details
                  </h3>
                  <p className="text-xs text-neutral-text/60 mb-6 leading-relaxed">
                    Every piece is crafted from hypoallergenic pre-shrunk organic weaves, reinforced with double-needle hems and covered under our 60-day satisfaction guarantee.
                  </p>

                  <div className="bg-neutral-bg border border-black/5 rounded-2xl p-6 flex items-center justify-center shadow-inner">
                    <img
                      src={product.ingredientsImage}
                      alt="Garment fabric and tailoring showcase"
                      className="max-w-full h-auto rounded-xl max-h-[350px] object-contain bg-white p-2 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x300?text=Fabric";
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
