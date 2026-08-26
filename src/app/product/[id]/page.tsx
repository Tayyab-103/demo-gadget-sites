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
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-[#0E0F11] text-white">
          <h2 className="text-2xl font-black uppercase text-white mb-4">Tool Not Found</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">The kitchen tool you are looking for does not exist or has been retired from our catalog.</p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-[#E5F2C9] text-[#0E0F11] hover:bg-white transition-all duration-300 py-3.5 px-8 rounded-lg text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Workshop
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const startingPrice = parseFloat(product.ssPrice);
  const baseItemPrice = startingPrice;
  const regularPrice = baseItemPrice * selectedBundle.quantity;
  const currentSavings = regularPrice - selectedBundle.price;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Workshop Bundle` : "Single Tool";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
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
      <main className="bg-[#0E0F11] text-white py-12 md:py-20 relative overflow-hidden border-t border-white/5">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#E5F2C9]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-8">
            <button onClick={() => router.push("/")} className="hover:text-white transition-colors cursor-pointer">Workshop Home</button>
            <span>/</span>
            <button onClick={() => router.push("/shop")} className="hover:text-white transition-colors cursor-pointer">Catalog</button>
            <span>/</span>
            <span className="text-white/80 font-semibold truncate max-w-[200px] sm:max-w-none">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Product Image Gallery Column */}
            <div className="bg-[#16171A] rounded-2xl p-6 border border-white/10 shadow-2xl">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details & Dropdown Column */}
            <div className="bg-[#16171A] rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl flex flex-col justify-between">
              
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[0.68rem] font-bold uppercase text-[#E5F2C9] tracking-[0.2em] bg-white/5 px-3 py-1 rounded border border-white/10">
                    {product.category || "Culinary Workshop Tool"}
                  </span>
                  <span className="text-[0.65rem] text-white/50 uppercase tracking-widest font-semibold">
                    100% Food-Safe 304 Steel
                  </span>
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-black text-white mt-2 mb-4 leading-snug">
                  {product.name}
                </h1>

                {/* Star Ratings */}
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex gap-0.5 text-[#E5F2C9]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-white/50 font-medium">(28 Verified Chef Reviews)</span>
                </div>

                {/* Main Dynamic Price Display */}
                <div className="bg-[#1A1C20] rounded-xl p-5 border border-white/10 mb-6 flex items-baseline justify-between">
                  <div>
                    <div className="text-[0.65rem] text-white/40 uppercase tracking-widest font-bold mb-1">Total Price</div>
                    <div className="text-3xl font-black text-[#E5F2C9] flex items-baseline gap-2">
                      ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                      {selectedBundle.quantity > 1 && (
                        <span className="text-xs text-white/50 font-normal">
                          (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedBundle.quantity > 1 && currentSavings > 0 && (
                    <div className="bg-[#E5F2C9] text-[#121316] text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                      Save ${currentSavings.toFixed(2)}
                    </div>
                  )}
                </div>

                {/* Product Description */}
                <p className="text-white/70 mb-8 text-xs md:text-sm leading-relaxed border-t border-white/10 pt-5">
                  {product.description}
                </p>

                {/* Bundle Dropdown Selector */}
                {product.bundles && product.bundles.length > 0 && (
                  <div className="mb-8">
                    <label htmlFor="bundle-select" className="block text-xs font-bold uppercase tracking-wider text-white mb-3">
                      Select Workshop Package Quantity:
                    </label>

                    <div className="relative">
                      <select
                        id="bundle-select"
                        value={selectedBundle.quantity}
                        onChange={handleBundleChange}
                        className="w-full bg-[#23252B] text-white border border-white/15 rounded-xl px-4 py-4 text-xs sm:text-sm appearance-none focus:outline-none focus:border-[#E5F2C9] focus:ring-1 focus:ring-[#E5F2C9] transition-all cursor-pointer font-medium"
                      >
                        {product.bundles.map((bundle) => {
                          const savings = baseItemPrice * bundle.quantity - bundle.price;
                          const savingsLabel = savings > 0 && bundle.quantity > 1
                            ? ` (Save $${savings.toFixed(2)} — $${(bundle.price / bundle.quantity).toFixed(2)}/ea)`
                            : "";
                          const label = bundle.quantity === 1
                            ? `1 Unit — $${bundle.price.toFixed(2)}`
                            : `${bundle.quantity} Units Multi-Pack — $${bundle.price.toFixed(2)}${savingsLabel}`;

                          return (
                            <option key={bundle.quantity} value={bundle.quantity} className="bg-[#1A1C20] text-white py-2">
                              {label}
                            </option>
                          );
                        })}
                      </select>

                      {/* Dropdown custom chevron icon */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>

                    <div className="mt-2 text-[0.7rem] text-white/40 flex items-center justify-between">
                      <span>✓ Selected: {selectedBundle.quantity} {selectedBundle.quantity > 1 ? "Units Multi-Pack" : "Single Unit"}</span>
                      <span>✓ Free Nationwide Delivery</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Add to Cart Actions */}
              <div className="pt-4 border-t border-white/10">
                <button
                  className="w-full inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-[#E5F2C9] text-[#0E0F11] hover:bg-white hover:shadow-[0_0_30px_rgba(229,242,201,0.5)] transition-all duration-300 py-4 px-8 rounded-xl cursor-pointer text-xs uppercase tracking-widest shadow-lg"
                  onClick={handleAddToCart}
                >
                  Add to Workshop Cart &rarr;
                </button>

                {/* Trust guarantee bullets */}
                <div className="grid grid-cols-3 gap-2 text-center mt-6 pt-5 border-t border-white/5 text-[0.62rem] uppercase tracking-wider text-white/50">
                  <div>✓ 60-Day Trial</div>
                  <div>✓ 1-Yr Warranty</div>
                  <div>✓ 100% Food-Safe</div>
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
