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
        <div className="bg-[#4C0519] text-white py-14 md:py-20 text-center border-b border-[#D2446D]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D2446D] font-extrabold text-xs tracking-widest uppercase mb-4 border border-[#D2446D]/30">
              <span>📖 Reader Concierge</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-3">
              Chapterhouse <span className="text-[#D2446D]">Reader Support</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-medium">
              Reach out to our literary concierge team for book recommendations, custom library sets, or order tracking support.
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
