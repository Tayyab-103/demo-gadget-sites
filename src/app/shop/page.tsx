"use client";

import React from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        <section className="bg-surface border-b border-secondary/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-20 text-center flex flex-col items-center">
            <span className="eyebrow mb-4">Home / Shop</span>
            <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-text leading-tight">
              The Collection
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-text/65 max-w-xl">
              Soft knit throws, warm stoneware lamps, and natural oak trays &mdash; everyday pieces with free shipping and easy returns.
            </p>
          </div>
        </section>

        {/* 3-Product Grid without duplicate section header */}
        <ProductGrid showHeader={false} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

