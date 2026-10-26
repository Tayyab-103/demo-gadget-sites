"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { siteConfig, products, firstPrice } from "@/lib/brandIcon";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          ? "bg-paper/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)] border-b border-line"
          : "bg-paper/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Top Banner Notice */}
      <div className="bg-brand-gradient text-primary-text py-1.5 text-center text-[0.7rem] sm:text-xs font-semibold tracking-wide px-4">
        {`${siteConfig.shippingCarrier} shipping in ${siteConfig.shippingPeriod} business days · ${siteConfig.trialPeriod}-day trial · Questions? Call ${siteConfig.phone}`}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        
        {/* Left: Brand Logo */}
        <Link href="/" onClick={closeAll} className="group" style={{ textDecoration: "none" }}>
          <BrandLogo />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-paper/80 p-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 lg:px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive ? "bg-brand-gradient text-primary-text shadow-sm" : "text-muted hover:text-ink hover:bg-sun"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Search, Contact, Cart, Mobile Menu) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="p-2 text-ink/80 hover:text-ink transition-colors cursor-pointer rounded-full hover:bg-primary/10"
            aria-label="Search products"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Contact Support Icon */}
          <Link
            href="/contact"
            className="hidden sm:flex p-2 text-ink/80 hover:text-ink transition-colors rounded-full hover:bg-primary/10"
            aria-label="Contact Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          {/* Cart Bag Icon with Burnished Gold Badge */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-ink/85 hover:text-ink transition-colors cursor-pointer rounded-full hover:bg-primary/10"
            aria-label="View Shopping Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {getCartCount() > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-ink rounded-full w-[18px] h-[18px] text-[0.62rem] font-bold flex items-center justify-center border border-paper shadow-xs">
                {getCartCount()}
              </span>
            ) : (
              <span className="absolute -top-0.5 -right-0.5 bg-primary/30 text-ink rounded-full w-[16px] h-[16px] text-[0.55rem] font-bold flex items-center justify-center border border-ink/15">
                0
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-ink p-1.5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
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
        <div className="md:hidden border-t border-primary/20 bg-surface px-4 py-4 flex flex-col gap-2 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeAll}
              className={`font-display text-sm py-2.5 px-4 rounded-xl transition-all ${
                pathname === item.href ? "bg-ink text-paper" : "text-ink hover:bg-primary/15"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Search Dropdown Panel */}
      {isSearchOpen && (
        <div className="border-t border-primary/25 bg-surface px-4 sm:px-6 py-4 shadow-xl">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-ink/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pens, journals, gift sets..."
                className="block w-full pl-11 pr-4 py-3 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-ink bg-white border border-primary/30 placeholder-ink/40 font-display"
              />
            </div>

            {trimmedQuery && (
              <div className="mt-3 flex flex-col gap-2 max-h-[50vh] overflow-y-auto">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                    return (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        onClick={closeAll}
                        className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all bg-white"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-xl object-contain p-1 bg-surface border border-primary/20 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-ink font-display truncate">{product.name}</div>
                          <div className="text-[0.65rem] text-primary-deep truncate uppercase font-bold tracking-wider">{product.category}</div>
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-ink flex-shrink-0">${price}</div>
                      </Link>
                    );
                  })
                ) : (
                  <p className="text-xs text-ink/60 text-center py-4 font-display">
                    No supplies found for &ldquo;{query}&rdquo;.
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
