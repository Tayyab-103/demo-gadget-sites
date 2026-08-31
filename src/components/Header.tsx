"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const logoNameParts = siteConfig.brandName.split(" ");
  const firstWord = logoNameParts[0] || "";
  const secondWord = logoNameParts[1] || "";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter(
        (p) => p.name.toLowerCase().includes(trimmedQuery) || (p.category || "").toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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

  const cartCount = getCartCount();

  return (
    <>
      {/* Slim Top Ticker Banner */}
      <AnnouncementBar />

      {/* Modern 3-Column Luxury Header */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-2xl border-b border-white/[0.08] transition-all duration-300 ${
          scrolled ? "py-3 shadow-xl bg-[#0F172A]" : "py-4 sm:py-5 shadow-md"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center">
            
            {/* 1. LEFT COLUMN: Minimalist Navigation Links (5 cols on lg) */}
            <div className="col-span-3 lg:col-span-5 flex items-center">
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-full transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer border border-white/10"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="7" x2="20" y2="7"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="17" x2="20" y2="17"></line>
                  </svg>
                )}
              </button>
            </div>

            {/* 2. CENTER COLUMN: Centered Brand Emblem & Logo (6 cols on mobile, 2 cols on lg) */}
            <div className="col-span-6 lg:col-span-2 flex items-center justify-center text-center">
              <Link
                href="/"
                onClick={closeAll}
                className="group inline-flex items-center gap-2.5 no-underline"
              >
                {siteConfig.useImageLogo && siteConfig.logoImage ? (
                  <img
                    src={siteConfig.logoImage}
                    alt={siteConfig.brandName}
                    className="max-h-9 w-auto object-contain"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-white text-xs sm:text-sm font-black shadow-[0_0_15px_rgba(14,165,233,0.4)] group-hover:scale-105 transition-transform duration-300">
                      {firstWord.charAt(0)}
                    </span>
                    <span className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
                      {firstWord}
                      <span className="text-secondary ml-1">{secondWord}</span>
                    </span>
                  </div>
                )}
              </Link>
            </div>

            {/* 3. RIGHT COLUMN: Search, Contact & Luxury Cart Pill (3 cols on mobile, 5 cols on lg) */}
            <div className="col-span-3 lg:col-span-5 flex items-center justify-end gap-2 sm:gap-3">
              
              {/* Search Icon */}
              <button
                onClick={toggleSearch}
                aria-label="Toggle product search"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all border border-white/10 cursor-pointer shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              {/* Contact Link (Desktop) */}
              <Link
                href="/contact"
                onClick={closeAll}
                className="hidden lg:inline-flex text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 px-3.5 py-2 rounded-full transition-colors"
              >
                Contact
              </Link>

              {/* Luxury Shopping Bag Pill */}
              <button
                onClick={toggleCart}
                aria-label="Open Cart Drawer"
                className="group inline-flex items-center gap-2 h-9 px-3.5 sm:px-4 rounded-full bg-white/10 hover:bg-secondary border border-white/15 hover:border-secondary transition-all duration-300 text-white cursor-pointer shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
                </svg>
                <span className="text-xs font-black">
                  {cartCount}
                </span>
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#0F172A] px-4 pt-4 pb-6 mt-3 flex flex-col gap-1 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeAll}
              className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:bg-white/10 py-3 px-4 rounded-xl transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/shop"
              onClick={closeAll}
              className="mt-3 text-center rounded-xl bg-secondary py-3 px-4 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-primary transition-colors shadow-md"
            >
              Shop All Products →
            </Link>
          </div>
        )}

        {/* Live Search Modal Popover */}
        {isSearchOpen && (
          <div className="border-t border-white/10 bg-[#0F172A] p-4 sm:p-5 shadow-2xl">
            <div className="relative max-w-2xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search training bands, massage guns, trackers..."
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white/10 border border-white/15 rounded-full text-white placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:bg-white/15 transition-all"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3 flex flex-col gap-2 max-w-2xl mx-auto max-h-60 overflow-y-auto pr-1">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => {
                    const price = p.bundles && p.bundles[0] ? p.bundles[0].price : p.ssPrice;
                    return (
                      <Link
                        key={p.id}
                        href={`/product/${p.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                      >
                        <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                          <Image src={p.image} alt={p.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-white truncate">{p.name}</div>
                          <div className="text-[0.62rem] text-slate-400 uppercase tracking-wider">{p.category}</div>
                        </div>
                        <div className="text-xs font-black text-secondary">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <div className="py-4 text-center text-xs text-slate-400">
                    No products found for &ldquo;{query}&rdquo;
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </header>
    </>
  );
}
