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
          eyebrow="Commercial Uniforms"
          title={<>The Commercial Uniform Collection</>}
          subtitle="Explore heavy-duty industrial work shirts, reinforced utility cargo work pants, and high-visibility all-weather work jackets."
          image="/img/herosection2.jpg"
          currentLabel="Uniforms"
        />
        <ProductGrid />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
