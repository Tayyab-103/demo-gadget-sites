"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter(
        (p) => p.name.toLowerCase().includes(trimmedQuery) || (p.category || "").toLowerCase().includes(trimmedQuery)
      )
    : [];

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
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-neutral-bg/95 backdrop-blur-md transition-all duration-300 py-3.5 sm:py-4 md:py-5 border-b border-black/5"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between">
          
          {/* Left Nav Links (Only HOME & PRODUCTS) */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-14 flex-1 justify-start">
            <Link
              href="/"
              className="text-[0.75rem] xl:text-[0.8rem] font-bold uppercase tracking-[0.22em] text-neutral-text/85 hover:text-primary transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/shop"
              className="text-[0.75rem] xl:text-[0.8rem] font-bold uppercase tracking-[0.22em] text-neutral-text/85 hover:text-primary transition-colors"
            >
              PRODUCTS
            </Link>
          </nav>

          {/* Center Logo Mark: Bespoke Alderwyn Architectural Logo */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-3.5 text-primary group"
              aria-label={siteConfig.brandName}
            >
              {/* Alderwyn Architectural "A" Monogram */}
              <div className="flex items-center gap-3">
                <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <path d="M20 3L35 37H28L24.5 28H15.5L12 37H5L20 3Z" stroke="currentColor" strokeWidth="2.75" strokeLinejoin="round"/>
                  <path d="M17 22H23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M20 9L23 18H17L20 9Z" fill="currentColor"/>
                </svg>
                
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.12em] uppercase leading-none text-primary">
                    ALDERWYN
                  </span>
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-neutral-text/50 mt-1">
                    HOME LIVING
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Nav Links (ABOUT & CONTACT US) */}
          <div className="flex items-center gap-6 xl:gap-8 flex-1 justify-end">
            <nav className="hidden md:flex items-center gap-8 xl:gap-14">
              <Link
                href="/about"
                className="text-[0.75rem] xl:text-[0.8rem] font-bold uppercase tracking-[0.22em] text-neutral-text/85 hover:text-primary transition-colors"
              >
                ABOUT
              </Link>
            </nav>

            {/* Solid Black Pill Button: CONTACT US */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-primary text-white hover:bg-neutral-text transition-all duration-300 px-7 py-3 rounded-full text-[0.72rem] font-bold uppercase tracking-[0.16em] shadow-sm hover:shadow-md cursor-pointer"
            >
              CONTACT US
            </Link>

            {/* Utility Search & Cart Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSearch}
                className="w-9 h-9 rounded-full bg-white/60 border border-black/10 flex items-center justify-center text-primary hover:border-black/30 transition-all cursor-pointer"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <button
                onClick={toggleCart}
                className="w-9 h-9 rounded-full bg-white/60 border border-black/10 flex items-center justify-center text-primary hover:border-black/30 transition-all relative cursor-pointer"
                aria-label="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>

                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-primary font-black rounded-full w-4 h-4 text-[0.55rem] flex items-center justify-center border border-white">
                    {getCartCount()}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={toggleMenu}
                className="md:hidden w-9 h-9 rounded-full bg-white/60 border border-black/10 flex items-center justify-center text-primary"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-bg border-b border-black/10 shadow-xl p-6 mt-3 flex flex-col gap-3 max-w-[1400px] mx-auto px-6">
            <Link
              href="/"
              onClick={closeAll}
              className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-text py-2 hover:text-primary"
            >
              HOME
            </Link>
            <Link
              href="/shop"
              onClick={closeAll}
              className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-text py-2 hover:text-primary"
            >
              PRODUCTS
            </Link>
            <Link
              href="/about"
              onClick={closeAll}
              className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-text py-2 hover:text-primary"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              onClick={closeAll}
              className="inline-flex items-center justify-center bg-primary text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] mt-2 shadow-sm"
            >
              CONTACT US
            </Link>
          </div>
        )}

        {/* Search Panel */}
        {isSearchOpen && (
          <div className="bg-neutral-bg border-b border-black/10 shadow-xl p-5 max-h-[70vh] overflow-y-auto">
            <div className="relative max-w-4xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-neutral-text/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search collection (e.g. blanket, lamp, tray)..."
                className="block w-full pl-11 pr-4 py-3.5 text-sm border border-black/10 rounded-full focus:outline-none focus:border-primary transition-all text-neutral-text bg-white shadow-sm"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-4 flex flex-col gap-1 max-w-4xl mx-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover bg-neutral-bg flex-shrink-0 border border-black/5"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-neutral-text/50 truncate uppercase tracking-widest font-semibold">{product.category}</div>
                        </div>
                        <div className="text-sm font-extrabold text-primary flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-neutral-text/50 text-center py-6">
                    No furnishing pieces found for &ldquo;{query}&rdquo;.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}
