"use client";

import React from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-28 md:pt-32">
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
