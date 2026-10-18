"use client";

import React from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        <section className="bg-surface border-b border-secondary/60">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-20 text-center flex flex-col items-center">
            <span className="eyebrow mb-4">Home / About</span>
            <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight text-neutral-text leading-tight">
              Our Story
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-text/65 max-w-xl">
              A small home furnishing market built around warm materials, simple design, and pieces you will reach for every day.
            </p>
          </div>
        </section>

        {/* About Section without duplicate header */}
        <AboutUs showHeader={false} />
        <QualityPromise />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}

