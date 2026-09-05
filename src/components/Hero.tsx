"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const categories = [
  { id: "all", label: "All Travel Pieces" },
  { id: "suitcase", label: "Carry-On Suitcases" },
  { id: "duffle", label: "Leather Weekenders" },
  { id: "cubes", label: "Compression Suites" },
];

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products for instant autocomplete
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "suitcase" && p.category.toLowerCase().includes("spinner")) ||
      (selectedCategory === "duffle" && p.category.toLowerCase().includes("duffle")) ||
      (selectedCategory === "cubes" && p.category.toLowerCase().includes("packing"));

    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/shop");
    }
  };

  return (
    <section className="relative w-full min-h-[660px] sm:min-h-[740px] md:min-h-[800px] lg:min-h-[880px] flex items-center justify-center overflow-hidden bg-[#0D1B2A] text-white pt-24 pb-16 sm:pt-28 sm:pb-20">
      
      {/* Background Lifestyle & Travel Planning Image */}
      <img
        src="/img/hero-lifestyle.jpg"
        alt="Traveler preparing luxury luggage and duffle for departure"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        onError={(e) => {
          e.currentTarget.src = "/img/hero-luggage-travel.jpg";
        }}
      />

      {/* Warm Editorial Ambient Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/45 backdrop-blur-[0.5px] pointer-events-none" />
      
      {/* Top and Bottom Gradient Blends for Seamless Header & Page Flow */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0D1B2A]/85 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F6F0] via-[#0D1B2A]/40 to-transparent pointer-events-none" />

      {/* Centered Editorial Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Subtle Eyebrow Subtitle */}
        <p className="text-xs sm:text-sm md:text-[0.95rem] font-medium tracking-wide text-white/90 mb-4 sm:mb-6 drop-shadow-sm">
          {siteConfig.brandName} Austin Atelier &bull; Aerospace Luggage &amp; Full-Grain Leather &bull; Global Delivery
        </p>

        {/* Master Editorial Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.1] max-w-4xl mx-auto mb-8 sm:mb-10 drop-shadow-md">
          Your new journey, <br className="hidden sm:inline" />
          connected to what matters.
        </h1>

        {/* Search & Discovery Hub Pill Bar */}
        <div ref={searchContainerRef} className="relative w-full max-w-lg sm:max-w-xl">
          <form
            onSubmit={handleSearch}
            className="w-full bg-[#FAF7F2] rounded-full p-1.5 sm:p-2 pl-4 sm:pl-5 shadow-2xl flex items-center justify-between border-2 border-white/60 focus-within:border-[#C87D3B] focus-within:ring-2 focus-within:ring-[#C87D3B]/30 transition-all"
          >
            {/* Category Dropdown Filter Selector */}
            <div className="relative flex-shrink-0 hidden xs:block sm:block border-r border-[#0D1B2A]/15 pr-2 mr-2 sm:pr-3 sm:mr-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-transparent text-[0.72rem] sm:text-xs font-bold uppercase tracking-wider text-[#0D1B2A] cursor-pointer focus:outline-none pr-5 py-1"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id} className="text-[#0D1B2A] bg-[#FAF7F2]">
                    {c.label}
                  </option>
                ))}
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#0D1B2A]/70"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {/* Main Text Input */}
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setIsDropdownOpen(true)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              placeholder="Search luggage, duffles, packing sets..."
              className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#0D1B2A] placeholder-[#18222F]/55 focus:outline-none pr-2"
            />

            {/* Search Submit Button */}
            <button
              type="submit"
              aria-label="Search luggage catalog"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C87D3B] hover:bg-[#D98745] active:scale-95 text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 cursor-pointer shadow-md"
            >
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
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>

          {/* Live Instant Search Suggestions Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-[#C87D3B]/30 text-left z-50 animate-fadeIn">
              <div className="px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#C87D3B] border-b border-[#C87D3B]/15 flex items-center justify-between">
                <span>Featured Catalog Pieces ({filteredProducts.length})</span>
                <span className="text-[#18222F]/50">Press Enter to Browse All</span>
              </div>

              <div className="divide-y divide-[#C87D3B]/10 max-h-64 overflow-y-auto mt-1">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.id}`}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F2] transition-colors group"
                    >
                      <div className="w-11 h-11 rounded-lg overflow-hidden bg-[#0D1B2A]/5 border border-[#C87D3B]/20 flex-shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#0D1B2A] truncate group-hover:text-[#C87D3B] transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-[0.68rem] text-[#18222F]/65 truncate">
                          {p.category}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm font-black text-[#0D1B2A]">
                          ${parseFloat(p.ssPrice).toFixed(2)}
                        </span>
                        <span className="block text-[0.6rem] text-[#C87D3B] font-bold">
                          View Piece →
                        </span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-center text-xs text-[#18222F]/70">
                    No matching travel pieces found.{" "}
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="text-[#C87D3B] font-bold underline cursor-pointer"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-2 pt-2 border-t border-[#C87D3B]/15 text-center">
                <Link
                  href="/shop"
                  onClick={() => setIsDropdownOpen(false)}
                  className="inline-block text-[0.72rem] font-bold uppercase tracking-wider text-[#C87D3B] hover:text-[#9E381A] transition-colors"
                >
                  View All Luggage &amp; Accessories in Shop →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Category Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 sm:mt-6 text-[0.68rem] sm:text-xs text-white/80 font-medium">
          <span className="text-white/60 font-semibold">Explore:</span>
          {[
            { label: "🧳 Carry-On Spinner ($14.95)", href: "/product/product1" },
            { label: "🎒 Leather Weekender ($11.95)", href: "/product/product2" },
            { label: "📦 Packing Suite ($6.95)", href: "/product/product3" },
            { label: "✈ Flight Fleet Bundles", href: "/shop" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-full bg-black/40 hover:bg-[#C87D3B] backdrop-blur-xs border border-white/20 hover:border-[#C87D3B] text-white/90 hover:text-white transition-all shadow-xs cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Transit Quality Standards Micro-Bar */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-5 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[0.68rem] sm:text-xs text-white/85">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
            <span>IATA Overhead Bin Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
            <span>{siteConfig.trialPeriod || 14}-Day Global Flight Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#C87D3B] text-white flex items-center justify-center text-[0.6rem] font-bold">✓</span>
            <span>Lifetime Structural Chassis Warranty</span>
          </div>
        </div>

      </div>

    </section>
  );
}
