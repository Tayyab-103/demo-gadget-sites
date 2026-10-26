"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Contact"
          title={<>Let&apos;s talk desks</>}
          subtitle="Questions about an order, a product or supplies for your team? Send us a note — we reply within 24 hours."
          image="/img/desk/cta2.jpg"
          currentLabel="Contact Us"
        />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
