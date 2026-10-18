"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import QualityPromise from "@/components/QualityPromise";
import CTASection from "@/components/CTASection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import ProductMarquee from "@/components/ProductMarquee";

export default function Home() {
  return (
    <>
      <Header overlay />
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Highlights ticker */}
        <ProductMarquee />

        {/* 3. Product collection (immediate value for buyers) */}
        <ProductGrid />

        {/* 4. Why shop with us */}
        <Features />
        {/* <AboutUs /> */}

        {/* 5. How ordering works */}
        <HowItWorks />

        {/* 6. Tools in the garden */}
        <Gallery />

        {/* 7. Store promises */}
        <QualityPromise />

        {/* 8. Bundle CTA */}
        <CTASection />

        {/* 9. FAQs */}
        {/* <Faq /> */}

        {/* 10. Contact overview */}
        <Contact />
      </main>

      {/* Footer & global overlays */}
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
