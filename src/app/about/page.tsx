"use client";

import React from "react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PetGallery from "@/components/PetGallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHero
          eyebrow="About"
          title={<>Good gear for <span className="text-gradient">good boys &amp; girls</span></>}
          description="We're a small team of pet people who believe everyday care should be simple, affordable and a little bit fun."
          image="/img/QualityPromise3.png"
        />
        <AboutSection />
        <HowItWorks />
        <Testimonials />
        <PetGallery />
        <CTASection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
