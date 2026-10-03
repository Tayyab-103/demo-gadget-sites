"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Features Showcase */}
        <Features />

        {/* 3. Product Catalog Showcase with Interactive Hover Cards */}
        <ProductGrid />

        {/* 4. Interactive Marquee Visual Gallery */}
        <GallerySection />

        {/* 5. Customer Social Proof & Reviews Showcase */}
        {/* <Testimonials /> */}

        {/* 6. About Us Section */}
        <AboutSection />
        
        {/* 7. Special Offer Conversion Banner */}
        <CTASection />

        {/* 8. Contact & Support Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
