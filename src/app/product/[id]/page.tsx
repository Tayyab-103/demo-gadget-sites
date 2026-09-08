"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import siteConfigData from "../../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle, SiteConfig } from "@/types";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [addedNotice, setAddedNotice] = useState(false);

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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center bg-[#F8F6F2] text-[#121316]">
          <div className="text-4xl mb-3">🔪</div>
          <h2 className="font-serif text-2xl font-bold mb-3">Culinary Tool Not Found</h2>
          <p className="text-[#121316]/60 mb-6 max-w-md mx-auto text-sm">
            The culinary tool you are searching for is unavailable or has been relocated.
          </p>
          <button
            className="inline-block font-bold text-center bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Workshop Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const baseItemPrice = parseFloat(product.ssPrice || "0");
  const regularPrice = baseItemPrice * selectedBundle.quantity;
  const currentSavings = regularPrice - selectedBundle.price;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Workshop Bundle` : "Single Tool";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleBundleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value, 10);
    const foundBundle = product.bundles?.find((b) => b.quantity === qty);
    if (foundBundle) {
      setSelectedBundle(foundBundle);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-[#F8F6F2] text-[#121316] py-12 md:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs text-[#121316]/50 mb-8 font-medium">
            <Link href="/" className="hover:text-[#121316] transition-colors">Workshop Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#121316] transition-colors">Catalog</Link>
            <span>/</span>
            <span className="text-[#121316] font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Product Image Gallery Column */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-sm">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details & Dropdown Column */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm flex flex-col justify-between">
              
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[0.68rem] font-bold uppercase text-[#E06830] tracking-[0.2em] bg-[#F8F6F2] border border-stone-200/80 px-3 py-1 rounded-full">
                    {product.category || "Culinary Workshop Tool"}
                  </span>
                  <span className="text-[0.65rem] text-[#121316]/60 uppercase tracking-widest font-semibold">
                    100% Food-Safe Certified
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121316] mt-2 mb-6 leading-snug">
                  {product.name}
                </h1>

                {/* Main Dynamic Price Display */}
                <div className="bg-[#F8F6F2] rounded-2xl p-5 border border-stone-200/80 mb-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-[0.65rem] text-[#121316]/50 uppercase tracking-widest font-bold mb-1">Total Price</div>
                    <div className="text-3xl font-black text-[#121316] font-serif flex items-baseline gap-2">
                      ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                      {selectedBundle.quantity > 1 && (
                        <span className="text-xs text-[#121316]/50 font-normal font-sans">
                          (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedBundle.quantity > 1 && currentSavings > 0 && (
                    <div className="bg-[#121316] text-[#E06830] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                      Save ${currentSavings.toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Product Description */}
                <p className="text-[#121316]/75 mb-8 text-xs md:text-sm leading-relaxed border-t border-stone-100 pt-5">
                  {product.description}
                </p>

                {/* Bundle Dropdown Selector */}
                {product.bundles && product.bundles.length > 0 && (
                  <div className="mb-8">
                    <label htmlFor="bundle-select" className="block text-xs font-bold uppercase tracking-wider text-[#121316] mb-2.5">
                      Select Quantity &amp; Bundle Tier:
                    </label>
                    <div className="relative">
                      <select
                        id="bundle-select"
                        value={selectedBundle.quantity}
                        onChange={handleBundleChange}
                        className="w-full bg-[#F8F6F2] border border-stone-300 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#121316] focus:outline-none focus:border-[#E06830] transition-all cursor-pointer shadow-xs appearance-none pr-10"
                      >
                        {product.bundles.map((bundle) => {
                          const bPrice = parseFloat(String(bundle.price)).toFixed(2);
                          const bUnit = (parseFloat(String(bundle.price)) / bundle.quantity).toFixed(2);
                          const savings = (baseItemPrice * bundle.quantity) - bundle.price;
                          const savingsText = savings > 0 ? ` — Save $${savings.toFixed(2)}` : "";
                          
                          return (
                            <option key={bundle.quantity} value={bundle.quantity} className="bg-white">
                              {bundle.quantity === 1
                                ? `1 Unit Pack — $${bPrice}`
                                : `${bundle.quantity} Units Workshop Bundle — $${bPrice} ($${bUnit}/unit)${savingsText}`}
                            </option>
                          );
                        })}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#121316]/60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Add to Cart Actions */}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-4 px-8 rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>Add {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Piece Bundle` : "Item"} to Workshop Cart</span>
                  <span>→</span>
                </button>

                {addedNotice && (
                  <div className="text-center text-xs font-bold text-emerald-800 bg-emerald-50 py-2 rounded-xl border border-emerald-200 animate-fadeIn">
                    ✓ Added to your cart!
                  </div>
                )}

                {/* Trust and Payment Badges */}
                <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-[0.68rem] text-[#121316]/70 font-semibold">
                    <span className="text-[#E06830]">🔒</span>
                    <span>Guaranteed Safe &amp; Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src="/img/mastercard.svg" alt="MasterCard" className="h-5 w-auto object-contain rounded" />
                    <img src="/img/visa.svg" alt="VISA" className="h-5 w-auto object-contain rounded" />
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
