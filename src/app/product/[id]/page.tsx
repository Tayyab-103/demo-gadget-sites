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
import ProductGalleryMarquee from "@/components/ProductGalleryMarquee";

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

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-[#FAF8F5]">
          <h2 className="text-2xl font-black uppercase text-[#191716] mb-4">Hobby Kit Not Found</h2>
          <p className="text-black/60 mb-8 max-w-md mx-auto text-sm">
            The item you are searching for is currently archived or unavailable.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-[#191716] text-white hover:bg-[#A36B42] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/")}
          >
            Return to Hobby Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const currentDisplayImage = selectedImage || product.image;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Kit Master Bundle` : "Single Kit";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const handleBuyNow = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Kit Master Bundle` : "Single Kit";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setIsCartOpen(false);
    router.push("/checkout");
  };

  const startingPrice = parseFloat(product.ssPrice);
  const originalPrice = (parseFloat(String(selectedBundle.price)) * 1.45).toFixed(2);

  // Dynamic bullet points per product
  const getProductFeatures = (id: string) => {
    if (id === "product1") {
      return [
        "Solid walnut & maple wood tournament board with folding storage",
        "Weighted Staunton wooden pieces with silent velvet felt bottoms",
        "Complete 32 chessmen plus checkers pieces included",
        "Natural organic oil finish with zero toxic varnishes or plastic",
      ];
    } else if (id === "product2") {
      return [
        "Handcrafted dual-sided wooden board with vibrant painted player pegs",
        "Includes solid brass dice and handmade wooden rolling cups",
        "Designed for 2 to 4 players for screen-free family game nights",
        "Heirloom-grade joinery built to last for generations",
      ];
    } else {
      return [
        "Over 250 master-level chess puzzles, opening tactics & logic riddles",
        "Deluxe hardcover binding with premium thick parchment paper",
        "Full-page illustrated blueprints with comprehensive solution guide",
        "Ideal for curious minds, hobbyists, and strategic thinkers of all levels",
      ];
    }
  };

  const features = getProductFeatures(product.id);

  return (
    <>
      <Header />
      <main className="bg-[#FAF8F5] py-6 sm:py-10 md:py-14 relative overflow-hidden font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="text-xs sm:text-sm text-black/55 mb-6 flex flex-wrap items-center gap-1.5 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#191716] transition-colors">
              Home
            </Link>
            <span className="text-black/30">/</span>
            <Link href="/shop" className="hover:text-[#191716] transition-colors">
              Products
            </Link>
            <span className="text-black/30">/</span>
            <span className="text-black/70">
              {product.category || "Hobby & Games"}
            </span>
            <span className="text-black/30">/</span>
            <span className="text-[#A36B42] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          {/* Main Product Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 bg-white p-5 sm:p-8 lg:p-10 rounded-3xl border border-black/10 shadow-lg shadow-black/5">
            
            {/* ─── LEFT: THUMBNAILS + MAIN IMAGE ─── */}
            <div className="flex flex-col-reverse sm:flex-row gap-4 w-full lg:w-1/2">
              
              {/* Vertical Thumbnails List */}
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 shrink-0">
                {allImages.map((img, idx) => {
                  const isActive = (selectedImage || product.image) === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-[#FAF8F5] shrink-0 ${
                        isActive
                          ? "border-[#A36B42] shadow-md ring-2 ring-[#A36B42]/20 scale-102"
                          : "border-black/10 hover:border-black/30 opacity-75 hover:opacity-100"
                      }`}
                      aria-label={`Select image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Main Selected Image */}
              <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden border border-black/10 bg-[#FAF8F5] shadow-inner group">
                <img
                  src={currentDisplayImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-black/10 shadow-xs">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#191716]">
                    {product.category || "Hobby Collection"}
                  </span>
                </div>
              </div>

            </div>

            {/* ─── RIGHT: PRODUCT DETAILS (NO RATING) ─── */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                
                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#191716] tracking-tight leading-snug mb-4">
                  {product.name}
                </h1>

                {/* Pricing Block */}
                <div className="mt-2 pb-5 border-b border-black/[0.08]">
                  <p className="text-xs text-black/50 line-through">
                    MRP: ${originalPrice}
                  </p>
                  <div className="flex items-baseline gap-2.5 mt-0.5">
                    <p className="text-2xl sm:text-3xl font-black text-[#A36B42]">
                      MRP: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                    </p>
                    {selectedBundle.quantity > 1 && (
                      <span className="text-xs text-black/50 font-medium">
                        (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / kit)
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-black/50 block mt-1">
                    (inclusive of all taxes &bull; Free US Express Shipping)
                  </span>
                </div>

                {/* About Product Section */}
                <div className="mt-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#191716] mb-3">
                    About Product
                  </p>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="list-disc ml-5 text-xs sm:text-sm text-black/70 space-y-1.5">
                    {features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Bundle / Quantity Package Selector */}
                {product.bundles && product.bundles.length > 0 && (
                  <div className="mt-6 bg-[#FAF8F5] p-4 sm:p-5 rounded-2xl border border-black/10">
                    <label htmlFor="bundle-picker" className="block text-xs font-bold uppercase tracking-wider text-[#191716] mb-2.5">
                      Select Quantity Package:
                    </label>
                    <div className="relative">
                      <select
                        id="bundle-picker"
                        value={selectedBundle.quantity}
                        onChange={(e) => {
                          const qty = parseInt(e.target.value, 10);
                          const found = product.bundles?.find((b) => b.quantity === qty);
                          if (found) setSelectedBundle(found);
                        }}
                        className="w-full bg-white border border-black/15 text-[#191716] text-xs sm:text-sm font-semibold rounded-xl px-4 py-3 pr-10 focus:outline-none focus:border-[#A36B42] focus:ring-1 focus:ring-[#A36B42] transition-all cursor-pointer shadow-xs appearance-none"
                      >
                        {product.bundles.map((bundle) => {
                          const regular = startingPrice * bundle.quantity;
                          const savings = regular - bundle.price;
                          const savingsText = bundle.quantity > 1 && savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";
                          return (
                            <option key={bundle.quantity} value={bundle.quantity}>
                              {bundle.quantity > 1 ? `${bundle.quantity} Kits Package` : "1 Kit (Single Pack)"} &mdash; ${parseFloat(String(bundle.price)).toFixed(2)}{savingsText}
                            </option>
                          );
                        })}
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#191716]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="mt-8 pt-5 border-t border-black/[0.08]">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-3.5 px-6 font-bold text-xs uppercase tracking-wider rounded-xl bg-[#FAF8F5] border border-black/15 text-[#191716] hover:bg-[#ECE8E1] transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="w-full py-3.5 px-6 font-bold text-xs uppercase tracking-wider rounded-xl bg-[#191716] hover:bg-[#A36B42] text-white transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Trust Guarantees */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 text-center border-t border-black/[0.05]">
                  <div className="text-[0.68rem] text-black/60 font-medium">
                    <span className="block text-[#A36B42] font-bold text-xs mb-0.5">✓</span> 14-Day Guarantee
                  </div>
                  <div className="text-[0.68rem] text-black/60 font-medium">
                    <span className="block text-[#A36B42] font-bold text-xs mb-0.5">✓</span> Express US Transit
                  </div>
                  <div className="text-[0.68rem] text-black/60 font-medium">
                    <span className="block text-[#A36B42] font-bold text-xs mb-0.5">✓</span> Free Part Replace
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Marquee Lookbook Stream */}
          <div className="mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-black/[0.08]">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
                Kit Showcase Stream
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#191716]">
                The {product.name} In Detail
              </h2>
            </div>

            <ProductGalleryMarquee
              images={allImages}
              productName={product.name}
            />
          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
