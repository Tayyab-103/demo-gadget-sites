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

const [brandFirst, ...brandRest] = siteConfig.brandName.split(" ");

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Tools" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const iconBtn =
  "w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-line bg-surface flex items-center justify-center text-ink hover:border-ink transition-colors cursor-pointer shrink-0";

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

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
    // The mobile menu has no meaning on desktop widths
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const cartCount = getCartCount();

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Info strip */}
      <div className="bg-primary text-primary-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex items-center justify-center md:justify-between gap-4 text-[0.68rem] sm:text-xs">
          <span className="font-medium text-center truncate">
            Free {siteConfig.shippingCarrier} shipping
            <span className="hidden min-[360px]:inline"> &middot; {siteConfig.trialPeriod}-day returns</span>
            <span className="hidden sm:inline"> on every tool</span>
          </span>
          <a href={`tel:${siteConfig.phone}`} className="hidden md:inline shrink-0 opacity-80 hover:opacity-100 transition-opacity">
            Questions? Call {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="bg-surface/90 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 h-16 sm:h-18">
          {/* Brand: shrinks and truncates instead of pushing the buttons off screen */}
          <Link href="/" onClick={closeAll} className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            {siteConfig.useImageLogo ? (
              <img src={siteConfig.logoImage} alt={siteConfig.brandName} className="h-8 sm:h-9 w-auto max-w-full" />
            ) : (
              <>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-primary-text flex items-center justify-center text-base sm:text-lg font-extrabold shrink-0">
                  {brandFirst.charAt(0)}
                </span>
                <span className="flex flex-col leading-tight min-w-0">
                  <span className="text-[0.95rem] sm:text-lg font-extrabold tracking-tight text-ink truncate">{brandFirst}</span>
                  <span className="text-[0.55rem] min-[360px]:text-[0.6rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-muted truncate">
                    {brandRest.join(" ")}
                  </span>
                </span>
              </>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-neutral-bg p-1 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive(link.href) ? "bg-surface text-ink shadow-sm" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a href={`tel:${siteConfig.phone}`} className="hidden xl:flex flex-col items-end mr-2 leading-tight">
              <span className="text-[0.65rem] text-muted">Need help?</span>
              <span className="text-sm font-bold text-ink">{siteConfig.phone}</span>
            </a>

            <button onClick={toggleSearch} className={`hidden sm:flex ${iconBtn}`} aria-label="Toggle search" aria-expanded={isSearchOpen}>
              <SearchIcon />
            </button>

            <button onClick={toggleCart} className={`${iconBtn} relative`} aria-label={`Open cart (${cartCount} items)`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-text rounded-full min-w-4.75 h-4.75 text-[0.62rem] font-bold flex items-center justify-center px-1 ring-2 ring-surface">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={toggleMenu}
              className={`lg:hidden ${iconBtn} ${isMenuOpen ? "bg-primary! text-primary-text! border-primary!" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {isMenuOpen && (
        <>
          <div className="lg:hidden fixed inset-0 top-0 -z-10 bg-black/30" onClick={closeAll} aria-hidden="true" />
          <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-line shadow-xl max-h-[calc(100dvh-7rem)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
              {/* Search lives in the menu on phones */}
              <div className="sm:hidden relative mb-3">
                <span className="text-muted absolute left-4 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search tools..."
                  className="field pl-11! rounded-full!"
                />
              </div>

              {trimmedQuery ? (
                <SearchResults items={filteredProducts} query={query} onPick={closeAll} />
              ) : (
                <nav className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeAll}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`flex items-center justify-between text-base font-semibold py-3.5 px-3 rounded-xl transition-colors ${
                        isActive(link.href) ? "bg-neutral-bg text-ink" : "text-ink hover:bg-neutral-bg"
                      }`}
                    >
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </Link>
                  ))}
                </nav>
              )}

              <div className="mt-4 pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a href={`tel:${siteConfig.phone}`} className="btn-outline">
                  Call {siteConfig.phone}
                </a>
                <Link href="/shop" onClick={closeAll} className="btn-primary">
                  Shop all tools
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Search panel (tablet & desktop) */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-line shadow-xl max-h-[75vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5">
            <div className="relative">
              <span className="text-muted absolute left-4 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </span>
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search whisks, kitchen scales, shears..."
                className="field pl-11! rounded-full!"
              />
            </div>
            {trimmedQuery && (
              <div className="mt-4">
                <SearchResults items={filteredProducts} query={query} onPick={closeAll} />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function SearchResults({ items, query, onPick }: { items: Product[]; query: string; onPick: () => void }) {
  if (items.length === 0) {
    return <p className="text-sm text-muted text-center py-6">No kitchen tools found matching &ldquo;{query}&rdquo;.</p>;
  }
  return (
    <div className="flex flex-col gap-1">
      {items.map((product) => {
        const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
        return (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            onClick={onPick}
            className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-xl hover:bg-neutral-bg transition-colors"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover bg-neutral-bg shrink-0"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100?text=Tool";
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-ink truncate">{product.name}</div>
              <div className="text-xs text-muted truncate">{product.category}</div>
            </div>
            <div className="text-sm font-bold text-ink shrink-0">${parseFloat(String(price)).toFixed(2)}</div>
          </Link>
        );
      })}
    </div>
  );
}
