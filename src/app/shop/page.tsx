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
          eyebrow="Signature Atelier Catalog"
          title={<>The Fine Stationery &amp; Writing Suite</>}
          subtitle="Explore German-tipped fountain pens, bleedproof milled cotton journals, and hand-cast solid brass desk accessories."
          image="/img/cta-workspace-banner.jpg"
          currentLabel="Collections"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
