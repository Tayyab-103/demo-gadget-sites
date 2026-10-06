"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import AnnouncementBar from "./AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Header() {
  const pathname = usePathname();
  const { toggleCart, getCartCount, getCartTotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Logo text extraction
  const logoWords = siteConfig.brandName.split(" ");
  const firstWord = logoWords[0] || "Motorway";
  const secondWord = logoWords[1] || "Parts";
  const remainingWords = logoWords.slice(2).join(" ") || "AND ACCESSORIES";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
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
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header ref={headerRef} className="w-full bg-white text-gray-800 sticky top-0 z-50 shadow-sm font-sans">
      {/* ────────────────── TOP ANNOUNCEMENT BAR ────────────────── */}
      <AnnouncementBar />

      {/* ────────────────── TOP UTILITY STRIP ────────────────── */}
      <div className="border-b border-gray-200 bg-[#f8fafc] text-[0.75rem] text-gray-600 font-medium transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 flex items-center justify-between">
          {/* Top Left: Email */}
          <div className="flex items-center gap-2 min-w-0">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors text-gray-700 lowercase truncate text-[0.72rem] sm:text-[0.75rem]"
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
                className="text-emerald-600 flex-shrink-0"
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
                className="text-emerald-600 flex-shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>Free Express US Shipping</span>
            </span>
            <span className="text-gray-300">|</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-emerald-600 transition-colors text-gray-700"
            >
              Support: {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* ────────────────── MAIN HEADER ROW ────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* ─── 1. LEFT: BRAND LOGO & MOTORWAY ICON ─── */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 text-left group"
            >
              {siteConfig.useImageLogo && siteConfig.logoImage ? (
                <img
                  src={siteConfig.logoImage}
                  alt={siteConfig.brandName}
                  className="max-h-11 sm:max-h-13 w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Stylized Automotive Gear Logo Icon with Emerald Gradient */}
                  <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#061A14] via-[#0B251D] to-[#059669] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
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
                        className="text-emerald-400"
                      >
                        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                        <circle cx="12" cy="12" r="3" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col text-left leading-none">
                    <div className="text-lg sm:text-2xl md:text-[1.5rem] font-black italic tracking-tighter text-gray-900 flex items-center">
                      <span>{firstWord}</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 ml-1.5">{secondWord}</span>
                    </div>
                    <span className="text-[0.58rem] sm:text-[0.66rem] font-bold tracking-[0.22em] text-emerald-950/60 uppercase mt-0.5">
                      {remainingWords || "AND ACCESSORIES"}
                    </span>
                  </div>
                </div>
              )}
            </Link>
          </div>

          {/* ─── 2. CENTER: NAVIGATION LINKS (Home, Products, About, Contact) ─── */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3 flex-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ─── 3. RIGHT SIDE: CART WIDGET & MOBILE TOGGLE ─── */}
          <div className="flex items-center justify-end gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={toggleCart}
              className="flex items-center gap-2.5 text-left group p-1.5 sm:p-2 rounded-xl hover:bg-emerald-50/60 transition-colors cursor-pointer border border-transparent hover:border-emerald-100"
              aria-label="Shopping Cart"
            >
              <div className="relative text-gray-800 group-hover:text-emerald-600 transition-colors flex items-center justify-center">
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
                <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[0.62rem] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {getCartCount()}
                </span>
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  My Cart
                </span>
                <span className="text-xs font-semibold text-emerald-600">
                  ${getCartTotal()}
                </span>
              </div>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-gray-800 hover:text-emerald-600 rounded-lg hover:bg-emerald-50/50 transition-colors cursor-pointer"
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
      </div>

      {/* ────────────────── MOBILE NAVIGATION DRAWER ────────────────── */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-5 py-6 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={closeAll}
              className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-bold ${
                pathname === "/" ? "text-emerald-600 bg-emerald-50" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>Home</span>
              <span>&rarr;</span>
            </Link>

            <Link
              href="/shop"
              onClick={closeAll}
              className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold ${
                pathname.startsWith("/shop") ? "text-emerald-600 bg-emerald-50" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>Products Catalog</span>
              <span>&rarr;</span>
            </Link>

            <div className="pl-3 border-l-2 border-emerald-500 my-1 space-y-1.5">
              {products.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.id}`}
                  onClick={closeAll}
                  className="block py-1 text-xs text-gray-600 hover:text-emerald-600 truncate"
                >
                  &bull; {p.name}
                </Link>
              ))}
            </div>

            <Link
              href="/about"
              onClick={closeAll}
              className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold ${
                pathname === "/about" ? "text-emerald-600 bg-emerald-50" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>About Us</span>
            </Link>

            <Link
              href="/contact"
              onClick={closeAll}
              className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold ${
                pathname === "/contact" ? "text-emerald-600 bg-emerald-50" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              <span>Contact</span>
            </Link>

            <Link
              href="/terms"
              onClick={closeAll}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              <span>Shipping, Delivery &amp; Guarantee</span>
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
                  className="text-emerald-600"
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
                  className="text-emerald-600"
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
