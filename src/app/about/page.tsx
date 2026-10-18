"use client";

import React from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        <AboutUs />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
