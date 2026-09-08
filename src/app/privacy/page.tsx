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
      <main className="bg-[#F8F6F2] text-[#121316] py-16 md:py-24 relative overflow-hidden min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#121316]/50 font-medium">
            <Link href="/" className="hover:text-[#121316] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#121316]">Privacy Policy</span>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                Privacy &amp; Security Protocol
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#121316] tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-[#121316]/60 text-xs sm:text-sm mt-3">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} &bull; {siteConfig.brandName}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm leading-relaxed text-[#121316]/80 text-xs sm:text-sm space-y-8">
            
            <div>
              <p>
                At <strong className="text-[#121316] font-bold">{siteConfig.brandName}</strong> (accessible via <strong className="text-[#121316]">{siteConfig.websiteUrl}</strong>), we value the trust you place in our brand and are deeply committed to protecting your privacy and personal data. This Privacy Policy outlines the categories of personal information we collect, how it is handled, and the strict safeguards we maintain.
              </p>
            </div>

            {/* Section 1 */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">01</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Information We Collect
                </h2>
              </div>
              <p className="mb-3">
                When you browse our workshop site or make a purchase, we collect information necessary to fulfill your order and provide support:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#121316]/75">
                <li><strong className="text-[#121316]">Order &amp; Delivery Details:</strong> Full name, shipping address, billing address, phone number, and email address.</li>
                <li><strong className="text-[#121316]">Payment Credentials:</strong> All credit card and payment processing data is encrypted and handled directly by certified PCI-DSS Level 1 payment gateways. We never store raw payment card numbers on our servers.</li>
                <li><strong className="text-[#121316]">Device &amp; Technical Information:</strong> IP address, browser type, and operating system collected automatically to ensure platform stability and prevent fraudulent transactions.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">02</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  How We Use Your Information
                </h2>
              </div>
              <p className="mb-3">
                We use the information gathered solely for legitimate culinary business operations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#121316]/75">
                <li>Processing, packing, and dispatching your tool orders with <strong className="text-[#121316]">{siteConfig.shippingCarrier}</strong>.</li>
                <li>Transmitting order receipts, tracking numbers, and delivery notifications.</li>
                <li>Providing concierge customer service, honoring our {siteConfig.trialPeriod}-day satisfaction trial, and handling warranty inquiries.</li>
                <li>Screening transactions for fraud and potential unauthorized activities.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">03</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  No-Sale Pledge &amp; Data Sharing
                </h2>
              </div>
              <p>
                We do not sell, rent, monetize, or trade your personal information to third parties for advertising or marketing purposes. Information is only disclosed to vetted service partners strictly needed to deliver your tools (such as fulfillment carriers and secure payment gateways) or when required by legal mandate.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">04</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Security &amp; Data Protection
                </h2>
              </div>
              <p>
                All data transmitted through our website is secured using industry-standard 256-bit SSL/TLS encryption. We enforce physical, electronic, and procedural safeguards to protect your personal information against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">05</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Your Rights &amp; Concierge Support
                </h2>
              </div>
              <p className="mb-4">
                You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion of your account records in accordance with applicable consumer privacy laws.
              </p>
              
              <div className="bg-[#F8F6F2] border border-stone-200 rounded-2xl p-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E06830]">Contact our Privacy Concierge:</div>
                <div className="text-[#121316] text-xs">Email: <span className="font-semibold text-[#121316]">{siteConfig.email}</span></div>
                <div className="text-[#121316] text-xs">Phone: <span className="font-semibold text-[#121316]">{siteConfig.phone}</span></div>
                <div className="text-[#121316]/60 text-xs">Address: {siteConfig.address}</div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-white bg-[#121316] hover:bg-[#E06830] hover:text-white transition-all px-8 py-4 rounded-full shadow-sm"
            >
              &larr; Return to Tool Workshop
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
