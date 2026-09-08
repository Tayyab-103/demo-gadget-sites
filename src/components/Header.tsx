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
  { href: "/shop", label: "Pet Supplies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const { toggleCart, getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || (pathname ? pathname.startsWith(`${href}/`) : false);
  };

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

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#543625] text-white backdrop-blur-md transition-all duration-300 border-b border-black/15 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        
        {/* Left: Brand Logo (Emblem + Title & Subtitle) */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0"
          style={{ textDecoration: "none" }}
        >
          {/* Circular Emblem Icon */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#16A34A] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/20 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            >
              {/* Pet Paw Emblem */}
              <circle cx="8.5" cy="5.5" r="1.7" />
              <circle cx="15.5" cy="5.5" r="1.7" />
              <circle cx="5.5" cy="10" r="1.7" />
              <circle cx="18.5" cy="10" r="1.7" />
              <path d="M12 9.5c-3.2 0-5.8 2.2-5.8 5.2 0 2.2 1.8 3.8 3.5 3.8 1.1 0 1.7-.7 2.3-.7s1.2.7 2.3.7c1.7 0 3.5-1.6 3.5-3.8 0-3-2.6-5.2-5.8-5.2z" />
            </svg>
          </div>

          {/* Typography: Dynamic Brand Title & Subtitle */}
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="text-[0.55rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#16A34A] -mt-0.5">
              PET SHOPS, FOOD &amp; SUPPLIES
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links with Active Indicator */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 bg-black/10 px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all duration-200 tracking-normal relative py-1.5 px-4 rounded-full ${
                  active
                    ? "bg-[#16A34A] text-white shadow-sm font-bold"
                    : "text-white/85 hover:text-[#16A34A] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search & Shopping Cart */}
        <div className="flex items-center gap-3.5 sm:gap-6 flex-shrink-0">
          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className="p-1.5 text-white hover:text-[#16A34A] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Search pet products"
            aria-expanded={isSearchOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Shopping Bag Button with Badge */}
          <button
            onClick={toggleCart}
            className="p-1.5 text-white hover:text-[#16A34A] transition-colors cursor-pointer relative bg-transparent border-none"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            {/* Cart Count Badge */}
            <span className="absolute -top-1 -right-1 bg-[#16A34A] text-white rounded-full w-4 h-4 text-[0.62rem] font-bold flex items-center justify-center border border-[#543625] shadow-xs">
              {getCartCount()}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1.5 text-white hover:text-[#16A34A] cursor-pointer bg-transparent border-none"
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

      {/* Mobile Drawer Menu with Active Highlights */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#3B2314] text-white border-t border-white/10 shadow-2xl px-6 py-6 flex flex-col gap-2 transition-all animate-fadeIn">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeAll}
                className={`text-base font-semibold py-2.5 px-4 rounded-xl transition-all ${
                  active
                    ? "bg-[#16A34A] text-white font-bold shadow-xs"
                    : "text-white/90 hover:text-[#16A34A] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#shop"
            onClick={closeAll}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white hover:bg-white hover:text-primary py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <span>Explore Pet Catalog</span>
            <span>→</span>
          </Link>
        </div>
      )}

      {/* Search Dropdown Overlay */}
      {isSearchOpen && (
        <div className="bg-[#FAF8F5] text-[#3B2314] border-t border-black/10 shadow-2xl px-6 py-6 max-h-[75vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3B2314]/40"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search carrier backpacks, chew toys, self-cleaning litter scoops..."
                className="w-full pl-12 pr-4 py-3.5 text-sm bg-white border border-stone-300 rounded-full focus:outline-none focus:border-[#16A34A] transition-colors text-[#3B2314] placeholder:text-[#3B2314]/40 shadow-xs"
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
                        className="flex items-center gap-4 p-3 rounded-2xl bg-white hover:border-[#16A34A] border border-stone-200 transition-all shadow-xs"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-neutral-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-[#3B2314] truncate">{product.name}</div>
                          <div className="text-[0.68rem] text-[#16A34A] font-bold uppercase tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-sm font-bold text-[#3B2314] flex-shrink-0">
                          ${price}
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-[#3B2314]/60 text-center py-6">
                    No pet items found for &ldquo;{query}&rdquo;.
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
