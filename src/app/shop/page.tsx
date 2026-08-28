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
          title={<>The Athlete Collection</>}
          subtitle="Explore battle-tested weighted training vests, solid cast dumbbells, and storm-shield equipment backpacks."
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80"
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
