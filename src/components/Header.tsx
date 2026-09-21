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

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/shop" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-black/5"
          : "bg-primary-tint border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-4 flex items-center justify-between gap-2">
        
        {/* Left: Responsive Brand Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex flex-col group min-w-0 max-w-[65%] sm:max-w-none flex-shrink"
          style={{ textDecoration: "none" }}
        >
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <img
              src={siteConfig.logoImage}
              alt={siteConfig.brandName}
              className="max-h-6 sm:max-h-8 w-auto object-contain"
            />
          ) : (
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-primary uppercase leading-tight flex items-center gap-1 sm:gap-1.5 truncate">
                <span className="truncate">{siteConfig.brandName}</span>
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary flex-shrink-0" />
              </span>
              <span className="hidden sm:block text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.24em] text-primary/70 mt-0.5 truncate">
                {siteConfig.Product || "Artist’s Supply & Craft Shops"}
              </span>
            </div>
          )}
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider px-3.5 lg:px-4 py-2 rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "color-mix(in srgb, var(--primary-color) 10%, transparent)" : "transparent",
                  color: isActive ? "var(--primary-color)" : "color-mix(in srgb, var(--primary-color) 75%, black)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Action Icons */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="p-1.5 sm:p-2 text-primary hover:text-secondary transition-colors cursor-pointer rounded-xl hover:bg-black/5"
            aria-label="Toggle Search"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* User/Support Account Icon (hidden on small mobile) */}
          <Link
            href="/contact"
            className="hidden sm:flex p-2 text-primary hover:text-secondary transition-colors rounded-xl hover:bg-black/5"
            aria-label="Studio Support"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart Bag Icon */}
          <button
            onClick={toggleCart}
            className="relative p-1.5 sm:p-2 text-primary hover:text-secondary transition-colors cursor-pointer rounded-xl hover:bg-black/5"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span
              className="absolute -top-0.5 -right-0.5 rounded-full w-[17px] h-[17px] sm:w-[18px] sm:h-[18px] text-[0.6rem] sm:text-[0.62rem] font-black flex items-center justify-center shadow-xs"
              style={{
                backgroundColor: "var(--secondary-color)",
                color: "var(--secondary-text-color)",
              }}
            >
              {mounted ? getCartCount() : 0}
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary p-1 sm:p-1.5 rounded-xl hover:bg-black/5 transition-colors cursor-pointer"
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

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-black/6 bg-white px-4 py-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="font-black text-sm py-2.5 px-4 rounded-xl transition-all"
                style={{
                  backgroundColor: isActive ? "var(--primary-color)" : "transparent",
                  color: isActive ? "var(--primary-text-color)" : "var(--primary-color)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-black/10 bg-white px-4 sm:px-6 py-4 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search acrylics, oil pastels, drawing kits..."
                className="block w-full pl-11 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full focus:outline-none focus:ring-2 text-black bg-primary-tint border border-black/10 placeholder-black/40"
                style={{ "--tw-ring-color": "var(--secondary-color)" } as React.CSSProperties}
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
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-primary-tint border border-transparent hover:border-black/5 transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-black/5 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&q=80";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-black text-primary truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-black/50 truncate uppercase font-bold">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-black text-secondary flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-black/50 text-center py-4">
                    No art &amp; craft supplies found for &ldquo;{query}&rdquo;.
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
