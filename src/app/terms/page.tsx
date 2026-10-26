"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import productsData from "../../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-surface py-10 sm:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink">Terms &amp; Conditions</span>
          </nav>

          {/* Hero Header Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_20px_50px_-30px_rgba(29,78,216,0.35)] border border-line">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Store Policies
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black uppercase text-ink tracking-tight leading-[1.08]">
                Terms &amp; Conditions
              </h1>

              <p className="text-sm sm:text-base text-neutral-text/65 leading-relaxed pt-2">
                Terms of service, shipping and return policies for {siteConfig.brandName}.
              </p>
            </div>
          </div>

          {/* Main Terms Body */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-line shadow-[0_20px_50px_-30px_rgba(29,78,216,0.35)] leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-8">
            
            <div>
              <h3 className="text-sm sm:text-base font-black text-ink uppercase tracking-wider mb-3">
                Overview &amp; Acceptance
              </h3>
              <p className="leading-relaxed">
                This website is operated by <strong className="text-ink font-bold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”, “us” and “our” refer to <strong className="text-ink font-bold">{siteConfig.brandName}</strong>. By accessing this website or purchasing our hand tools, testers, power cables and hardware, you agree to be bound by the following terms and conditions.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-ink uppercase tracking-wider mb-3">
                Products Offered &amp; Pricing
              </h3>
              <p className="leading-relaxed mb-4">
                We sell tools and hardware as one-time purchases. There are no subscriptions or recurring charges. Current pricing:
              </p>

              {/* Product Pricing Table / Cards */}
              <div className="bg-surface border border-black/[0.05] rounded-2xl p-6 sm:p-8 space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="pb-6 border-b border-line last:border-0 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-sm sm:text-base font-bold text-ink">
                        {product.name}
                      </h4>
                      <span className="text-[0.65rem] font-mono font-bold uppercase text-primary bg-white px-2.5 py-1 rounded-full border border-black/5">
                        {product.category}
                      </span>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-text/70">
                      {product.bundles && product.bundles.map((bundle) => {
                        const totalCost = parseFloat(String(bundle.price));
                        const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                          ? "FREE Tracked Shipping"
                          : `$${product.ssShipping} Shipping`;

                        return (
                          <li key={bundle.quantity} className="leading-relaxed">
                            Order of <strong className="text-ink font-semibold">{bundle.quantity} {bundle.quantity > 1 ? "Units Multi-Pack" : "Unit"}</strong>: single transaction of <strong className="text-ink font-bold">${totalCost.toFixed(2)}</strong> ({shippingText}). Delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days. Descriptor on billing statement: <strong className="text-ink font-mono">“{siteConfig.descriptor}”</strong>.
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-ink uppercase tracking-wider mb-3">
                Shipping Policy
              </h3>
              <p className="leading-relaxed">
                All orders are verified, packed and shipped within 1-2 business days. We partner with <strong className="text-ink font-semibold">{siteConfig.shippingCarrier}</strong> nationwide with end-to-end tracking. Transit times typically range between <strong className="text-ink font-semibold">{siteConfig.shippingPeriod} business days</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-ink uppercase tracking-wider mb-3">
                Returns &amp; Satisfaction Guarantee
              </h3>
              <p className="leading-relaxed mb-3">
                Every product we sell is covered by a <strong className="text-ink font-semibold">{siteConfig.trialPeriod}-day satisfaction guarantee</strong>, starting on the day your order is delivered.
              </p>
              <p className="leading-relaxed">
                To start a return, contact our support team at <strong className="text-ink font-semibold">{siteConfig.phone}</strong> or <strong className="text-ink font-semibold">{siteConfig.email}</strong>. Returns must be shipped to: <strong className="text-ink font-semibold">{siteConfig.address}</strong>.
              </p>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
