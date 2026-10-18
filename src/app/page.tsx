"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
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
        {/* Hero Section */}
        <Hero />
        
        {/* How We Make It */}
        <HowItWorks />
        
        {/* Curated Products Collection */}
        <ProductGrid />

        {/* Alternating Features Section */}
        <Features />

        {/* About Brand */}
        <AboutUs />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Family Conversion Banner */}
        <CTASection />

        {/* FAQ Accordions */}
        <Faq />

        {/* Family Support Contact Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
