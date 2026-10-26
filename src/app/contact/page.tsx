"use client";

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
      <main className="grow">
        <PageHeader
          eyebrow="Reach Out"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle="Questions about a part, an order or billing? Our customer care team replies within 24 hours."
          image="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=1200&q=80"
          currentLabel="Contact"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
