"use client";

import React from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Products Page Dedicated Header Banner */}
        <section className="bg-[#132B1C] text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-[#78C470] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#78C470]">Products Catalog</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-sans mb-3">
              The Foundry <span className="text-[#78C470]">Collection</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Drop-forged high-carbon steel trowels, Japanese SK5 bypass pruners, and triple-tine hand cultivators crafted for lifetime performance.
            </p>
          </div>
        </section>

        {/* Strictly Products Catalog */}
        <ProductGrid />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
