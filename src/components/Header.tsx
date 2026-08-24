"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsShopDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsShopDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
        
        {/* Left: Logo with Cute Pink Baby Icon */}
        <Link
          href="/"
          onClick={closeAll}
          className="flex items-center gap-2.5 group flex-shrink-0 select-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#FFEBF0] p-1 flex items-center justify-center border border-[#FFD1DC]">
            <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8">
              <circle cx="18" cy="18" r="14" fill="#FFCCD7" />
              <circle cx="11" cy="20" r="2.5" fill="#FF7B95" opacity="0.6" />
              <circle cx="25" cy="20" r="2.5" fill="#FF7B95" opacity="0.6" />
              <circle cx="13" cy="16" r="1.5" fill="#2B2D42" />
              <circle cx="23" cy="16" r="1.5" fill="#2B2D42" />
              <path d="M15 21 Q18 24 21 21" stroke="#2B2D42" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M18 4 Q21 8 18 10" stroke="#FF7B95" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black text-[#FF6B8B] tracking-tight leading-none">
              Moonberry
            </span>
            <span className="text-[0.62rem] text-gray-500 font-bold tracking-wider">
              for your little one
            </span>
          </div>
        </Link>

        {/* Center: Navigation Bar (HOME, SHOP, ABOUT US, CONTACT) */}
        <nav className="hidden lg:flex items-center gap-8 font-black text-xs sm:text-sm tracking-wide text-[#2B2D42]">
          
          {/* HOME */}
          <Link
            href="/"
            onClick={closeAll}
            className="relative py-2 text-[#FF6B8B] font-black group"
          >
            HOME
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#FF6B8B] rounded-full" />
          </Link>

          {/* SHOP Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsShopDropdownOpen(true)}
            onMouseLeave={() => setIsShopDropdownOpen(false)}
          >
            <button
              className="py-2 flex items-center gap-1 hover:text-[#FF6B8B] transition-colors cursor-pointer"
              aria-expanded={isShopDropdownOpen}
            >
              SHOP
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isShopDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-pink-100 p-2 z-50 animate-in fade-in duration-150">
                {products.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    onClick={closeAll}
                    className="block px-3.5 py-2 text-xs font-bold text-gray-700 hover:bg-[#FFF0F4] hover:text-[#FF6B8B] rounded-xl transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 mt-1 pt-1">
                  <Link
                    href="/shop"
                    onClick={closeAll}
                    className="block px-3.5 py-2 text-xs font-black text-[#FF6B8B] hover:bg-[#FFF0F4] rounded-xl"
                  >
                    View All 3 Treasures →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ABOUT US (Direct Page Link instead of Pages dropdown) */}
          <Link
            href="/about"
            onClick={closeAll}
            className="py-2 hover:text-[#FF6B8B] transition-colors"
          >
            ABOUT US
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={closeAll}
            className="py-2 hover:text-[#FF6B8B] transition-colors"
          >
            CONTACT
          </Link>

        </nav>

        {/* Right: Only the Cart Icon */}
        <div className="flex items-center gap-3 flex-shrink-0">
          
          {/* Cart Icon with Pink Round Badge Counter */}
          <button
            onClick={toggleCart}
            className="text-[#2B2D42] hover:text-[#FF6B8B] transition-colors p-1.5 relative cursor-pointer"
            aria-label="Shopping Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>

            {/* Solid Pink Badge */}
            <span className="absolute -top-0.5 -right-1.5 bg-[#FF6B8B] text-white rounded-full min-w-[17px] h-[17px] px-1 text-[0.62rem] font-black flex items-center justify-center shadow-xs">
              {getCartCount() > 0 ? getCartCount() : 3}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden text-[#2B2D42] p-1 ml-1"
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
        <div className="lg:hidden bg-white border-t border-gray-100 p-5 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-150">
          <Link href="/" onClick={closeAll} className="text-sm font-black text-[#FF6B8B]">HOME</Link>
          <Link href="/shop" onClick={closeAll} className="text-sm font-bold text-gray-800">SHOP</Link>
          <Link href="/about" onClick={closeAll} className="text-sm font-bold text-gray-800">ABOUT US</Link>
          <Link href="/contact" onClick={closeAll} className="text-sm font-bold text-gray-800">CONTACT</Link>
        </div>
      )}
    </header>
  );
}
