"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

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
        setIsShopDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        setIsShopDropdownOpen(false);
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
    setIsShopDropdownOpen(false);
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
      <AnnouncementBar />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white border-b border-black/10 text-primary select-none shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          
          {/* LEFT: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.75rem] font-black uppercase tracking-wider flex-1">
            <Link
              href="/"
              onClick={closeAll}
              className="text-secondary flex items-center gap-1 hover:brightness-110 transition-colors"
            >
              Home
            </Link>

            {/* Shop with Dropdown */}
            <div className="relative group">
              <Link
                href="/shop"
                onClick={closeAll}
                className="text-primary hover:text-secondary flex items-center gap-1 transition-colors"
              >
                Shop <span className="text-[0.65rem]">▾</span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-black/10 rounded-2xl shadow-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {products.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={closeAll}
                    className="block px-3 py-2 text-xs font-bold text-primary hover:bg-neutral-bg hover:text-secondary rounded-xl transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
                <div className="border-t border-black/5 mt-1 pt-1">
                  <Link
                    href="/shop"
                    onClick={closeAll}
                    className="block px-3 py-2 text-xs font-black text-secondary hover:underline"
                  >
                    View All Supplies →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" onClick={closeAll} className="text-primary hover:text-secondary transition-colors">
              About
            </Link>

            <Link href="/contact" onClick={closeAll} className="text-primary hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CENTER: Brand Logo */}
          <div className="flex items-center justify-start lg:justify-center">
            <Link
              href="/"
              onClick={closeAll}
              className="flex flex-col items-start lg:items-center text-left lg:text-center group py-0.5"
            >
              <span className="font-serif font-black text-lg sm:text-xl md:text-2xl tracking-tight text-primary uppercase leading-tight group-hover:text-secondary transition-colors">
                Marlowe Finch
              </span>
              <span className="text-[0.52rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.28em] text-secondary leading-none mt-0.5">
                Creative Supply
              </span>
            </Link>
          </div>

          {/* RIGHT: Search and Cart Only */}
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-xs font-bold text-primary flex-1">
            
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="hover:text-secondary transition-colors p-2 cursor-pointer rounded-full hover:bg-black/5"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart Bag Icon with Count (Opens CartDrawer) */}
            <button
              onClick={toggleCart}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors p-2 cursor-pointer rounded-full hover:bg-black/5"
              aria-label="Shopping Bag"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="text-xs font-black bg-secondary text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-none">
                {getCartCount()}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:text-secondary cursor-pointer rounded-full hover:bg-black/5"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/10 px-6 py-5 flex flex-col gap-2">
            <Link
              href="/"
              onClick={closeAll}
              className="text-secondary font-bold text-xs uppercase tracking-wider py-2.5 border-b border-black/5"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={closeAll}
              className="text-primary font-bold text-xs uppercase tracking-wider py-2.5 border-b border-black/5 flex items-center justify-between"
            >
              <span>Shop All Supplies</span>
              <span className="text-[0.7rem] text-secondary">→</span>
            </Link>
            <Link
              href="/about"
              onClick={closeAll}
              className="text-primary font-bold text-xs uppercase tracking-wider py-2.5 border-b border-black/5"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={closeAll}
              className="text-primary font-bold text-xs uppercase tracking-wider py-2.5"
            >
              Contact Support
            </Link>
          </div>
        )}

        {/* Search Modal Panel */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-2xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="relative max-w-4xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-neutral-text/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search studio supplies, botanical inks, sketchbooks..."
                className="block w-full pl-12 pr-4 py-3.5 text-sm border border-black/15 rounded-full focus:outline-none focus:border-secondary transition-all text-primary bg-[#FAF9F5] shadow-inner"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-5 flex flex-col gap-2 max-w-4xl mx-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#FAF9F5] border border-transparent hover:border-black/5 transition-all duration-200"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-white flex-shrink-0 border border-black/10"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-neutral-text/50 truncate uppercase tracking-widest font-semibold">{product.category}</div>
                        </div>
                        <div className="text-sm font-black text-primary flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-neutral-text/50 text-center py-6">
                    No products found for &ldquo;{query}&rdquo;.
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
