"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrainAnywhere from "@/components/TrainAnywhere";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
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

        {/* Train Anywhere Showcase */}
        <TrainAnywhere />

        {/* Quality & Trial Standards */}
        <QualityPromise />
        
        {/* Customer Testimonials */}
        <Testimonials />

        {/* Conversion CTA Banner */}
        <CTASection />

        {/* FAQ */}
        <Faq />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
