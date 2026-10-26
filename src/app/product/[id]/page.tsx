"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Bundle } from "@/types";
import { products, siteConfig, trialDays } from "@/lib/brandIcon";
import ProductCarousel from "@/components/ProductCarousel";
import QualityPromise from "@/components/QualityPromise";
import NewsletterPopup from "@/components/NewsletterPopup";

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

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-44 pb-28 text-center">
          <h1 className="text-2xl font-black uppercase text-ink mb-4">Product not found</h1>
          <p className="text-muted mb-8 max-w-md mx-auto text-sm">
            The item you are looking for doesn&apos;t exist or is no longer in our collection.
          </p>
          <button className="btn-plum" onClick={() => router.push("/shop")}>
            Back to the shop
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

  const singlePrice = parseFloat(product.ssPrice);
  const selectedPrice = parseFloat(String(selectedBundle.price));
  const bundles = product.bundles && product.bundles.length > 0 ? product.bundles : [selectedBundle];

  const perks = [
    { title: `Free ${siteConfig.shippingCarrier} shipping`, desc: `Delivered in ${siteConfig.shippingPeriod} business days` },
    { title: `${trialDays}-day returns`, desc: "Contact us to start a return" },
    { title: "One-time charge", desc: "No subscription, ever" },
  ];

  return (
    <>
      <Header />
      <main className="bg-neutral-bg pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span aria-hidden="true">/</span>
            <span className="text-primary truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div className="card p-3 sm:p-4">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            <div className="card p-6 sm:p-8 md:p-10 flex flex-col">
              <span className="eyebrow">{product.category}</span>
              <h1 className="mt-3 text-3xl sm:text-4xl font-black uppercase text-ink leading-[1.05] tracking-tight">
                {product.name}
              </h1>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-4xl font-black text-primary leading-none">${selectedPrice.toFixed(2)}</span>
                {selectedBundle.quantity > 1 && (
                  <span className="text-sm font-bold text-muted pb-0.5">
                    ${(selectedPrice / selectedBundle.quantity).toFixed(2)} each
                  </span>
                )}
              </div>

              <p className="mt-5 pt-5 border-t border-line text-sm text-muted leading-relaxed">{product.description}</p>

              {bundles.length > 1 && (
                <fieldset className="mt-7">
                  <legend className="text-xs font-black uppercase tracking-[0.14em] text-ink mb-3">Choose your pack</legend>
                  <div className="grid grid-cols-4 gap-2">
                    {bundles.map((bundle) => {
                      const active = bundle.quantity === selectedBundle.quantity;
                      const savings = singlePrice * bundle.quantity - bundle.price;
                      return (
                        <button
                          key={bundle.quantity}
                          type="button"
                          onClick={() => setSelectedBundle(bundle)}
                          aria-pressed={active}
                          className={`relative rounded-2xl border-2 px-1 py-3 text-center transition-all cursor-pointer ${
                            active ? "border-primary bg-primary text-primary-text" : "border-line bg-white text-ink hover:border-primary/40"
                          }`}
                        >
                          <span className="block text-lg font-black leading-none">{bundle.quantity}x</span>
                          <span className={`block mt-1 text-[0.68rem] font-bold ${active ? "text-secondary" : "text-muted"}`}>
                            ${bundle.price.toFixed(2)}
                          </span>
                          {bundle.quantity > 1 && savings > 0.5 && (
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-secondary text-secondary-text px-1.5 py-0.5 text-[0.55rem] font-black">
                              -${savings.toFixed(0)}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              )}

              <button className="btn-gold w-full mt-7 !py-4" onClick={handleAddToCart}>
                Add to cart · ${selectedPrice.toFixed(2)}
              </button>

              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {perks.map((perk) => (
                  <li key={perk.title} className="rounded-2xl bg-mist px-4 py-3.5">
                    <span className="block text-[0.7rem] font-black uppercase tracking-[0.08em] text-primary">{perk.title}</span>
                    <span className="block mt-0.5 text-[0.7rem] text-muted">{perk.desc}</span>
                  </li>
                ))}
              </ul>

              {product.showIngredients && product.ingredientsImage && (
                <div className="border-t border-line pt-6 mt-7">
                  <h3 className="text-sm font-black text-ink mb-4 uppercase tracking-tight">Product details &amp; materials</h3>
                  <img
                    src={product.ingredientsImage}
                    alt={`${product.name} materials and details`}
                    className="max-w-full h-auto rounded-xl max-h-[260px] object-cover border border-line"
                  />
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
