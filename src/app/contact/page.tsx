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
          eyebrow="Reach Our Studio Team"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle="Questions about canvas dimensions, paint pigments, bulk studio packs, or order tracking? Our creative support team typically responds within 24 hours."
          image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80"
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
