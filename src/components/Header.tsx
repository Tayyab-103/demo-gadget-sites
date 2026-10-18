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
  { href: "/shop", label: "Shop Tools" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const [brandFirst, ...brandRest] = siteConfig.brandName.split(" ");

export function BrandMark({ invert = false }: { invert?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
          invert ? "bg-white/15 text-white ring-1 ring-white/30" : "bg-primary text-white"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`heading-serif text-lg sm:text-xl transition-colors ${invert ? "text-white" : "text-primary"}`}>
          {brandFirst}
        </span>
        {brandRest.length > 0 && (
          <span
            className={`text-[0.55rem] sm:text-[0.6rem] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.28em] whitespace-nowrap mt-1 transition-colors ${
              invert ? "text-white/70" : "text-secondary"
            }`}
          >
            {brandRest.join(" ")}
          </span>
        )}
      </span>
    </span>
  );
}

interface HeaderProps {
  /** Transparent header that floats over a dark hero until the page is scrolled */
  overlay?: boolean;
}

export default function Header({ overlay = false }: HeaderProps) {
  const pathname = usePathname();
  const { toggleCart, getCartCount } = useCart();
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
          (p.category || "").toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
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

  // Transparent only while floating over the hero with nothing expanded
  const isClear = overlay && !isScrolled && !isMenuOpen && !isSearchOpen;

  const iconBtn = isClear
    ? "border-white/30 text-white hover:bg-white hover:text-primary"
    : "border-primary/15 text-primary hover:bg-primary hover:text-white";

  return (
    <header
      ref={headerRef}
      className={`${overlay ? "fixed inset-x-0" : "sticky"} top-0 z-50 transition-all duration-300 ${
        isClear
          ? "bg-transparent py-4 md:py-6"
          : "bg-neutral-bg/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-8 lg:px-12">
        <Link href="/" onClick={closeAll} aria-label={`${siteConfig.brandName} home`}>
          <BrandMark invert={isClear} />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full p-1 transition-colors">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] font-semibold px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? isClear
                      ? "bg-white/15 text-white"
                      : "bg-primary text-white"
                    : isClear
                      ? "text-white/85 hover:text-white hover:bg-white/10"
                      : "text-neutral-text/75 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            onClick={toggleSearch}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${iconBtn}`}
            aria-label="Search tools"
            aria-expanded={isSearchOpen}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            onClick={toggleCart}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer relative ${iconBtn}`}
            aria-label="Open shopping cart"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full min-w-[1.15rem] h-[1.15rem] px-1 text-[0.6rem] font-bold flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>

          <Link
            href="/shop"
            className="hidden md:inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-[0.8rem] font-semibold px-5 h-10 rounded-full transition-colors"
          >
            Shop Now
            <span aria-hidden>→</span>
          </Link>

          <button
            onClick={toggleMenu}
            className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${iconBtn}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="14" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden max-w-[1440px] mx-auto px-4 sm:px-8 pt-3 pb-5">
          <nav className="flex flex-col bg-white rounded-2xl border border-black/5 shadow-lg p-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className={`flex items-center justify-between text-sm font-semibold px-4 py-3.5 rounded-xl transition-colors ${
                    isActive ? "bg-primary/5 text-primary" : "text-neutral-text/80 hover:bg-neutral-bg"
                  }`}
                >
                  {link.label}
                  <span className="text-secondary" aria-hidden>→</span>
                </Link>
              );
            })}
            <Link
              href="/shop"
              onClick={closeAll}
              className="mt-2 text-center bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
            >
              Shop All Tools
            </Link>
          </nav>
        </div>
      )}

      {/* Search panel */}
      {isSearchOpen && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-3 pb-5">
          <div className="bg-white rounded-2xl border border-black/5 shadow-lg p-3 sm:p-4">
            <div className="flex items-center gap-3">
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search trowels, pruners, cultivators..."
                className="w-full bg-neutral-bg border border-black/10 rounded-xl px-4 py-3 text-sm text-neutral-text placeholder:text-neutral-text/40 focus:outline-none focus:border-secondary"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs font-semibold text-neutral-text/50 hover:text-neutral-text uppercase tracking-wider p-2 cursor-pointer"
              >
                Close
              </button>
            </div>

            {trimmedQuery && (
              <div className="mt-3 max-h-64 overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  <div className="flex flex-col gap-1">
                    {filteredProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/product/${p.id}`}
                        onClick={closeAll}
                        className="flex items-center justify-between gap-3 p-2 hover:bg-neutral-bg rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={p.image} alt={p.name} className="w-11 h-11 object-cover rounded-lg flex-shrink-0" />
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-neutral-text truncate">{p.name}</div>
                            <div className="text-xs text-secondary">{p.category}</div>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-primary">${p.ssPrice}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-sm text-neutral-text/60 text-center py-4">
                    No tools found matching &quot;{query}&quot;
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
