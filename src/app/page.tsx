"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
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
      <main className="flex-grow bg-[#0E0F11]">
        {/* Reference-Inspired Hero */}
        <Hero />
        
        {/* Product Catalog Showcase */}
        <ProductGrid />

        {/* 3 Outlined Feature Boxes */}
        <Features />
        
        {/* 3 Step Workshop Process */}
        <HowItWorks />
        
        {/* Brand Atelier Story */}
        <AboutUs />

        {/* Quality & Food Safety Standards */}
        <QualityPromise />
        
        {/* Chef & Baker Critiques */}
        <Testimonials />

        {/* Conversion CTA Banner */}
        <CTASection />

        {/* FAQ Accordions */}
        <Faq />

        {/* Contact Concierge Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
