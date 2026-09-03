"use client";

import React from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AboutSection />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
