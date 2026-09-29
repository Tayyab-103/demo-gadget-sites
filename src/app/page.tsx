"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import ProductCarousel from "@/components/ProductCarousel";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />
        <ProductCarousel/>
        
        {/* 2. Features Showcase */}
        <Features />

        {/* 3. Product Catalog Showcase */}
        <ProductGrid />

        {/* 4. Customer Social Proof & Reviews Showcase */}
        {/* <Testimonials /> */}

        {/* 5. About Us Section */}
        {/* <AboutSection /> */}
        <Faq/>
        
        {/* 6. Special Offer Conversion Banner */}
        <CTASection />

        {/* 7. Parent Support & Concierge Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
