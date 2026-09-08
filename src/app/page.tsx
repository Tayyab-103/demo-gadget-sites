"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HobbyCategories from "@/components/HobbyCategories";
import AboutUs from "@/components/AboutUs";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Features from "@/components/Features";
import MakersClub from "@/components/MakersClub";
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
        {/* 1. Full-Width Background Carousel Hero */}
        <Hero />
        
        {/* 2. Step-by-Step Discovery Process */}
        {/* <HowItWorks /> */}
        <Features />

        {/* 3. Visual 4-Category Hobby Worlds (New Component) */}
        {/* <HobbyCategories /> */}
        <ProductGrid />
        
        {/* 4. Brand Mission & Atelier Craftsmanship */}
        {/* <AboutUs /> */}

        {/* 5. Featured Maker Kits Catalog */}
        

        {/* 6. Maker Quality Standards */}
        <QualityPromise />
        
        {/* 7. Core Store Guarantees */}
        

        {/* 8. #WonderwickMakers Community Showcase (New Component) */}
        {/* <MakersClub /> */}
        
        {/* 9. Customer Player Reviews */}
        <Testimonials />

        {/* 10. 15% Off VIP Guild CTA */}
        <CTASection />

        {/* 11. Frequently Asked Questions */}
        <Faq />

        {/* 12. Concierge & Contact Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
