"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
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
        
        {/* 2. Product Catalog Showcase */}
        <ProductGrid />

        {/* 3. Step-by-Step Experience Flow */}
        <HowItWorks />
        
        {/* 4. About Brand Bento Section */}
        <AboutUs />

        {/* 5. Credibility & Guarantee Standards */}
        <QualityPromise />
        
        {/* 6. Customer Social Proof Showcase */}
        <Testimonials />

        {/* 7. Special Offer Conversion Banner */}
        <CTASection />

        {/* 8. FAQ Accordions Dropdown */}
        <Faq />

        {/* 9. Contact Concierge Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
