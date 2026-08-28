"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
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
      <main className="flex-grow">
        <PageHeader
          eyebrow="Reach Our Collective"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle="Questions about apparel sizing, volume team orders, or logistics? Our Austin athletic support desk typically responds within 24 hours."
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          currentLabel="Contact"
        />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
