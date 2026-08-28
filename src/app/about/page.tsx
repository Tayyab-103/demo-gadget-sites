"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutUs from "@/components/AboutUs";
import QualityPromise from "@/components/QualityPromise";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Our Story"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Certified, code-compliant electrical parts and equipment, quality-tested and priced fairly — this is who we are and why we do it."
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80"
          currentLabel="About"
        />
        <AboutUs />
        <QualityPromise />
      </main>
      <Footer />
    </>
  );
}
