"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { siteConfig, products, trialDays } from "@/lib/brandIcon";
import BrandLogo from "@/components/BrandLogo";

// Browser-only values read without setState-in-effect (avoids cascading renders and hydration mismatches)
const noopSubscribe = () => () => {};
const subscribeScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const isScrolled = useSyncExternalStore(subscribeScroll, () => window.scrollY > 15, () => false);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);

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

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div
        className={`bg-primary text-primary-text overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-3 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.18em]">
          <span>Free {siteConfig.shippingCarrier} shipping</span>
          <span className="w-1 h-1 rounded-full bg-secondary" aria-hidden="true" />
          <span>{trialDays}-day returns</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-secondary" aria-hidden="true" />
          <span className="hidden sm:inline">Ships in {siteConfig.shippingPeriod} business days</span>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
            : "bg-neutral-bg/95 backdrop-blur-md"
        } border-b border-line`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
          <Link href="/" onClick={closeAll} className="flex-shrink-0" aria-label={`${siteConfig.brandName} home`}>
            {siteConfig.useImageLogo && siteConfig.logoImage ? (
              <img src={siteConfig.logoImage} alt={siteConfig.brandName} className="max-h-8 w-auto object-contain" />
            ) : (
              <BrandLogo />
            )}
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/70 border border-line p-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.72rem] font-bold uppercase tracking-[0.14em] px-4 lg:px-5 py-2 rounded-full transition-all duration-200 ${
                    active ? "bg-primary text-primary-text" : "text-ink/70 hover:text-primary hover:bg-neutral-bg"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleSearch}
              className="w-10 h-10 flex items-center justify-center text-ink hover:text-primary transition-colors cursor-pointer rounded-full hover:bg-white"
              aria-label="Toggle search"
              aria-expanded={isSearchOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2 h-10 pl-3 pr-3 sm:pr-4 rounded-full bg-primary text-primary-text hover:bg-primary-dark transition-colors cursor-pointer"
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hidden sm:inline text-[0.7rem] font-bold uppercase tracking-[0.14em]">Cart</span>
              <span className="bg-secondary text-secondary-text rounded-full min-w-[20px] h-5 px-1 text-[0.65rem] font-black flex items-center justify-center">
                {mounted ? getCartCount() : 0}
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-ink rounded-full hover:bg-white transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="10" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-line bg-white px-4 py-4 flex flex-col gap-1.5 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`font-bold text-sm uppercase tracking-[0.12em] py-3 px-4 rounded-2xl transition-all ${
                  pathname === link.href ? "bg-primary text-primary-text" : "text-ink hover:bg-mist"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Search panel */}
        {isSearchOpen && (
          <div className="border-t border-line bg-white px-4 sm:px-6 py-4 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-muted absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search socks, baselayers, hoodies..."
                  className="field !rounded-full !pl-11"
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
                          className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-mist transition-all"
                        >
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover bg-mist flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-ink truncate">{product.name}</div>
                            <div className="text-[0.65rem] text-muted truncate uppercase font-bold tracking-wider">{product.category}</div>
                          </div>
                          <div className="text-sm font-black text-primary flex-shrink-0">${price}</div>
                        </Link>
                      );
                    })
                  ) : (
                    <p className="text-xs text-muted text-center py-4">
                      Nothing matches &ldquo;{query}&rdquo;. Try &ldquo;socks&rdquo; or &ldquo;hoodie&rdquo;.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
