"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      {/* <AnnouncementBar /> */}
      <Header />
      <main className="flex-grow bg-[#F8F6F2] text-[#121316]">
        {/* 1. Immersive Atelier Hero */}
        <Hero />

         <Features/>
        
        {/* 2. Curated Kitchen Tools Catalog */}
        <ProductGrid />

        {/* 3. The Quality Promise & Metallurgy Standards */}
        {/* <QualityPromise /> */}

        {/* 6. Visual Atelier & Foundry Gallery Marquee */}
        <GallerySection />

        {/* 4. The 3-Step Foundry Process & Mastery */}
        <HowItWorks />
        
        {/* 5. Brand Atelier Story & Craft Philosophy */}
        <AboutUs />

        {/* 7. Chef & Baker Reviews Showcase */}
        {/* <Testimonials /> */}

        {/* 8. Special Toolset Conversion CTA Banner */}
        <CTASection />

        {/* 9. Culinary Concierge Contact Channel */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
