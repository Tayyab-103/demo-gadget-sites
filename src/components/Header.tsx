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
  { href: "/about", label: "About" },
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
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-md border-b border-[#C5A059]/25 py-3"
          : "bg-[#FAF8F5] border-b border-[#C5A059]/15 py-4"
      }`}
    >
      {/* Top Banner Notice */}
      <div className="hidden sm:block bg-[#121820] text-[#FAF8F5] py-1 text-center text-[0.68rem] tracking-[0.2em] uppercase font-serif border-b border-[#C5A059]/30">
        <span className="text-[#C5A059] mr-1.5">✦</span>
        Handcrafted Archival Stationery &amp; Fine Writing Instruments — Free Express Shipping Over $35
        <span className="text-[#C5A059] ml-1.5">✦</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-1 sm:mt-2">
        
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
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121820] border border-[#C5A059] flex items-center justify-center text-[#C5A059] text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform">
                ✒
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#121820] font-serif leading-none">
                  QUILLHAVEN
                </span>
                <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.32em] text-[#C5A059] mt-0.5">
                  STATIONERY HOUSE
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
                className={`text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                  isActive
                    ? "text-[#121820] border-b-2 border-[#C5A059] pb-0.5"
                    : "text-[#1A202C]/75 hover:text-[#121820] hover:border-b-2 hover:border-[#C5A059]/50 pb-0.5"
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
            className="p-2 text-[#121820]/80 hover:text-[#121820] transition-colors cursor-pointer rounded-full hover:bg-[#C5A059]/10"
            aria-label="Search Stationery"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Contact Support Icon */}
          <Link
            href="/contact"
            className="hidden sm:flex p-2 text-[#121820]/80 hover:text-[#121820] transition-colors rounded-full hover:bg-[#C5A059]/10"
            aria-label="Contact Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart Bag Icon with Burnished Gold Badge */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-[#121820]/85 hover:text-[#121820] transition-colors cursor-pointer rounded-full hover:bg-[#C5A059]/10"
            aria-label="View Shopping Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getCartCount() > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C5A059] text-[#121820] rounded-full w-[18px] h-[18px] text-[0.62rem] font-bold flex items-center justify-center border border-[#FAF8F5] shadow-xs">
                {getCartCount()}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C5A059]/30 text-[#121820] rounded-full w-[16px] h-[16px] text-[0.55rem] font-bold flex items-center justify-center border border-[#121820]/15">
                0
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#121820] p-1.5 rounded-lg hover:bg-[#C5A059]/10 transition-colors cursor-pointer"
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
        <div className="md:hidden border-t border-[#C5A059]/20 bg-[#FAF8F5] px-4 py-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeAll}
              className={`font-serif text-sm py-2.5 px-4 rounded-xl transition-all ${
                pathname === item.href ? "bg-[#121820] text-[#FAF8F5]" : "text-[#121820] hover:bg-[#C5A059]/15"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-[#C5A059]/25 bg-[#FAF8F5] px-4 sm:px-6 py-4 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#121820]/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fountain pens, leather journals, brass desk suites..."
                className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#121820] bg-white border border-[#C5A059]/30 placeholder-[#121820]/40 font-serif"
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
                        className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#C5A059]/10 border border-transparent hover:border-[#C5A059]/20 transition-all bg-white"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-contain p-1 bg-[#FAF8F5] border border-[#C5A059]/20 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-[#121820] font-serif truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-[#C5A059] truncate uppercase font-bold tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#121820] flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-[#121820]/60 text-center py-4 font-serif">
                    No fine stationery found for &ldquo;{query}&rdquo;.
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
