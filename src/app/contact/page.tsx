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
        <section className="bg-surface border-b border-secondary/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-20 text-center flex flex-col items-center">
            <span className="eyebrow mb-4">Home / Contact</span>
            <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-text leading-tight">
              We&apos;re Here to Help
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-text/65 max-w-xl">
              Questions about a product, your order, or a return? Reach our team by phone, email, or the form below.
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

