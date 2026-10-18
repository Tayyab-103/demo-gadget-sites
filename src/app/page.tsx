"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import VideoShowcase from "@/components/VideoShowcase";
import ProductGrid from "@/components/ProductGrid";
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
        <Hero />

        {/* Product Catalog Showcase */}
        <ProductGrid />
        
        {/* About Brand Section */}
        {/* <AboutUs /> */}

        {/* Brand Video Showcase */}
        <VideoShowcase />

        {/* Step-by-Step Flow */}
        <HowItWorks />

        {/* Credibility & Guarantee Standards */}
        {/* <QualityPromise /> */}
        
        {/* Quality Certifications */}
        {/* <Features /> */}
        
        {/* Customer Social Proof */}
        <Testimonials />

        {/* Conversion CTA Banner */}
        <CTASection />

        {/* FAQ Accordions Dropdown */}
        <Faq />

        {/* Contact Form Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
