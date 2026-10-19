"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Highlights from "@/components/Highlights";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-white font-sans">
        <PageHeader
          eyebrow="24/7 Customer Care"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle="Questions about toy recommendations, family game rules, or tracked delivery? Our Dallas support desk responds within 24 hours."
          image="/img/hero-banner.jpg"
          currentLabel="Contact Us"
        />

        <Contact />
        <Highlights />
        <SubscribeSection />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
