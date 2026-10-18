"use client";

import React from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
