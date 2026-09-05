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
          eyebrow="The Craft &amp; Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Crafted in Austin, Texas. Dedicated to preserving master bookbinding, bleedproof paper milling, and heirloom writing instruments."
          image="/img/heritage1.jpg"
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
