"use client";

import React from "react";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="relative overflow-hidden border-b border-line py-16 md:py-24 text-center">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
          <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-neutral-text mb-4">
              Built by players, <span className="text-gradient">for players.</span>
            </h1>
            <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
              {siteConfig.brandName} is an Austin-based music store bringing quality picks, brass and cables to musicians everywhere.
            </p>
          </div>
        </div>

        <AboutUs />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
