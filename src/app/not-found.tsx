"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function NotFound() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/shop");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAF9F7]">
        
        {/* Inner Top Header Banner */}
        <section className="bg-white py-10 md:py-14 border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary mb-3">
              Oops!
            </h1>
            <nav aria-label="Breadcrumb" className="breadcrumbs-list">
              <Link href="/">Home</Link>
              <span className="breadcrumbs-separator" />
              <span className="text-primary font-bold">404</span>
            </nav>
          </div>
        </section>

        {/* 404 Main Area matching 404.html */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-white rounded-3xl border border-black/5 p-8 sm:p-14 lg:p-20 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content Column */}
            <div>
              <h2 className="font-heading text-6xl sm:text-8xl font-black text-primary leading-none mb-3">
                404
              </h2>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary mb-4">
                Page Not Found
              </h3>
              <p className="text-neutral-text/60 text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
                It looks like nothing was found at this location. Perhaps the garment has been archived, or you may try searching our boutique catalog below.
              </p>

              {/* Search Form matching 404.html */}
              <form onSubmit={handleSearch} className="flex gap-2 max-w-md mb-8">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dresses, knitwear, skirts..."
                  className="flex-1 bg-[#FAF9F7] border border-black/15 rounded-full px-5 py-3 text-xs sm:text-sm text-primary focus:outline-none focus:border-secondary"
                />
                <button
                  type="submit"
                  className="fashion-button text-xs py-3 px-6"
                >
                  Search
                </button>
              </form>

              <Link href="/" className="fashion-button-outline text-xs">
                ← Return to Homepage
              </Link>
            </div>

            {/* Right Graphic Column */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl bg-[#FAF9F7] border border-black/5 flex flex-col items-center justify-center p-8 text-center shadow-inner">
                <span className="font-heading text-7xl font-bold text-secondary/30 mb-2">404</span>
                <span className="text-xs uppercase tracking-widest text-neutral-text/40 font-bold">
                  Boutique Archive
                </span>
                <div className="w-12 h-0.5 bg-secondary my-4" />
                <p className="text-[0.72rem] text-neutral-text/50">
                  Return to our curated collection to discover fresh seasonal ready-to-wear arrivals.
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
