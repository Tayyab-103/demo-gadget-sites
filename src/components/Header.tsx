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
  { href: "/", label: "Home" },
  { href: "/shop", label: "Foundry Catalog" },
  { href: "/about", label: "Foundry Specs" },
  { href: "/contact", label: "Contractor Support" },
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

  // Track scroll to intensify the glass pill on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      {/* Floating glass pill */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border shadow-2xl flex items-center justify-between ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-2xl border-white/20 py-2.5 px-5 sm:px-7 shadow-black/50"
            : "bg-primary/85 backdrop-blur-xl border-white/15 py-3 px-5 sm:px-8 shadow-black/35"
        }`}
      >
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center flex-shrink-0" style={{ textDecoration: "none" }}>
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <>
              <div className="bg-white rounded-full px-2.5 py-1 flex items-center lg:hidden">
                <img
                  src="/product-logo.png"
                  alt={siteConfig.brandName}
                  className="max-h-7 max-w-[110px] sm:max-w-none w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded-full px-3.5 py-1 hidden lg:flex items-center">
                <img
                  src={siteConfig.logoImage}
                  alt={siteConfig.brandName}
                  className="max-h-7 w-auto object-contain"
                />
              </div>
            </>
          ) : (
            <span className="text-white text-sm sm:text-base md:text-lg font-black tracking-tight flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-secondary-text shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <span className="truncate">{siteConfig.brandName}</span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 rounded-full p-1 border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-secondary text-secondary-text shadow-md" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Search Icon Button */}
          <button
            onClick={toggleSearch}
            className={`transition-all duration-300 p-2 sm:p-2.5 rounded-full ${
              isSearchOpen ? "bg-white/20 text-secondary" : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Toggle Search"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={toggleCart}
            className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 p-2 sm:p-2.5 rounded-full relative"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {getCartCount() > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-secondary text-secondary-text rounded-full w-[17px] h-[17px] text-[0.6rem] font-bold flex items-center justify-center shadow-md">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Nav Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2.5 bg-primary/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 flex flex-col gap-1.5 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 ${
                  isActive ? "bg-secondary text-secondary-text" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Floating Search Panel */}
      {isSearchOpen && (
        <div className="max-w-7xl mx-auto mt-2.5 bg-primary/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 max-h-[70vh] overflow-y-auto shadow-2xl pointer-events-auto">
          <div className="relative max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fittings, valves, supply lines..."
              className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-white bg-white/10 border border-white/15 placeholder-white/40"
            />
          </div>

          {trimmedQuery && (
            <div className="mt-4 flex flex-col gap-1.5 max-w-2xl mx-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={closeAll}
                      className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-xl object-contain bg-white/10 flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/100x100?text=Item";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white truncate">{product.name}</div>
                        <div className="text-[0.65rem] text-secondary truncate uppercase tracking-widest font-semibold">{product.category}</div>
                      </div>
                      <div className="text-sm font-extrabold text-secondary flex-shrink-0">${price}</div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-xs text-white/50 text-center py-6">
                  No products found for &ldquo;{query}&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
