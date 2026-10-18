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
          eyebrow="Family Apparel Catalog"
          title={<>Family Clothing Stores Everywhere</>}
          subtitle="Explore curated collections designed for every family member — from comfortable essentials to elegant occasion wear."
          image="/img/hero1.jpg"
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
