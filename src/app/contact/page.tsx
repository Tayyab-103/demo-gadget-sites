"use client";

import React from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Contact Hero Header */}
        <section className="bg-[#141F1A] text-white py-14 sm:py-20 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in srgb, var(--secondary-color) 10%, transparent), transparent)",
            }}
          />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="block text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
              Direct Assistance &amp; Support
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Get in Touch with Our <span className="text-secondary">Concierge</span>
            </h1>
            <div className="mx-auto mt-4 mb-4 w-10 h-px bg-secondary" />
            <p className="mt-3 text-white/70 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Whether you need sizing advice, warranty support, or order tracking, our Austin team is here to assist.
            </p>
          </div>
        </section>

        <Contact />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
