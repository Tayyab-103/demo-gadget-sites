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
          eyebrow="Shop all"
          title={<>Stationery &amp; office supplies</>}
          subtitle="Pens and ink, everyday journals and gift-ready desk sets — everything you need for a brighter workspace."
          image="/img/desk/standard-3.jpg"
          currentLabel="Shop"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
