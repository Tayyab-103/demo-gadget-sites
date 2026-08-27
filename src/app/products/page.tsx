"use client";

import React from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProductGrid showHeader={false} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
