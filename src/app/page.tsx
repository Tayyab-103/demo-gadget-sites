"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import QualityPromise from "@/components/QualityPromise";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import NewsletterSection from "@/components/NewsletterSection";
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
        
        {/* 01 About Alderwyn */}
        <AboutUs />

        {/* 02 Our Standards (Dark Section) */}
        <QualityPromise />

        {/* 03 Our Products (3 Furnishings Grid) */}
        <ProductGrid />
        
        {/* 04 Client Stories (Dark Section) */}
        <Testimonials />

        {/* 05 Frequently Asked Questions */}
        <Faq />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* 06 Get In Touch Form */}
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
