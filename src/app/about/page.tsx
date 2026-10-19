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
          eyebrow="Our Family Story"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Based in Winston-Salem, North Carolina. Dedicated to comfortable, affordable everyday clothing for babies, kids, teens, and adults."
          image="/img/about.jpg"
          currentLabel="About"
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
