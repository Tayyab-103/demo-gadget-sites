"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TechSpecs from "@/components/TechSpecs";
import HowItWorks from "@/components/HowItWorks";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* 1. Flagship Hero */}
        <Hero />

        {/* 2. Featured Products */}
        <ProductGrid />

        {/* 3. Engineering & Tech Specs */}
        <TechSpecs />

        {/* 4. 3-Step Process */}
        <HowItWorks />

        {/* 5. Quality Standards & 1-Year Guarantee */}
        <QualityPromise />

        {/* 6. Athlete Reviews */}
        <Testimonials />

        {/* 7. Quick Support FAQ */}
        <Faq />

        {/* 8. High-Conversion CTA */}
        <CTASection />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
