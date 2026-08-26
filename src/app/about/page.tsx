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
        <section className="bg-[#132B1C] text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-[#78C470] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#78C470]">About Us</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-sans mb-3">
              Our Forge &amp; <span className="text-[#78C470]">Heritage</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Founded on the belief that gardening tools should last generations. We hand-forge high-carbon steel and turn solid hardwood handles in small batches.
            </p>
          </div>
        </section>

        {/* Narrative & Craft Pillars */}
        <AboutUs />

        {/* Metallurgy & Woodworking Standards */}
        <HowItWorks />

        {/* Quality & Metallurgy Promise */}
        <QualityPromise />
      </main>

      <Footer />
      <CartDrawer />
    </>
  );
}
