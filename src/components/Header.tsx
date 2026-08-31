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

const categories = [
  "All categories",
  "Diagnostics & Scanners",
  "Performance Tools",
  "Maintenance & Detailing",
  "Accessories & Hardware",
];

export default function Header() {
  const pathname = usePathname();
  const { toggleCart, getCartCount, getCartTotal } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Logo text extraction
  const logoWords = siteConfig.brandName.split(" ");
  const firstWord = logoWords[0] || "Torque";
  const secondWord = logoWords[1] || "Hollow";
  const remainingWords = logoWords.slice(2).join(" ");

  const trimmedQuery = query.trim().toLowerCase();
  const filteredProducts = trimmedQuery
    ? products.filter((p) => {
        const matchesQuery =
          p.name.toLowerCase().includes(trimmedQuery) ||
          (p.category || "").toLowerCase().includes(trimmedQuery) ||
          (p.description || "").toLowerCase().includes(trimmedQuery);
        const matchesCategory =
          selectedCategory === "All categories" ||
          p.category.toLowerCase().includes(selectedCategory.toLowerCase());
        return matchesQuery && (selectedCategory === "All categories" || matchesCategory);
      })
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setIsSearchFocused(false);
        setIsCategoryDropdownOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchFocused(false);
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchFocused(false);
    setIsCategoryDropdownOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      window.location.href = `/product/${filteredProducts[0].id}`;
    } else if (trimmedQuery) {
      window.location.href = `/shop?search=${encodeURIComponent(trimmedQuery)}`;
    }
  };

  return (
    <header ref={headerRef} className="w-full bg-white text-gray-800 sticky top-0 z-50 shadow-sm font-sans">
      {/* ────────────────── TOP UTILITY STRIP ────────────────── */}
      <div className="border-b border-gray-200 bg-[#fafafa] text-[0.75rem] text-gray-600 font-medium transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Top Left: Email */}
          <div className="flex items-center gap-2 min-w-0">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-red-600 transition-colors text-gray-700 lowercase truncate text-[0.72rem] sm:text-[0.75rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600 flex-shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="truncate">{siteConfig.email}</span>
            </a>
          </div>

          {/* Top Right: Shipping & Guarantee Assurance */}
          <div className="hidden sm:flex items-center gap-3 text-[0.72rem] text-gray-500 font-semibold">
            <span className="flex items-center gap-1 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-600 flex-shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Free Express US Shipping</span>
            </span>
            <span className="text-gray-300">|</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-red-600 transition-colors text-gray-700"
            >
              Support: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ────────────────── MAIN MIDDLE HEADER ────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            {siteConfig.useImageLogo && siteConfig.logoImage ? (
              <img
                src={siteConfig.logoImage}
                alt={siteConfig.brandName}
                className="max-h-12 w-auto object-contain"
              />
            ) : (
              <div className="flex items-center gap-2.5">
                {/* Stylized Automotive Gear Logo Icon matching reference */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-col leading-none">
                  <div className="text-xl sm:text-2xl font-black italic tracking-tighter text-gray-900 flex items-center">
                    <span>{firstWord}</span>
                    <span className="text-red-600 ml-1">{secondWord}</span>
                  </div>
                  {remainingWords ? (
                    <span className="text-[0.62rem] font-bold tracking-[0.2em] text-gray-400 uppercase">
                      {remainingWords}
                    </span>
                  ) : (
                    <span className="text-[0.62rem] font-bold tracking-[0.2em] text-gray-400 uppercase">
                      AUTOMOTIVE
                    </span>
                  )}
                </div>
              </div>
            )}
          </Link>

          {/* Search Bar - Center Wide on Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <form
              onSubmit={handleSearchSubmit}
              className="flex w-full items-center border-2 border-gray-200 rounded-md bg-white hover:border-gray-300 focus-within:border-red-500 transition-colors shadow-sm"
            >
              {/* Category Dropdown Selector */}
              <div ref={categoryRef} className="relative flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-gray-700 hover:text-red-600 bg-gray-50/80 border-r border-gray-200 rounded-l transition-colors"
                >
                  <span className="max-w-[125px] truncate">{selectedCategory}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-gray-400 transition-transform ${
                      isCategoryDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1.5 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-red-50 hover:text-red-600 transition-colors ${
                          selectedCategory === cat ? "text-red-600 font-bold bg-red-50/50" : "text-gray-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search For Products..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                aria-label="Search"
                className="bg-[#1f242d] hover:bg-red-600 text-white px-5 py-3 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </form>

            {/* Autocomplete Results Dropdown */}
            {isSearchFocused && trimmedQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden z-50 p-2.5">
                <div className="px-3 py-1.5 text-[0.7rem] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 flex items-center justify-between">
                  <span>Product Suggestions</span>
                  <span>{filteredProducts.length} results</span>
                </div>
                {filteredProducts.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto divide-y divide-gray-50">
                    {filteredProducts.map((p) => {
                      const displayPrice =
                        p.bundles && p.bundles[0] ? p.bundles[0].price : p.ssPrice;
                      return (
                        <Link
                          key={p.id}
                          href={`/product/${p.id}`}
                          onClick={closeAll}
                          className="flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition-colors group"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-contain rounded bg-gray-50 border border-gray-100 p-1 flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.src = "https://placehold.co/100x100?text=Part";
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 group-hover:text-red-600 truncate">
                              {p.name}
                            </h4>
                            <span className="text-[0.65rem] text-gray-500 uppercase tracking-wider">
                              {p.category}
                            </span>
                          </div>
                          <div className="text-sm font-extrabold text-red-600 flex-shrink-0">
                            ${displayPrice}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-gray-500">
                    No products found matching &ldquo;{query}&rdquo;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Header Actions: Cart */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
            {/* Cart Widget: Icon + Count + Label + Dynamic Price */}
            <button
              onClick={toggleCart}
              className="flex items-center gap-2.5 text-left group p-1 sm:p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Shopping Cart"
            >
              <div className="relative text-gray-800 group-hover:text-red-600 transition-colors flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[0.62rem] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {getCartCount()}
                </span>
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                  My Cart
                </span>
                <span className="text-xs font-semibold text-red-600">
                  ${getCartTotal()}
                </span>
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-800 hover:text-red-600 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white focus-within:border-red-500"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search For Products..."
              className="w-full px-3.5 py-2 text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-3.5 py-2 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ────────────────── BOTTOM NAVIGATION BAR ────────────────── */}
      <div className="border-t border-gray-100 hidden lg:block bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          {/* Main Navigation Links (Strictly 4 Pages: Home, Shop, About, Contact) */}
          <nav className="flex items-center gap-2">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                pathname === "/"
                  ? "border border-red-500 text-red-600 bg-red-50/40 shadow-xs"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
            >
              <span>Home</span>
            </Link>

            {/* Shop (with product categories dropdown) */}
            <div className="relative group">
              <Link
                href="/shop"
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  pathname.startsWith("/shop") || pathname.startsWith("/product")
                    ? "border border-red-500 text-red-600 bg-red-50/40 shadow-xs"
                    : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                <span>Shop</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 group-hover:text-red-600 transition-colors"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>

              {/* Shop Megamenu Dropdown */}
              <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2">
                  <div className="px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
                    Product Catalog
                  </div>
                  {products.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/product/${prod.id}`}
                      className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <span className="truncate">{prod.name}</span>
                      <span className="text-red-500 text-[0.68rem] font-bold">
                        ${prod.bundles && prod.bundles[0] ? prod.bundles[0].price : prod.ssPrice}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
                    >
                      View All Products &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/about"
                  ? "border border-red-500 text-red-600 bg-red-50/40 shadow-xs"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "border border-red-500 text-red-600 bg-red-50/40 shadow-xs"
                  : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* ────────────────── MOBILE NAVIGATION DRAWER ────────────────── */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-bold text-red-600 bg-red-50"
            >
              <span>Home</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/shop"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>Shop All Products</span>
              <span>&rarr;</span>
            </Link>

            <div className="pl-3 border-l-2 border-red-500 my-1 space-y-1.5">
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  onClick={closeAll}
                  className="block py-1 text-xs text-gray-600 hover:text-red-600 truncate"
                >
                  &bull; {p.name}
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>Contact</span>
            </Link>

            <Link
              href="/terms"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>Shipping, Delivery & Guarantee</span>
            </Link>

            {/* Mobile Contact & Support Details */}
            <div className="pt-4 mt-2 border-t border-gray-100 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-600"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
