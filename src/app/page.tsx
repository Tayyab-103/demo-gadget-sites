"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
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
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Product Catalog Showcase */}
        <ProductGrid />

        {/* 3. Customer Social Proof & Reviews Showcase */}
        <Testimonials />

        {/* 4. Step-by-Step Experience & Delivery Flow */}
        <HowItWorks />
        
        {/* 5. Special Offer Conversion Banner */}
        <CTASection />

        {/* 6. Pet Concierge & Support Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
