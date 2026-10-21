"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  const { addToCart, setIsCartOpen } = useCart();

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);
  const [selectedImage, setSelectedImage] = useState<string>(product?.image || "");
  const [addedToast, setAddedToast] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      if (product.bundles && product.bundles.length > 0) {
        setSelectedBundle(product.bundles[0]);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center">
          <h2 className="text-2xl font-black uppercase text-neutral-text mb-4">Product Not Found</h2>
          <p className="text-muted mb-8 max-w-md mx-auto text-sm">
            The item you are looking for is not available in our catalog.
          </p>
          <button
            className="btn-primary py-3.5 px-8 text-xs uppercase tracking-widest"
            onClick={() => router.push("/shop")}
          >
            Return to Store
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Item Edition";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Item Edition";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setIsCartOpen(true);
  };

  const currentPriceNum = parseFloat(String(selectedBundle.price));
  const originalPrice = (currentPriceNum * 1.35).toFixed(2);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-10 md:py-16 relative overflow-hidden min-h-[75vh]">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />

        {addedToast && (
          <div className="fixed top-24 right-4 sm:right-6 z-50 bg-neutral-bg/90 backdrop-blur-xl text-neutral-text px-5 py-3 rounded-2xl shadow-2xl border border-primary/50 flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-brand-gradient text-white flex items-center justify-center text-xs font-black">✓</span>
            <span className="text-xs font-bold">Added {product.name} to cart!</span>
          </div>
        )}

        <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 mx-auto">
          {/* Breadcrumbs */}
          <p className="text-xs sm:text-sm text-faint flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-neutral-text transition-colors">Home</Link> /
            <Link href="/shop" className="hover:text-neutral-text transition-colors">Shop</Link> /
            <span>{product.category}</span> /
            <span className="text-primary-light font-bold">{product.name}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 mt-8 items-start">
            {/* Gallery */}
            <div className="flex flex-col-reverse sm:flex-row gap-3">
              {productImages.length > 1 && (
                <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      onMouseEnter={() => setSelectedImage(img)}
                      className={`w-20 sm:w-22 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer aspect-square border-2 transition-all ${
                        selectedImage === img ? "border-primary shadow-lg shadow-primary/30" : "border-line opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex-1 rounded-[2rem] p-[1.5px] bg-brand-gradient">
                <div className="aspect-square rounded-[1.95rem] overflow-hidden bg-surface">
                  <img
                    src={selectedImage || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="text-sm">
              <span className="eyebrow">{product.category}</span>
              <h1 className="mt-4 text-3xl sm:text-4xl font-black text-neutral-text tracking-tight leading-tight">{product.name}</h1>
              <div className="mt-3 flex items-center gap-2 text-xs text-faint">
                <span className="text-amber-400">★★★★★</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> In Stock
                </span>
              </div>

              <div className="mt-6 flex items-end gap-3">
                <p className="text-4xl font-black text-neutral-text">${currentPriceNum.toFixed(2)}</p>
                <p className="text-faint line-through text-base mb-1">${originalPrice}</p>
              </div>
              <span className="text-faint text-xs">One-time charge &middot; Free {siteConfig.shippingCarrier} shipping included</span>

              {product.bundles && product.bundles.length > 0 && (
                <div className="mt-7">
                  <p className="text-[0.68rem] font-black uppercase tracking-widest text-faint mb-3">Choose your bundle</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {product.bundles.map((bundle) => {
                      const isSelected = selectedBundle.quantity === bundle.quantity;
                      return (
                        <button
                          key={bundle.quantity}
                          type="button"
                          onClick={() => setSelectedBundle(bundle)}
                          className={`px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                            isSelected
                              ? "border-primary bg-primary-soft ring-1 ring-primary"
                              : "border-line bg-surface hover:border-primary/50"
                          }`}
                        >
                          <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-faint">
                            {bundle.quantity} {bundle.quantity === 1 ? "Unit" : "Units"}
                          </span>
                          <span className="block text-sm font-black text-neutral-text">${bundle.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={handleAddToCart} className="btn-ghost w-full py-4 text-sm uppercase tracking-widest">
                  Add to Cart
                </button>
                <button type="button" onClick={handleBuyNow} className="btn-primary w-full py-4 text-sm uppercase tracking-widest">
                  Buy Now →
                </button>
              </div>

              <div className="mt-8 card p-6">
                <p className="text-sm font-black text-neutral-text mb-3">About this product</p>
                <p className="text-muted leading-relaxed">{product.description}</p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <li className="rounded-xl border border-line bg-neutral-bg p-3">
                    <span className="block font-black text-neutral-text">{siteConfig.shippingPeriod} Days</span>
                    <span className="text-faint">{siteConfig.shippingCarrier} delivery</span>
                  </li>
                  <li className="rounded-xl border border-line bg-neutral-bg p-3">
                    <span className="block font-black text-neutral-text">{siteConfig.trialPeriod}-Day</span>
                    <span className="text-faint">Return window</span>
                  </li>
                  <li className="rounded-xl border border-line bg-neutral-bg p-3">
                    <span className="block font-black text-neutral-text">Inspected</span>
                    <span className="text-faint">Before it ships</span>
                  </li>
                </ul>
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
