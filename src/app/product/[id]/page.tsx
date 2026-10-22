"use client";

import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsletterPopup from "@/components/NewsletterPopup";
import ProductCarousel from "@/components/ProductCarousel";
import QualityPromise from "@/components/QualityPromise";
import { useCart } from "@/context/CartContext";
import { fallbackImage, products, siteConfig } from "@/lib/brandIcon";
import { Bundle } from "@/types";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";


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
        <main className="w-full max-w-7xl mx-auto px-6 pt-36 pb-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Product Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The sporting goods item you are looking for does not exist or has been updated in our catalog.</p>
          <button
            className="inline-block font-black text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            Back To Shop
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
  };

  const startingPrice = parseFloat(product.ssPrice);

  return (
    <>
      <Header />
      <main className="bg-surface pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Product Image Section */}
            <div className="card p-4 sm:p-6">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div className="card p-6 sm:p-8 md:p-10">
              <span className="eyebrow">
                {product.category || "Sporting Goods & Fitness Gear"}
              </span>

              <h1 className="text-2xl md:text-3xl font-black uppercase text-primary mt-2 mb-4 leading-snug tracking-tight">
                {product.name}
              </h1>


              <div className="text-3xl font-black text-primary mb-6 flex items-baseline gap-2">
                ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                {selectedBundle.quantity > 1 && (
                  <span className="text-xs md:text-sm font-bold text-neutral-text/50 ml-1">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </span>
                )}
              </div>

              <p className="text-neutral-text/80 mb-8 text-xs md:text-sm leading-relaxed border-t border-line pt-5">
                {product.description}
              </p>

              {/* Bundle Packages Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-black uppercase tracking-wider text-primary mb-3">Choose Your Bundle:</h4>
                  <div className="relative">
                    <select
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="field appearance-none rounded-2xl px-5 py-4 font-bold text-primary cursor-pointer"
                    >
                      {product.bundles.map((bundle) => {
                        const regularPrice = startingPrice * bundle.quantity;
                        const savings = regularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Bundle of ${bundle.quantity} Units` : "Single Unit";
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
                      className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              )}

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-8">
                <button
                  className="btn-accent w-full py-4"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {/* Purchase assurances */}
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
                {[
                  { k: "Shipping", v: `${siteConfig.shippingCarrier} · ${siteConfig.shippingPeriod} days` },
                  { k: "Trial", v: `${siteConfig.trialPeriod}-day trial period` },
                  { k: "Support", v: siteConfig.phone },
                ].map((item) => (
                  <li key={item.k} className="rounded-2xl border border-line bg-surface px-4 py-3">
                    <span className="block text-[0.6rem] font-black uppercase tracking-widest text-secondary-deep">{item.k}</span>
                    <span className="block text-xs font-bold text-primary mt-0.5">{item.v}</span>
                  </li>
                ))}
              </ul>

              {/* Specifications & Packaging */}
              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-black/5 pt-8 mt-8">
                  <h3 className="text-base md:text-lg font-black text-primary mb-2 uppercase tracking-tight">Specs &amp; Build Details</h3>
                  <p className="text-xs text-neutral-text/60 mb-5 leading-relaxed">
                    {`Inspected and shipped from Austin, TX. Covered by our ${siteConfig.trialPeriod}-day trial period.`}
                  </p>

                  <div className="bg-neutral-bg border border-black/5 rounded-2xl p-5 flex items-center justify-center shadow-inner">
                    <img
                      src={product.ingredientsImage}
                      alt={`${product.name} specifications and details`}
                      className="max-w-full h-auto rounded-xl max-h-[300px] object-cover bg-white p-1 border border-black/5"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
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
