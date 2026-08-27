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
      <main className="flex-grow">
        <div className="bg-primary text-white py-12 md:py-16 text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <span className="eyebrow eyebrow-invert mb-3 justify-center">About Our Workshop</span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
              Crafting Tone In <span className="text-secondary">Austin, Texas</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto">
              Dedicated to acoustic purity, master metallurgy, and gear built for a lifetime of music.
            </p>
          </div>
        </div>

        <AboutUs />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
