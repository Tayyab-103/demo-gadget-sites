"use client";

import React from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Contact Page Dedicated Header Banner */}
        <section className="bg-[#132B1C] text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-[#78C470] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#78C470]">Contact Us</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-sans mb-3">
              Workshop Contact &amp; <span className="text-[#78C470]">Support</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Have questions about tool care, steel metallurgy, warranty claims, or custom orders? Reach our blacksmiths directly.
            </p>
          </div>
        </section>

        {/* Strictly Workshop Assistance & Contact Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
