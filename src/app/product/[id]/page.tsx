"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";

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
  const [selectedImage, setSelectedImage] = useState<string>(product?.image || "");
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    if (product?.image) {
      setSelectedImage(product.image);
    }
  }, [product?.id, product?.image]);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center bg-neutral-bg">
          <div className="text-4xl mb-3">🍼</div>
          <h2 className="font-serif text-2xl font-bold text-primary mb-3">Baby Product Not Found</h2>
          <p className="text-neutral-text/60 mb-6 max-w-md mx-auto text-sm">
            The baby essential you are searching for is unavailable or has been relocated.
          </p>
          <button
            className="inline-block font-bold text-center bg-primary text-white hover:bg-primary/90 transition-all duration-300 py-3 px-7 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            Return to Baby Collection
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const imageList = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const currentDisplayImage = selectedImage || product.image;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Pack";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const startingPrice = parseFloat(product.ssPrice);
  const regularPrice = startingPrice * selectedBundle.quantity;
  const savings = regularPrice - selectedBundle.price;

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-neutral-text/50 font-bold uppercase tracking-wider mb-6 sm:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-xs">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Image & Gallery (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-stone-200/80 shadow-xs flex flex-col">
              {/* Main Image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F8F9FE] shadow-xs border border-stone-100">
                <img
                  id="main-image"
                  src={currentDisplayImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero1.jpg";
                  }}
                />
              </div>

              {/* Thumbnail Gallery */}
              {imageList.length > 1 && (
                <div className="grid grid-cols-3 w-full gap-3 sm:gap-4 mt-4" id="thumbnail-container">
                  {imageList.map((imgSrc, idx) => {
                    const isSelected = currentDisplayImage === imgSrc;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(imgSrc)}
                        aria-label={`View ${product.name} image ${idx + 1}`}
                        className={`thumb relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/30 shadow-sm opacity-100 scale-[1.02]"
                            : "border-stone-200 hover:border-stone-400 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/img/hero1.jpg";
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: Product Details & Dropdown Selector (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border border-stone-200/80 shadow-xs">
              <span className="text-[0.65rem] sm:text-xs font-bold uppercase text-primary tracking-[0.2em] bg-[#F8F9FE] border border-stone-200/80 px-3 py-1 rounded-full inline-block mb-3">
                ✨ {product.category}
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 leading-snug">
                {product.name}
              </h1>

              {/* Price Row */}
              <div className="mb-5 flex items-baseline gap-3 flex-wrap">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-primary">
                  ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </span>
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs font-bold text-primary bg-[#F8F9FE] border border-stone-200/80 px-2.5 py-1 rounded-lg">
                    ${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit
                  </span>
                )}
                {savings > 0 && (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    Save ${savings.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-neutral-text/75 mb-6 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Dropdown Selector for Quantity & Bundle */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6 p-4 sm:p-5 bg-[#F8F9FE] rounded-2xl border border-stone-200/80">
                  <label htmlFor="bundle-select" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                    Select Quantity &amp; Bundle Tier:
                  </label>
                  
                  <div className="relative">
                    <select
                      id="bundle-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const q = parseInt(e.target.value, 10);
                        const bundle = product.bundles?.find((b) => b.quantity === q);
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm font-semibold text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer shadow-xs appearance-none pr-10"
                    >
                      {product.bundles.map((bundle) => {
                        const bPrice = parseFloat(String(bundle.price)).toFixed(2);
                        const bUnit = (parseFloat(String(bundle.price)) / bundle.quantity).toFixed(2);
                        const bSavings = (startingPrice * bundle.quantity) - bundle.price;
                        const savingsText = bSavings > 0 ? ` — Save $${bSavings.toFixed(2)}` : "";
                        
                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {bundle.quantity === 1
                              ? `1 Unit Pack — $${bPrice}`
                              : `${bundle.quantity} Units Pack — $${bPrice} ($${bUnit}/unit)${savingsText}`}
                          </option>
                        );
                      })}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[0.68rem] text-neutral-text/60 font-medium">
                    <span>✨ Automatic bundle discounts</span>
                    <span className="text-primary font-bold">Fast Tracked Dispatch</span>
                  </div>
                </div>
              )}

              {/* Add to Cart CTA */}
              <div className="flex flex-col gap-2.5">
                <button
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-white hover:bg-primary/90 transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full cursor-pointer text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
                  onClick={handleAddToCart}
                >
                  <span>Add {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Item"} to Baby Cart</span>
                  <span className="text-sm">✨</span>
                </button>

                {addedNotice && (
                  <div className="text-center text-xs font-bold text-emerald-700 bg-emerald-50 py-2 rounded-xl border border-emerald-200 animate-fadeIn">
                    ✓ Added to your cart!
                  </div>
                )}

                {/* Guaranteed Safe Checkout Badges */}
                <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-[0.68rem] text-neutral-text/70 font-semibold">
                    <span className="text-secondary">🔒</span>
                    <span>Guaranteed Safe &amp; Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="/img/mastercard.svg" alt="MasterCard" className="h-6 w-auto object-contain rounded" />
                    <img src="/img/visa.svg" alt="VISA" className="h-6 w-auto object-contain rounded" />
                  </div>
                </div>
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
