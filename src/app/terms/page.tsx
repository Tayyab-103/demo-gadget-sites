"use client";

import React from "react";
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
      <main className="bg-[#0E0F11] text-white py-16 md:py-24 relative overflow-hidden border-t border-white/5">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Legal Terms
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              Terms &amp; Conditions
            </h1>
          </div>

          <div className="bg-[#16171A] rounded-2xl p-6 sm:p-10 border border-white/10 shadow-2xl leading-relaxed text-white/70 text-xs sm:text-sm space-y-6">
            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider">OVERVIEW</h2>
            <p>
              This website is operated by <strong className="text-white font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms &ldquo;we&rdquo;,
              &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to <strong className="text-white font-semibold">{siteConfig.brandName}</strong>.
            </p>
            <p>
              By visiting our site and/or purchasing tools from us, you engage in our Service and agree to be
              bound by the following terms and conditions.
            </p>

            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider pt-4 border-t border-white/10">
              PRODUCTS OFFERED &amp; BILLING TERMS
            </h2>
            <p>
              We offer culinary utensils, digital scales, and forged shears via straight sale transactions under the following terms:
            </p>

            <div className="bg-[#1A1C20] border border-white/10 rounded-xl p-5 sm:p-6 space-y-6">
              {products.map((product) => (
                <div key={product.id} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-xs sm:text-sm font-bold text-white mb-2 uppercase">
                    {product.name}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs text-white/70">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      return (
                        <li key={bundle.quantity}>
                          Ordering a <strong className="text-white">{bundle.quantity} {bundle.quantity > 1 ? "Units Workshop Bundle" : "Single Unit"}</strong> incurs a single charge of <strong className="text-[#E5F2C9]">${totalCost.toFixed(2)}</strong> (FREE Shipping) for {product.name}. Delivery arrives within {siteConfig.shippingPeriod} business days via {siteConfig.shippingCarrier}. Statement descriptor: <strong className="text-white">&ldquo;{siteConfig.descriptor}&rdquo;</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-sm font-extrabold text-white uppercase tracking-wider pt-4 border-t border-white/10">
              SHIPPING &amp; GUARANTEE
            </h2>
            <p>
              All orders dispatch within 1-2 business days with {siteConfig.shippingCarrier} tracking. We provide a 60-day culinary satisfaction trial and a 1-year replacement warranty on every utensil. Contact our concierge at <strong className="text-white">{siteConfig.email}</strong> or <strong className="text-white">{siteConfig.phone}</strong>.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
