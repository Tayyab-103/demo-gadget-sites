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

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [wishlistCount, setWishlistCount] = useState(0);

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
        setIsChatOpen(false);
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
    { label: "Shop All", href: "/shop" },
    // { label: "Cart", href: "/cart" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 font-sans"
      >

        {/* Kiddex Header Lower / Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-black/5"
              : "bg-white py-3.5 sm:py-4 border-b border-black/6 shadow-xs"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-3 group flex-shrink-0"
              style={{ textDecoration: "none" }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-sm border border-black/5 flex-shrink-0 bg-white">
                <img
                  src={siteConfig.logoImage || "/img/logo.jpg"}
                  alt={siteConfig.brandName}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#1e293b] leading-tight group-hover:text-[#ff4370] transition-colors">
                  Playhouse
                </span>
                <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-[#ff4370] -mt-0.5">
                  Games &amp; Toy Store
                </span>
              </div>
            </Link>

            {/* Hotline Callout Box (Desktop) */}
            <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-black/10">
              <div className="w-10 h-10 rounded-full bg-[#ff4370]/10 text-[#ff4370] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm font-black text-[#1e293b] hover:text-[#ff4370] transition-colors">
                  {siteConfig.phone}
                </a>
                <span className="text-[0.62rem] text-black/50 font-bold uppercase tracking-wider">
                  24/7 Toy Hotline
                </span>
              </div>
            </div>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs xl:text-sm font-bold px-3.5 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#ff4370] shadow-xs"
                        : "text-[#1e293b] hover:text-[#ff4370] hover:bg-[#ff4370]/8"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search, Wishlist, Cart Drawer, Mobile Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className="p-2 sm:p-2.5 text-[#1e293b] hover:text-[#ff4370] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
                aria-label="Search toys and games"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              {/* Wishlist Heart Icon */}
              <button
                onClick={() => setWishlistCount((c) => c + 1)}
                className="relative p-2 sm:p-2.5 text-[#1e293b] hover:text-[#ff4370] transition-colors rounded-full hover:bg-black/5 cursor-pointer hidden sm:flex"
                aria-label="Wishlist"
                title="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute top-0.5 right-0.5 bg-[#ff4370] text-white rounded-full w-4 h-4 text-[0.6rem] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={toggleCart}
                className="relative p-2 sm:p-2.5 bg-[#ff4370] text-white hover:bg-[#e63560] transition-all rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:scale-105"
                aria-label="Open Toy Cart Drawer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#ffb703] text-[#1e293b] rounded-full w-5 h-5 text-[0.65rem] font-black flex items-center justify-center shadow-xs border-2 border-white">
                  {mounted ? getCartCount() : 0}
                </span>
              </button>

              {/* Mobile Menu Toggler */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-[#1e293b] p-2 rounded-xl hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-black/8 bg-white px-5 py-5 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`font-black text-sm py-3 px-4 rounded-xl transition-all ${
                  pathname === link.href
                    ? "bg-[#ff4370] text-white shadow-xs"
                    : "text-[#1e293b] hover:bg-[#ff4370]/10 hover:text-[#ff4370]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-black/8 text-xs text-black/60 flex flex-col gap-1.5">
              <span className="font-bold text-[#1e293b]">Hotline: {siteConfig.phone}</span>
              <span>{siteConfig.email}</span>
            </div>
          </div>
        )}

        {/* Interactive Toy Search Bar Dropdown */}
        {isSearchOpen && (
          <div className="border-t border-black/8 bg-white px-4 sm:px-6 py-5 shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/40 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search action figures, board games, plushies, STEM puzzles, RC cars..."
                  className="block w-full pl-12 pr-10 py-3.5 text-sm sm:text-base rounded-full focus:outline-none focus:ring-2 focus:ring-[#ff4370] text-black bg-[#f8fafc] border border-black/10 placeholder-black/45 shadow-inner"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black font-bold text-lg"
                  >
                    ×
                  </button>
                )}
              </div>

              {trimmedQuery && (
                <div className="mt-4 flex flex-col gap-2 max-h-[55vh] overflow-y-auto pr-1">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                      const price = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;
                      return (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={closeAll}
                          className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#fff0f4] border border-transparent hover:border-[#ff4370]/20 transition-all group"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 rounded-xl object-cover bg-black/5 flex-shrink-0 border border-black/5"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors truncate">
                              {product.name}
                            </div>
                            <div className="text-xs text-black/50 truncate font-semibold">
                              {product.category}
                            </div>
                          </div>
                          <div className="text-sm font-black text-[#ff4370] flex-shrink-0">
                            ${price}
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="text-center py-6 text-sm text-black/50">
                      No toys or games matching &ldquo;{query}&rdquo;.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Live Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-black/10">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#ff4370] text-white flex items-center justify-center font-bold">
                🎮
              </div>
              <div>
                <h4 className="font-black text-[#1e293b] text-base">Toy Store Live Support</h4>
                <p className="text-xs text-emerald-600 font-bold">Online • Responding promptly</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-black/70 mb-4 leading-relaxed">
              Have a question about game age recommendations, gift packaging, or tracking your order? Reach our Dallas, TX support team directly at:
            </p>
            <div className="bg-[#f8fafc] rounded-2xl p-4 border border-black/6 text-xs space-y-2 mb-6">
              <div><strong>Hotline:</strong> <a href={`tel:${siteConfig.phone}`} className="text-[#ff4370]">{siteConfig.phone}</a></div>
              <div><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#ff4370]">{siteConfig.email}</a></div>
              <div><strong>Hours:</strong> Mon - Fri 8am - 6pm EST</div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="w-full py-3 bg-[#ff4370] hover:bg-[#e63560] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
}
