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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50">
        {/* Announcement Bar */}
        <div className="bg-primary text-primary-text text-[0.58rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-center py-2 px-4 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="sm:hidden">Free shipping &middot; {siteConfig.trialPeriod}-day returns</span>
          <span className="hidden sm:inline">Free {siteConfig.shippingCarrier} shipping on every order &middot; {siteConfig.trialPeriod}-day returns</span>
        </div>

        <div className="bg-neutral-bg/95 backdrop-blur-md border-b border-secondary/60 py-2.5 sm:py-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 flex items-center justify-between gap-3 lg:gap-4">

            {/* Logo */}
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-2.5 sm:gap-3 group min-w-0"
              aria-label={siteConfig.brandName}
            >
              <span className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 rounded-full bg-primary text-primary-text flex items-center justify-center group-hover:bg-primary-dark transition-colors">
                <svg className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L12 4L21 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9.5V20H18V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M10 20V14H14V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex flex-col leading-none min-w-0">
                <span className="font-serif text-lg sm:text-2xl font-semibold tracking-[0.1em] sm:tracking-[0.14em] text-neutral-text">
                  Harbor
                </span>
                <span className="hidden min-[400px]:block text-[0.5rem] sm:text-[0.55rem] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-primary mt-1 whitespace-nowrap">
                  Home Furnishing Market
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 bg-surface rounded-full p-1 border border-secondary/50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 xl:px-6 py-2 rounded-full text-[0.72rem] font-bold uppercase tracking-[0.18em] text-neutral-text/80 hover:bg-neutral-bg hover:text-primary hover:shadow-sm transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Utility Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <button
                onClick={toggleSearch}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-secondary bg-neutral-bg flex items-center justify-center text-neutral-text hover:bg-surface hover:text-primary transition-all cursor-pointer"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <button
                onClick={toggleCart}
                className="h-9 sm:h-10 pl-3 pr-3.5 sm:pl-3.5 sm:pr-4 rounded-full bg-primary text-primary-text flex items-center gap-2 hover:bg-primary-dark transition-all relative cursor-pointer"
                aria-label="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="text-xs font-bold">{getCartCount()}</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-secondary bg-neutral-bg flex items-center justify-center text-neutral-text cursor-pointer"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="lg:hidden bg-neutral-bg border-b border-secondary/60 shadow-xl px-4 sm:px-8 pb-6 pt-2 flex flex-col max-h-[calc(100vh-110px)] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-neutral-text py-4 border-b border-secondary/40 hover:text-primary"
              >
                <span>{link.label}</span>
                <span className="text-primary">&rarr;</span>
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 inline-flex items-center justify-center bg-primary text-primary-text py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.16em]"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        )}

        {/* Search Panel */}
        {isSearchOpen && (
          <div className="bg-neutral-bg border-b border-secondary/60 shadow-xl p-5 max-h-[70vh] overflow-y-auto">
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
                placeholder="Search the market (e.g. throw, lamp, tray)..."
                className="block w-full pl-11 pr-4 py-3.5 text-sm border border-secondary rounded-full focus:outline-none focus:border-primary transition-all text-neutral-text bg-surface"
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
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-surface border border-transparent hover:border-secondary/60 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover bg-surface flex-shrink-0 border border-secondary/50"
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
                    No home pieces found for &ldquo;{query}&rdquo;.
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
