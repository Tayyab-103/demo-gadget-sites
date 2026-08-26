"use client";

import React from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
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
      <main className="flex-grow">
        {/* 1. Hero & Integrated Header */}
        <Hero />
        
        {/* 2. Product Catalog Showcase (Immediate value for buyers) */}
        <ProductGrid />

        {/* 3. Foundry Standards & Metallurgy */}
        <HowItWorks />
        
        {/* 4. Foundry Heritage Story */}
        <AboutUs />

        {/* 5. Quality Guarantee & Hardness Standards */}
        <QualityPromise />
        
        {/* 6. Customer & Master Gardener Endorsements */}
        <Testimonials />

        {/* 7. Seasonal Bundle Offer CTA */}
        <CTASection />

        {/* 8. Foundry Knowledge Base & 5 FAQs */}
        <Faq />

        {/* 9. Direct Workshop Assistance & Support Form */}
        <Contact />
      </main>

      {/* 10. Footer & Global Modals */}
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
