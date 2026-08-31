"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductGrid from "@/components/ProductGrid";
import DealOfTheDay from "@/components/DealOfTheDay";
import HowItWorks from "@/components/HowItWorks";
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
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. 4 Guarantee / Trust Cards Strip */}
        <TrustBar />

        {/* 3. Products Catalog Showcase */}
        <ProductGrid />

        {/* 4. Deal of the Day & Limited Offers */}
        <DealOfTheDay />

        {/* 5. 3-Step How It Works */}
        <HowItWorks />

        {/* 6. Guarantee & Promise Standards */}
        <QualityPromise />
        
        {/* 7. Verified Customer Reviews */}
        <Testimonials />

        {/* 8. VIP Club Discount Banner */}
        <CTASection />

        {/* 9. FAQ Accordions */}
        <Faq />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
