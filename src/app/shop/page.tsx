"use client";

import React from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import BundleSavings from "@/components/BundleSavings";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Shop"
          title={<>Shop all <span className="text-gradient">pet essentials</span></>}
          description="Grooming, chew and walking basics for dogs and cats — available as single items or money-saving bundles."
          image="/img/hero3.png"
        />
        <ProductGrid />
        <BundleSavings />
        <Features />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
