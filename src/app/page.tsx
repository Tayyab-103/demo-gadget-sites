"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Redesigned Hero Section with hero1.jpg & hero2.jpg */}
        <Hero />

        {/* 6 Core Engineering Capabilities & Features */}
        <Features />

        {/* About Voltspire & Laboratory Calibration Section */}
        <AboutSection />

        {/* Product Catalog Showcase */}
        <ProductGrid />

        {/* Credibility & Engineering Standards */}
        <QualityPromise />
        
        {/* Customer Social Proof */}
        <Testimonials />

        {/* High-Impact Workshop & Field Gear Call To Action */}
        {/* <CtaSection /> */}

        {/* In-Page Newsletter Technical Dispatches */}
        <NewsletterSection />

        {/* Contact Form Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
