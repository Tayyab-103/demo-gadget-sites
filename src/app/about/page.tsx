"use client";

import React from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
