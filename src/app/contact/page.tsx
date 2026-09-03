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
        {/* Page Editorial Header */}
        <section className="pt-10 sm:pt-14 md:pt-16 pb-2 sm:pb-4">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 text-center">
            <h1 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl uppercase tracking-[0.06em] text-primary mb-3 leading-tight">
              CONTACT US
            </h1>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] leading-relaxed text-neutral-text/60 max-w-xl mx-auto">
              CONNECT WITH OUR AUSTIN INTERIOR SPECIALISTS FOR STYLING CONSULTATIONS, PRODUCT INQUIRIES, OR ORDER GUIDANCE.
            </p>
          </div>
        </section>

        {/* Contact Form without duplicate header */}
        <Contact showHeader={false} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

