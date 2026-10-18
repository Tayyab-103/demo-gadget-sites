"use client";

import React from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import QualityPromise from "@/components/QualityPromise";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* About Page Dedicated Header Banner */}
        <section className="bg-primary text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-accent-light transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">About Us</span>
            </div>
            
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4">
              Rooted in the <em className="text-accent-light">garden</em>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              We started with a simple idea: gardeners deserve a short list of really good hand tools — and a shop that's easy to reach when they need help.
            </p>
          </div>
        </section>

        {/* Narrative & Craft Pillars */}
        <AboutUs />

        {/* How ordering works */}
        <HowItWorks />

        {/* Store promises */}
        <QualityPromise />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
