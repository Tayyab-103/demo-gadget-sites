"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

interface ProductExtraSpecs {
  tagline: string;
  specs: { label: string; value: string; desc: string }[];
  boxContents: string[];
  protocols: { phase: string; title: string; desc: string }[];
}

const detailedSpecs: Record<string, ProductExtraSpecs> = {
  product1: {
    tagline: "15-Layer Continuous-Dip Natural Malaysian Latex",
    specs: [
      { label: "Tensile Resistance", value: "Up to 150 LBS", desc: "5 Color-coded progressive loading levels" },
      { label: "Material Architecture", value: "Multi-Dip Latex", desc: "100% Malaysian snap-resistant natural latex" },
      { label: "Hardware Core", value: "Cold-Forged Steel", desc: "Heavy-duty mountain-grade carabiner clips" },
      { label: "Anchoring System", value: "High-Density Foam", desc: "Door & doorframe non-abrasive protective core" },
    ],
    boxContents: [
      "5 Pro-Calibrated Latex Resistance Bands",
      "2 Heavy-Duty Cushioned Foam Handles",
      "2 Neoprene Non-Slip Ankle Straps",
      "1 Reinforced Door Anchor with Safety Core",
      "1 Waterproof Breathable Oxford Carry Case",
    ],
    protocols: [
      { phase: "Phase 1: Mobility Activation", title: "Rotator Cuff & Joint Warmup", desc: "Use the 10lb Yellow & 20lb Green bands for 15-20 reps to prep synovial fluid." },
      { phase: "Phase 2: Hypertrophy Loading", title: "Compound Progressive Resistance", desc: "Stack the 40lb Red & 50lb Black bands for 4 sets of 10-12 tempo-controlled reps." },
      { phase: "Phase 3: Ischemic Finisher", title: "End-Range Isometric Holds", desc: "30-second burnout holds on peak contraction to trigger maximum blood volume." },
    ],
  },
  product2: {
    tagline: "Precision Optical PPG Wearable Bio-Array",
    specs: [
      { label: "Heart Rate Precision", value: "100 Hz Optical Array", desc: "Continuous Quad-LED optical PPG sensor" },
      { label: "Battery Runtime", value: "10 Days Active", desc: "High-density Lithium Polymer micro-cell" },
      { label: "Waterproof Rating", value: "5ATM (50 Meters)", desc: "Hermetically sealed titanium alloy chassis" },
      { label: "Connectivity", value: "Bluetooth 5.3 Low Energy", desc: "Real-time sync to iOS & Android" },
    ],
    boxContents: [
      "1 PulseFit Tracker Core Sensor",
      "1 Hypoallergenic Fluoroelastomer Sport Strap",
      "1 Magnetic Quick-Snap Fast Charge Cable",
      "Quick Start Pairing Guide",
      "1-Year Global Warranty Certificate",
    ],
    protocols: [
      { phase: "Phase 1: Real-Time Strain", title: "Intra-Workout Heart Rate Zones", desc: "Monitor Zone 2 through Zone 5 cardio strain with live haptic alerts." },
      { phase: "Phase 2: Recovery Index", title: "Overnight HRV & Sleep Scoring", desc: "Tracks REM, deep sleep, and autonomic nervous system recovery balance." },
      { phase: "Phase 3: Workload Trends", title: "Weekly Volume Optimization", desc: "Prevents overtraining by benchmarking daily physiological readiness." },
    ],
  },
  product3: {
    tagline: "WhisperQuiet™ 3,200 RPM High-Torque Motor",
    specs: [
      { label: "Kinetic Velocity", value: "3,200 RPM", desc: "5 Adjustable therapeutic speed settings" },
      { label: "Stall Force", value: "45 lbs Pressure", desc: "High-torque brushless motor architecture" },
      { label: "Stroke Amplitude", value: "12mm Deep Tissue", desc: "Fascia-penetrating percussive stroke" },
      { label: "Battery Capacity", value: "200 min Runtime", desc: "2600mAh 3S Lithium-Ion pack with USB-C" },
    ],
    boxContents: [
      "1 PowerCore Percussion Massager Gun",
      "6 Specialized Therapeutic Head Attachments",
      "1 USB-C Fast Charging Adapter & Cable",
      "1 Hard-Shell EVA Custom Travel Case",
      "Detailed Muscle Anatomy Guide",
    ],
    protocols: [
      { phase: "Phase 1: Pre-Workout", title: "Fast Muscle Activation", desc: "1-2 minutes per muscle group on Speed 1-2 to stimulate blood circulation." },
      { phase: "Phase 2: Intra-Set", title: "Trigger Point Spasm Release", desc: "Target localized knots with the bullet attachment on Speed 3." },
      { phase: "Phase 3: Post-Workout", title: "Deep Lactic Acid Flush", desc: "3-5 minutes on Speed 4-5 across major muscle bellies to eliminate soreness." },
    ],
  },
};

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const productId = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const product = products.find((p) => p.id === productId);

  // Fallback defaults
  const defaultBundle: Bundle = product?.bundles && product.bundles.length > 0
    ? product.bundles[0]
    : { quantity: 1, price: parseFloat(product?.ssPrice || "0") };

  const [selectedBundle, setSelectedBundle] = useState<Bundle>(defaultBundle);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!product) {
    return (
      <>
        <Header />
        <main className="w-full max-w-7xl mx-auto px-6 py-28 text-center bg-[#F8F9FA]">
          <h2 className="text-2xl font-black uppercase text-primary mb-4">Product Not Found</h2>
          <p className="text-neutral-text/60 mb-8 max-w-md mx-auto text-sm">
            The product you are looking for does not exist or has been moved.
          </p>
          <button
            className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
            onClick={() => router.push("/#shop")}
          >
            Return to Catalog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  const startingPrice = parseFloat(product.ssPrice);
  const extra = detailedSpecs[product.id] || detailedSpecs.product3;

  const handleAddToCart = () => {
    const unitPrice = (parseFloat(String(selectedBundle.price)) / selectedBundle.quantity).toFixed(2);
    const label = selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Pack Bundle` : "Single Unit";
    
    addToCart(product, selectedBundle.quantity, unitPrice, label);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  // Other products for recommendations
  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <>
      <Header />
      <main className="bg-[#F8F9FA] text-primary relative overflow-hidden min-h-screen">
        
        {/* Subtle Ambient Lighting */}
        <div className="pointer-events-none absolute top-10 right-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 pb-20 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-text/50 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#shop" className="hover:text-primary transition-colors">Catalog</Link>
            <span>/</span>
            <span className="text-primary truncate">{product.name}</span>
          </nav>

          {/* Top Section: Split Studio Gallery & Interactive Bundle Configurator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
            
            {/* Left Column: High-Res Studio Carousel (6 cols) */}
            <div className="lg:col-span-6">
              <ProductCarousel
                images={product.images && product.images.length > 0 ? product.images : [product.image]}
                name={product.name}
              />
            </div>

            {/* Right Column: Product Details & Volume Bundle Configurator (6 cols) */}
            <div className="lg:col-span-6 flex flex-col bg-white rounded-[2.5rem] p-6 sm:p-10 border border-black/[0.06] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              
              {/* Category & Verified Reviews Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="rounded-full bg-neutral-bg px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/70 border border-black/[0.04]">
                  {product.category}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex text-secondary text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-neutral-text/60">
                    4.9 / 5 <span className="font-normal">(1,200+ Reviews)</span>
                  </span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-primary leading-tight mb-2">
                {product.name}
              </h1>

              <div className="text-xs font-bold text-secondary bg-primary px-3 py-1 rounded-lg w-fit mb-6 uppercase tracking-wider">
                {extra.tagline}
              </div>

              {/* Pricing Display */}
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-black/[0.06]">
                <div className="text-3xl sm:text-4xl font-black text-primary">
                  ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                </div>
                {selectedBundle.quantity > 1 && (
                  <div className="text-xs sm:text-sm font-semibold text-neutral-text/50">
                    (${((parseFloat(String(selectedBundle.price)) / selectedBundle.quantity)).toFixed(2)} / unit)
                  </div>
                )}
                <div className="ml-auto flex items-center gap-1.5 text-[0.68rem] font-bold text-secondary bg-primary px-2.5 py-1 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                  Ships in 24h
                </div>
              </div>

              {/* Product Overview */}
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-8 font-normal">
                {product.description}
              </p>

              {/* Bundle Tier Dropdown Selector */}
              {product.bundles && product.bundles.length > 0 && (
                <div className="mb-8" ref={dropdownRef}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <span>Select Bundle Configuration</span>
                      <span className="text-neutral-text/40 text-[0.68rem] font-normal">({product.bundles.length} Tiers)</span>
                    </span>
                    <span className="text-[0.68rem] font-bold text-secondary uppercase bg-primary px-2.5 py-0.5 rounded-full">
                      Up to 35% Volume Savings
                    </span>
                  </div>

                  {/* Dropdown Button */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      aria-expanded={isDropdownOpen}
                      className="w-full flex items-center justify-between gap-3 p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-primary transition-all duration-200 cursor-pointer shadow-sm text-left group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-10 w-10 rounded-xl bg-primary text-white flex items-center justify-center font-black text-sm flex-shrink-0 group-hover:bg-secondary transition-colors">
                          {selectedBundle.quantity}x
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-black uppercase text-primary truncate">
                              {selectedBundle.quantity > 1 ? `${selectedBundle.quantity}-Unit Pack` : "1 Single Unit"}
                            </span>
                            {selectedBundle.quantity === product.bundles[product.bundles.length - 1].quantity && (
                              <span className="text-[0.58rem] font-black uppercase px-2 py-0.5 rounded-full bg-secondary text-white">
                                Best Value
                              </span>
                            )}
                            {(selectedBundle.quantity === 3 || selectedBundle.quantity === 4) && (
                              <span className="text-[0.58rem] font-bold uppercase px-2 py-0.5 rounded-full bg-black/5 text-primary">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-[0.72rem] text-neutral-text/60 font-medium mt-0.5">
                            ${(selectedBundle.price / selectedBundle.quantity).toFixed(2)} per unit • Total: ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {/* Dropdown Arrow */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-base sm:text-lg font-black text-primary">
                          ${parseFloat(String(selectedBundle.price)).toFixed(2)}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`text-slate-400 group-hover:text-primary transition-transform duration-300 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown Menu Options List */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-30 rounded-2xl bg-white border border-slate-200 shadow-2xl p-2 max-h-72 overflow-y-auto bundle-scroll-track animate-in fade-in duration-200">
                        {product.bundles.map((bundle, bIdx) => {
                          const isSelected = selectedBundle.quantity === bundle.quantity;
                          const isBestValue = bIdx === product.bundles!.length - 1;
                          const isPopular = bundle.quantity === 3 || bundle.quantity === 4;

                          return (
                            <div
                              key={bundle.quantity}
                              onClick={() => {
                                setSelectedBundle(bundle);
                                setIsDropdownOpen(false);
                              }}
                              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150 mb-1 last:mb-0 ${
                                isSelected
                                  ? "bg-primary text-white font-bold"
                                  : "hover:bg-slate-100 text-slate-800"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black flex-shrink-0 ${
                                  isSelected ? "bg-secondary text-white" : "bg-slate-200 text-primary"
                                }`}>
                                  {bundle.quantity}
                                </span>

                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-black uppercase">
                                      {bundle.quantity > 1 ? `${bundle.quantity}-Unit Pack` : "1 Single Unit"}
                                    </span>
                                    {isBestValue && (
                                      <span className={`text-[0.55rem] font-black uppercase px-1.5 py-0.5 rounded ${
                                        isSelected ? "bg-secondary text-white" : "bg-primary text-white"
                                      }`}>
                                        Best Value
                                      </span>
                                    )}
                                    {isPopular && !isBestValue && (
                                      <span className={`text-[0.55rem] font-bold uppercase px-1.5 py-0.5 rounded ${
                                        isSelected ? "bg-white/20 text-white" : "bg-black/5 text-primary"
                                      }`}>
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  <span className={`text-[0.65rem] ${isSelected ? "text-white/70" : "text-neutral-text/50"}`}>
                                    ${(bundle.price / bundle.quantity).toFixed(2)}/each
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="text-xs sm:text-sm font-black">
                                  ${parseFloat(String(bundle.price)).toFixed(2)}
                                </span>
                                {isSelected && (
                                  <span className="text-secondary font-black text-xs">✓</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Primary Action Button */}
              <div className="flex flex-col gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-secondary py-4 px-8 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-primary transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.3)] cursor-pointer active:scale-[0.99]"
                >
                  {addedAnimation ? (
                    <span className="flex items-center gap-2">
                      ✓ Added to Cart!
                    </span>
                  ) : (
                    <>
                      <span>Add {selectedBundle.quantity > 1 ? `${selectedBundle.quantity} Units` : "To Cart"}</span>
                      <span>—</span>
                      <span>${parseFloat(String(selectedBundle.price)).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Strip */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-black/[0.06] text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm">🛡️</span>
                  <span className="text-[0.65rem] font-bold uppercase text-primary mt-1">1-Yr Warranty</span>
                  <span className="text-[0.58rem] text-neutral-text/50">Full replacement</span>
                </div>
                <div className="flex flex-col items-center border-x border-black/[0.06]">
                  <span className="text-sm">🔄</span>
                  <span className="text-[0.65rem] font-bold uppercase text-primary mt-1">60-Day Trial</span>
                  <span className="text-[0.58rem] text-neutral-text/50">100% Risk Free</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm">📦</span>
                  <span className="text-[0.65rem] font-bold uppercase text-primary mt-1">Free Delivery</span>
                  <span className="text-[0.58rem] text-neutral-text/50">{siteConfig.shippingPeriod} business days</span>
                </div>
              </div>

            </div>

          </div>

          {/* Section 2: Deep Technical Engineering Matrix */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="eyebrow justify-center mb-4">Engineering Matrix</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary">
                Technical <span className="text-secondary bg-primary px-3 py-1 rounded-xl">Specifications</span>
              </h2>
              <p className="mt-3 text-sm text-neutral-text/60">
                Verified lab benchmarks and physical construction properties for {product.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extra.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-[2rem] bg-white p-6 sm:p-7 border border-black/[0.06] shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[0.65rem] font-black uppercase tracking-widest text-secondary bg-primary px-2.5 py-0.5 rounded-full mb-3 inline-block">
                      0{idx + 1}
                    </span>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-text/50 mb-1">
                      {item.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight mb-3">
                      {item.value}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-text/60 leading-relaxed font-normal pt-3 border-t border-black/[0.04]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: "What's In The Box" Complete Unboxing Grid */}
          <div className="rounded-[3rem] bg-[#0A0B0E] text-white p-8 sm:p-12 lg:p-16 mb-24 border border-white/[0.08] relative overflow-hidden shadow-2xl">
            <div className="studio-spotlight -top-40 -right-40" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5">
                <span className="eyebrow eyebrow-invert mb-4">Complete Loadout</span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  What&apos;s In <br />
                  <span className="text-gradient-lime">The Box</span>
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-normal">
                  Every package ships complete with all required athletic accessories, travel bags, and hardware so you can immediately begin your training session.
                </p>
                
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-secondary">
                  <span>✓</span> Fully Assembled &amp; Inspected
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {extra.boxContents.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 rounded-2xl bg-white/[0.05] border border-white/10 p-4 backdrop-blur-md"
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-primary font-black text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Section 4: Training Protocol Guides */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="eyebrow justify-center mb-4">Athlete Execution</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary">
                How To Use In <span className="text-secondary bg-primary px-3 py-1 rounded-xl">Your Routine</span>
              </h2>
              <p className="mt-3 text-sm text-neutral-text/60">
                Recommended physical protocols developed with Austin performance coaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extra.protocols.map((proto, idx) => (
                <div
                  key={idx}
                  className="rounded-[2.5rem] bg-white p-7 border border-black/[0.06] shadow-[0_15px_35px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[0.65rem] font-black uppercase tracking-wider text-secondary bg-primary px-3 py-1 rounded-full mb-4 inline-block">
                      {proto.phase}
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-primary mb-3">
                      {proto.title}
                    </h3>
                    <p className="text-xs text-neutral-text/65 leading-relaxed font-normal">
                      {proto.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/[0.04] text-[0.68rem] font-bold text-neutral-text/40 uppercase tracking-widest">
                    Step 0{idx + 1} Protocol
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Complete Your Loadout (Recommended Gear) */}
          <div className="pt-10 border-t border-black/[0.08]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="eyebrow mb-2">Complementary Gear</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">
                  Complete Your Training Setup
                </h3>
              </div>
              <Link href="/#shop" className="text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
                View Full Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProducts.map((other) => (
                <Link
                  key={other.id}
                  href={`/product/${other.id}`}
                  className="group flex flex-col sm:flex-row items-center gap-6 rounded-[2rem] bg-white p-5 border border-black/[0.06] shadow-sm hover:shadow-lg hover:border-black/20 transition-all duration-300"
                >
                  <div className="relative h-36 w-full sm:w-36 rounded-2xl overflow-hidden bg-neutral-bg flex-shrink-0">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[0.62rem] font-bold uppercase tracking-wider text-neutral-text/50">
                      {other.category}
                    </span>
                    <h4 className="text-base font-black uppercase text-primary truncate mt-1 mb-1 group-hover:text-secondary transition-colors">
                      {other.name}
                    </h4>
                    <p className="text-xs text-neutral-text/60 line-clamp-2 leading-relaxed mb-3">
                      {other.description}
                    </p>
                    <div className="text-sm font-black text-primary">
                      From ${other.ssPrice}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
