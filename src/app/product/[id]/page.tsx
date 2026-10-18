"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle, SiteConfig } from "@/types";
import siteConfigData from "../../../../config/site-config.json";
import ProductCarousel from "@/components/ProductCarousel";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

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
        <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-20 sm:py-28 text-center bg-neutral-bg">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 block mb-2">
            CATALOG SEARCH
          </span>
          <h1 className="font-serif font-medium text-3xl sm:text-4xl text-neutral-text mb-3">
            Piece Not Found
          </h1>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-xs uppercase tracking-wider leading-relaxed">
            The piece you are looking for is no longer available in our collection.
          </p>
          <button
            className="inline-flex items-center justify-center gap-3 font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-[0.16em] cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            <span>Return to Collection</span>
            <span>→</span>
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `Set of ${selectedBundle.quantity} Pieces` : "Single Piece";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-8 sm:py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-neutral-text/50 mb-6 sm:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-primary truncate">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="lg:col-span-7">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="lg:col-span-5 lg:pt-4">
              <span className="eyebrow">
                {product.category || "Home Furnishing"}
              </span>

              <h1 className="font-serif font-medium text-4xl sm:text-5xl tracking-tight text-neutral-text mt-4 mb-4 leading-[1.05]">
                {product.name}
              </h1>

              <div className="text-3xl sm:text-4xl font-serif text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-sans font-medium text-neutral-text/50 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / piece)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/70 mb-8 text-sm sm:text-base leading-relaxed border-t border-secondary pt-6">
                {product.description}
              </p>

              {/* Dropdown Selector for Set Quantity */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <label className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-neutral-text/60 mb-2.5">
                    Select Set Quantity:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const qty = parseInt(e.target.value, 10);
                        const found = product.bundles?.find((b) => b.quantity === qty);
                        if (found) setSelectedBundle(found);
                      }}
                      className="w-full bg-surface border border-secondary/70 rounded-2xl px-5 py-4 text-xs sm:text-sm font-semibold text-primary appearance-none cursor-pointer focus:outline-none focus:border-primary transition-all hover:border-secondary-dark/50 pr-10"
                    >
                      {product.bundles.map((bundle) => {
                        const savings = (startingPrice * bundle.quantity) - bundle.price;
                        const savingsText = savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";
                        const label = bundle.quantity > 1 ? `Set of ${bundle.quantity} Pieces` : "Single Piece";
                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {label} — ${parseFloat(String(bundle.price)).toFixed(2)}{savingsText}
                          </option>
                        );
                      })}
                    </select>
                    
                    {/* Custom Dropdown Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-6 mt-4">
                <button
                  className="group inline-flex items-center justify-center gap-3 font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-[0.16em] shadow-md hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  <span>Add to Cart</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Purchase assurances */}
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {[
                  { title: "Free shipping", text: `${siteConfig.shippingCarrier}, ${siteConfig.shippingPeriod} business days` },
                  { title: `${siteConfig.trialPeriod}-day returns`, text: "Simple return process" },
                  { title: "One-time charge", text: "No subscription" },
                ].map((item) => (
                  <li key={item.title} className="bg-surface border border-secondary/60 rounded-2xl p-4">
                    <span className="block font-serif text-lg text-neutral-text leading-tight">{item.title}</span>
                    <span className="block text-xs text-neutral-text/60 mt-1">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Presentation & Packaging */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-secondary/50 pt-6 mt-8">
                  <h2 className="font-serif font-medium text-lg sm:text-xl text-neutral-text mb-2">
                    Presentation &amp; Packaging
                  </h2>
                  <p className="text-xs text-neutral-text/60 mb-4 leading-relaxed">
                    Each order is checked by hand, wrapped with care, and packed in a sturdy box so it arrives ready for your home.
                  </p>

                  <div className="bg-surface border border-secondary/60 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.ingredientsImage}
                      alt="Order packaging"
                      className="w-full h-auto max-h-[260px] rounded-xl object-cover"
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

