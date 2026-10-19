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
      <main className="bg-neutral-bg text-ink py-16 md:py-24 relative overflow-hidden border-t border-line min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary">Privacy Policy</span>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                Privacy &amp; Security Protocol
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-ink tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-muted text-xs sm:text-sm mt-3">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} &bull; {siteConfig.brandName}
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-line shadow-sm leading-relaxed text-ink/80 text-xs sm:text-sm space-y-8">
            
            <div>
              <p>
                At <strong className="text-ink font-bold">{siteConfig.brandName}</strong> (accessible via <strong className="text-ink">{siteConfig.websiteUrl}</strong>), we value the trust you place in our brand and are deeply committed to protecting your privacy and personal data. This Privacy Policy outlines the categories of personal information we collect, how it is handled, and the strict safeguards we maintain.
              </p>
            </div>

            {/* Section 1 */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">01</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Information We Collect
                </h2>
              </div>
              <p className="mb-3">
                When you browse our site or make a purchase, we collect information necessary to fulfill your order and provide support:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink/80">
                <li><strong className="text-ink">Order &amp; Delivery Details:</strong> Full name, shipping address, billing address, phone number, and email address.</li>
                <li><strong className="text-ink">Payment Credentials:</strong> All credit card and payment processing data is encrypted and handled directly by certified PCI-DSS Level 1 payment gateways. We never store raw payment card numbers on our servers.</li>
                <li><strong className="text-ink">Device &amp; Technical Information:</strong> IP address, browser type, and operating system collected automatically to ensure platform stability and prevent fraudulent transactions.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">02</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  How We Use Your Information
                </h2>
              </div>
              <p className="mb-3">
                We use the information gathered solely for legitimate culinary business operations:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink/80">
                <li>Processing, packing, and dispatching your tool orders with <strong className="text-ink">{siteConfig.shippingCarrier}</strong>.</li>
                <li>Transmitting order receipts, tracking numbers, and delivery notifications.</li>
                <li>Providing customer support and handling returns within our {siteConfig.trialPeriod}-day return window.</li>
                <li>Screening transactions for fraud and potential unauthorized activities.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">03</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  No-Sale Pledge &amp; Data Sharing
                </h2>
              </div>
              <p>
                We do not sell, rent, monetize, or trade your personal information to third parties for advertising or marketing purposes. Information is only disclosed to vetted service partners strictly needed to deliver your tools (such as fulfillment carriers and secure payment gateways) or when required by legal mandate.
              </p>
            </div>

            {/* Section 4 */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">04</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Security &amp; Data Protection
                </h2>
              </div>
              <p>
                All data transmitted through our website is secured using industry-standard 256-bit SSL/TLS encryption. We enforce physical, electronic, and procedural safeguards to protect your personal information against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            {/* Section 5 */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">05</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Your Rights &amp; Customer Support
                </h2>
              </div>
              <p className="mb-4">
                You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion of your account records in accordance with applicable consumer privacy laws.
              </p>
              
              <div className="bg-neutral-bg border border-line rounded-xl p-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary">Contact us about privacy:</div>
                <div className="text-ink text-xs">Email: <span className="font-semibold text-ink">{siteConfig.email}</span></div>
                <div className="text-ink text-xs">Phone: <span className="font-semibold text-ink">{siteConfig.phone}</span></div>
                <div className="text-muted text-xs">Address: {siteConfig.address}</div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-primary-text bg-primary hover:bg-primary-dark transition-all px-8 py-3.5 rounded-lg shadow-sm"
            >
              &larr; Back to home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
