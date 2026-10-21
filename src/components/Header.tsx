"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { brandParts } from "@/lib/brand";
import PawIcon from "@/components/PawIcon";

const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
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

  const cartCount = getCartCount();

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0 min-w-0">
          <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-brand-gradient text-primary-text flex items-center justify-center shadow-sm group-hover:rotate-[-8deg] transition-transform duration-300 flex-shrink-0">
            <PawIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-display text-lg sm:text-[1.4rem] font-semibold tracking-tight text-ink leading-none truncate">
              {brandParts.main}
            </span>
            <span className="text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary-deep mt-1 truncate">
              {brandParts.sub}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-bg/70 border border-line rounded-full p-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-semibold text-muted hover:text-ink hover:bg-primary-soft transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={toggleSearch}
            className="w-10 h-10 rounded-full flex items-center justify-center text-ink hover:bg-secondary-soft transition-colors cursor-pointer"
            aria-label="Search products"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7.5" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            onClick={toggleCart}
            className="relative h-10 pl-3 pr-3 sm:pr-4 rounded-full flex items-center gap-2 bg-ink text-white hover:bg-primary-deep transition-colors cursor-pointer"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="hidden sm:inline text-xs font-bold">Cart</span>
            <span className="min-w-5 h-5 px-1 rounded-full bg-primary text-primary-text text-[0.65rem] font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-ink hover:bg-primary-soft cursor-pointer"
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
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="14" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-line bg-white px-4 sm:px-6 py-5 flex flex-col gap-1 animate-fadeIn shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={closeAll}
              className="flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold text-ink hover:bg-primary-soft"
            >
              {link.label}
              <span className="text-faint">→</span>
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={closeAll}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-brand-gradient text-primary-text py-3.5 rounded-full text-sm font-bold"
          >
            Shop all essentials →
          </Link>
        </div>
      )}

      {/* Search panel */}
      {isSearchOpen && (
        <div className="border-t border-line bg-white px-4 sm:px-6 py-6 max-h-[75vh] overflow-y-auto shadow-lg animate-fadeIn">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 -translate-y-1/2 text-faint">
                <circle cx="11" cy="11" r="7.5" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brushes, chew toys, collars…"
                className="field rounded-full pl-12"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-4 flex flex-col gap-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-4 p-3 rounded-2xl bg-white border border-line hover:border-primary hover:bg-primary-soft/50 transition-colors"
                      >
                        <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-ink truncate">{product.name}</div>
                          <div className="text-[0.68rem] text-primary-deep font-bold uppercase tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-sm font-bold text-ink flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-sm text-muted text-center py-6">
                    No products found for &ldquo;{query}&rdquo;.
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
