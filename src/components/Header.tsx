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
  { href: "/shop", label: "Products" },
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
      className="sticky top-0 z-50 bg-primary text-white backdrop-blur-md transition-all duration-300 border-b border-white/10 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
        
        {/* Left: Brand Logo (Emblem + Title & Subtitle) */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0 pr-2"
          style={{ textDecoration: "none" }}
        >
          {/* Circular Emblem Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary text-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/20 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          {/* Typography: Responsive Brand Title & Subtitle */}
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-sm xs:text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-tight truncate">
              {siteConfig.brandName}
            </span>
            <span className="text-[0.5rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#FFDBE5] -mt-0.5 truncate">
              PREMIUM BABY PRODUCTS
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links for Large Screens */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 flex-shrink-0">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs xl:text-sm font-semibold transition-all duration-200 tracking-normal py-1.5 px-3.5 rounded-full ${
                  active
                    ? "bg-secondary text-primary font-bold shadow-sm"
                    : "text-white/85 hover:text-secondary hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search, Cart & Mobile Menu Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className="p-1.5 sm:p-2 text-white hover:text-secondary transition-colors cursor-pointer bg-transparent border-none rounded-full hover:bg-white/10"
            aria-label="Search baby products"
            aria-expanded={isSearchOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            className="p-1.5 sm:p-2 text-white hover:text-secondary transition-colors cursor-pointer relative bg-transparent border-none rounded-full hover:bg-white/10"
            aria-label="Shopping Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
            <span className="absolute 0 top-0.5 right-0.5 bg-secondary text-primary rounded-full w-4 h-4 text-[0.62rem] font-bold flex items-center justify-center border border-primary shadow-xs">
              {getCartCount()}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-1.5 sm:p-2 text-white hover:text-secondary cursor-pointer bg-transparent border-none rounded-full hover:bg-white/10"
            aria-label="Toggle navigation menu"
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

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary text-white border-t border-white/10 shadow-2xl px-4 sm:px-6 py-5 flex flex-col gap-2 transition-all animate-fadeIn">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeAll}
                className={`text-sm sm:text-base font-semibold py-3 px-4 rounded-xl transition-all ${
                  active
                    ? "bg-secondary text-primary font-bold shadow-xs"
                    : "text-white/90 hover:text-secondary hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            onClick={closeAll}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-secondary text-primary hover:bg-white py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <span>Explore Baby Catalog</span>
            <span>→</span>
          </Link>
        </div>
      )}

      {/* Search Dropdown Overlay */}
      {isSearchOpen && (
        <div className="bg-[#F8F9FE] text-primary border-t border-black/10 shadow-2xl px-4 sm:px-6 py-4 sm:py-6 max-h-[75vh] overflow-y-auto">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search baby bouncers, teethers, carriers..."
                className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white border border-[#13275B]/20 rounded-full focus:outline-none focus:border-primary transition-colors text-primary placeholder:text-primary/40 shadow-xs"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3 flex flex-col gap-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl bg-white hover:border-primary border border-stone-200 transition-all shadow-xs"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover bg-neutral-100 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = "/img/hero1.jpg";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.62rem] sm:text-[0.68rem] text-primary/70 font-bold uppercase tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-primary flex-shrink-0">
                          ${price}
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-primary/60 text-center py-5">
                    No baby items found for &ldquo;{query}&rdquo;.
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
