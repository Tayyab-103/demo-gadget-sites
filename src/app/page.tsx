"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Features / Why Choose Us */}
        <Features />

        {/* 3. Product Catalog Showcase */}
        <ProductGrid />

        {/* 4. Credibility & Guarantee Standards */}
        <QualityPromise />
        
        {/* 5. Customer Social Proof */}
        <Testimonials />

        {/* 6. Conversion CTA Banner */}
        <CTASection />

        {/* 7. FAQ Accordions Dropdown */}
        <Faq />

        {/* 8. Contact Information Section */}
        <Contact showForm={false} />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
