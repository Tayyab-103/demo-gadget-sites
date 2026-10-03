"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import productsData from "../../../../config/products.json";
import { useCart } from "@/context/CartContext";
import { Product, Bundle } from "@/types";

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
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-28 text-center bg-[#FAFAFA]">
          <h2 className="text-2xl font-black uppercase text-[#4C0519] mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm font-medium">
            The item you are looking for is not available in our catalog.
          </p>
          <button
            className="inline-block font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
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
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Item";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Item";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setIsCartOpen(true);
  };

  const currentPriceNum = parseFloat(String(selectedBundle.price));
  const originalPrice = (currentPriceNum * 1.35).toFixed(2);

  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] py-10 md:py-16 relative overflow-hidden min-h-[75vh]">
        {/* Toast Notification */}
        {addedToast && (
          <div className="fixed top-24 right-6 z-50 bg-[#4C0519] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#D2446D] flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <span className="text-[#D2446D] font-black">✓</span>
            <span className="text-xs font-bold">Added {product.name} to cart!</span>
          </div>
        )}

        <div className="max-w-6xl w-full px-4 sm:px-6 mx-auto">
          {/* Breadcrumbs */}
          <p className="text-xs sm:text-sm text-gray-500 font-medium flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#4C0519] transition-colors">Home</Link> /
            <Link href="/shop" className="hover:text-[#4C0519] transition-colors">Products</Link> /
            <span className="text-gray-600">{product.category}</span> /
            <span className="text-[#D2446D] font-bold">{product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mt-6 items-start">
            {/* Gallery Left Section */}
            <div className="flex flex-col-reverse sm:flex-row gap-3 w-full md:w-auto">
              {/* Vertical / Horizontal Thumbnail List */}
              {productImages.length > 1 && (
                <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                  {productImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      onMouseEnter={() => setSelectedImage(img)}
                      className={`border max-w-20 sm:max-w-24 border-gray-500/30 rounded-xl overflow-hidden cursor-pointer aspect-square transition-all ${
                        selectedImage === img
                          ? "border-[#D2446D] ring-2 ring-[#D2446D]/30 shadow-md"
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
                    e.currentTarget.src = "/img/gallery1.jpg";
                  }}
                />
              </div>
            </div>

            {/* Product Info & Actions Right Section */}
            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-2xl sm:text-3xl font-medium text-[#000000]">{product.name}</h1>

              {/* Price MRP */}
              <div className="mt-4">
                <p className="text-gray-500/70 line-through text-sm">MRP: ${originalPrice}</p>
                <p className="text-2xl sm:text-3xl font-medium text-[#000000]">
                  MRP: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </p>
                <span className="text-gray-500/70 text-xs">(inclusive of all taxes)</span>
              </div>

              {/* Bundle Selection Options */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Select Volume / Set Tier:
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
                              ? "border-[#4C0519] bg-rose-50 text-[#4C0519] ring-1 ring-[#4C0519]"
                              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {bundle.quantity} {bundle.quantity === 1 ? "Volume" : "Volumes"} • ${bundle.price}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* About Product */}
              <p className="text-base font-medium mt-6 text-[#000000]">About This Edition</p>
              <ul className="list-disc ml-4 text-gray-500/70 space-y-1 mt-2 text-sm">
                <li>{product.description}</li>
                <li>120gsm acid-free cream paper with Smyth-sewn lay-flat binding</li>
                <li>Deluxe hot-stamped foil details and custom bookmark ribbon</li>
                <li>Fast courier delivery in reinforced moisture-barrier packaging</li>
              </ul>

              {/* Action Buttons */}
              <div className="flex items-center mt-8 gap-4 text-base">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full py-3.5 font-bold bg-white text-gray-800 hover:bg-rose-50 border border-rose-200 hover:border-[#D2446D] rounded-xl transition cursor-pointer text-center"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 font-bold bg-[#4C0519] hover:bg-[#D2446D] text-white rounded-xl transition cursor-pointer text-center shadow-md hover:shadow-lg"
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
