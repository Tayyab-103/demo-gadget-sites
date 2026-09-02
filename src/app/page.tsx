"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#0E0F11]">
        {/* Reference-Inspired Hero */}
        <Hero />
        
        {/* Product Catalog Showcase */}
        <ProductGrid />

        {/* Quality & Food Safety Standards */}
        <QualityPromise />
        
        {/* Brand Atelier Story */}
        <AboutUs />

        {/* Chef & Baker Critiques */}
        <Testimonials />

        {/* 3 Step Workshop Process */}
        <HowItWorks />

        {/* Conversion CTA Banner */}
        <CTASection />

        {/* Contact Concierge Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
