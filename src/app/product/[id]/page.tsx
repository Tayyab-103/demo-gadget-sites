"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import siteConfigData from "../../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle, SiteConfig } from "@/types";
import { BoltIcon, CheckIcon, LockIcon, StarRating } from "@/components/Icons";

const siteConfig = siteConfigData as unknown as SiteConfig;
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentProductId, setCurrentProductId] = useState<string>(productId);
  const [addedNotice, setAddedNotice] = useState(false);

  if (currentProductId !== productId) {
    setCurrentProductId(productId);
    setSelectedImage(null);
    setSelectedBundle(defaultBundle);
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-3">
            <BoltIcon className="w-7 h-7 text-secondary fill-secondary" />
          </div>
          <h2 className="text-2xl font-black text-primary mb-3 uppercase">Device Not Found</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm">
            The electronic product you are looking for is currently unavailable or has been relocated.
          </p>
          <button
            className="inline-block font-black text-center bg-primary text-secondary hover:bg-slate-800 transition-all duration-300 py-3 px-7 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md border border-primary"
            onClick={() => router.push("/shop")}
          >
            Explore Hardware
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
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Unit";
    
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
      <main className="bg-white py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider mb-6 sm:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">Hardware</Link>
            <span>/</span>
            <span className="text-primary truncate max-w-xs">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Image & Gallery (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col">
              {/* Main Image */}
              <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200/80 shadow-xs flex items-center justify-center p-6 sm:p-10">
                <img
                  id="main-image"
                  src={currentDisplayImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = product.image;
                  }}
                />
              </div>

              {/* Thumbnail Gallery */}
              {imageList.length > 1 && (
                <div className="grid grid-cols-4 w-full gap-2.5 sm:gap-3 mt-4" id="thumbnail-container">
                  {imageList.map((imgSrc, idx) => {
                    const isSelected = currentDisplayImage === imgSrc;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(imgSrc)}
                        aria-label={`View ${product.name} image ${idx + 1}`}
                        className={`thumb relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-2 bg-slate-50 flex items-center justify-center p-2 ${
                          isSelected
                            ? "border-primary ring-2 ring-secondary/40 shadow-sm opacity-100 scale-[1.02]"
                            : "border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = product.image;
                          }}
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: Product Details & Dropdown Selector (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
              <span className="text-[0.65rem] sm:text-xs font-black uppercase text-[#869600] tracking-[0.2em] bg-gray-100 border border-gray-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-3">
                <BoltIcon className="w-3 h-3 fill-[#869600] text-[#869600] shrink-0" />
                <span>{product.category}</span>
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-3 leading-snug tracking-tight uppercase">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2.5 mb-5 pb-5 border-b border-gray-100">
                <StarRating count={5} />
                <span className="text-xs text-gray-500 font-semibold">5.0 (420+ Verified Reviews)</span>
              </div>

              {/* Price Row */}
              <div className="mb-5 flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                  ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </span>
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs font-bold text-secondary bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg">
                    ${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit
                  </span>
                )}
                {savings > 0 && (
                  <span className="text-xs font-black text-secondary-text bg-secondary px-2.5 py-1 rounded-lg">
                    Save ${savings.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6 text-xs sm:text-sm leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Dropdown Selector for Quantity & Bundle */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6 p-4 sm:p-5 bg-gray-50 rounded-2xl border border-gray-200">
                  <label htmlFor="bundle-select" className="block text-xs font-black uppercase tracking-wider text-primary mb-2">
                    Select Quantity &amp; Multi-Tier Bundle:
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
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold text-primary focus:outline-none focus:border-primary transition-all cursor-pointer shadow-xs appearance-none pr-10"
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

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[0.68rem] text-gray-500 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <BoltIcon className="w-3 h-3 fill-secondary text-secondary shrink-0" />
                      <span>Multi-tier hardware discounts</span>
                    </span>
                    <span className="text-secondary font-bold">{siteConfig.shippingCarrier} Tracked Delivery</span>
                  </div>
                </div>
              )}

              {/* Add to Cart CTA */}
              <div className="flex flex-col gap-2.5">
                <button
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-text hover:bg-slate-800 hover:text-secondary transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-xl cursor-pointer text-xs font-black uppercase tracking-widest shadow-md hover:shadow-lg border border-primary"
                  onClick={handleAddToCart}
                >
                  <span>Add {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Item"} to Cart</span>
                  <span className="text-sm text-secondary">→</span>
                </button>

                {addedNotice && (
                  <div className="text-center text-xs font-black text-secondary-text bg-secondary/20 py-2.5 rounded-xl border border-secondary animate-fadeIn flex items-center justify-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-secondary-text shrink-0" />
                    <span>Device added to your cart!</span>
                  </div>
                )}

                {/* Guaranteed Safe Checkout Badges */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-[0.68rem] text-gray-500 font-semibold">
                    <LockIcon className="w-3.5 h-3.5 text-secondary shrink-0" />
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
