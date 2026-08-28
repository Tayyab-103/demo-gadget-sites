"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const logoNameParts = siteConfig.brandName.split(" ");
  const firstWord = logoNameParts[0] || "";
  const secondWord = logoNameParts[1] || "";
  const trailingWords = logoNameParts.slice(2).join(" ");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // mobile search panel only
  const [isResultsOpen, setIsResultsOpen] = useState(false); // desktop inline-bar results dropdown
  const [query, setQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

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
        setIsResultsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
        setIsResultsOpen(false);
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
    if (isSearchOpen) mobileSearchInputRef.current?.focus();
  }, [isSearchOpen]);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsResultsOpen(false);
    setQuery("");
  };

  const toggleMobileSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen((v) => !v);
  };

  const toggleMenu = () => {
    setIsSearchOpen(false);
    setIsMenuOpen((v) => !v);
  };

  const renderResults = (onItemClick: () => void) => (
    <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={onItemClick}
              className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-black/[0.03] transition-all duration-200"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-11 h-11 rounded-lg object-contain bg-white flex-shrink-0 border border-black/5"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/100x100?text=Item";
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-primary truncate">{product.name}</div>
                <div className="text-[0.65rem] text-neutral-text/55 truncate uppercase tracking-widest font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="text-sm font-extrabold text-primary flex-shrink-0">${price}</div>
            </Link>
          );
        })
      ) : (
        <p className="text-xs text-neutral-text/55 text-center py-6">
          No products found for &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-neutral-bg/95 backdrop-blur-md border-b border-black/5"
      >
        <div className="container-page flex items-center gap-3 sm:gap-4 lg:gap-6 py-3.5 sm:py-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="text-xl lg:text-2xl font-extrabold text-primary flex items-center flex-shrink-0 min-w-0"
            style={{ textDecoration: "none" }}
          >
            {siteConfig.useImageLogo ? (
              <img src="/logo.png" alt={siteConfig.brandName} className="max-h-8 sm:max-h-10 w-auto object-contain" />
            ) : (
              <span className="tracking-tight font-serif text-xl sm:text-2xl font-light">
                {firstWord}
                <span className="text-secondary font-bold">
                  {secondWord ? ` ${secondWord}` : ""}
                  {trailingWords ? <span className="hidden sm:inline">{` ${trailingWords}`}</span> : ""}
                </span>
              </span>
            )}
          </Link>

          {/* Inline pill search bar — desktop only */}
          <div className="hidden lg:flex flex-1 max-w-xl relative">
            <div className="flex items-center w-full bg-black/[0.045] rounded-full pl-6 pr-1.5 h-12 focus-within:bg-black/[0.06] transition-colors duration-200">
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsResultsOpen(true);
                }}
                onFocus={() => setIsResultsOpen(true)}
                placeholder="What are you looking for?"
                className="flex-1 bg-transparent outline-none text-sm text-neutral-text placeholder:text-neutral-text/40 min-w-0"
              />

              <button
                type="button"
                onClick={() => setIsResultsOpen((v) => !v)}
                aria-label="Search"
                className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary text-secondary-text flex items-center justify-center hover:opacity-90 transition-opacity duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>

            {/* Results dropdown for the inline bar */}
            {isResultsOpen && trimmedQuery && (
              <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white rounded-2xl border border-black/5 shadow-xl p-3 z-50">
                {renderResults(closeAll)}
              </div>
            )}
          </div>

          {/* Nav links */}
          <nav className="hidden md:block flex-shrink-0 md:ml-auto lg:ml-0">
            <ul className="flex list-none gap-5 lg:gap-7 m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-neutral-text font-bold text-sm hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-shrink-0 ml-auto md:ml-0">
            {/* Mobile-only search toggle (inline bar covers desktop) */}
            <button
              onClick={toggleMobileSearch}
              className="lg:hidden bg-white border border-black/5 rounded-full relative cursor-pointer w-10 h-10 flex items-center justify-center hover:border-secondary hover:text-secondary hover:shadow-md transition-all duration-300"
              aria-label="Toggle Search"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              onClick={toggleCart}
              className="bg-white border border-black/5 rounded-full relative cursor-pointer w-10 h-10 flex items-center justify-center hover:border-secondary hover:shadow-md transition-all duration-300"
              aria-label="Toggle Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-text rounded-full w-[18px] h-[18px] text-[0.6rem] font-bold flex items-center justify-center border-2 border-neutral-bg">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile hamburger toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden bg-white border border-black/5 rounded-full relative cursor-pointer w-10 h-10 flex items-center justify-center hover:border-secondary"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav menu panel */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-bg border-b border-black/5 shadow-lg p-4 sm:p-5 max-h-[calc(100vh-8rem)] overflow-y-auto flex flex-col gap-1 transition-all duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="text-neutral-text font-bold text-sm py-3 px-3 hover:text-secondary hover:bg-black/5 transition-all duration-200 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile search panel */}
        {isSearchOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-bg border-b border-black/5 shadow-lg p-4 sm:p-5 max-h-[70vh] overflow-y-auto">
            <div className="relative max-w-5xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-neutral-text/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={mobileSearchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="block w-full pl-11 pr-4 py-3.5 text-sm border border-black/5 rounded-full focus:outline-none focus:border-secondary transition-all text-neutral-text bg-white shadow-sm"
              />
            </div>

            {trimmedQuery && <div className="mt-4 max-w-5xl mx-auto">{renderResults(closeAll)}</div>}
          </div>
        )}
      </header>
    </>
  );
}
