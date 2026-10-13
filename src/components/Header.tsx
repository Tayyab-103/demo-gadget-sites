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
  { href: "/shop", label: "Catalog" },
  { href: "/about", label: "About Us" },
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#0E0F11]/95 backdrop-blur-md border-b border-white/8 text-white transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:px-10 py-4 sm:py-5">

        {/* Left: Brand Logo matching the reference KM style */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2 sm:gap-3 text-white no-underline group min-w-0"
        >
          <span className="text-xl sm:text-3xl font-black tracking-tighter text-white group-hover:text-[#E5E0D8] transition-colors font-sans">
            CW
          </span>
          <div className="flex flex-col leading-tight border-l border-white/20 pl-2 sm:pl-3 min-w-0">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
              Copper Whisk
            </span>
            <span className="text-[0.65rem] text-white/50 tracking-wider truncate">
              Kitchen Workshop
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Phone Contact + Controls */}
        <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0">
          
          {/* Phone block matching reference */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden sm:flex items-center gap-2.5 text-right group text-white/90 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70 group-hover:text-white transition-colors"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                {siteConfig.phone}
              </span>
              <span className="text-[0.62rem] text-white/50 tracking-wider">
                Workshop Concierge
              </span>
            </div>
          </a>

          {/* Action Buttons: Search, Cart & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white relative transition-all cursor-pointer"
              aria-label="Toggle Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#E5F2C9] text-[#161719] rounded-full min-w-[18px] h-[18px] text-[0.6rem] font-black flex items-center justify-center px-1 border border-[#161719]">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
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

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#161719] border-t border-white/10 px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeAll}
              className="text-xs font-medium text-white/80 py-2.5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-xs font-bold text-white mt-2 pt-3 border-t border-white/10"
          >
            Call Concierge: {siteConfig.phone}
          </a>
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#161719] border-t border-b border-white/10 shadow-2xl p-5 max-h-[75vh] overflow-y-auto">
          <div className="relative max-w-4xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chef whisks, precision scales, shears..."
              className="block w-full pl-11 pr-4 py-3 text-sm border border-white/15 rounded-xl focus:outline-none focus:border-white transition-all text-white bg-white/5"
            />
          </div>

          {trimmedQuery && (
            <div className="mt-4 flex flex-col gap-1.5 max-w-4xl mx-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={closeAll}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-white/5 flex-shrink-0 border border-white/10"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/100x100?text=Tool";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-white truncate">{product.name}</div>
                        <div className="text-[0.65rem] text-white/50 truncate uppercase tracking-widest">{product.category}</div>
                      </div>
                      <div className="text-sm font-bold text-[#E5F2C9] flex-shrink-0">${price}</div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-xs text-white/50 text-center py-6">
                  No kitchen tools found matching &ldquo;{query}&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
