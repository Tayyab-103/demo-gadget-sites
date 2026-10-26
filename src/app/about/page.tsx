"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import { siteConfig } from "@/lib/brandIcon";
import VideoShowcase from "@/components/VideoShowcase";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Our story"
          title={<>About {siteConfig.brandName}</>}
          subtitle="A small sporting apparel store focused on three training essentials, made to be worn hard and washed often."
          image="/img/howitworks3.jpg"
          currentLabel="About"
        />
        <AboutUs />
        <VideoShowcase />
        <CTASection />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
