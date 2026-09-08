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
          eyebrow="Signature Transit Catalog"
          title={<>Luggage &amp; Modular Travel Gear</>}
          subtitle="Explore aerospace aluminum carry-on spinners, Italian leather weekender bags, and modular compression packing architectures."
          image="/img/hero-luggage-travel.jpg"
          currentLabel="Shop"
        />
        <ProductGrid hideHeader={true} />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
