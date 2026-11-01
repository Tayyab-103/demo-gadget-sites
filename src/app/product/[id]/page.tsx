"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";
import ProductCarousel from "@/components/ProductCarousel";

const products = productsData as unknown as Product[];

const highlights = [
  "Impact-resistant, expedition-tested polycarbonate & waxed ripstop construction",
  "Ergonomic weight distribution designed for long layovers and rugged transit",
  "360° whisper-glide wheels and reinforced TSA security architecture",
  "Backed by our 60-day trial and 1-year comprehensive replacement warranty",
];

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
  const [activeTab, setActiveTab] = useState<"specs" | "box" | "shipping">("specs");

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-3xl font-black uppercase text-primary mb-4">Gear Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The piece you are looking for does not exist or has been retired from our active catalog.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Collection
          </button>
        </main>
        <Footer />
        <CartDrawer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Piece";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  const startingPrice = parseFloat(product.ssPrice);
  const regularPrice = startingPrice * selectedBundle.quantity;
  const showStrikePrice = regularPrice > selectedBundle.price;
  const currentSavings = regularPrice - selectedBundle.price;

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[0.68rem] sm:text-xs font-semibold text-neutral-text/50">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span aria-hidden="true" className="text-neutral-text/30">/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">Collection</Link>
            <span aria-hidden="true" className="text-neutral-text/30">/</span>
            <span className="text-neutral-text/70">{product.category || "Travel Gear"}</span>
            <span aria-hidden="true" className="text-neutral-text/30">/</span>
            <span className="text-secondary truncate max-w-[120px] sm:max-w-none">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* LEFT: Product Visual Gallery */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl p-4 sm:p-8 border border-black/6 shadow-xs">
                <ProductCarousel
                  images={product.images && product.images.length > 0 ? product.images : [product.image]}
                  name={product.name}
                />
              </div>

              {/* Trust Badges Strip under photo */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/5 text-center">
                  <div className="text-xs font-bold text-primary">60-Day Trial</div>
                  <div className="text-[0.62rem] text-neutral-text/50 uppercase tracking-wider mt-0.5">Risk-Free Returns</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/5 text-center">
                  <div className="text-xs font-bold text-primary">1-Year Warranty</div>
                  <div className="text-[0.62rem] text-neutral-text/50 uppercase tracking-wider mt-0.5">Comprehensive</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/5 text-center">
                  <div className="text-xs font-bold text-primary">Free Express</div>
                  <div className="text-[0.62rem] text-neutral-text/50 uppercase tracking-wider mt-0.5">Nationwide Transit</div>
                </div>
              </div>
            </div>

            {/* RIGHT: Product Details & Bundle Configurator */}
            <div className="lg:col-span-6">
              {product.category && (
                <span className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                  {product.category}
                </span>
              )}

              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight break-words">
                {product.name}
              </h1>

              {/* Rating & In-stock badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-primary">4.9 / 5.0</span>
                  <span className="text-xs text-neutral-text/45">(14 Verified Expeditions)</span>
                </div>
                <span className="text-neutral-text/20">•</span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>In Stock</span>
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="p-5 rounded-2xl bg-neutral-bg border border-black/6 mb-8 flex items-baseline justify-between">
                <div>
                  <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/50">
                    Selected Configuration
                  </span>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="text-3xl font-black text-primary">
                      ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                    </span>
                    {showStrikePrice && (
                      <span className="text-sm font-semibold text-neutral-text/40 line-through">
                        ${regularPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>

                {currentSavings > 0 && (
                  <span className="px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-black uppercase tracking-wider">
                    Save ${currentSavings.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Engineering Highlights
                </h3>
                <ul className="space-y-2">
                  {highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                      <span className="text-secondary font-black text-sm leading-none mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Bundle Selector (Card Grid) */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Choose Bundle &amp; Save
                    </span>
                    <span className="text-[0.68rem] text-secondary font-bold">
                      Volume Savings Applied
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-1">
                    {product.bundles.map((bundle) => {
                      const isSelected = selectedBundle.quantity === bundle.quantity;
                      const bundleRegularPrice = startingPrice * bundle.quantity;
                      const savings = bundleRegularPrice - bundle.price;
                      const perUnit = (bundle.price / bundle.quantity).toFixed(2);

                      return (
                        <button
                          key={bundle.quantity}
                          type="button"
                          onClick={() => setSelectedBundle(bundle)}
                          className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-primary text-white border-primary shadow-md ring-2 ring-secondary/40"
                              : "bg-white text-neutral-text border-black/8 hover:border-black/20 hover:bg-neutral-bg"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-xs font-bold uppercase tracking-wider">
                              {bundle.quantity > 1 ? `${bundle.quantity}-Piece Set` : "Single Piece"}
                            </span>
                            {savings > 0 && (
                              <span
                                className={`text-[0.6rem] font-black uppercase px-2 py-0.5 rounded-full ${
                                  isSelected
                                    ? "bg-secondary text-secondary-text"
                                    : "bg-secondary/15 text-secondary"
                                }`}
                              >
                                Save ${savings.toFixed(2)}
                              </span>
                            )}
                          </div>

                          <div className="flex items-baseline justify-between mt-1">
                            <span className={`text-base font-black ${isSelected ? "text-white" : "text-primary"}`}>
                              ${parseFloat(String(bundle.price)).toFixed(2)}
                            </span>
                            {bundle.quantity > 1 && (
                              <span className={`text-[0.68rem] font-medium ${isSelected ? "text-white/60" : "text-neutral-text/50"}`}>
                                (${perUnit}/ea)
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 mb-10">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 rounded-[3px] border border-primary/25 bg-white hover:bg-black/5 text-primary font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-xs"
                >
                  Add To Cart
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 py-4 px-6 rounded-[3px] bg-secondary text-white hover:bg-primary transition-all font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md"
                >
                  Buy Now — ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </button>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Interactive Tabs for Details & Box Contents */}
              <div className="border-t border-black/8 pt-8">
                <div className="flex gap-2 border-b border-black/8 pb-3 mb-5">
                  {[
                    { id: "specs", label: "Specifications" },
                    { id: "box", label: "In The Box" },
                    { id: "shipping", label: "Shipping & Return" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-text"
                          : "text-neutral-text/50 hover:text-primary hover:bg-black/4"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {activeTab === "specs" && (
                  <div className="space-y-3 text-xs sm:text-sm text-neutral-text/70">
                    <p>Designed with durability at its core, combining weather-resistant materials, whisper-glide mobility, and modular internal organization.</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs">
                      <li>Drop &amp; impact rated aerospace construction</li>
                      <li>Ergonomic telescopic multi-stage handle</li>
                      <li>Integrated TSA-approved combination lock</li>
                    </ul>
                  </div>
                )}

                {activeTab === "box" && product.boxContents && (
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-text/70">
                    {product.boxContents.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === "shipping" && (
                  <div className="space-y-2 text-xs sm:text-sm text-neutral-text/70 leading-relaxed">
                    <p><strong>Fulfillment:</strong> Dispatched from Austin, TX within 24-48 hours via UPS.</p>
                    <p><strong>Delivery Window:</strong> 3-5 business days nationwide with live tracking updates.</p>
                    <p><strong>60-Day Guarantee:</strong> Easy returns if you are not 100% satisfied with your expedition gear.</p>
                  </div>
                )}
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
