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
          eyebrow="Studio Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Dedicated to equipping painters, craft creators, and workshops with archival cotton canvases and vibrant fine art mediums."
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1600&q=80"
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
