"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Shop"
          title={<>The Full <span className="text-secondary">Lineup</span></>}
          subtitle="Weighted training vests, home strength kits and waterproof gear packs — available as single units or money-saving bundles."
          image="/img/products/product2-2.jpg"
          currentLabel="Products"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
