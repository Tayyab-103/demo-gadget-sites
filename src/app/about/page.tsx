"use client";

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
      <main className="grow">
        <PageHeader
          eyebrow="Our Story"
          title={<>About {siteConfig.brandName}</>}
          subtitle="Electrical parts and equipment, inspected before they ship and priced fairly — this is who we are and how we work."
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80"
          currentLabel="About"
        />
        <AboutUs />
        <QualityPromise />
      </main>
      <Footer />
    </>
  );
}
