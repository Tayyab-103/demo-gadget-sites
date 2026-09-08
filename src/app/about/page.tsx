"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
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
          eyebrow="The Engineering &amp; Standard"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Engineered in Austin, Texas. Dedicated to precision aerospace alloy luggage, Italian vegetable-tanned leather, and seamless global transit."
          image="/img/travel-atelier-craft.jpg"
          currentLabel="About Us"
        />
        <AboutUs />
        <HowItWorks />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
