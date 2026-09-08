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
  { href: "/", label: "HOME" },
  { href: "/shop", label: "PRODUCTS" },
  { href: "/about", label: "ABOUT US" },
  { href: "/contact", label: "CONTACT US" },
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
      {/* Clean Navigation Bar without top sidebar/announcement bar */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-[#132B1C]/10"
            : "bg-white/90 backdrop-blur-xs py-4 md:py-5 border-b border-black/5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-14">
          
          {/* Left Side: Minimal Hamburger Menu Icon + Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center text-[#11281A] hover:text-[#265C1E] transition-colors cursor-pointer p-1 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>

            <Link
              href="/"
              className="font-extrabold text-sm sm:text-base tracking-[0.22em] uppercase text-[#11281A] hover:text-[#265C1E] transition-colors font-sans flex items-center gap-2"
            >
              <span>{siteConfig.brandName.toUpperCase()}</span>
            </Link>
          </div>

          {/* Right/Center Navigation: HOME, PRODUCTS, ABOUT US, CONTACT US */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.7rem] lg:text-[0.74rem] font-bold uppercase tracking-[0.24em] transition-colors duration-200 ${
                    isActive
                      ? "text-[#265C1E] border-b-2 border-[#265C1E] pb-0.5"
                      : "text-[#11281A]/80 hover:text-[#11281A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Far Right: Minimal Circular Search Icon & Cart */}
          <div className="flex items-center gap-3">
            {/* Minimal Circular Search Icon */}
            <button
              onClick={toggleSearch}
              className="w-9 h-9 rounded-full border border-black/15 bg-white flex items-center justify-center text-[#11281A] hover:border-[#265C1E] hover:text-[#265C1E] transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Search site catalog"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Minimal Cart Icon */}
            <button
              onClick={toggleCart}
              className="w-9 h-9 rounded-full border border-black/15 bg-white flex items-center justify-center text-[#11281A] hover:border-[#265C1E] transition-all duration-200 cursor-pointer relative shadow-xs"
              aria-label="Open Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#265C1E] text-white rounded-full w-4 h-4 text-[0.55rem] font-bold flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {isMenuOpen && (
          <div className="bg-white border-b border-black/10 px-6 py-5 flex flex-col gap-2 shadow-xl md:hidden mt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className={`text-xs font-bold uppercase tracking-[0.2em] py-2.5 border-b border-black/5 ${
                    isActive ? "text-[#265C1E]" : "text-[#11281A]/80 hover:text-[#11281A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Expandable Search Modal */}
        {isSearchOpen && (
          <div className="bg-white border-b border-black/10 shadow-lg px-6 py-4">
            <div className="max-w-[1440px] mx-auto relative">
              <div className="flex items-center gap-3">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search forged trowels, Japanese SK5 pruners, hand cultivators..."
                  className="w-full bg-[#FAF9F6] border border-black/15 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#11281A] placeholder-neutral-text/50 focus:outline-none focus:border-[#265C1E]"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs font-bold text-neutral-text/50 hover:text-[#11281A] uppercase tracking-wider p-2 cursor-pointer"
                >
                  Close
                </button>
              </div>

              {trimmedQuery && (
                <div className="mt-3 bg-white border border-black/10 rounded-xl p-3 shadow-md max-h-64 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {filteredProducts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/product/${p.id}`}
                          onClick={closeAll}
                          className="flex items-center justify-between p-2 hover:bg-[#FAF9F6] rounded-lg transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded-md" />
                            <div>
                              <div className="text-xs font-bold text-[#11281A]">{p.name}</div>
                              <div className="text-[0.65rem] text-[#265C1E] font-medium">{p.category}</div>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#11281A]">${p.ssPrice}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-neutral-text/60 text-center py-4">
                      No tools found matching &quot;{query}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
