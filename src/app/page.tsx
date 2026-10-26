import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <Features />
        <AboutSection />
        {/* <QualityPromise /> */}
        <Testimonials />
        <Faq />
        <NewsletterSection />
        <Contact />
      </main>
      <Footer />
      <NewsletterPopup />
    </>
  );
}
