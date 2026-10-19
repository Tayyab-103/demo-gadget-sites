"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";
import ProductCarousel from "@/components/ProductCarousel";
import Highlights from "@/components/Highlights";
import NewsletterPopup from "@/components/NewsletterPopup";
import siteConfigData from "../../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
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
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-36 pb-28 text-center bg-white text-black font-sans">
          <div className="text-6xl mb-4">🧸</div>
          <h2 className="text-2xl font-black uppercase text-[#1e293b] mb-4">Toy Not Found</h2>
          <p className="text-black/60 mb-8 max-w-md mx-auto text-sm">
            The toy or game item you are looking for does not exist or has been relocated in our catalog.
          </p>
          <button
            className="inline-block font-black text-center whitespace-nowrap bg-[#ff4370] text-white hover:bg-[#e63560] transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            Return to Toy Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Unit";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const startingPrice = parseFloat(product.ssPrice);
  const relatedToys = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main className="bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 border-b border-black/6 font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb nav */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-bold text-black/50">
            <Link href="/" className="hover:text-[#ff4370]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#ff4370]">Shop</Link>
            <span>/</span>
            <span className="text-[#ff4370]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            
            {/* Product Image Section */}
            <div className="bg-[#fff9fa] rounded-3xl p-4 sm:p-6 border border-black/8 shadow-sm">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-black/8 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#ff4370]/10 text-[#ff4370] text-xs font-black uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  ✓ In Stock
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] mt-1 mb-3 leading-snug tracking-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 text-[#ffb703] text-sm font-bold">
                <span>★★★★★</span>
                <span className="text-xs text-black/50 font-bold">(4.9/5 based on 320+ family reviews)</span>
              </div>

              {/* Price Display */}
              <div className="text-3xl font-black text-[#ff4370] mb-4 flex items-baseline gap-2 font-mono">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs sm:text-sm font-bold text-black/50">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-black/70 mb-6 text-xs sm:text-sm leading-relaxed border-t border-black/6 pt-4 font-normal">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1e293b] mb-2">
                    Select Package &amp; Bundle Savings:
                  </h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-black/15 rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-bold text-[#1e293b] bg-[#f8fafc] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff4370] transition-all shadow-xs"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Pack of ${bundle.quantity} Units` : "Single Unit";
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
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/60"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  className="group inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-[#ff4370] text-white hover:bg-[#e63560] transition-all duration-200 py-4 px-8 rounded-full w-full cursor-pointer text-xs uppercase tracking-widest shadow-lg shadow-[#ff4370]/30 hover:scale-[1.01]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>

                {addedNotice && (
                  <div className="text-center text-xs font-bold text-emerald-600 bg-emerald-50 py-2 rounded-xl border border-emerald-200">
                    ✓ Added to your cart! Open drawer to checkout.
                  </div>
                )}
              </div>

              {/* Safety, Child Certification & Happiness Promise */}
              <div className="border-t border-black/8 pt-6 space-y-3 text-xs text-black/70">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">✓</span>
                  <span>100% Non-Toxic, BPA-Free &amp; ASTM Safety Certified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-black">✓</span>
                  <span>14-Day Full Satisfaction or Return Guarantee</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-black">✓</span>
                  <span>Fast {siteConfig.shippingCarrier} Tracked Delivery ({siteConfig.shippingPeriod} Days)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Related Toys Recommendations */}
          <div className="mt-16 pt-12 border-t border-black/8">
            <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] mb-6">
              More Toys You Might Love
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {relatedToys.map((toy) => (
                <div key={toy.id} className="toy-card p-3 rounded-2xl bg-white border border-black/8 flex flex-col justify-between">
                  <Link href={`/product/${toy.id}`} className="aspect-square rounded-xl overflow-hidden mb-2.5 block bg-black/5">
                    <img src={toy.image} alt={toy.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[0.62rem] text-[#ff4370] font-bold block">{toy.category.split("&")[0]}</span>
                      <Link href={`/product/${toy.id}`} className="text-xs font-black text-[#1e293b] line-clamp-1 hover:text-[#ff4370]">
                        {toy.name}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/6">
                      <span className="text-xs font-black text-[#ff4370]">${toy.ssPrice}</span>
                      <Link
                        href={`/product/${toy.id}`}
                        className="text-[0.65rem] font-bold uppercase text-black/60 hover:text-[#ff4370]"
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Highlights />
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
