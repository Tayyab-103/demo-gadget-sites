"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop", label: "Collections" },
  { href: "/about", label: "Heritage" },
  { href: "/contact", label: "Support" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter(
        (p) => p.name.toLowerCase().includes(trimmedQuery) || (p.category || "").toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus();
  }, [isSearchOpen]);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setQuery("");
  };

  const toggleSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen((v) => !v);
  };

  const toggleMenu = () => {
    setIsSearchOpen(false);
    setIsMenuOpen((v) => !v);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md border-b border-black/8 py-3" : "border-b border-black/6 py-3.5 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo styled like MOVE. ACTIVEWEAR */}
        <Link href="/" onClick={closeAll} className="flex flex-col group" style={{ textDecoration: "none" }}>
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <img
              src={siteConfig.logoImage}
              alt={siteConfig.brandName}
              className="max-h-7 sm:max-h-8 w-auto object-contain"
            />
          ) : (
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-black uppercase leading-none flex items-baseline">
                <span>VANTAGE</span>
                <span className="inline-block w-2 h-2 rounded-full bg-secondary ml-0.5" />
              </span>
              <span className="text-[0.55rem] sm:text-[0.62rem] font-black uppercase tracking-[0.28em] text-black/60 mt-0.5">
                ATHLETIC WORKS
              </span>
            </div>
          )}
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/"
            className={`text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
              pathname === "/" ? "text-black border-b-2 border-secondary pb-0.5" : "text-black/75 hover:text-black"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className={`text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
              pathname === "/shop" ? "text-black border-b-2 border-secondary pb-0.5" : "text-black/75 hover:text-black"
            }`}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className={`text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
              pathname === "/about" ? "text-black border-b-2 border-secondary pb-0.5" : "text-black/75 hover:text-black"
            }`}
          >
            Heritage
          </Link>
          <Link
            href="/contact"
            className={`text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
              pathname === "/contact" ? "text-black border-b-2 border-secondary pb-0.5" : "text-black/75 hover:text-black"
            }`}
          >
            Support
          </Link>
        </nav>

        {/* Right: Icons (Search, User, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="p-2 text-black/80 hover:text-black transition-colors cursor-pointer rounded-full hover:bg-black/5"
            aria-label="Toggle Search"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* User/Support Account Icon */}
          <Link
            href="/contact"
            className="hidden sm:flex p-2 text-black/80 hover:text-black transition-colors rounded-full hover:bg-black/5"
            aria-label="Athlete Support"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart Bag Icon with Lime Volt Badge */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-black/80 hover:text-black transition-colors cursor-pointer rounded-full hover:bg-black/5"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getCartCount() > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-text rounded-full w-[18px] h-[18px] text-[0.62rem] font-black flex items-center justify-center border border-black shadow-xs">
                {getCartCount()}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-text rounded-full w-[16px] h-[16px] text-[0.55rem] font-black flex items-center justify-center border border-black/20">
                0
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black p-1.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/6 bg-white px-4 py-4 flex flex-col gap-2 shadow-xl">
          <Link
            href="/"
            onClick={closeAll}
            className={`font-black text-sm py-2.5 px-4 rounded-xl transition-all ${
              pathname === "/" ? "bg-black text-white" : "text-black/80 hover:bg-black/5"
            }`}
          >
            Home
          </Link>
          <Link
            href="/shop"
            onClick={closeAll}
            className={`font-black text-sm py-2.5 px-4 rounded-xl transition-all ${
              pathname === "/shop" ? "bg-black text-white" : "text-black/80 hover:bg-black/5"
            }`}
          >
            Shop Apparel
          </Link>
          <Link
            href="/about"
            onClick={closeAll}
            className={`font-black text-sm py-2.5 px-4 rounded-xl transition-all ${
              pathname === "/about" ? "bg-black text-white" : "text-black/80 hover:bg-black/5"
            }`}
          >
            Heritage
          </Link>
          <Link
            href="/contact"
            onClick={closeAll}
            className={`font-black text-sm py-2.5 px-4 rounded-xl transition-all ${
              pathname === "/contact" ? "bg-black text-white" : "text-black/80 hover:bg-black/5"
            }`}
          >
            Support &amp; Sizing
          </Link>
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-black/8 bg-white px-4 sm:px-6 py-4 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sporting apparel, compression tops, hoodies..."
                className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-black text-black bg-neutral-bg border border-black/10 placeholder-black/40"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3 flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-black/5 border border-transparent hover:border-black/5 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-black/5 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-black text-black truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-black/50 truncate uppercase font-bold">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-black text-black flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-black/50 text-center py-4">
                    No sporting apparel found for &ldquo;{query}&rdquo;.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
