"use client";

import React from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden border-b border-line py-16 md:py-24 text-center">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-neutral-text mb-4">
              Talk to the <span className="text-gradient">{siteConfig.brandName} team</span>
            </h1>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
              Questions about a product, an order or a return? Reach out by phone, email or the form below — we usually reply within 24 hours.
            </p>
          </div>
        </div>

        <Contact showHeader={false} />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
