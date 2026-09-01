"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CuratedSupplies from "@/components/CuratedSupplies";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Hero Banner with Auto-Carousel */}
        <Hero />
        
        {/* Featured Product Catalog */}
        <ProductGrid />

        {/* Editorial Craft Spotlight */}
        <CuratedSupplies />

        {/* Quality & Studio Standards */}
        <QualityPromise />
        
        {/* Customer Social Proof */}
        <Testimonials />

        {/* Common Questions */}
        <Faq />

        {/* Newsletter Collective */}
        <CTASection />
        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
