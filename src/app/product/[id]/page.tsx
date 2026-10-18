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

const siteConfig = siteConfigData as unknown as SiteConfig;

const products = productsData as unknown as Product[];

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
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-neutral-bg">
          <h2 className="text-2xl font-extrabold uppercase text-neutral-text mb-4">Tool Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The garden tool you are searching for is not available in our catalog.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-secondary text-white hover:bg-secondary-dark transition-all py-3.5 px-8 rounded-lg text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/shop")}
          >
            Browse All Tools
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Tool Pack Bundle` : "Single Tool Edition";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Tool Pack Bundle` : "Single Tool Edition";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setIsCartOpen(true);
  };

  const currentPriceNum = parseFloat(String(selectedBundle.price));
  const originalPrice = (currentPriceNum * 1.35).toFixed(2);

  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-10 md:py-16 relative overflow-hidden min-h-[75vh]">
        {/* Toast Notification */}
        {addedToast && (
          <div className="fixed top-24 right-6 z-50 bg-primary text-white px-5 py-3 rounded-2xl shadow-2xl border border-secondary flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <span className="text-accent-light font-black">✓</span>
            <span className="text-xs font-bold">Added {product.name} to cart!</span>
          </div>
        )}

        <div className="max-w-6xl w-full px-6 mx-auto">
          {/* Breadcrumbs */}
          <p className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-neutral-text transition-colors">Home</Link> /
            <Link href="/shop" className="hover:text-neutral-text transition-colors">Products</Link> /
            <span className="text-gray-600">{product.category}</span> /
            <span className="text-secondary font-bold">{product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mt-6 items-start">
            {/* Gallery Left Section */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto">
              {/* Vertical Thumbnail List */}
              {productImages.length > 1 && (
                <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                  {productImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      onMouseEnter={() => setSelectedImage(img)}
                      className={`border max-w-20 sm:max-w-24 border-gray-500/30 rounded-xl overflow-hidden cursor-pointer aspect-square transition-all ${
                        selectedImage === img
                          ? "border-secondary ring-2 ring-secondary/30 shadow-md"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = product.image;
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Main Selected Product Image */}
              <div className="border border-gray-500/30 max-w-full sm:max-w-[420px] md:max-w-[460px] aspect-square rounded-2xl overflow-hidden bg-white shadow-sm flex items-center justify-center relative">
                <img
                  src={selectedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/products/garden_tools/trowel_1.jpg";
                  }}
                />
              </div>
            </div>

            {/* Product Info & Actions Right Section */}
            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-medium text-neutral-text">{product.name}</h1>

              {/* Star Ratings */}
              <div className="flex items-center gap-0.5 mt-2">
                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="var(--secondary-color)" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="var(--secondary-color)" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="var(--secondary-color)" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" fill="var(--secondary-color)" />
                </svg>
                <svg width="14" height="13" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z" fill="var(--secondary-color)" fillOpacity="0.35" />
                </svg>
                <p className="text-base ml-2 text-gray-700">(4)</p>
              </div>

              {/* Price MRP */}
              <div className="mt-6">
                <p className="text-gray-500/70 line-through text-sm">MRP: ${originalPrice}</p>
                <p className="text-2xl sm:text-3xl font-medium text-neutral-text">
                  MRP: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </p>
                <span className="text-gray-500/70 text-xs">(inclusive of all taxes)</span>
              </div>

              {/* Bundle Selection Options */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Select Quantity Tier:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.bundles.map((bundle) => {
                      const isSelected = selectedBundle.quantity === bundle.quantity;
                      return (
                        <button
                          key={bundle.quantity}
                          type="button"
                          onClick={() => setSelectedBundle(bundle)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                            isSelected
                              ? "border-primary bg-neutral-bg text-neutral-text ring-1 ring-primary"
                              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {bundle.quantity} {bundle.quantity === 1 ? "Unit" : "Units"} • ${bundle.price}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* About Product */}
              <p className="text-base font-medium mt-6 text-neutral-text">About Product</p>
              <ul className="list-disc ml-4 text-gray-500/70 space-y-1 mt-2 text-sm">
                <li>{product.description}</li>
                <li>Free {siteConfig.shippingCarrier} shipping — delivered in {siteConfig.shippingPeriod} business days</li>
                <li>{siteConfig.trialPeriod}-day satisfaction trial</li>
                <li>Friendly support at {siteConfig.phone}</li>
              </ul>

              {/* Action Buttons */}
              <div className="flex items-center mt-10 gap-4 text-base">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 rounded-lg transition cursor-pointer text-center"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 font-medium bg-primary hover:bg-secondary text-white rounded-lg transition cursor-pointer text-center shadow-md"
                >
                  Buy now
                </button>
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
