"use client";

import React from "react";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProductGrid />
        <Testimonials />
        <HowItWorks />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
