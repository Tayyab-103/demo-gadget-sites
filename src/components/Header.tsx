"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import BrandName from "@/components/BrandName";
import CartDrawer from "@/components/CartDrawer";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// true on the client, false during SSR — keeps the cart badge hydration-safe
const noopSubscribe = () => () => {};
const useHydrated = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { toggleCart, getCartCount } = useCart();
  const hydrated = useHydrated();
  const cartCount = hydrated ? getCartCount() : 0;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // mobile search panel only
  const [isResultsOpen, setIsResultsOpen] = useState(false); // desktop results dropdown
  const [query, setQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter(
        (p) => p.name.toLowerCase().includes(trimmedQuery) || (p.category || "").toLowerCase().includes(trimmedQuery)
      )
    : [];

  useEffect(() => {
    const closePanels = () => {
      setIsMenuOpen(false);
      setIsSearchOpen(false);
      setIsResultsOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closePanels();
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanels();
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const renderResults = (onItemClick: () => void) => (
    <div className="flex max-h-[60vh] flex-col gap-1 overflow-y-auto">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const price = product.bundles && product.bundles[0] ? product.bundles[0].price.toFixed(2) : product.ssPrice;
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={onItemClick}
              className="flex items-center gap-4 rounded-xl p-2.5 transition-colors hover:bg-surface"
            >
              <img src={product.image} alt={product.name} className="h-12 w-12 shrink-0 rounded-lg border border-line bg-white object-contain p-1" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold text-ink">{product.name}</div>
                <div className="truncate text-[0.65rem] font-semibold uppercase tracking-widest text-ink/50">{product.category}</div>
              </div>
              <div className="shrink-0 text-sm font-extrabold text-primary">${price}</div>
            </Link>
          );
        })
      ) : (
        <p className="py-6 text-center text-xs text-ink/55">No products found for &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );

  const iconButton =
    "relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:border-primary hover:text-primary";

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50">
        {/* Announcement strip */}
        <div className="bg-brand-gradient px-4 py-2 text-center text-[0.68rem] font-semibold tracking-wide text-white sm:text-xs">
          <span className="sm:hidden">{`Free ${siteConfig.shippingCarrier} shipping · ${siteConfig.shippingPeriod} day delivery`}</span>
          <span className="hidden sm:inline">
            {`Free ${siteConfig.shippingCarrier} shipping on every order · Delivered in ${siteConfig.shippingPeriod} business days`}
          </span>
        </div>

        <div className="border-b border-line bg-white/95 backdrop-blur-md">
          <div className="container-page flex items-center gap-3 py-3 sm:gap-5 sm:py-3.5">
            <Link href="/" onClick={closeAll} aria-label={siteConfig.brandName} className="shrink-0">
              <BrandName />
            </Link>

            {/* Nav links — desktop */}
            <nav className="ml-4 hidden md:block xl:ml-8">
              <ul className="m-0 flex list-none gap-1 p-0">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 lg:px-4 ${
                        isActive(link.href) ? "bg-surface text-primary" : "text-ink/75 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
              {/* Inline search — desktop only */}
              <div className="relative hidden lg:block">
                <div className="flex h-11 w-64 items-center gap-2 rounded-full border border-line bg-surface pl-4 pr-1.5 transition-colors focus-within:border-primary xl:w-80">
                  <span className="text-ink/40">
                    <SearchIcon size={15} />
                  </span>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setIsResultsOpen(true);
                    }}
                    onFocus={() => setIsResultsOpen(true)}
                    placeholder="Search power strips, switches, batteries…"
                    className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
                  />
                </div>

                {isResultsOpen && trimmedQuery && (
                  <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-96 rounded-2xl border border-line bg-white p-3 shadow-xl">
                    {renderResults(closeAll)}
                  </div>
                )}
              </div>

              {/* Search toggle — below lg */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSearchOpen((v) => !v);
                }}
                className={`${iconButton} lg:hidden`}
                aria-label="Toggle search"
                aria-expanded={isSearchOpen}
              >
                <SearchIcon />
              </button>

              {/* Cart */}
              <button onClick={toggleCart} className={iconButton} aria-label="Open cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="bg-brand-gradient absolute -right-1 -top-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full border-2 border-white px-1 text-[0.58rem] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger — mobile */}
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setIsMenuOpen((v) => !v);
                }}
                className={`${iconButton} md:hidden`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {isMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav panel */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-line bg-white p-4 shadow-lg md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive(link.href) ? "bg-surface text-primary" : "text-ink hover:bg-surface hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${siteConfig.phone}`} className="btn-brand mt-3">
              {`Call ${siteConfig.phone}`}
            </a>
          </div>
        )}

        {/* Mobile search panel */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full max-h-[70vh] overflow-y-auto border-b border-line bg-white p-4 shadow-lg lg:hidden">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">
                <SearchIcon />
              </span>
              <input
                ref={mobileSearchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search power strips, switches, batteries…"
                className="block w-full rounded-full border border-line bg-surface py-3.5 pl-11 pr-4 text-sm text-ink focus:border-primary focus:outline-none"
              />
            </div>
            {trimmedQuery && <div className="mt-4">{renderResults(closeAll)}</div>}
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
