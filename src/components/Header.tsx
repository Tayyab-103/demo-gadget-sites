"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home", badge: "" },
  { href: "/shop", label: "Art Supplies", badge: "New" },
  { href: "/about", label: "Atelier Story", badge: "" },
  { href: "/contact", label: "Contact", badge: "" },
];

export default function Header() {
  const pathname = usePathname();
  const { toggleCart, getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const logoNameParts = siteConfig.brandName.split(" ");
  const firstWord = logoNameParts[0] || "North";
  const secondWord = logoNameParts[1] || "Star";
  const trailingWords = logoNameParts.slice(2).join(" ") || "Art Supply Market";

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
      setIsScrolled(window.scrollY > 20);
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

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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

      {/* Utility Top Strip */}
      <div className="bg-primary text-white/80 border-b border-white/10 text-xs transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3 text-[0.68rem] sm:text-[0.72rem] font-medium">
          <div className="flex items-center gap-4 text-white/70">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-secondary font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              MCC 5970 Atelier Standard
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/80">Archival Grade Pigments &amp; Crafts</span>
          </div>

          <div className="flex items-center gap-5 ml-auto font-semibold">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{siteConfig.phone}</span>
            </a>
            <span className="text-white/25">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-black/8 py-3.5"
            : "bg-neutral-bg/95 backdrop-blur-sm border-b border-black/5 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.01] flex-shrink-0"
            aria-label={`${siteConfig.brandName} Homepage`}
          >
            {/* Atelier Star Monogram Badge */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-neutral-bg flex items-center justify-center border border-black/5 shadow-xs p-0.5 flex-shrink-0"> 
              <img
                src={siteConfig.logoImage || "/img/logo.jpg"}
                alt={`${siteConfig.brandName} Logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black uppercase tracking-tight text-primary leading-none flex items-center gap-1">
                <span>{firstWord}</span>
                <span className="text-secondary">{secondWord}</span>
              </span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.16em] text-neutral-text/60 mt-0.5">
                {trailingWords}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-primary bg-secondary/15 font-extrabold"
                      : "text-neutral-text/80 hover:text-primary hover:bg-black/5"
                  }`}
                >
                  {link.label}
                  {link.badge && (
                    <span className="bg-secondary text-primary text-[0.55rem] font-black px-1.5 py-0.5 rounded-md uppercase tracking-normal">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Search Trigger */}
            <button
              onClick={toggleSearch}
              className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-200 cursor-pointer ${
                isSearchOpen
                  ? "bg-secondary text-primary border-secondary shadow-sm"
                  : "bg-white text-primary border-black/8 hover:border-secondary hover:text-secondary shadow-xs"
              }`}
              aria-label="Search art supplies"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={toggleCart}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary border border-black/8 hover:border-secondary hover:shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Open Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-primary font-black text-[0.62rem] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-bounce">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Desktop CTA Button */}
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Explore Supplies</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/8 text-primary hover:border-secondary transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Live Search Panel */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-2xl p-4 sm:p-6 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
            <div className="max-w-4xl mx-auto">
              <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 text-neutral-text/40">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search pigments, handcrafted brushes, Belgian linen canvases..."
                  className="w-full pl-12 pr-10 py-3.5 text-sm sm:text-base bg-neutral-bg border border-black/10 rounded-2xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-neutral-text placeholder:text-neutral-text/40 shadow-inner"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 text-neutral-text/40 hover:text-neutral-text text-sm font-bold"
                  >
                    Clear
                  </button>
                )}
              </div>

              {trimmedQuery && (
                <div className="mt-4 max-h-[60vh] overflow-y-auto divide-y divide-black/5">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => {
                      const price = p.bundles && p.bundles[0] ? p.bundles[0].price : p.ssPrice;
                      return (
                        <Link
                          key={p.id}
                          href={`/product/${p.id}`}
                          onClick={closeAll}
                          className="flex items-center gap-4 py-3 px-3 hover:bg-neutral-bg rounded-xl transition-colors"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-14 h-14 object-cover rounded-lg bg-neutral-bg border border-black/5 flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.src = "https://placehold.co/100x100?text=Art";
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-primary truncate">{p.name}</h4>
                            <span className="text-[0.65rem] font-semibold text-secondary uppercase tracking-wider block mt-0.5">
                              {p.category}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-extrabold text-primary block">${price}</span>
                            <span className="text-[0.65rem] text-green-700 font-bold">In Stock</span>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-neutral-text/50 text-sm">
                      No art supplies found matching &ldquo;{query}&rdquo;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer / Slide-Down */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-bg border-b border-black/10 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
            <div className="p-5 flex flex-col gap-4">
              
              {/* Mobile Quick Search Bar */}
              <div className="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 text-neutral-text/40">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (!isSearchOpen) setIsSearchOpen(true);
                  }}
                  placeholder="Search art supplies..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-black/10 rounded-xl text-xs font-medium focus:outline-none focus:border-secondary"
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 bg-white p-3 rounded-2xl border border-black/5 shadow-xs">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAll}
                      className={`flex items-center justify-between p-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-secondary/15 text-primary"
                          : "text-neutral-text/80 hover:bg-neutral-bg"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.badge ? (
                        <span className="bg-secondary text-primary text-[0.55rem] font-black px-2 py-0.5 rounded-md">
                          {link.badge}
                        </span>
                      ) : (
                        <span className="text-neutral-text/30">→</span>
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Featured Art Supplies Quick Access */}
              <div className="bg-white p-4 rounded-2xl border border-black/5">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-text/50 block mb-3">
                  Featured Atelier Catalog
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {products.slice(0, 3).map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/product/${prod.id}`}
                      onClick={closeAll}
                      className="group flex flex-col items-center text-center p-2 rounded-xl bg-neutral-bg hover:bg-secondary/10 transition-colors"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-12 h-12 object-cover rounded-lg mb-1.5"
                      />
                      <span className="text-[0.62rem] font-bold text-primary line-clamp-1">
                        {prod.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support Info & Shop CTA */}
              <div className="bg-primary text-white p-4 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-medium text-white/80">
                  <span>Atelier Support:</span>
                  <a href={`tel:${siteConfig.phone}`} className="text-secondary font-bold">
                    {siteConfig.phone}
                  </a>
                </div>
                <Link
                  href="/shop"
                  onClick={closeAll}
                  className="w-full text-center bg-secondary text-primary font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md hover:bg-white transition-all"
                >
                  Shop Full Catalog
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
