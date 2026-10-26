import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shop Tools",
  description: "Magnetic screwdriver bits, a digital multimeter and a doorbell power cable — all with free shipping.",
};

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
