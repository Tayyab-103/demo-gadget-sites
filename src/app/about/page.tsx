"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
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
          eyebrow="Athlete Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Born in Austin, Texas. Engineered for relentless conditioning, endurance athletics, and unyielding material durability."
          image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=80"
          currentLabel="About"
        />
        <AboutUs />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
