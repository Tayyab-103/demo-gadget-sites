"use client";

import React from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="Contact"
          title={<>Let&apos;s <span className="text-gradient">talk pets</span></>}
          description="Call, email or send a message — our support team is happy to help with products, orders and returns."
          image="/img/contact2.png"
        />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
