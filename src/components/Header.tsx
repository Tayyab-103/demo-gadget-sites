"use client";

import { useCart } from "@/context/CartContext";
import { Product, SiteConfig } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import productsData from "../../config/products.json";
import siteConfigData from "../../config/site-config.json";

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
      className="sticky top-0 z-50 bg-[#121316] text-white backdrop-blur-md transition-all duration-300 border-b border-white/10 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">

        {/* Left: Brand Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0"
          style={{ textDecoration: "none" }}
        >
          {/* Circular Copper Culinary Emblem */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#E06830] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 border border-white/20 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            >
              <path d="M12 2C10.5 4.5 9 6.8 9 9.5c0 1.9 1.1 3.5 2.5 4.2V20a1 1 0 0 0 2 0v-6.3c1.4-.7 2.5-2.3 2.5-4.2 0-2.7-1.5-5-3-7.5zM6.5 10c0 2.8 1.8 5.2 4.5 5.8V20a1 1 0 0 0 2 0v-4.2c2.7-.6 4.5-3 4.5-5.8 0-1.8-.7-3.5-1.8-5.1-.4.8-1 1.6-1.7 2.3 1 1.2 1.5 2.5 1.5 3.8 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.3.5-2.6 1.5-3.8-.7-.7-1.3-1.5-1.7-2.3-1.1 1.6-1.8 3.3-1.8 5.1z" />
            </svg>
          </div>

          {/* Typography: Brand Title & Subtitle */}
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight">
              {siteConfig.brandName}
            </span>
            <span className="text-[0.55rem] sm:text-[0.62rem] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#E06830] -mt-0.5">
              SCANDINAVIAN KITCHEN FOUNDRY
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links with Active Indicator */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-wider font-bold transition-all duration-200 py-1.5 px-4 rounded-full ${
                  active
                    ? "bg-[#E06830] text-white shadow-sm font-black"
                    : "text-white/85 hover:text-[#E06830] hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Search & Shopping Cart */}
        <div className="flex items-center gap-3.5 sm:gap-5 flex-shrink-0">
          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className="p-2 text-white hover:text-[#E06830] transition-colors cursor-pointer bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            aria-label="Search culinary tools"
            aria-expanded={isSearchOpen}
          >
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
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Shopping Bag Button with Badge */}
          <button
            onClick={toggleCart}
            className="p-2 text-white hover:text-[#E06830] transition-colors cursor-pointer relative bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            aria-label="Shopping Cart"
          >
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
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>

            {/* Cart Count Badge */}
            <span className="absolute -top-1 -right-1 bg-[#E06830] text-white rounded-full w-4 h-4 text-[0.62rem] font-black flex items-center justify-center border border-[#121316] shadow-xs">
              {getCartCount()}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-[#E06830] cursor-pointer bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <div className="lg:hidden bg-[#1A1C20] text-white border-t border-white/10 shadow-2xl px-6 py-6 flex flex-col gap-2 transition-all animate-fadeIn">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeAll}
                className={`text-sm uppercase tracking-wider font-bold py-3 px-4 rounded-xl transition-all ${
                  active
                    ? "bg-[#E06830] text-white font-black shadow-md"
                    : "text-white/90 hover:text-[#E06830] hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            onClick={closeAll}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#E06830] text-white hover:bg-[#c85622] py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <span>Explore Kitchen Tools</span>
            <span>→</span>
          </Link>
        </div>
      )}

      {/* Search Dropdown Overlay */}
      {isSearchOpen && (
        <div className="bg-[#F8F6F2] text-[#121316] border-t border-black/10 shadow-2xl px-6 py-6 max-h-[75vh] overflow-y-auto">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#121316]/40"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search balloon whisks, digital scales, multi-prep chef shears..."
                className="w-full pl-12 pr-4 py-3.5 text-sm bg-white border border-stone-300 rounded-full focus:outline-none focus:border-[#E06830] transition-colors text-[#121316] placeholder:text-[#121316]/40 shadow-xs"
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
                        className="flex items-center gap-4 p-3 rounded-2xl bg-white hover:border-[#E06830] border border-stone-200 transition-all shadow-xs"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-cover bg-stone-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-[#121316] truncate">{product.name}</div>
                          <div className="text-[0.68rem] text-[#E06830] font-bold uppercase tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-sm font-bold text-[#121316] flex-shrink-0">
                          ${price}
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-[#121316]/60 text-center py-6">
                    No culinary tools found for &ldquo;{query}&rdquo;.
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
