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
          image="/img/cta1.jpg"
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
