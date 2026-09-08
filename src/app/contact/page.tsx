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
          eyebrow="Patron Concierge"
          title={<>Connect With {siteConfig.brandName}</>}
          subtitle="Questions about custom nibs, corporate gifts, volume stationery suites, or dispatch logistics? Our Austin concierge desk responds within 24 hours."
          image="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1600&q=80"
          currentLabel="Contact Us"
        />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
