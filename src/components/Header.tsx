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
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Products" },
  { href: "/contact", label: "Contacts" },
];

export default function Header() {
  const pathname = usePathname();
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
          (p.category || "").toLowerCase().includes(trimmedQuery) ||
          p.description.toLowerCase().includes(trimmedQuery)
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

  return (
    <>
      <AnnouncementBar />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-all duration-300"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12 py-5">

          {/* ===== LEFT: Brand Name (Reference: "APARTment Q" style) ===== */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-1.5 group flex-shrink-0"
            style={{ textDecoration: "none" }}
          >
            {siteConfig.useImageLogo && siteConfig.logoImage ? (
              <img
                src={siteConfig.logoImage}
                alt={siteConfig.brandName}
                className="max-h-9 w-auto object-contain"
              />
            ) : (
              <span className="text-lg sm:text-xl tracking-tight text-[#111] leading-none select-none">
                <span className="font-black uppercase">VOLT</span>
                <span className="font-normal">spire</span>
                <span className="ml-1 text-neutral-text/40 font-light">⚡</span>
              </span>
            )}
          </Link>

          {/* ===== CENTER-RIGHT: Navigation Links (Reference: clean, underlined active) ===== */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className={`relative text-[0.82rem] tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-[#111] font-semibold"
                      : "text-neutral-text/50 hover:text-[#111] font-medium"
                  }`}
                >
                  {link.label}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 w-full h-[1.5px] bg-[#111] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ===== FAR RIGHT: Minimal cart + mobile menu ===== */}
          <div className="flex items-center gap-3">
            {/* Search toggle (subtle) */}
            <button
              onClick={() => { setIsSearchOpen((v) => !v); setIsMenuOpen(false); }}
              className="w-9 h-9 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center text-neutral-text/40 hover:text-[#111] transition-all cursor-pointer"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart button (subtle) */}
            <button
              onClick={toggleCart}
              className="relative w-9 h-9 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center text-neutral-text/40 hover:text-[#111] transition-all cursor-pointer"
              aria-label="Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#111] text-white font-bold rounded-full w-4 h-4 text-[0.55rem] flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => { setIsMenuOpen((v) => !v); setIsSearchOpen(false); }}
              className="lg:hidden w-9 h-9 rounded-full hover:bg-[#F5F5F5] flex items-center justify-center text-neutral-text/50 hover:text-[#111] transition-all cursor-pointer"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-[4px]">
                <span className={`w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[2.75px]" : ""}`} />
                <span className={`w-4 h-[1.5px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* ===== Search Dropdown ===== */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl p-5 max-h-[70vh] overflow-y-auto">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
              {/* Search input */}
              <div className="flex items-center gap-3 pb-4 border-b border-black/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-text/30 flex-shrink-0">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search equipment..."
                  className="w-full bg-transparent text-sm text-[#111] placeholder:text-neutral-text/30 focus:outline-none font-medium"
                />
                <button onClick={closeAll} className="text-xs font-semibold text-neutral-text/40 hover:text-[#111] transition-colors cursor-pointer flex-shrink-0">
                  ESC
                </button>
              </div>

              {/* Results */}
              <div className="flex flex-col gap-2 mt-4">
                {(trimmedQuery ? filteredProducts : products).map((product) => {
                  const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={closeAll}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F5F5F5] transition-all group"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover bg-[#F5F5F5] flex-shrink-0 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-[#111] group-hover:text-[#5B6BF0] transition-colors truncate">
                          {product.name}
                        </div>
                        <div className="text-[0.68rem] text-neutral-text/45 line-clamp-1">
                          {product.category}
                        </div>
                      </div>
                      <div className="text-sm font-black text-[#111] flex-shrink-0">${price}</div>
                    </Link>
                  );
                })}
                {trimmedQuery && filteredProducts.length === 0 && (
                  <div className="text-center py-8 text-sm text-neutral-text/40">
                    No products found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===== Mobile Navigation Drawer ===== */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-xl p-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-[#111] font-semibold bg-[#F5F5F5]"
                        : "text-neutral-text/50 hover:text-[#111] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-black/5">
              <Link
                href="/shop"
                onClick={closeAll}
                className="block w-full text-center py-3 rounded-full bg-[#111] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors"
              >
                Browse All Equipment
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
