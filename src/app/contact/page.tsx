"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Reach Out"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle="Questions about vehicle fitment, an order, or parts availability? Our customer care team typically replies within 24 hours."
          image="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1600&q=80"
          currentLabel="Contact"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
