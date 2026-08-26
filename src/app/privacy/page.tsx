"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-[#0E0F11] text-white py-16 md:py-24 relative overflow-hidden border-t border-white/5">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Privacy &amp; Security
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="bg-[#16171A] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl leading-relaxed text-white/70 text-xs sm:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-white font-semibold">{siteConfig.websiteUrl}</strong>.
            </p>

            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider pt-4 border-t border-white/10">
              INFORMATION WE COLLECT
            </h2>
            <p>
              When you purchase culinary tools through our store, we collect details necessary to process payment and dispatch your package: name, shipping address, contact phone, and email address. Payment credentials are encrypted directly through PCI-DSS compliant payment gateways.
            </p>

            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider pt-4 border-t border-white/10">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p>
              We strictly utilize order information to fulfill purchases, generate tracking numbers with {siteConfig.shippingCarrier}, and provide customer support. We do not sell or rent customer data.
            </p>

            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider pt-4 border-t border-white/10">
              CONTACT OUR CONCIERGE
            </h2>
            <p>
              If you have any questions regarding privacy practices, please contact us at <strong className="text-white">{siteConfig.email}</strong> or call <strong className="text-white">{siteConfig.phone}</strong>.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
