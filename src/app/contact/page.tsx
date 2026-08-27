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
      <main className="flex-grow">
        <div className="bg-primary text-white py-12 md:py-16 text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <span className="eyebrow eyebrow-invert mb-3 justify-center">Get in Touch</span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
              Velvet Echo <span className="text-secondary">Workshop Support</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">
              Reach out to our technicians and support specialists for inquiries, custom orders, or warranty assistance.
            </p>
          </div>
        </div>

        <Contact showHeader={false} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
