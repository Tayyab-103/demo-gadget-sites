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
      <main className="bg-[#F8F6F2] text-[#121316] py-16 md:py-24 relative overflow-hidden min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-[#121316]/50 font-medium">
            <Link href="/" className="hover:text-[#121316] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#121316]">Terms &amp; Conditions</span>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                Customer Terms of Service
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#121316] tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-[#121316]/60 text-xs sm:text-sm mt-3">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} &bull; {siteConfig.brandName}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm leading-relaxed text-[#121316]/80 text-xs sm:text-sm space-y-8">
            
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">01</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Overview &amp; Agreement
                </h2>
              </div>
              <p className="mb-3">
                This website is operated by <strong className="text-[#121316] font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to <strong className="text-[#121316] font-semibold">{siteConfig.brandName}</strong>. By accessing our site and purchasing our culinary tools, you agree to comply with and be bound by the terms, conditions, and policies stated herein.
              </p>
            </div>

            {/* Products & Pricing */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">02</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Products Offered &amp; Straight-Sale Billing Terms
                </h2>
              </div>
              <p className="mb-4">
                We offer premium chef-grade culinary tools, accurate digital scales, and ergonomic prep accessories via transparent straight-sale transactions. There are no recurring subscriptions or hidden recurring charges.
              </p>

              <div className="bg-[#F8F6F2] border border-stone-200 rounded-2xl p-5 sm:p-6 space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="border-b border-stone-200 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xs sm:text-sm font-bold text-[#121316] uppercase font-serif">
                        {product.name}
                      </h3>
                      <span className="bg-white border border-stone-200 text-[#121316] text-[0.65rem] font-bold uppercase px-2.5 py-0.5 rounded-full shadow-2xs">
                        Straight Sale
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-xs text-[#121316]/75">
                      {product.bundles && product.bundles.map((bundle) => {
                        const totalCost = parseFloat(String(bundle.price));
                        return (
                          <li key={bundle.quantity}>
                            Ordering a <strong className="text-[#121316]">{bundle.quantity} {bundle.quantity > 1 ? "Units Workshop Bundle" : "Single Unit"}</strong> incurs a one-time charge of <strong className="text-[#121316] font-bold">${totalCost.toFixed(2)}</strong> (FREE Shipping) for {product.name}. Delivery arrives within {siteConfig.shippingPeriod} business days via {siteConfig.shippingCarrier}. Statement descriptor: <strong className="text-[#121316]">&ldquo;{siteConfig.descriptor}&rdquo;</strong>.
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">03</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Shipping &amp; Fulfillment
                </h2>
              </div>
              <p>
                All orders are packaged at our workshop and dispatched within 1 to 2 business days. We partner with <strong className="text-[#121316]">{siteConfig.shippingCarrier}</strong> to ensure prompt, insured delivery within {siteConfig.shippingPeriod} business days. Tracking details are automatically dispatched to your email address upon shipment.
              </p>
            </div>

            {/* Guarantees & Returns */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">04</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  {siteConfig.trialPeriod}-Day Culinary Guarantee &amp; 1-Year Warranty
                </h2>
              </div>
              <p className="mb-3">
                Every purchase is protected by our standard of excellence:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#121316]/75">
                <li><strong className="text-[#121316]">{siteConfig.trialPeriod}-Day Satisfaction Trial:</strong> If any tool does not meet your culinary expectations, contact our concierge within {siteConfig.trialPeriod} days of delivery for a hassle-free return and 100% refund.</li>
                <li><strong className="text-[#121316]">365-Day Atelier Warranty:</strong> Full replacement coverage against material defects, loose welds, blade chipping, or electronic inaccuracies.</li>
              </ul>
            </div>

            {/* Concierge Contact */}
            <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-[#E06830] uppercase tracking-widest">05</span>
                <h2 className="text-sm sm:text-base font-bold text-[#121316] uppercase tracking-wider font-serif">
                  Customer Concierge &amp; Inquiries
                </h2>
              </div>
              <div className="bg-[#F8F6F2] border border-stone-200 rounded-2xl p-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#E06830]">Contact our Concierge Team:</div>
                <div className="text-[#121316] text-xs">Email: <span className="font-semibold text-[#121316]">{siteConfig.email}</span></div>
                <div className="text-[#121316] text-xs">Phone: <span className="font-semibold text-[#121316]">{siteConfig.phone}</span></div>
                <div className="text-[#121316]/60 text-xs">Atelier Address: {siteConfig.address}</div>
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
