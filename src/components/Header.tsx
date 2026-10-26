"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import BrandName from "@/components/BrandName";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

// true on the client, false during SSR — avoids hydration mismatch without setState in an effect
const noopSubscribe = () => () => {};
const useHydrated = () => useSyncExternalStore(noopSubscribe, () => true, () => false);

export default function Header() {
  const pathname = usePathname();
  const { getCartCount } = useCart();
  const hydrated = useHydrated();
  const cartCount = hydrated ? getCartCount() : 0;

  const [isMobOpen, setIsMobOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobOpen]);

  const filteredSearchProducts = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-black/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left Column: Menu Button & Logo & Desktop Nav */}
            <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 min-w-0">
              
              {/* Hamburger Menu Button (Mobile / Tablet only) */}
              <button
                type="button"
                onClick={() => setIsMobOpen(true)}
                className="lg:hidden p-1.5 -ml-1 text-primary hover:text-secondary transition-colors focus:outline-none flex flex-col justify-center items-center gap-[4px] w-7 h-7"
                aria-label="Open navigation menu"
              >
                <span className="w-[18px] h-[2px] bg-primary block rounded-full transition-colors"></span>
                <span className="w-[18px] h-[2px] bg-primary block rounded-full transition-colors"></span>
                <span className="w-[18px] h-[2px] bg-primary block rounded-full transition-colors"></span>
              </button>

              {/* Brand Name */}
              <Link
                href="/"
                aria-label={siteConfig.brandName}
                className="py-1 text-primary hover:text-secondary transition-colors"
              >
                <BrandName />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-2 xl:ml-4">
                <Link
                  href="/"
                  className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors py-2 ${
                    pathname === "/" ? "text-secondary font-extrabold" : "text-primary hover:text-secondary"
                  }`}
                >
                  Home
                </Link>

                {/* Pages Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setPagesDropdownOpen(true)}
                  onMouseLeave={() => setPagesDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] transition-colors py-2 ${
                      pathname === "/about" ? "text-secondary font-extrabold" : "text-primary hover:text-secondary"
                    }`}
                  >
                    <span>Pages</span>
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    className={`absolute top-full left-0 w-48 bg-white border border-black/5 shadow-xl rounded-md py-2 transition-all duration-200 z-50 ${
                      pagesDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-2.5 text-xs font-medium text-neutral-text hover:bg-neutral-bg hover:text-secondary uppercase tracking-wider transition-colors"
                      onClick={() => setPagesDropdownOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/#collections"
                      className="block px-4 py-2.5 text-xs font-medium text-neutral-text hover:bg-neutral-bg hover:text-secondary uppercase tracking-wider transition-colors"
                      onClick={() => setPagesDropdownOpen(false)}
                    >
                      Collections
                    </Link>
                    <Link
                      href="/#faq"
                      className="block px-4 py-2.5 text-xs font-medium text-neutral-text hover:bg-neutral-bg hover:text-secondary uppercase tracking-wider transition-colors"
                      onClick={() => setPagesDropdownOpen(false)}
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/#journal"
                      className="block px-4 py-2.5 text-xs font-medium text-neutral-text hover:bg-neutral-bg hover:text-secondary uppercase tracking-wider transition-colors"
                      onClick={() => setPagesDropdownOpen(false)}
                    >
                      Journal / Blog
                    </Link>
                  </div>
                </div>

                {/* Shop Link */}
                <Link
                  href="/shop"
                  className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors py-2 ${
                    pathname === "/shop" ? "text-secondary font-extrabold" : "text-primary hover:text-secondary"
                  }`}
                >
                  Shop
                </Link>

                <Link
                  href="/contact"
                  className={`text-xs font-bold uppercase tracking-[0.14em] transition-colors py-2 ${
                    pathname === "/contact" ? "text-secondary font-extrabold" : "text-primary hover:text-secondary"
                  }`}
                >
                  Contact
                </Link>
              </nav>

            </div>

            {/* Right Column: User Nav Icons */}
            <div className="flex items-center gap-1 sm:gap-4 shrink-0">
              
              {/* Search Toggle */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-primary hover:text-secondary transition-colors"
                aria-label="Search products"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Cart Page Link */}
              <Link
                href="/cart"
                className="flex items-center gap-1 p-2 text-primary hover:text-secondary transition-colors relative"
                aria-label="Open Shopping Bag"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[0.65rem] font-bold text-white bg-[#181818] rounded-full">
                  {cartCount}
                </span>
              </Link>

            </div>

          </div>
        </div>

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="border-t border-black/5 bg-white px-4 py-4 shadow-lg animate-fadeIn">
            <div className="max-w-3xl mx-auto relative">
              <div className="flex items-center gap-3">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dresses, knitwear, skirts, blouses..."
                  className="flex-1 px-4 py-2.5 text-sm border border-black/15 rounded-full focus:outline-none focus:border-secondary"
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-2 text-neutral-text/50 hover:text-primary"
                >
                  ✕
                </button>
              </div>

              {/* Live search results */}
              {searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-xl shadow-2xl p-4 max-h-80 overflow-y-auto z-50">
                  {filteredSearchProducts.length > 0 ? (
                    <div className="divide-y divide-black/5">
                      {filteredSearchProducts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/product/${p.id}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-4 py-2.5 hover:bg-neutral-bg px-2 rounded-lg transition-colors"
                        >
                          <img src={p.image} alt={p.name} className="w-12 h-14 object-cover rounded" />
                          <div className="flex-1">
                            <h4 className="text-xs font-bold text-primary">{p.name}</h4>
                            <span className="text-[0.7rem] text-secondary font-semibold">${p.ssPrice}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-text/50 py-3 text-center">No apparel found matching &quot;{searchQuery}&quot;</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop Mask */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`fixed top-0 bottom-0 left-0 w-full max-w-xs sm:max-w-sm bg-[#FAF9F7] z-50 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl transition-transform duration-300 ${
            isMobOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-black/10">
              <Link
                href="/"
                onClick={() => setIsMobOpen(false)}
                aria-label={siteConfig.brandName}
                className="text-primary hover:text-secondary transition-colors"
              >
                <BrandName topClassName="text-base" bottomClassName="text-[0.55rem]" />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobOpen(false)}
                className="p-2 text-primary hover:text-secondary text-lg"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="py-6 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary"
                  onClick={() => setIsMobOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary"
                  onClick={() => setIsMobOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="block text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary"
                  onClick={() => setIsMobOpen(false)}
                >
                  Shop Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary"
                  onClick={() => setIsMobOpen(false)}
                >
                  Cart ({cartCount})
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary"
                  onClick={() => setIsMobOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Footer in Mobile Drawer */}
          <div className="pt-6 border-t border-black/10">
            <span className="text-xs uppercase tracking-widest text-neutral-text/50 block mb-3">Connect With Us</span>
            <div className="flex items-center gap-4 text-xs font-bold text-primary">
              <a href="#" className="hover:text-secondary">Fb</a>
              <a href="#" className="hover:text-secondary">Tw</a>
              <a href="#" className="hover:text-secondary">Ins</a>
              <a href="#" className="hover:text-secondary">Pt</a>
            </div>
            <p className="text-[0.7rem] text-neutral-text/40 mt-4">
              &copy; {new Date().getFullYear()} {siteConfig.corpName}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
