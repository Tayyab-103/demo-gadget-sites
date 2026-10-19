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
  "Impact-resistant, expedition-tested construction",
  "Ergonomic design built for long journeys and rugged transit",
  "Backed by a comprehensive 1-year manufacturer warranty",
];

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  // Set default selected bundle (usually the 1 bottle or the most popular one)
  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Product Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">The product you are looking for does not exist or has been removed from our catalog.</p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text border border-transparent hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Home
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    // Calculate unit price for cart context
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Pack";

    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  const startingPrice = parseFloat(product.ssPrice);
  const regularPrice = startingPrice * selectedBundle.quantity;
  const showStrikePrice = regularPrice > selectedBundle.price;

  return (
    <>
      <Header />
      <main className="bg-white py-10 md:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-text/50">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/shop" className="hover:text-secondary transition-colors">Products</Link>
            <span aria-hidden="true">/</span>
            <span>{product.category || "Travel Gear"}</span>
            <span aria-hidden="true">/</span>
            <span className="text-secondary">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Product Image Section */}
            <div className="bg-neutral-bg rounded-2xl p-6 md:p-10">
              <ProductCarousel images={product.images && product.images.length > 0 ? product.images : [product.image]} name={product.name} />
            </div>

            {/* Product Details Section */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-snug">
                {product.name}
              </h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-neutral-text/50">(14)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {showStrikePrice && (
                  <div className="text-sm text-neutral-text/40 line-through">
                    MRP: ${regularPrice.toFixed(2)}
                  </div>
                )}
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  MRP: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </div>
                <p className="text-xs text-neutral-text/45 mt-1">(inclusive of all taxes)</p>
              </div>

              {/* About Product */}
              <div className="mb-8 pb-8 border-b border-black/5">
                <h3 className="text-sm font-bold text-primary mb-3">About Product</h3>
                <ul className="flex flex-col gap-2">
                  {highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-neutral-text/65">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bundle Quantity Dropdown */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8">
                  <label htmlFor="bundle-select" className="block text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Select Package Quantity
                  </label>
                  <div className="relative">
                    <select
                      id="bundle-select"
                      value={selectedBundle.quantity}
                      onChange={(e) => {
                        const bundle = product.bundles?.find((b) => b.quantity === Number(e.target.value));
                        if (bundle) setSelectedBundle(bundle);
                      }}
                      className="w-full appearance-none border border-black/10 rounded-xl px-5 py-4 text-sm font-bold text-primary bg-white cursor-pointer focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    >
                      {product.bundles.map((bundle) => {
                        const bundleRegularPrice = startingPrice * bundle.quantity;
                        const savings = bundleRegularPrice - bundle.price;
                        const label = bundle.quantity > 1 ? `Pack of ${bundle.quantity}` : "Single Unit";
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

              {/* Add to Cart / Buy Now Actions */}
              <div className="flex gap-4 mb-10">
                <button
                  className="flex-1 font-bold text-center whitespace-nowrap bg-neutral-bg text-primary border border-black/10 hover:border-primary/30 transition-all duration-300 py-4 px-6 rounded-full cursor-pointer text-sm"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="flex-1 font-bold text-center whitespace-nowrap bg-secondary text-secondary-text hover:brightness-110 transition-all duration-300 py-4 px-6 rounded-full cursor-pointer text-sm shadow-md hover:shadow-lg"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>

              <p className="text-sm text-neutral-text/65 leading-relaxed mb-10">
                {product.description}
              </p>

              {/* What's In The Box */}
              {product.boxContents && product.boxContents.length > 0 && (
                <div className="border-t border-black/5 pt-8">
                  <h3 className="text-base md:text-lg font-bold text-primary mb-4">What&apos;s In The Box</h3>
                  <ul className="flex flex-col gap-2.5">
                    {product.boxContents.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-text/65">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-neutral-text/45 mt-5 leading-relaxed">
                    Backed by a 1-year manufacturer&apos;s warranty against defects.
                  </p>
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
