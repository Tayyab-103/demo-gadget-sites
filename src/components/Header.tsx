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
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
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
        (p) =>
          p.name.toLowerCase().includes(trimmedQuery) ||
          (p.category || "").toLowerCase().includes(trimmedQuery) ||
          p.description.toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg border-b border-[#C87D3B]/25 py-3 text-white"
          : "bg-[#0D1B2A] border-b border-[#C87D3B]/15 py-3.5 text-white"
      }`}
    >
      {/* Top Banner Notice */}
      <div className="hidden sm:block bg-[#080F18] text-[#F8F6F0] py-1 text-center text-[0.68rem] tracking-[0.24em] uppercase font-medium border-b border-[#C87D3B]/30">
        <span className="text-[#C87D3B] mr-2">✦</span>
        Aerospace Aluminum Luggage &amp; Modular Travel Systems — 100-Day Global Flight Guarantee
        <span className="text-[#C87D3B] ml-2">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-1 sm:mt-1.5">
        
        {/* Left: Brand Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <img
              src={siteConfig.logoImage}
              alt={siteConfig.brandName}
              className="max-h-8 sm:max-h-9 w-auto object-contain"
            />
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1E2E44] to-[#0A131F] border border-[#C87D3B] flex items-center justify-center text-[#C87D3B] shadow-md group-hover:scale-105 transition-transform">
                {/* Compass / Horizon Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-wider text-white uppercase leading-none">
                  WANDERLOOM
                </span>
                <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.34em] text-[#C87D3B] mt-0.5">
                  TRAVEL COLLECTIVE
                </span>
              </div>
            </div>
          )}
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
                  isActive
                    ? "text-[#C87D3B] border-b-2 border-[#C87D3B] pb-0.5"
                    : "text-white/80 hover:text-white hover:border-b-2 hover:border-[#C87D3B]/50 pb-0.5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Search, Concierge, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="p-2 text-white/85 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Search Luggage and Accessories"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>



          {/* Cart Bag Icon with Saddle Copper Badge */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-white/90 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getCartCount() > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C87D3B] text-white rounded-full w-[18px] h-[18px] text-[0.62rem] font-bold flex items-center justify-center border border-[#0D1B2A] shadow-xs">
                {getCartCount()}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-0.5 bg-white/20 text-white rounded-full w-[16px] h-[16px] text-[0.55rem] font-bold flex items-center justify-center border border-white/20">
                0
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#C87D3B]/20 bg-[#0A1420] px-4 py-4 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeAll}
              className={`text-xs uppercase tracking-wider font-bold py-2.5 px-4 rounded-xl transition-all ${
                pathname === item.href ? "bg-[#C87D3B] text-white" : "text-white/90 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-[#C87D3B]/25 bg-[#08111C] px-4 sm:px-6 py-4 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search aluminum carry-ons, leather weekender duffles, packing cubes..."
                className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#C87D3B] text-white bg-[#101D2D] border border-[#C87D3B]/35 placeholder-white/40"
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
                        className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-white/10 border border-transparent hover:border-[#C87D3B]/30 transition-all bg-[#122030]"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-black/20 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-white truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-[#C87D3B] truncate uppercase font-bold tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#C87D3B] flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-white/60 text-center py-4">
                    No luggage or travel gear found for &ldquo;{query}&rdquo;.
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
