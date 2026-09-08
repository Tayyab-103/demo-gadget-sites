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
          eyebrow="Commercial Outfitting Catalog"
          title={<>Commercial Uniforms &amp; Workwear</>}
          subtitle="Explore tactical industrial utility suites, Silvadur™ antimicrobial medical scrubs, and executive double-breasted culinary coats."
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
