"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import VideoShowcase from "@/components/VideoShowcase";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
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
        {/* Dynamic Hero Section */}
        <Hero />
        
        {/* Step-by-Step Flow */}
        <HowItWorks />
        
        {/* Flagship Product Showcase */}
        <ProductGrid />

        {/* Video Showcase In Motion */}
        <VideoShowcase />

        {/* Credibility & Guarantee Standards */}
        <QualityPromise />
        
        {/* Athlete Testimonials */}
        <Testimonials />

        {/* Conversion CTA Banner */}
        <CTASection />

        {/* Contact Form Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
