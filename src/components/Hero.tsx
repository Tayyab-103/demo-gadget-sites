"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const toolCategories = [
  {
    label: "SOIL PREP",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15 15 0 0 0-9.3 3.5c-.3.3-.4.8-.2 1.1l2.4 4.7c.2.4.7.7 1.1.7h12c.4 0 .9-.3 1.1-.7l2.4-4.7c.2-.4.1-.9-.2-1.1A15 15 0 0 0 12 2z" />
        <path d="M12 12v10" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
  {
    label: "PRUNING",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
      </svg>
    ),
  },
  {
    label: "AERATION",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v-6" />
        <path d="M8 16h8" />
        <path d="M12 16V9" />
        <path d="M6 5a6 6 0 0 1 12 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="5" y1="7" x2="3" y2="9" />
        <line x1="19" y1="7" x2="21" y2="9" />
      </svg>
    ),
  },
  {
    label: "HEIRLOOM",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
];

const heroSlides = [
  {
    image: "/img/hero_section.jpg",
    alt: "Briarforge Hand-Forged Garden Tools in Action",
  },
  {
    image: "/img/how_it_works_1.jpg",
    alt: "Artisan Blacksmith Forging Heat-Tempered Steel",
  },
  {
    image: "/img/products/garden_tools/trowel_2.jpg",
    alt: "Carbon Steel Trowel in Lush Organic Garden",
  },
  {
    image: "/img/quality_promise_banner.jpg",
    alt: "Heirloom Quality Garden Hand Tools",
  },
  {
    image: "/img/products/garden_tools/pruner_3.jpg",
    alt: "SK5 Titanium Japanese Pruning Shears",
  },
];

export default function Hero() {
  const { toggleCart, getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic slide rotation every 4.5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white text-[#11281A] select-none">
      
      {/* =========================================================================
          BACKGROUND: S-Curve Split
          Left: Clean Pure White Canvas
          Right: Automatic Crossfade Image Carousel (No Dots / No Arrows)
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Right Photographic Carousel Canvas */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] bg-[#132B1C] overflow-hidden">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                idx === activeSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/img/hero_section.jpg";
                }}
              />
            </div>
          ))}
          
          {/* Header Visibility Protection Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173822]/60 via-transparent to-transparent z-10" />
        </div>

        {/* Organic S-Curve Divider */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-[34%] xl:left-[36%] w-[240px] h-full z-10">
          <svg
            className="h-full w-full fill-white"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L15,0 C75,18 0,65 55,100 L0,100 Z" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          TOP INTEGRATED HEADER (4 Core Pages: HOME, PRODUCTS, ABOUT US, CONTACT US)
          ========================================================================= */}
      <div className="relative z-30 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-6 pb-4 flex items-center justify-between">
        
        {/* Left: Hamburger Menu Icon + Brand Name */}
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="text-[#132A1C] hover:text-[#255236] transition-colors p-1 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          <Link href="/" className="font-extrabold text-sm sm:text-base tracking-[0.22em] uppercase text-[#132A1C] font-sans">
            BRIARFORGE
          </Link>
        </div>

        {/* Right: Exactly 4 Navigation Links (HOME, PRODUCTS, ABOUT US, CONTACT US) */}
        <div className="flex items-center gap-6 sm:gap-9 lg:gap-11">
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {[
              { href: "/", label: "HOME" },
              { href: "/shop", label: "PRODUCTS" },
              { href: "/about", label: "ABOUT US" },
              { href: "/contact", label: "CONTACT US" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[0.68rem] lg:text-[0.74rem] font-bold uppercase tracking-[0.22em] text-white hover:text-emerald-300 drop-shadow-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Far Right: Minimal Circular Search Icon Button & Cart */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen((v) => !v)}
              className="w-9 h-9 rounded-full border border-white/80 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#132A1C] transition-all cursor-pointer shadow-xs"
              aria-label="Search Tools"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              onClick={toggleCart}
              className="w-9 h-9 rounded-full border border-white/80 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#132A1C] transition-all cursor-pointer relative shadow-xs"
              aria-label="View Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-[#132A1C] rounded-full w-4 h-4 text-[0.55rem] font-black flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="relative z-40 bg-white border-b border-black/10 px-6 sm:px-10 lg:px-14 py-4 flex flex-col gap-2 shadow-lg md:hidden">
          {[
            { href: "/", label: "HOME" },
            { href: "/shop", label: "PRODUCTS" },
            { href: "/about", label: "ABOUT US" },
            { href: "/contact", label: "CONTACT US" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xs font-bold uppercase tracking-wider py-2.5 text-[#132A1C] hover:text-[#265C1E]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Input Dropdown */}
      {isSearchOpen && (
        <div className="relative z-40 bg-white border-b border-black/10 px-6 sm:px-10 lg:px-14 py-3 max-w-[1440px] mx-auto">
          <input
            type="text"
            placeholder="Search hand trowel, bypass pruners, soil cultivator..."
            className="w-full bg-[#FAF9F6] border border-black/10 rounded-full px-5 py-2.5 text-xs text-[#132A1C] focus:outline-none focus:border-[#1E432A]"
          />
        </div>
      )}

      {/* =========================================================================
          HERO MAIN CONTENT AREA (Garden Tool Products & E-Commerce Branding)
          ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-14 pt-8 sm:pt-14 pb-16 sm:pb-20 lg:pb-24 min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex flex-col justify-center">
        
        <div className="max-w-md lg:max-w-lg xl:max-w-xl">
          
          {/* Eyebrow: HEALTHY GARDENS. HEIRLOOM TOOLS. with horizontal line */}
          <div className="flex items-center gap-3.5 mb-4">
            <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#1E432A]">
              HEALTHY GARDENS. HEIRLOOM TOOLS.
            </span>
            <span className="w-9 h-[1.5px] bg-[#1E432A]/50 rounded-full" />
          </div>

          {/* Headline: Great Gardens / Start Here */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold tracking-tight text-[#11281A] leading-[1.06] mb-5 font-sans">
            Great Gardens <br />
            <span className="text-[#153820]">Start Here</span>
          </h1>

          {/* Product Brand Description */}
          <p className="text-[#132A1C]/80 text-xs sm:text-sm md:text-[0.92rem] leading-relaxed max-w-sm sm:max-w-md mb-6">
            Hand-forged carbon steel tools engineered for a lifetime of planting and cultivating.
          </p>

          {/* Primary E-Commerce Button: SHOP FORGE TOOLS → */}
          <div className="mb-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2.5 bg-[#265C1E] hover:bg-[#1E4A17] text-white transition-all text-xs font-bold uppercase tracking-wider py-3.5 px-7 rounded-md shadow-xs hover:shadow-md cursor-pointer"
            >
              SHOP FORGE TOOLS
              <span className="text-sm font-normal">→</span>
            </Link>
          </div>

          {/* 4 Tool Feature Categories Row */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 pt-4 border-t border-black/5 max-w-sm sm:max-w-md">
            {toolCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-[#265C1E] mb-1">
                  {cat.icon}
                </div>
                <span className="text-[0.52rem] sm:text-[0.58rem] font-extrabold uppercase tracking-wider text-[#11281A]">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
