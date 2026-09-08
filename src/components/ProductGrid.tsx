"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";
import { Product, SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

// Build 6 featured bundle offers using strictly the 3 workshop products
export interface FeaturedBundleItem {
  id: string;
  productId: string;
  name: string;
  bundleTitle: string;
  category: string;
  badge: string;
  badgeBg: string;
  quantity: number;
  price: number;
  regularPrice: number;
  savings: number;
  primaryImage: string;
  secondaryImage: string;
  highlight: string;
}

const p1 = products.find((p) => p.id === "product1") || products[0];
const p2 = products.find((p) => p.id === "product2") || products[1];
const p3 = products.find((p) => p.id === "product3") || products[2];

const p1Base = parseFloat(p1.ssPrice || "6.95");
const p2Base = parseFloat(p2.ssPrice || "11.95");
const p3Base = parseFloat(p3.ssPrice || "14.95");

const featuredBundles: FeaturedBundleItem[] = [
  // 1. Balloon Whisk - Single Edition
  {
    id: "bundle-1",
    productId: "product1",
    name: "Balloon Whisk",
    bundleTitle: "Single Atelier Edition",
    category: p1.category || "Precision Baking & Prep",
    badge: "Baking Essential",
    badgeBg: "bg-[#121316] text-white",
    quantity: 1,
    price: 6.95,
    regularPrice: 6.95,
    savings: 0,
    primaryImage: p1.images && p1.images[0] ? p1.images[0] : p1.image,
    secondaryImage: p1.images && p1.images[1] ? p1.images[1] : p1.image,
    highlight: "12-Wire Aero Balance",
  },
  // 2. Digital Scale - Precision Single Tier
  {
    id: "bundle-2",
    productId: "product2",
    name: "Digital Culinary Scale & Timer",
    bundleTitle: "Precision Single Tier",
    category: p2.category || "Measurement & Precision Prep",
    badge: "0.1g Precision",
    badgeBg: "bg-[#E06830] text-white",
    quantity: 1,
    price: 11.95,
    regularPrice: 11.95,
    savings: 0,
    primaryImage: p2.images && p2.images[0] ? p2.images[0] : p2.image,
    secondaryImage: p2.images && p2.images[1] ? p2.images[1] : p2.image,
    highlight: "Integrated Drip Timer",
  },
  // 3. Chef Shears - Workshop Single
  {
    id: "bundle-3",
    productId: "product3",
    name: "Multi-Prep Chef Shears",
    bundleTitle: "Workshop Single Cutlery",
    category: p3.category || "Cutlery & Prep Workshop",
    badge: "Japanese Steel",
    badgeBg: "bg-[#121316] text-white",
    quantity: 1,
    price: 14.95,
    regularPrice: 14.95,
    savings: 0,
    primaryImage: p3.images && p3.images[0] ? p3.images[0] : p3.image,
    secondaryImage: p3.images && p3.images[1] ? p3.images[1] : p3.image,
    highlight: "Micro-Serrated Edge",
  },
  // 4. Balloon Whisk - Master Pastry Duo (2-Pack)
  {
    id: "bundle-4",
    productId: "product1",
    name: "Balloon Whisk",
    bundleTitle: "Master Pastry Duo (2-Pack)",
    category: p1.category || "Precision Baking & Prep",
    badge: "Best Value 2-Pack",
    badgeBg: "bg-[#E06830] text-white",
    quantity: 2,
    price: 9.95,
    regularPrice: p1Base * 2,
    savings: p1Base * 2 - 9.95,
    primaryImage: p1.images && p1.images[1] ? p1.images[1] : p1.image,
    secondaryImage: p1.images && p1.images[0] ? p1.images[0] : p1.image,
    highlight: "Save $3.95 (28% Off)",
  },
  // 5. Digital Scale - Baker & Barista Duo (2-Pack)
  {
    id: "bundle-5",
    productId: "product2",
    name: "Digital Culinary Scale & Timer",
    bundleTitle: "Baker & Barista Duo (2-Pack)",
    category: p2.category || "Measurement & Precision Prep",
    badge: "Popular 2-Pack",
    badgeBg: "bg-[#E06830] text-white",
    quantity: 2,
    price: 17.32,
    regularPrice: p2Base * 2,
    savings: p2Base * 2 - 17.32,
    primaryImage: p2.images && p2.images[1] ? p2.images[1] : p2.image,
    secondaryImage: p2.images && p2.images[0] ? p2.images[0] : p2.image,
    highlight: "Save $6.58 (27% Off)",
  },
  // 6. Chef Shears - Executive Chef Duo (2-Pack)
  {
    id: "bundle-6",
    productId: "product3",
    name: "Multi-Prep Chef Shears",
    bundleTitle: "Executive Chef Duo (2-Pack)",
    category: p3.category || "Cutlery & Prep Workshop",
    badge: "Foundry Special Duo",
    badgeBg: "bg-[#E06830] text-white",
    quantity: 2,
    price: 21.95,
    regularPrice: p3Base * 2,
    savings: p3Base * 2 - 21.95,
    primaryImage: p3.images && p3.images[1] ? p3.images[1] : p3.image,
    secondaryImage: p3.images && p3.images[0] ? p3.images[0] : p3.image,
    highlight: "Save $7.95 (26% Off)",
  },
];

export default function ProductGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive items per view check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, featuredBundles.length - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F2] text-[#121316] relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                {siteConfig.brandName.toUpperCase()} CATALOG &amp; BUNDLES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
              Handcrafted <br />
              <span className="text-[#E06830] italic font-serif">Kitchen Tools &amp; Curated Bundles</span>
            </h2>

            <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
              Explore our 3 core culinary tools available in single editions and high-value multi-pack bundles.
            </p>
          </div>

          {/* Carousel Slider Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Previous tools"
              className="w-11 h-11 rounded-full bg-white border border-stone-200/90 hover:bg-[#121316] hover:text-white text-[#121316] flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <span className="text-xs font-bold text-[#121316]/60 tracking-wider">
              {currentIndex + 1} / {maxIndex + 1}
            </span>

            <button
              onClick={nextSlide}
              aria-label="Next tools"
              className="w-11 h-11 rounded-full bg-white border border-stone-200/90 hover:bg-[#121316] hover:text-white text-[#121316] flex items-center justify-center transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Window */}
        <div className="overflow-hidden w-full pb-4">
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {featuredBundles.map((item) => {
              return (
                <div
                  key={item.id}
                  className="px-3 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded-[2rem] border border-stone-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#E06830]/50 transition-all duration-300 flex flex-col justify-between group h-full">
                    <div>
                      {/* 1:1 Aspect Ratio Image Container with Hover Swap to Secondary Image */}
                      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#F4F2EE] mb-5 border border-stone-100">
                        <Link href={`/product/${item.productId}`} className="block w-full h-full relative">
                          {/* Primary Image */}
                          <img
                            src={item.primaryImage}
                            alt={item.name}
                            className={`w-full h-full object-cover transition-all duration-500 ${
                              item.secondaryImage !== item.primaryImage
                                ? "group-hover:opacity-0 group-hover:scale-105"
                                : "group-hover:scale-105"
                            }`}
                            onError={(e) => {
                              e.currentTarget.src = "/hero-kitchen.jpg";
                            }}
                          />

                          {/* Secondary Image on Hover */}
                          {item.secondaryImage && item.secondaryImage !== item.primaryImage && (
                            <img
                              src={item.secondaryImage}
                              alt={`${item.name} alternate view`}
                              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.src = item.primaryImage;
                              }}
                            />
                          )}
                        </Link>

                        {/* Top Left Badge */}
                        <span
                          className={`absolute top-3.5 left-3.5 ${item.badgeBg} text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm pointer-events-none z-10`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      {/* Category Pill */}
                      <div className="text-[0.68rem] text-[#E06830] font-bold uppercase tracking-wider mb-1">
                        {item.category}
                      </div>

                      {/* Title & Bundle Edition */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#121316] mb-1 leading-snug group-hover:text-[#E06830] transition-colors">
                        <Link href={`/product/${item.productId}`}>
                          {item.name}
                        </Link>
                      </h3>
                      <div className="text-xs font-semibold text-[#121316]/60 mb-3">
                        {item.bundleTitle}
                      </div>

                      {/* Price & Savings */}
                      <div className="flex items-baseline gap-2.5 mb-3">
                        <span className="text-2xl font-bold text-[#121316] font-serif">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.savings > 0 && (
                          <span className="text-xs text-[#121316]/40 line-through">
                            ${item.regularPrice.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Savings / Feature Tag */}
                      <div className="mb-6">
                        <span className="inline-flex items-center gap-1.5 bg-[#F4F2EE] border border-stone-200/80 text-[#121316] text-[0.68rem] font-bold px-3 py-1 rounded-lg">
                          <span className="text-[#E06830]">✓</span>
                          <span>{item.highlight}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action Button (Redirects to Product Detail Page) */}
                    <div className="pt-2">
                      <Link
                        href={`/product/${item.productId}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg"
                      >
                        <span>View Tool &amp; Tiers</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Slide Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#121316]"
                  : "w-2 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
