"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
import MarqueeTicker from "@/components/MarqueeTicker";
import BrandsSection from "@/components/BrandsSection";
import Testimonials from "@/components/Testimonials";
import Highlights from "@/components/Highlights";
import NewsSection from "@/components/NewsSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="Our Story &amp; Playful Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Headquartered in Dallas, Texas. Dedicated to enriching childhoods and family game nights with 100% child-safe, non-toxic, and engaging toys."
          image="/img/hero-banner.jpg"
          currentLabel="About Us"
        />

        {/* Main About Section */}
        <AboutUs />

        {/* Slide text ticker from Kiddex */}
        <MarqueeTicker />

        {/* Shop by Brands Section from Kiddex */}
        <BrandsSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Highlights Section from Kiddex */}
        <Highlights />

        {/* Latest From Media News Section from about.html */}
        <NewsSection />
      </main>

      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
