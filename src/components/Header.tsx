"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();
  const mounted = useIsMounted();

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
          (p.category || "").toLowerCase().includes(trimmedQuery) ||
          p.description.toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#18121E]/95 backdrop-blur-md shadow-xl border-b border-[#C59B7E]/20 py-3.5 text-[#FAF7F5]"
          : "bg-[#18121E] border-b border-[#C59B7E]/15 py-4 text-[#FAF7F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <Image
              src={siteConfig.logoImage}
              alt={siteConfig.brandName}
              width={160}
              height={36}
              className="max-h-8 sm:max-h-9 w-auto object-contain"
            />
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C59B7E] to-[#E6C2AC] text-[#18121E] flex items-center justify-center font-serif text-sm shadow-md font-bold">
                ✦
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-serif tracking-[0.14em] text-white uppercase leading-none">
                  ROSETHORNE
                </span>
                <span className="text-[0.52rem] sm:text-[0.56rem] font-bold uppercase tracking-[0.32em] text-[#C59B7E] mt-0.5">
                  FASHION ATELIER
                </span>
              </div>
            </div>
          )}
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-200 relative py-1 ${
                  isActive
                    ? "text-[#C59B7E] font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C59B7E] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Search, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className="p-2 text-slate-300 hover:text-[#C59B7E] transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Search Silk, Cashmere, and Gowns"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Cart Bag Icon */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-slate-200 hover:text-[#C59B7E] transition-colors cursor-pointer rounded-full hover:bg-white/10"
            aria-label="Toggle Bag"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {mounted && getCartCount() > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 bg-[#C59B7E] text-[#18121E] rounded-full w-[18px] h-[18px] text-[0.62rem] font-bold flex items-center justify-center border border-[#18121E] shadow-sm">
                {getCartCount()}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-0.5 bg-white/20 text-[#FAF7F5] rounded-full w-[16px] h-[16px] text-[0.55rem] font-medium flex items-center justify-center border border-white/20">
                0
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
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

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-[#C59B7E]/20 bg-[#18121E] px-4 py-5 flex flex-col gap-2.5 shadow-2xl">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeAll}
              className={`text-xs uppercase tracking-widest font-bold py-3 px-4 rounded-xl transition-all ${
                pathname === item.href ? "bg-[#C59B7E] text-[#18121E]" : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-[#C59B7E]/20 bg-[#18121E] px-4 sm:px-6 py-5 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#C59B7E] absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search silk slip dresses, cashmere trench coats, lace evening gowns..."
                className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none text-white bg-[#221B2A] border border-[#C59B7E]/30 placeholder-slate-400 focus:border-[#C59B7E]"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3.5 flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-white/10 border border-transparent hover:border-[#C59B7E]/40 transition-all bg-[#221B2A]"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/20 flex-shrink-0 relative">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-serif font-bold text-white truncate">{product.name}</div>
                          <div className="text-[0.62rem] text-[#C59B7E] truncate uppercase font-bold tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-slate-400 text-center py-4">
                    No couture pieces found for &ldquo;{query}&rdquo;.
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
