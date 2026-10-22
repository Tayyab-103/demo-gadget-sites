"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
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
      <main className="flex-grow">
        <PageHeader
          eyebrow="About Us"
          title={<>Gear For The <span className="text-secondary">Long Way Around</span></>}
          subtitle={`${siteConfig.brandName} is an Austin, TX outfitter making rugged training gear for trails, garages and everywhere in between.`}
          image="/img/products/sample_gym.jpg"
          currentLabel="About"
        />
        <AboutUs />
        <Features />
        <CTASection />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
