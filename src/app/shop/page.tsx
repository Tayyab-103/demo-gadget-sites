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
          eyebrow="The Family Collection"
          title={<>Everyday Family Clothing</>}
          subtitle="Explore soft cotton essentials, play-ready kids&apos; sets, and cozy matching pajamas for the whole family."
          image="/img/hero-uniforms.jpg"
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
