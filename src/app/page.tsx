"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PetMarquee from "@/components/PetMarquee";
import ProductGrid from "@/components/ProductGrid";
import ShopByNeed from "@/components/ShopByNeed";
import Features from "@/components/Features";
import BundleSavings from "@/components/BundleSavings";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import PetGallery from "@/components/PetGallery";
import Faq from "@/components/Faq";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <PetMarquee />
        <ProductGrid />
        <ShopByNeed />
        <Features />
        <BundleSavings />
        <HowItWorks />
        <Testimonials />
        <AboutSection />
        <PetGallery />
        <Faq />
        <CTASection />
        <Contact />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
