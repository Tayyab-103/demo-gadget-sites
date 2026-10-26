"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { siteConfig, products, productPrice } from "@/lib/brandIcon";
import AnnouncementBar from "@/components/AnnouncementBar";
import BrandLogo from "@/components/BrandLogo";
import CartDrawer from "@/components/CartDrawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Tools" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the mobile menu if the viewport grows past the lg breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setIsMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setQuery("");
  };

  const cartCount = getCartCount();

  return (
    <>
      <AnnouncementBar />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-line"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 min-[375px]:px-4 sm:px-6 lg:px-10 py-3 sm:py-3.5">
          <Link href="/" onClick={closeAll} className="flex-shrink-0 min-w-0" aria-label={`${siteConfig.brandName} home`}>
            <BrandLogo />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface border border-line">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className={`px-4 xl:px-5 py-2 rounded-full text-[0.82rem] font-semibold transition-all ${
                    isActive
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden xl:flex items-center gap-2 mr-2 text-[0.78rem] font-semibold text-muted hover:text-primary transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.phone}
            </a>

            <button
              onClick={() => { setIsSearchOpen((v) => !v); setIsMenuOpen(false); }}
              className="hidden min-[360px]:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-line bg-white hover:border-primary items-center justify-center text-ink hover:text-primary transition-all cursor-pointer"
              aria-label="Search"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              onClick={toggleCart}
              className="relative h-9 sm:h-10 pl-2.5 pr-2.5 sm:pl-3 sm:pr-4 rounded-full bg-brand-gradient text-primary-text flex items-center gap-2 text-[0.78rem] font-bold shadow-md hover:brightness-110 transition-all cursor-pointer"
              aria-label="Cart"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hidden sm:inline">Cart</span>
              <span className="min-w-5 h-5 px-1 rounded-full bg-white text-primary text-[0.65rem] font-extrabold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            <button
              onClick={() => { setIsMenuOpen((v) => !v); setIsSearchOpen(false); }}
              className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isMenuOpen ? "bg-primary border-primary text-white" : "bg-white border-line text-ink"
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="flex flex-col gap-[4px]">
                <span className={`w-4 h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`w-4 h-[2px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-line shadow-xl max-h-[70vh] overflow-y-auto">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-5">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface border border-line focus-within:border-primary transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search bits, multimeters, power cables..."
                  className="w-full bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none font-medium"
                />
                <button onClick={closeAll} className="text-[0.65rem] font-bold text-faint hover:text-primary px-2 py-1 rounded-md border border-line cursor-pointer flex-shrink-0">
                  ESC
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
                {(trimmedQuery ? filteredProducts : products).map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={closeAll}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-line hover:bg-surface transition-all group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 rounded-xl object-cover bg-surface flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-ink group-hover:text-primary transition-colors truncate">
                        {product.name}
                      </div>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-faint">{product.category}</div>
                    </div>
                    <div className="text-sm font-extrabold text-primary flex-shrink-0">${productPrice(product).toFixed(2)}</div>
                  </Link>
                ))}
                {trimmedQuery && filteredProducts.length === 0 && (
                  <div className="sm:col-span-2 lg:col-span-3 text-center py-8 text-sm text-faint">
                    No tools found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {isMenuOpen && (
          <>
            <div className="lg:hidden absolute inset-x-0 top-full h-[100dvh] bg-ink/40 backdrop-blur-sm" onClick={closeAll} aria-hidden="true" />
            <div className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-line shadow-2xl max-h-[calc(100dvh-5rem)] overflow-y-auto">
              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5">
                <button
                  onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface border border-line text-sm text-faint text-left cursor-pointer"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search tools...
                </button>

                <nav className="mt-4 grid sm:grid-cols-2 gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeAll}
                        className={`group flex items-center justify-between gap-3 px-4 py-3.5 rounded-2xl border transition-all ${
                          isActive ? "bg-brand-gradient text-white border-transparent shadow-md" : "border-line text-ink hover:border-primary hover:text-primary"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`text-[0.65rem] font-bold tabular-nums ${isActive ? "text-white/70" : "text-faint"}`}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.95rem] font-bold">{link.label}</span>
                        </span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a href={`tel:${siteConfig.phone}`} className="rounded-2xl bg-surface border border-line p-3.5 min-w-0">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-faint">Call us</span>
                    <span className="block mt-1 text-[0.8rem] font-bold text-ink truncate">{siteConfig.phone}</span>
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="rounded-2xl bg-surface border border-line p-3.5 min-w-0">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-wider text-faint">Email us</span>
                    <span className="block mt-1 text-[0.8rem] font-bold text-ink truncate">{siteConfig.email}</span>
                  </a>
                </div>

                <Link href="/shop" onClick={closeAll} className="btn-primary w-full mt-4">
                  Shop All Tools
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
