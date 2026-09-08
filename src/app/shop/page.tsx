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
          eyebrow="The 2026 Haute Couture Repertoire"
          title={<>Couture Dresses &amp; Outerwear</>}
          subtitle="Explore pure 22-momme mulberry silk slip dresses, double-faced virgin wool cashmere coats, and corded Chantilly lace gala gowns."
          image="/img/fashion-hero.jpg"
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
