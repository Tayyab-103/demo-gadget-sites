"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 group flex-shrink-0 select-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] p-1 flex items-center justify-center shadow-md">
            <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
              <circle cx="18" cy="18" r="13" fill="rgba(255,255,255,0.25)" />
              <circle cx="13" cy="17" r="1.5" fill="white" />
              <circle cx="23" cy="17" r="1.5" fill="white" />
              <path d="M14 22 Q18 26 22 22" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M18 5 Q22 9 18 12" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="10" cy="21" r="2.5" fill="rgba(255,255,255,0.5)" />
              <circle cx="26" cy="21" r="2.5" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-[#7C3AED] tracking-tight leading-none">
              Lullaby Grove
            </span>
            <span className="text-[0.62rem] text-gray-500 font-bold tracking-wider">
              baby collective
            </span>
          </div>
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-black text-xs sm:text-sm tracking-wide text-[#1E1040]">

          <Link href="/" onClick={closeAll} className="py-2 hover:text-[#7C3AED] transition-colors">
            HOME
          </Link>

          <Link href="/shop" onClick={closeAll} className="py-2 hover:text-[#7C3AED] transition-colors">
            SHOP
          </Link>

          <Link href="/about" onClick={closeAll} className="py-2 hover:text-[#7C3AED] transition-colors">
            ABOUT US
          </Link>

          <Link href="/contact" onClick={closeAll} className="py-2 hover:text-[#7C3AED] transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Right: Cart */}
        <div className="flex items-center gap-3 flex-shrink-0">

          <button
            onClick={toggleCart}
            className="text-[#1E1040] hover:text-[#7C3AED] transition-colors p-1.5 relative cursor-pointer"
            aria-label="Shopping Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute -top-0.5 -right-1.5 bg-[#7C3AED] text-white rounded-full min-w-[17px] h-[17px] px-1 text-[0.62rem] font-black flex items-center justify-center shadow-xs">
              {getCartCount()}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden text-[#1E1040] p-1 ml-1"
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
        <div className="lg:hidden bg-white border-t border-purple-100 p-5 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-150">
          <Link href="/" onClick={closeAll} className="text-sm font-black text-[#7C3AED]">HOME</Link>
          <Link href="/shop" onClick={closeAll} className="text-sm font-bold text-gray-800">SHOP</Link>
          <Link href="/about" onClick={closeAll} className="text-sm font-bold text-gray-800">ABOUT US</Link>
          <Link href="/contact" onClick={closeAll} className="text-sm font-bold text-gray-800">CONTACT</Link>
        </div>
      )}
    </header>
  );
}
