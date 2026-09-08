"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <AnnouncementBar />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-[#FDFDFD] border-b border-rose-100 shadow-xs transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeAll}
            className="flex items-center gap-3 group flex-shrink-0 select-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#4C0519] to-[#D2446D] p-1 flex items-center justify-center shadow-md text-white font-black text-xl">
              𝄞
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black text-[#4C0519] tracking-tight uppercase leading-none">
                Harmonic <span className="text-[#D2446D]">Hollow</span>
              </span>
              <span className="text-[0.62rem] text-gray-500 font-extrabold tracking-[0.2em] uppercase mt-0.5">
                Music Workshop
              </span>
            </div>
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-extrabold text-xs sm:text-sm tracking-widest uppercase text-[#000000]">
            <Link href="/" onClick={closeAll} className="py-2 hover:text-[#D2446D] transition-colors">
              HOME
            </Link>

            <Link href="/shop" onClick={closeAll} className="py-2 hover:text-[#D2446D] transition-colors">
              SHOP
            </Link>

            <Link href="/about" onClick={closeAll} className="py-2 hover:text-[#D2446D] transition-colors">
              ABOUT US
            </Link>

            <Link href="/contact" onClick={closeAll} className="py-2 hover:text-[#D2446D] transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-2.5 px-5 rounded-full text-[0.7rem] uppercase tracking-widest shadow-sm"
            >
              <span>Explore Gear</span>
              <span>→</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="text-[#4C0519] hover:text-[#D2446D] bg-rose-50 hover:bg-rose-100/80 p-2.5 rounded-full relative cursor-pointer transition-colors"
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {mounted && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#D2446D] text-white rounded-full min-w-[18px] h-[18px] px-1 text-[0.62rem] font-black flex items-center justify-center shadow-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden text-[#4C0519] p-2 rounded-xl hover:bg-rose-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FDFDFD] border-t border-rose-100 p-5 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-150">
            <Link href="/" onClick={closeAll} className="text-sm font-black text-[#4C0519] py-2">HOME</Link>
            <Link href="/shop" onClick={closeAll} className="text-sm font-bold text-gray-800 py-2">SHOP</Link>
            <Link href="/about" onClick={closeAll} className="text-sm font-bold text-gray-800 py-2">ABOUT US</Link>
            <Link href="/contact" onClick={closeAll} className="text-sm font-bold text-gray-800 py-2">CONTACT</Link>
            <Link href="/shop" onClick={closeAll} className="w-full text-center py-3 bg-[#4C0519] text-white font-bold rounded-xl text-xs uppercase tracking-widest mt-2">
              Explore Store
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
