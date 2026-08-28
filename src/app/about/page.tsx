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
          eyebrow="Foundry Heritage"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Precision-engineered plumbing fittings, heavy-duty shutoff valves, and hydronic heating supplies tested to extreme tolerances and priced fairly."
          image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80"
          currentLabel="About"
        />
        <AboutUs />
        <QualityPromise />
      </main>
      <Footer />
    </>
  );
}
