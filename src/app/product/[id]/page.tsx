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
import ProductCarousel from "@/components/ProductCarousel";

const products = productsData as unknown as Product[];
const siteConfig = siteConfigData as unknown as SiteConfig;

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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center">
          <h2 className="text-2xl font-extrabold text-ink mb-3">Tool not found</h2>
          <p className="text-muted mb-8 max-w-md mx-auto text-sm">
            The kitchen tool you&rsquo;re looking for doesn&rsquo;t exist or is no longer in our catalog.
          </p>
          <button className="btn-primary" onClick={() => router.push("/")}>
            Back to home
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const baseItemPrice = parseFloat(product.ssPrice);
  const regularPrice = baseItemPrice * selectedBundle.quantity;
  const currentSavings = regularPrice - selectedBundle.price;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack` : "Single tool";

    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const handleBundleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = parseInt(e.target.value, 10);
    const foundBundle = product.bundles?.find((b) => b.quantity === qty);
    if (foundBundle) {
      setSelectedBundle(foundBundle);
    }
  };

  const perks = [
    { title: "Free shipping", text: `${siteConfig.shippingCarrier}, ${siteConfig.shippingPeriod} business days` },
    { title: `${siteConfig.trialPeriod}-day returns`, text: "Refund if it isn't right" },
    { title: "One-time purchase", text: "No subscription" },
  ];

  return (
    <>
      <Header />
      <main className="bg-surface py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 text-xs text-muted mb-8">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-ink transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-ink font-semibold truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />

            <div>
              <span className="inline-block rounded-full bg-neutral-bg px-3 py-1 text-xs font-semibold text-muted">
                {product.category}
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink leading-tight">
                {product.name}
              </h1>

              <div className="mt-6 flex items-end gap-3 flex-wrap">
                <span className="text-4xl font-extrabold text-ink">${parseFloat(String(selectedBundle.price)).toFixed(2)}</span>
                {selectedBundle.quantity > 1 && (
                  <span className="text-sm text-muted mb-1.5">
                    ${(parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2)} each
                  </span>
                )}
                {selectedBundle.quantity > 1 && currentSavings > 0 && (
                  <span className="mb-1.5 rounded-full bg-primary text-primary-text text-xs font-bold px-3 py-1">
                    Save ${currentSavings.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted">One-time charge &middot; Free shipping included</p>

              <p className="mt-6 pt-6 border-t border-line text-muted leading-relaxed">{product.description}</p>

              {product.bundles && product.bundles.length > 0 && (
                <div className="mt-8">
                  <label htmlFor="bundle-select" className="block text-sm font-bold text-ink mb-2.5">
                    Quantity
                  </label>
                  <div className="relative">
                    <select
                      id="bundle-select"
                      value={selectedBundle.quantity}
                      onChange={handleBundleChange}
                      className="field appearance-none cursor-pointer pr-12 py-4! font-medium"
                    >
                      {product.bundles.map((bundle) => {
                        const savings = baseItemPrice * bundle.quantity - bundle.price;
                        const savingsLabel = savings > 0 && bundle.quantity > 1
                          ? ` (save $${savings.toFixed(2)} — $${(bundle.price / bundle.quantity).toFixed(2)} each)`
                          : "";
                        const label = bundle.quantity === 1
                          ? `1 tool — $${bundle.price.toFixed(2)}`
                          : `${bundle.quantity}-pack — $${bundle.price.toFixed(2)}${savingsLabel}`;

                        return (
                          <option key={bundle.quantity} value={bundle.quantity}>
                            {label}
                          </option>
                        );
                      })}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <button className="btn-primary w-full mt-6 py-4! text-base!" onClick={handleAddToCart}>
                Add to cart &mdash; ${parseFloat(String(selectedBundle.price)).toFixed(2)}
              </button>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {perks.map((perk) => (
                  <li key={perk.title} className="rounded-2xl bg-neutral-bg p-4">
                    <span className="block text-sm font-bold text-ink">{perk.title}</span>
                    <span className="block text-xs text-muted mt-0.5">{perk.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
