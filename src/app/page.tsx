"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductGrid from "@/components/ProductGrid";
import DealOfTheDay from "@/components/DealOfTheDay";
import HowItWorks from "@/components/HowItWorks";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">

        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Trust Assurance Strip */}
        <TrustBar />

        {/* 3. Products Catalog Showcase */}
        <ProductGrid />

        {/* 4. Deal of the Day & Limited Offers */}
        <DealOfTheDay />

        {/* 5. Features Grid */}
        <Features />
        
        {/* 6. Simple Upgrade Steps */}
        <HowItWorks />

        {/* 7. Verified Customer Reviews */}
        <Testimonials />

        {/* 8. VIP Club Discount Banner */}
        <CTASection />

        {/* 9. FAQ Accordions */}
        <Faq />

        {/* 10. Direct Contact & Support */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
