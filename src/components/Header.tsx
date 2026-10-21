"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteConfig = siteConfigData as unknown as SiteConfig;

// "Soundhouse Music Marketplace" -> "Soundhouse" + "Music Marketplace"
const [brandLead, ...brandRest] = siteConfig.brandName.split(" ");
const brandTail = brandRest.join(" ");

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { toggleCart, getCartCount } = useCart();
  const pathname = usePathname();
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
        className="sticky top-0 z-50 bg-neutral-bg/75 backdrop-blur-xl border-b border-line transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center gap-3 flex-shrink-0 select-none group">
            {siteConfig.useImageLogo ? (
              <img src={siteConfig.logoImage} alt={siteConfig.brandName} className="h-10 w-auto" />
            ) : (
              <>
                <div className="relative w-10 h-10 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-primary/30">
                  <div className="flex items-end gap-[3px] h-4" aria-hidden="true">
                    <span className="w-[3px] h-2 rounded-full bg-white" />
                    <span className="w-[3px] h-4 rounded-full bg-white" />
                    <span className="w-[3px] h-3 rounded-full bg-white" />
                    <span className="w-[3px] h-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-neutral-text tracking-tight leading-none">
                    {brandLead}
                  </span>
                  {brandTail && (
                    <span className="text-[0.6rem] text-gradient font-extrabold tracking-[0.22em] uppercase mt-1">
                      {brandTail}
                    </span>
                  )}
                </div>
              </>
            )}
          </Link>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive ? "bg-brand-gradient text-primary-text shadow-md" : "text-muted hover:text-neutral-text hover:bg-surface-2"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <Link href="/shop" className="hidden sm:inline-flex btn-primary py-2.5 px-5 text-[0.7rem] uppercase tracking-widest">
              Shop Now <span aria-hidden="true">→</span>
            </Link>

            <button
              onClick={toggleCart}
              className="relative text-neutral-text bg-surface hover:bg-surface-2 border border-line p-2.5 rounded-full cursor-pointer transition-colors"
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>

              {mounted && (
                <span className="absolute -top-1 -right-1 bg-brand-gradient text-primary-text rounded-full min-w-[18px] h-[18px] px-1 text-[0.62rem] font-black flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="lg:hidden text-neutral-text p-2.5 rounded-full border border-line bg-surface hover:bg-surface-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="lg:hidden border-t border-line bg-neutral-bg/95 backdrop-blur-xl p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest ${
                  pathname === link.href ? "bg-primary-soft text-primary-light" : "text-muted hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/shop" onClick={closeAll} className="btn-primary w-full py-3.5 text-xs uppercase tracking-widest mt-3">
              Shop the Store
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
