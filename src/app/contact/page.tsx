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
          eyebrow="Fleet Outfitting Concierge"
          title={<>Connect With {siteConfig.brandName}</>}
          subtitle="Questions about workforce sizing, custom corporate embroidery, or volume enterprise fleet discounts? Our Austin outfitting desk responds within 24 hours."
          image="/img/hero-uniforms.jpg"
          currentLabel="Concierge"
        />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
