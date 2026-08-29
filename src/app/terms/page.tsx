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
      <main className="bg-[#F8F6F0] pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <span className="eyebrow mb-4">Legal &amp; Compliance</span>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0D1B2A] mb-8 border-b border-[#C87D3B]/20 pb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#C87D3B]/25 shadow-lg leading-relaxed text-[#18222F]/75 text-xs md:text-sm space-y-6 font-normal">
            <h3 className="text-base font-bold text-[#0D1B2A] mt-8 mb-4 uppercase tracking-wider">OVERVIEW</h3>
            <p>
              This website is operated by <strong className="text-[#0D1B2A] font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-[#0D1B2A] font-semibold">{siteConfig.brandName}</strong>. <strong className="text-[#0D1B2A] font-semibold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the traveler,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/ or purchasing luxury aluminum luggage, leather weekender duffles, and modular travel accessories from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using
              any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the
              terms and conditions of this agreement, then you may not access the website or use any services.
            </p>

            <h3 className="text-base font-bold text-[#0D1B2A] mt-8 mb-4 uppercase tracking-wider">PRODUCTS OFFERED &amp; BILLING TERMS</h3>
            <p>
              We offer luxury luggage, carry-on spinners, and modular travel accessories through one-time acquisitions (Straight Sale) under the following pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-[#F8F6F0] border border-[#C87D3B]/20 rounded-2xl p-6 md:p-8 my-6 shadow-inner">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-[#C87D3B]/15 last:border-0 last:mb-0 last:pb-0">
                  <h4 className="text-sm md:text-base font-bold text-[#0D1B2A] mb-3 uppercase tracking-tight">
                    {product.name}
                  </h4>
                  <ul className="list-disc pl-5 m-0 space-y-3">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                        ? `FREE Standard Priority ${siteConfig.shippingCarrier} Shipping`
                        : `$${product.ssShipping} Shipping`;

                      return (
                        <li key={bundle.quantity} className="text-xs md:text-sm leading-relaxed text-[#18222F]/75">
                          Upon ordering a <strong className="text-[#0D1B2A] font-bold">{bundle.quantity > 1 ? `${bundle.quantity}-Unit Expedition Package` : "Single Unit"}</strong>,
                          you will be charged a singular transaction fee of <strong className="text-[#0D1B2A] font-bold">${totalCost.toFixed(2)}</strong> (including {shippingText}) for {product.name}.
                          Your package will be delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days of payment.
                          The credit card charge will appear on your statement as <strong className="text-[#0D1B2A] font-bold">“{siteConfig.descriptor}”</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-base font-bold text-[#0D1B2A] mt-8 mb-4 uppercase tracking-wider">SECTION 1 - ONLINE STORE TERMS</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state
              or province of residence, or that you are the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,
              violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>

            <h3 className="text-base font-bold text-[#0D1B2A] mt-8 mb-4 uppercase tracking-wider">SECTION 2 - SHIPPING &amp; DELIVERY POLICY</h3>
            <p>
              All orders are processed, inspected, and shipped within 1-2 business days of payment confirmation. We ship our packages via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive a tracking number via email once your order has been dispatched from our Austin, TX facility.
            </p>

            <h3 className="text-base font-bold text-[#0D1B2A] mt-8 mb-4 uppercase tracking-wider">SECTION 3 - {siteConfig.trialPeriod || 14}-DAY WORLDWIDE FLIGHT TRIAL &amp; RETURN POLICY</h3>
            <p>
              We stand behind our luxury luggage with a {siteConfig.trialPeriod || 14}-day worldwide flight trial guarantee. If you are not satisfied with the engineering or performance of your purchase,
              please contact our traveler concierge desk at <strong className="text-[#0D1B2A] font-semibold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-[#0D1B2A] font-semibold">{siteConfig.email}</strong> to obtain a Return Merchandise Authorization (RMA) number.
            </p>
            <p>
              Returns must be shipped to our designated facility at: <strong className="text-[#0D1B2A] font-semibold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned item.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
