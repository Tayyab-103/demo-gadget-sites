"use client";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="grow">
        <PageHeader
          eyebrow="Shop"
          title={<>Electrical parts &amp; <span className="text-gradient">equipment</span></>}
          subtitle="Power strips, solar DC switches and rechargeable battery packs — available as single units or money-saving multi-packs."
          image="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=1200&q=80"
          currentLabel="Shop"
        />
        <ProductGrid compact />
        <Features />
      </main>
      <Footer />
    </>
  );
}
