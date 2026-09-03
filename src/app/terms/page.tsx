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
      <main className="bg-[#0E0F11] text-white py-16 md:py-24 relative overflow-hidden border-t border-white/5 min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E5F2C9]">Terms &amp; Conditions</span>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Customer Terms of Service
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-white/60 text-xs sm:text-sm mt-3">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} &bull; {siteConfig.brandName} Culinary Workshop
            </p>
          </div>

          <div className="bg-[#16171A] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl leading-relaxed text-white/75 text-xs sm:text-sm space-y-8">
            
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">01</span>
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  Overview &amp; Agreement
                </h2>
              </div>
              <p className="mb-3">
                This website is operated by <strong className="text-white font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to <strong className="text-white font-semibold">{siteConfig.brandName}</strong>. By accessing our site and purchasing our culinary tools, you agree to comply with and be bound by the terms, conditions, and policies stated herein.
              </p>
            </div>

            {/* Products & Pricing */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">02</span>
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  Products Offered &amp; Straight-Sale Billing Terms
                </h2>
              </div>
              <p className="mb-4">
                We offer premium chef-grade culinary tools, accurate digital scales, and ergonomic prep accessories via transparent straight-sale transactions. There are no recurring subscriptions or hidden recurring charges.
              </p>

              <div className="bg-[#1A1C20] border border-white/10 rounded-xl p-5 sm:p-6 space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xs sm:text-sm font-bold text-white uppercase">
                        {product.name}
                      </h3>
                      <span className="bg-white/5 border border-white/10 text-[#E5F2C9] text-[0.65rem] font-bold uppercase px-2 py-0.5 rounded">
                        Straight Sale
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                      {product.bundles && product.bundles.map((bundle) => {
                        const totalCost = parseFloat(String(bundle.price));
                        return (
                          <li key={bundle.quantity}>
                            Ordering a <strong className="text-white">{bundle.quantity} {bundle.quantity > 1 ? "Units Workshop Bundle" : "Single Unit"}</strong> incurs a one-time charge of <strong className="text-[#E5F2C9]">${totalCost.toFixed(2)}</strong> (FREE Shipping) for {product.name}. Delivery arrives within {siteConfig.shippingPeriod} business days via {siteConfig.shippingCarrier}. Statement descriptor: <strong className="text-white">&ldquo;{siteConfig.descriptor}&rdquo;</strong>.
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">03</span>
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  Shipping &amp; Fulfillment
                </h2>
              </div>
              <p>
                All orders are packaged at our workshop and dispatched within 1 to 2 business days. We partner with <strong className="text-white">{siteConfig.shippingCarrier}</strong> to ensure prompt, insured delivery within {siteConfig.shippingPeriod} business days. Tracking details are automatically dispatched to your email address upon shipment.
              </p>
            </div>

            {/* Guarantees & Returns */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">04</span>
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  60-Day Culinary Guarantee &amp; 1-Year Warranty
                </h2>
              </div>
              <p className="mb-3">
                Every purchase is protected by our standard of excellence:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/70">
                <li><strong className="text-white">60-Day Satisfaction Trial:</strong> If any tool does not meet your culinary expectations, contact our concierge within 60 days of delivery for a hassle-free return and 100% refund.</li>
                <li><strong className="text-white">365-Day Atelier Warranty:</strong> Full replacement coverage against material defects, loose welds, blade chipping, or electronic inaccuracies.</li>
              </ul>
            </div>

            {/* Concierge Contact */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E5F2C9] uppercase tracking-widest">05</span>
                <h2 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-wider">
                  Customer Concierge &amp; Inquiries
                </h2>
              </div>
              <div className="bg-[#1A1C20] border border-white/10 rounded-xl p-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E5F2C9]">Contact our Concierge Team:</div>
                <div className="text-white text-xs">Email: <span className="font-semibold text-white">{siteConfig.email}</span></div>
                <div className="text-white text-xs">Phone: <span className="font-semibold text-white">{siteConfig.phone}</span></div>
                <div className="text-white/60 text-xs">Atelier Address: {siteConfig.address}</div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#0E0F11] bg-[#E5F2C9] hover:bg-white transition-all px-8 py-3.5 rounded-lg shadow-sm"
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
