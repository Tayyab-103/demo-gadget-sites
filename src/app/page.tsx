"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
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
        {/* 1. Hero Banner with 3-Feature Pillar Strip */}
        <Hero />

        {/* 2. Product Catalog & Promo Banners (Direct shopping after Hero) */}
        <ProductGrid />
        
        {/* 3. Brand Story & Organic Materials: The Anatomy of Tenderness */}
        <AboutUs />

        {/* 4. Step-by-Step Delivery & Packaging Flow */}
        <HowItWorks />
        
        {/* 5. Verified Parent Reviews & Social Proof */}
        <Testimonials />

        {/* 6. Editorial FAQ Index: The Things Parents Ask */}
        <Faq />

        {/* 7. Newsletter & Community: Join Our Baby Family */}
        <CTASection />

        {/* 8. Parent Care Support & Inquiry Form */}
        <Contact />
      </main>

      {/* 9. Scalloped Pink Cloud Footer */}
      <Footer />

      {/* Utilities */}
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
