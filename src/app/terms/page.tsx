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
      <main className="bg-[#E5E6EB] py-10 sm:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#111]">Terms &amp; Conditions</span>
          </nav>

          {/* Hero Header Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4F4F6] border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-[#111]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                Commercial Governance
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black uppercase text-[#111] tracking-tight leading-[1.08] italic">
                Terms &amp; Conditions
              </h1>

              <p className="text-sm sm:text-base text-neutral-text/65 leading-relaxed pt-2">
                Commercial terms of service, fulfillment policies, and warranty specifications for {siteConfig.brandName}.
              </p>
            </div>
          </div>

          {/* Main Terms Body */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.05)] leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-8">
            
            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Overview &amp; Acceptance
              </h3>
              <p className="leading-relaxed">
                This website is operated by <strong className="text-[#111] font-bold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”, “us” and “our” refer to <strong className="text-[#111] font-bold">{siteConfig.brandName}</strong>. By accessing this portal or purchasing our precision electrical testing instruments, power adapters, and magnetic hardware, you agree to be bound by the following terms and conditions.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Products Offered &amp; Commercial Pricing
              </h3>
              <p className="leading-relaxed mb-4">
                We supply industrial-grade electrical parts and diagnostic equipment through one-time purchases under the following tier structures:
              </p>

              {/* Product Pricing Table / Cards */}
              <div className="bg-[#F8F9FB] border border-black/[0.05] rounded-2xl p-6 sm:p-8 space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="pb-6 border-b border-black/[0.06] last:border-0 last:pb-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-sm sm:text-base font-bold text-[#111]">
                        {product.name}
                      </h4>
                      <span className="text-[0.65rem] font-mono font-bold uppercase text-[#5B6BF0] bg-white px-2.5 py-1 rounded-full border border-black/5">
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
                            Order of <strong className="text-[#111] font-semibold">{bundle.quantity} {bundle.quantity > 1 ? "Units Multi-Pack" : "Unit"}</strong>: single transaction of <strong className="text-[#111] font-bold">${totalCost.toFixed(2)}</strong> ({shippingText}). Delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days. Descriptor on billing statement: <strong className="text-[#111] font-mono">“{siteConfig.descriptor}”</strong>.
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Shipping &amp; Logistics Policy
              </h3>
              <p className="leading-relaxed">
                All electrical equipment orders are verified, packaged, and dispatched from our logistics center within 1-2 business days. We partner with <strong className="text-[#111] font-semibold">{siteConfig.shippingCarrier}</strong> nationwide with end-to-end tracking. Transit times typically range between <strong className="text-[#111] font-semibold">{siteConfig.shippingPeriod} business days</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Warranty &amp; Return Policy
              </h3>
              <p className="leading-relaxed mb-3">
                All diagnostic equipment and hardware include a <strong className="text-[#111] font-semibold">{siteConfig.trialPeriod}-day satisfaction guarantee</strong> and a 1-year commercial defect warranty.
              </p>
              <p className="leading-relaxed">
                To initiate a return or calibration exchange, contact our engineering desk at <strong className="text-[#111] font-semibold">{siteConfig.phone}</strong> or <strong className="text-[#111] font-semibold">{siteConfig.email}</strong>. Returns must be shipped to our designated facility at: <strong className="text-[#111] font-semibold">{siteConfig.address}</strong>.
              </p>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
