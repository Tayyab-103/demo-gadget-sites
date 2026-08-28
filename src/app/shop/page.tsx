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
          eyebrow="Complete Catalog"
          title={<>The Athlete Apparel Collection</>}
          subtitle="Explore pro-grade compression baselayers, double-knit technical training hoodies, and zoned performance crew socks."
          image="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1600&q=80"
          currentLabel="Apparel"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
