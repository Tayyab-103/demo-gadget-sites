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
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-black text-white">
          <h2 className="text-2xl font-serif uppercase mb-4 tracking-wider">Atelier Creation Not Found</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">
            The timepiece, jewelry piece, or silverware set you are seeking has been archived or is no longer available.
          </p>
          <button
            className="inline-block font-bold text-center uppercase tracking-widest bg-white text-black hover:bg-[#C6A15B] hover:text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs cursor-pointer shadow-lg"
            onClick={() => router.push("/")}
          >
            Return to Atelier
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
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Piece Suite` : "Single Piece";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
  };

  const handleBuyNow = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Piece Suite` : "Single Piece";
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setIsCartOpen(false);
    router.push("/checkout");
  };

  const startingPrice = parseFloat(product.ssPrice);
  const originalPrice = (parseFloat(String(selectedBundle.price)) * 1.5).toFixed(2);

  // Dynamic luxury bullet points per product
  const getProductFeatures = (id: string) => {
    if (id === "product1") {
      return [
        "Solid 18K Yellow Gold with authentic atelier hallmark stamp",
        "Hand-selected conflict-free brilliant-cut diamond solitaire & South Sea pearl",
        "Adjustable 16-18 inch diamond-cut link chain with secure lobster clasp",
        "Presented in our signature velvet-lined lacquer keepsake box with appraisal certificate",
      ];
    } else if (id === "product2") {
      return [
        "Bespoke 28-jewel automatic self-winding mechanical movement with 42-hour power reserve",
        "Dual-curved scratch-proof sapphire crystal with multi-layer anti-reflective coating",
        "Surgical-grade 316L stainless steel case with exhibition glass back",
        "Full-grain hand-stitched leather strap with quick-release deployment buckle",
      ];
    } else {
      return [
        "Masterfully forged in heavyweight 925 Sterling Silver with mirror hand-polish",
        "Includes whisper-silent pendulum mantel clock with brushed brass movement",
        "Tarnish-resistant protective coating for effortless maintenance",
        "Individual serial number stamp with lifetime craftsmanship warranty",
      ];
    }
  };

  const features = getProductFeatures(product.id);

  return (
    <>
      <Header />
      <main className="bg-[#07130E] text-white py-8 sm:py-12 md:py-16 relative overflow-hidden font-sans">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="text-xs sm:text-sm text-white/50 mb-8 flex flex-wrap items-center gap-2 tracking-wider" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/shop" className="hover:text-[#D4AF37] transition-colors">
              Products
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/70">
              {product.category || "Jewelry & Horology"}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-[#D4AF37] font-medium truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>

          {/* Main Product Showcase Box */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 bg-[#0C1E17] p-6 sm:p-10 rounded-3xl border border-[#D4AF37]/25 shadow-2xl shadow-black/50">
            
            {/* ─── LEFT: THUMBNAIL LIST + MAIN IMAGE ─── */}
            <div className="flex flex-col-reverse sm:flex-row gap-4 w-full lg:w-1/2">
              
              {/* Vertical Thumbnails */}
              <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 shrink-0">
                {allImages.map((img, idx) => {
                  const isActive = (selectedImage || product.image) === img;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-[#07130E] shrink-0 ${
                        isActive
                          ? "border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]/30 scale-102"
                          : "border-white/10 hover:border-[#D4AF37]/40 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Select thumbnail ${idx + 1}`}
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
              <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#07130E] shadow-2xl group">
                <img
                  src={currentDisplayImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 bg-[#0C1E17]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 shadow-md">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#D4AF37]">
                    {product.category || "Atelier Masterpiece"}
                  </span>
                </div>
              </div>

            </div>

            {/* ─── RIGHT: PRODUCT DETAILS (NO RATING) ─── */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                
                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white tracking-tight leading-snug mb-4">
                  {product.name}
                </h1>

                {/* Pricing Block */}
                <div className="mt-2 pb-5 border-b border-white/10">
                  <p className="text-xs text-white/40 line-through tracking-wider">
                    MRP: ${originalPrice}
                  </p>
                  <div className="flex items-baseline gap-3 mt-1">
                    <p className="text-2xl sm:text-3xl font-black text-[#D4AF37] tracking-tight">
                      MRP: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                    </p>
                    {selectedBundle.quantity > 1 && (
                      <span className="text-xs text-white/50 font-medium">
                        (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / piece)
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-white/50 block mt-1.5">
                    (inclusive of all taxes &bull; Complimentary Insured US Delivery)
                  </span>
                </div>

                {/* About Product */}
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-3">
                    About This Piece
                  </p>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <ul className="list-disc ml-5 text-xs sm:text-sm text-white/70 space-y-2">
                    {features.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Bundle / Quantity Package Selector */}
                {product.bundles && product.bundles.length > 0 && (
                  <div className="mt-6 bg-[#07130E] p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/20">
                    <label htmlFor="bundle-picker" className="block text-xs font-bold uppercase tracking-widest text-white/90 mb-2.5">
                      Select Atelier Package Suite:
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
                        className="w-full bg-[#0C1E17] border border-[#D4AF37]/30 text-white text-xs sm:text-sm font-medium rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer shadow-inner appearance-none"
                      >
                        {product.bundles.map((bundle) => {
                          const regular = startingPrice * bundle.quantity;
                          const savings = regular - bundle.price;
                          const savingsText = bundle.quantity > 1 && savings > 0 ? ` (Save $${savings.toFixed(2)})` : "";
                          return (
                            <option key={bundle.quantity} value={bundle.quantity} className="bg-[#0C1E17] text-white">
                              {bundle.quantity > 1 ? `${bundle.quantity}-Piece Heirloom Collection` : "1 Piece (Single Atelier Order)"} &mdash; ${parseFloat(String(bundle.price)).toFixed(2)}{savingsText}
                            </option>
                          );
                        })}
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D4AF37]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Action Buttons: Add to Cart & Buy Now */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center gap-3.5">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="w-full py-4 px-6 font-bold text-xs uppercase tracking-widest rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 cursor-pointer shadow-sm active:scale-98"
                  >
                    Add to Cart
                  </button>
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    className="w-full py-4 px-6 font-bold text-xs uppercase tracking-widest rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] hover:opacity-95 transition-all duration-300 cursor-pointer shadow-lg shadow-[#D4AF37]/25 active:scale-98"
                  >
                    Buy Now
                  </button>
                </div>

                {/* Trust Guarantees */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-4 text-center border-t border-white/10">
                  <div className="text-[0.68rem] text-white/60 font-medium">
                    <span className="block text-[#D4AF37] font-bold text-xs mb-0.5">✦</span> 14-Day Inspection
                  </div>
                  <div className="text-[0.68rem] text-white/60 font-medium">
                    <span className="block text-[#D4AF37] font-bold text-xs mb-0.5">✦</span> Insured Delivery
                  </div>
                  <div className="text-[0.68rem] text-white/60 font-medium">
                    <span className="block text-[#D4AF37] font-bold text-xs mb-0.5">✦</span> Certified Hallmark
                  </div>
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
