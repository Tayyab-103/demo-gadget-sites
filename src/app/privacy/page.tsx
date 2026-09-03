"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-[#FAF9F6]">
        {/* Dedicated Legal Header Banner */}
        <section className="bg-[#132B1C] text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-[#78C470] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#78C470]">Legal</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white font-sans mb-3">
              Privacy <span className="text-[#78C470]">Policy</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              How we collect, protect, and handle your data when shopping for heirloom garden tools at {siteConfig.brandName}.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-6">
              
              <div className="border-b border-black/5 pb-6">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E] block mb-2">
                  DATA PROTECTION &amp; PRIVACY
                </span>
                <p>
                  This Privacy Policy describes how your personal information is collected, used, and shared when you visit
                  or make a purchase from <strong className="text-[#11281A] font-bold">{siteConfig.websiteUrl}</strong> (the “Site”).
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] mb-3 uppercase tracking-wider font-sans">
                  Personal Information We Collect
                </h3>
                <p className="mb-3">
                  When you visit the Site, we automatically collect certain information about your device, including information
                  about your web browser, IP address, time zone, and some of the cookies installed on your device.
                  Additionally, as you browse the Site, we collect information about the individual tool pages or products that you view,
                  what websites or search terms referred you to the Site, and information about how you interact with the Site.
                </p>
                <p>
                  Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
                  from you, including your name, billing address, shipping address, payment information (including encrypted credit card numbers),
                  email address, and phone number. We refer to this information as “Order Information.”
                </p>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] mb-3 uppercase tracking-wider font-sans">
                  How Do We Use Your Personal Information?
                </h3>
                <p className="mb-4">
                  We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
                  processing your payment information, arranging for tracked shipping via {siteConfig.shippingCarrier}, and providing you with invoices and order confirmations).
                  Additionally, we use this Order Information to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-neutral-text/80">
                  <li>Communicate with you regarding your workshop tool order or warranty claim;</li>
                  <li>Screen our orders for potential risk or fraud; and</li>
                  <li>Provide you with seasonal planting tips, tool maintenance guides, or promotions when in line with your preferences.</li>
                </ul>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] mb-3 uppercase tracking-wider font-sans">
                  Sharing Your Personal Information
                </h3>
                <p className="mb-3">
                  We share your Personal Information with trusted third parties to help us fulfill and deliver your orders as described above.
                  For example, we use secure, PCI-DSS compliant payment gateways and carriers ({siteConfig.shippingCarrier}) to ship packages to your address.
                </p>
                <p>
                  Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
                  subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
                </p>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] mb-3 uppercase tracking-wider font-sans">
                  Data Retention
                </h3>
                <p>
                  When you place an order through the Site, we will maintain your Order Information for our records unless and until
                  you ask us to delete this information.
                </p>
              </div>

              <div className="border-t border-black/5 pt-6 bg-[#FAF9F6] p-6 rounded-2xl">
                <h3 className="text-sm sm:text-base font-extrabold text-[#11281A] mb-2 uppercase tracking-wider font-sans">
                  Contact Workshop Support
                </h3>
                <p className="text-xs text-neutral-text/80 mb-3">
                  For more information about our privacy practices, or if you have questions regarding your data:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-xs font-bold text-[#11281A]">
                  <div>
                    <span className="text-[#265C1E] uppercase text-[0.65rem] tracking-wider block">Email:</span>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[#265C1E] transition-colors">{siteConfig.email}</a>
                  </div>
                  <div>
                    <span className="text-[#265C1E] uppercase text-[0.65rem] tracking-wider block">Phone:</span>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-[#265C1E] transition-colors">{siteConfig.phone}</a>
                  </div>
                  <div>
                    <span className="text-[#265C1E] uppercase text-[0.65rem] tracking-wider block">Foundry:</span>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
