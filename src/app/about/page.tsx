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
          eyebrow="Commercial Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Headquartered in Dallas, Texas. Dedicated to outfitting commercial crews, field technicians, and industrial teams with unyielding uniform durability."
          image="/img/aboutus_crew.jpg"
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
