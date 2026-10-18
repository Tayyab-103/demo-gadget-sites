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
        <section className="bg-primary text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-accent-light transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">Products Catalog</span>
            </div>
            
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4">
              Shop <em className="text-accent-light">Garden Tools</em>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Hand trowels, bypass pruners and claw cultivators for every job in the garden — buy one or bundle up and save on each tool.
            </p>
          </div>
        </section>

        {/* Strictly Products Catalog */}
        <ProductGrid showHeader={false} />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
