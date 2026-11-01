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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Collection" },
  { href: "/about", label: "Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const logoNameParts = siteConfig.brandName.split(" ");
  const firstWord = logoNameParts[0] || "";
  const secondWord = logoNameParts[1] || "";
  const trailingWords = logoNameParts.slice(2).join(" ");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
    <>
      {/* Top Utility Strip */}
      <div className="hidden md:block bg-primary text-white/80 border-b border-white/8 text-[0.7rem]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/60 font-medium">
            <span>Free Express Nationwide Dispatch</span>
            <span className="w-1 h-1 rounded-full bg-secondary/70" />
            <span>1-Year Comprehensive Warranty</span>
          </div>
          <div className="flex items-center gap-6 font-semibold uppercase tracking-wider text-[0.68rem]">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {siteConfig.phone}
            </a>
            <span className="w-1 h-1 rounded-full bg-secondary/50" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Support
            </a>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-neutral-bg/95 backdrop-blur-xl border-b border-black/8 shadow-sm"
            : "bg-neutral-bg/90 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0"
            style={{ textDecoration: "none" }}
          >
            {siteConfig.useImageLogo && siteConfig.logoImage ? (
              <>
                <img
                  src="/product-logo.png"
                  alt={siteConfig.brandName}
                  className="max-h-9 max-w-[120px] sm:max-w-none w-auto object-contain lg:hidden mix-blend-multiply"
                />
                <img
                  src={siteConfig.logoImage}
                  alt={siteConfig.brandName}
                  className="max-h-10 w-auto object-contain hidden lg:block mix-blend-multiply"
                />
              </>
            ) : (
              <span className="flex items-center gap-2 min-w-0">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-primary text-secondary shadow-md shadow-primary/10 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight text-primary leading-tight truncate">
                    {firstWord}{" "}
                    <span className="text-secondary">{secondWord}</span>
                  </span>
                  {trailingWords && (
                    <span className="text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.18em] text-neutral-text/50 hidden md:block">
                      {trailingWords}
                    </span>
                  )}
                </span>
              </span>
            )}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 border border-black/5 rounded-full px-5 py-1.5 shadow-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-neutral-text/80 hover:text-primary transition-colors rounded-full hover:bg-black/4"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            {/* Search Trigger */}
            <button
              onClick={toggleSearch}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-black/6 flex items-center justify-center text-primary hover:text-secondary hover:border-secondary/40 hover:shadow-xs transition-all cursor-pointer"
              aria-label="Toggle Search"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={toggleCart}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-black/6 flex items-center justify-center text-primary hover:text-secondary hover:border-secondary/40 hover:shadow-xs transition-all relative cursor-pointer"
              aria-label="Toggle Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-text rounded-full min-w-[17px] h-[17px] px-1 text-[0.6rem] font-black flex items-center justify-center border-2 border-white shadow-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-2.5 px-5.5 rounded-full text-[0.68rem] font-bold uppercase tracking-widest shadow-sm hover:shadow-md"
            >
              <span>Explore Gear</span>
              <span className="text-xs">→</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-black/6 flex items-center justify-center text-primary cursor-pointer hover:border-secondary/40"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-black/5 bg-neutral-bg/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-1 mb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="px-4 py-3 rounded-xl text-neutral-text font-bold text-xs uppercase tracking-widest hover:bg-black/4 hover:text-secondary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/shop"
              onClick={closeAll}
              className="w-full text-center py-3.5 rounded-full bg-primary text-primary-text font-bold text-xs uppercase tracking-widest shadow-md hover:bg-secondary transition-colors"
            >
              Explore Full Collection
            </Link>

            <div className="pt-4 mt-2 border-t border-black/5 flex items-center justify-between text-[0.7rem] text-neutral-text/50 font-medium px-2">
              <span>{siteConfig.phone}</span>
              <span>{siteConfig.shippingPeriod} Day Express Delivery</span>
            </div>
          </div>
        )}

        {/* Luxury Search Overlay */}
        {isSearchOpen && (
          <div className="border-t border-black/5 bg-white/95 backdrop-blur-2xl px-6 py-6 shadow-xl animate-in fade-in duration-200">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-text/40">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search luggage, duffels, travel packs, accessories..."
                  className="w-full pl-12 pr-12 py-3.5 text-sm bg-neutral-bg border border-black/8 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-text/40 hover:text-neutral-text text-xs cursor-pointer font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {trimmedQuery && (
                <div className="mt-4 max-h-[60vh] overflow-y-auto divide-y divide-black/5">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                      const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                      return (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={closeAll}
                          className="flex items-center gap-4 py-3 px-3 hover:bg-neutral-bg rounded-xl transition-colors group"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-13 h-13 rounded-lg object-contain bg-white p-1 border border-black/5 flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.src = "https://placehold.co/100x100?text=Item";
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors truncate">
                              {product.name}
                            </h4>
                            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/40">
                              {product.category || "Travel Gear"}
                            </span>
                          </div>
                          <span className="text-sm font-black text-primary flex-shrink-0">
                            ${price}
                          </span>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="py-8 text-center text-xs text-neutral-text/50">
                      No travel gear found matching &ldquo;{query}&rdquo;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
