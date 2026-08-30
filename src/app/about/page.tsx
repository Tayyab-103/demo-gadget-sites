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
          eyebrow="The Atelier Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Parisian-inspired haute couture and noble fiber artistry. Dedicated to pure mulberry silk, virgin wool-cashmere tailoring, and bespoke Chantilly lace gowns."
          image="/img/fashion-atelier-craft.jpg"
          currentLabel="The Atelier"
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
