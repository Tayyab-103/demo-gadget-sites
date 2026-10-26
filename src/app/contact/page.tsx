"use client";

import React from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import NewsletterPopup from "@/components/NewsletterPopup";
import { siteConfig } from "@/lib/brandIcon";
import Faq from "@/components/Faq";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHeader
          eyebrow="Get in touch"
          title={<>Contact {siteConfig.brandName}</>}
          subtitle={`Questions about sizing, an order or a return? Email ${siteConfig.email} or call ${siteConfig.phone} and our team will help.`}
          image="/img/testimonialsec2.jpg"
          currentLabel="Contact"
        />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
      <NewsletterPopup />
    </>
  );
}
