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
        
        {/* Our Apparel Standard */}
        <HowItWorks />
        
        {/* Curated Products Collection */}
        <ProductGrid />

        {/* Alternating Features Section */}
        <Features />

        {/* About Brand & Story */}
        <AboutUs />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Family Wardrobe CTA Banner */}
        <CTASection />

        {/* FAQ Accordions */}
        <Faq />

        {/* Customer Care & Styling Contact Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
