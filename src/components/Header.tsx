"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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
        (p) =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          (p.category || "").toLowerCase().includes(trimmedQuery)
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 w-full shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        
        {/* Left: Brand Logo & Title */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2 group flex-shrink min-w-0 select-none mr-2"
          style={{ textDecoration: "none" }}
        >
          {/* Typography */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm xs:text-base sm:text-lg md:text-xl font-black text-primary tracking-tight uppercase leading-tight truncate">
              {siteConfig.brandName}
            </span>
            <span className="text-[0.5rem] sm:text-[0.58rem] font-extrabold uppercase tracking-widest text-secondary leading-none hidden sm:block">
              ADVANCED ELECTRONICS
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-gray-700 hover:text-primary transition-colors duration-200 tracking-normal relative py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Search, Cart & Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Search items"
            aria-expanded={isSearchOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4.5 h-4.5 sm:w-5 sm:h-5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={toggleCart}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors cursor-pointer relative bg-transparent border-none"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4.5 h-4.5 sm:w-5 sm:h-5"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            {/* Micro Badge Count */}
            <span className="absolute -top-0.5 -right-0.5 bg-secondary text-secondary-text rounded-full w-4 h-4 sm:w-4.5 sm:h-4.5 text-[0.6rem] font-black flex items-center justify-center border border-white shadow-xs">
              {getCartCount()}
            </span>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100 cursor-pointer bg-transparent border-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-5 py-5 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeAll}
              className="text-sm font-bold text-gray-800 hover:text-primary py-2 border-b border-gray-100 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#shop"
            onClick={closeAll}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-primary text-secondary py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors"
          >
            <span>Explore Electronics</span>
            <span>→</span>
          </Link>
        </div>
      )}

      {/* Search Dropdown Overlay */}
      {isSearchOpen && (
        <div className="bg-white border-t border-gray-100 shadow-xl px-4 sm:px-6 py-4 sm:py-6 max-h-[75vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search smart gadgets, watches, headphones..."
                className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-colors text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3 flex flex-col gap-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-lg object-contain bg-white flex-shrink-0 border border-gray-200 p-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.62rem] text-secondary font-bold uppercase tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-black text-primary flex-shrink-0">
                          ${price}
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-gray-500 text-center py-5">
                    No electronic devices found for &ldquo;{query}&rdquo;.
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
