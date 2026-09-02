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
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Concierge" },
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
    <>
      <AnnouncementBar />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.06] transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group"
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary text-white text-[0.7rem] sm:text-xs font-black tracking-wider transition-transform duration-300 group-hover:scale-105">
              E
            </span>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-tight text-primary leading-none">
                Everden
              </span>
              <span className="text-[0.48rem] sm:text-[0.55rem] font-bold uppercase tracking-[0.2em] text-secondary leading-tight mt-0.5">
                Family Wardrobe House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex list-none gap-8 m-0 p-0 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-neutral-text/80 font-bold text-xs uppercase tracking-[0.18em] hover:text-primary transition-colors duration-300 py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Search Toggle */}
            <button
              onClick={toggleSearch}
              className="bg-neutral-bg border border-black/[0.06] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:border-black/20 hover:text-primary transition-all duration-300 cursor-pointer"
              aria-label="Toggle Search"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="bg-neutral-bg border border-black/[0.06] rounded-full relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:border-black/20 transition-all duration-300 cursor-pointer"
              aria-label="Toggle Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-primary"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full w-[18px] h-[18px] text-[0.58rem] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden bg-neutral-bg border border-black/[0.06] rounded-full w-9 h-9 flex items-center justify-center hover:border-black/20 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/[0.08] shadow-xl p-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="text-neutral-text font-bold uppercase text-xs tracking-widest py-3 px-3 hover:text-secondary hover:bg-neutral-bg transition-colors rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={closeAll}
              className="inline-block font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-secondary transition-all duration-300 py-3.5 px-5 rounded-full text-xs uppercase tracking-widest mt-4 shadow-sm"
            >
              Shop Collection &rarr;
            </Link>
          </div>
        )}

        {/* Search drawer */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-black/[0.08] shadow-2xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="relative max-w-4xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-neutral-text/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search wardrobe essentials, pullovers, organic tees, overcoats..."
                className="block w-full pl-12 pr-4 py-3.5 text-sm border border-black/10 rounded-full focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
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
                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-neutral-bg border border-transparent hover:border-black/[0.05] transition-all"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 rounded-xl object-cover bg-neutral-bg flex-shrink-0 border border-black/5"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-secondary uppercase tracking-widest font-semibold">{product.category}</div>
                        </div>
                        <div className="text-sm font-extrabold text-primary flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-neutral-text/50 text-center py-6">
                    No garments found matching &ldquo;{query}&rdquo;.
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
