"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProductGrid from "@/components/ProductGrid";
import LatestCreations from "@/components/LatestCreations";
import HowItWorks from "@/components/HowItWorks";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
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
        {/* 1. Hero Carousel Banner */}
        <Hero />
        
        {/* 2. Brand Story & Chapterhouse Standard */}
        <AboutUs />

        {/* 3. Product Catalog Showcase */}
        <ProductGrid />

        {/* 4. Visual Library Gallery */}
        <LatestCreations />

        {/* 5. Bookmaking Features */}
        <Features />

        {/* 6. Credibility & Guarantee Standards */}
        <QualityPromise />
        
        {/* 7. Reader Social Proof */}
        <Testimonials />

        {/* 8. Conversion CTA & Reader Circle */}
        <CTASection />

        {/* 9. Bookstore Contact Hub */}
        <Contact showForm={false} />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
