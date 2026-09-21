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
          eyebrow="Complete Studio Catalog"
          title={<>The Artist &amp; Craft Supply Collection</>}
          subtitle="Explore studio-grade stretched cotton canvases, high-viscosity acrylic pigments, fine detailing brushes, and craft accessories."
          image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80"
          currentLabel="Art Supplies"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
