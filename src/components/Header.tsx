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
  { href: "/shop", label: "Products" },
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

      {/* Utility strip */}
      <div className="hidden md:block bg-primary text-primary-text/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-end gap-6 text-[0.72rem] font-bold uppercase tracking-wider">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            {siteConfig.phone}
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary/40 flex-shrink-0" />
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            {siteConfig.email}
          </a>
        </div>
      </div>

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-neutral-bg/85 backdrop-blur-md border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-6 lg:px-8 py-5 relative">
          {/* Desktop nav on the left */}
          <nav className="hidden lg:block">
            <ul className="flex list-none gap-8 m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative text-neutral-text font-bold text-xs uppercase tracking-widest hover:text-secondary transition-colors duration-300 py-1"
                  >
                    {link.label}
                    <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-secondary group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo / Brand Name centered on desktop */}
          <Link
            href="/"
            onClick={closeAll}
            className="text-lg lg:text-base font-extrabold text-primary flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:transform"
            style={{ textDecoration: "none" }}
          >
            {siteConfig.useImageLogo && siteConfig.logoImage ? (
              <>
                <img
                  src="/product-logo.png"
                  alt={siteConfig.brandName}
                  className="max-h-11 max-w-[145px] sm:max-w-none w-auto object-contain lg:hidden mix-blend-multiply"
                />
                <img
                  src={siteConfig.logoImage}
                  alt={siteConfig.brandName}
                  className="max-h-8 w-auto object-contain hidden lg:block mix-blend-multiply"
                />
              </>
            ) : (
              <span className="flex items-center gap-2 tracking-tight text-sm sm:text-base lg:text-xs xl:text-sm font-black uppercase">
                {firstWord}
                <span className="text-secondary">
                  {secondWord ? ` ${secondWord}` : ""}
                  {trailingWords ? <span className="hidden sm:inline">{` ${trailingWords}`}</span> : ""}
                </span>
              </span>
            )}
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 ml-auto lg:ml-0">
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="bg-white border border-black/5 rounded-full relative cursor-pointer w-10 h-10 flex items-center justify-center hover:border-secondary hover:text-secondary hover:shadow-md transition-all duration-300"
              aria-label="Toggle Search"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-primary hover:stroke-secondary transition-colors" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-primary"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-primary rounded-full w-[18px] h-[18px] text-[0.6rem] font-bold flex items-center justify-center border-2 border-neutral-bg">
                  {getCartCount()}
                </span>
              )}
            </button>

            <Link
              href="/shop"
              className="hidden lg:inline-flex items-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3 px-6 rounded-full text-[0.68rem] uppercase tracking-widest shadow-md hover:shadow-lg"
            >
              Shop Now
            </Link>

            {/* Mobile hamburger toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden bg-white border border-black/5 rounded-full relative cursor-pointer w-10 h-10 flex items-center justify-center hover:border-secondary"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-neutral-bg border-b border-black/5 shadow-lg p-5 flex flex-col gap-1 transition-all duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="text-neutral-text font-bold uppercase text-xs tracking-widest py-3 px-3 hover:text-secondary hover:bg-black/5 transition-all duration-200 rounded-xl"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/shop"
              onClick={closeAll}
              className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 py-3.5 px-5 rounded-full text-xs uppercase tracking-widest mt-4 shadow-md"
            >
              Shop Now
            </Link>
          </div>
        )}

        {/* Search panel */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-neutral-bg border-b border-black/5 shadow-lg p-5 max-h-[70vh] overflow-y-auto">
            <div className="relative max-w-5xl mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-neutral-text/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="block w-full pl-11 pr-4 py-3.5 text-sm border border-black/5 rounded-full focus:outline-none focus:border-secondary transition-all text-neutral-text bg-white shadow-sm"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-4 flex flex-col gap-1 max-w-5xl mx-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-black/5 transition-all duration-200"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-contain bg-white flex-shrink-0 border border-black/5"
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/100x100?text=Item";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-primary truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-neutral-text/50 truncate uppercase tracking-widest font-semibold">{product.category}</div>
                        </div>
                        <div className="text-sm font-extrabold text-primary flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-neutral-text/50 text-center py-6">
                    No products found for &ldquo;{query}&rdquo;.
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
