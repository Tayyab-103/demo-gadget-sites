"use client";

import { useCart } from "@/context/CartContext";
import { brandShort, fallbackImage, products, siteConfig } from "@/lib/brandIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter(
      (p) => p.name.toLowerCase().includes(trimmedQuery) || (p.category || "").toLowerCase().includes(trimmedQuery)
    )
    : [];

  // Track scroll to intensify the glass pill on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
      className="fixed top-2 sm:top-5 left-0 right-0 z-50 px-2.5 sm:px-6 pointer-events-none w-full max-w-full"
    >
      {/* Floating glass pill */}
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border shadow-2xl flex items-center justify-between ${isScrolled
            ? "bg-white/97 backdrop-blur-2xl border-line py-2 px-3 sm:py-2.5 sm:px-5 shadow-primary/20"
            : "bg-white/92 backdrop-blur-xl border-white/40 py-2.5 px-3 sm:py-3 sm:px-6 shadow-black/25"
          }`}
      >
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial" style={{ textDecoration: "none" }}>
          {siteConfig.useImageLogo && siteConfig.logoImage ? (
            <div className="bg-white rounded-full px-2.5 py-1 flex items-center">
              <img
                src={siteConfig.logoImage}
                alt={siteConfig.brandName}
                className="max-h-6 sm:max-h-7 w-auto object-contain"
              />
            </div>
          ) : (
            <span className="text-primary text-xs sm:text-base md:text-lg font-black tracking-tight flex items-center gap-2.5 min-w-0">
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-secondary shadow-md shadow-primary/30">
                {/* Mountain crest icon */}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 20h18L14.5 8l-3.5 6-2.5-3.5L3 20z" />
                  <circle cx="17.5" cy="5" r="1.6" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="truncate uppercase font-black tracking-wider text-[0.72rem] xs:text-xs sm:text-sm md:text-base">
                <span className="hidden sm:inline">{siteConfig.brandName}</span>
                <span className="sm:hidden">{brandShort}</span>
              </span>
            </span>
          )}
        </Link>

        {/* Desktop Navigation Links — Strictly 4: Home, Products, About, Contact */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-surface rounded-full p-1 border border-line mx-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-primary text-primary-text shadow-md" : "text-primary/75 hover:text-primary hover:bg-white"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {/* Search Icon Button */}
          <button
            onClick={toggleSearch}
            className={`transition-all duration-300 p-1.5 sm:p-2.5 rounded-full cursor-pointer ${isSearchOpen ? "bg-secondary-soft text-secondary-deep" : "text-primary/80 hover:text-primary hover:bg-surface"
              }`}
            aria-label="Toggle Search"
            aria-expanded={isSearchOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={toggleCart}
            className="text-primary/80 hover:text-primary hover:bg-surface transition-all duration-300 p-1.5 sm:p-2.5 rounded-full relative cursor-pointer"
            aria-label="Toggle Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {mounted && getCartCount() > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-secondary text-secondary-text rounded-full w-[16px] h-[16px] text-[0.58rem] font-black flex items-center justify-center shadow-md">
                {getCartCount()}
              </span>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-primary p-1.5 sm:p-2 rounded-full hover:bg-surface transition-colors cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Floating Mobile Nav Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white border border-line rounded-3xl p-3 flex flex-col gap-1 shadow-2xl pointer-events-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`font-bold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 ${isActive ? "bg-primary text-primary-text" : "text-primary/80 hover:text-primary hover:bg-surface"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Floating Search Panel */}
      {isSearchOpen && (
        <div className="max-w-6xl mx-auto mt-2 bg-white border border-line rounded-3xl p-4 max-h-[70vh] overflow-y-auto shadow-2xl pointer-events-auto">
          <div className="relative max-w-2xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-primary/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search vests, strength kits, packs..."
              className="block w-full pl-11 pr-4 py-2.5 text-xs sm:text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-secondary text-neutral-text bg-surface border border-line placeholder:text-muted"
            />
          </div>

          {trimmedQuery && (
            <div className="mt-3 flex flex-col gap-1.5 max-w-2xl mx-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => {
                  const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={closeAll}
                      className="flex items-center gap-3 p-2 rounded-2xl hover:bg-surface border border-transparent hover:border-line transition-all duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-xl object-cover bg-surface flex-shrink-0"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-primary truncate">{product.name}</div>
                        <div className="text-[0.6rem] text-secondary-deep truncate uppercase tracking-widest font-bold">{product.category}</div>
                      </div>
                      <div className="text-xs font-extrabold text-primary flex-shrink-0">${price}</div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-xs text-muted text-center py-4">
                  No gear found for &ldquo;{query}&rdquo;.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
