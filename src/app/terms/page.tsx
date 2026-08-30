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
      <main className="bg-[#FAF8F6] pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18121E]/5 border border-[#C59B7E]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C59B7E] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B7E] animate-pulse" />
            <span>LEGAL &amp; COMPLIANCE POLICIES</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#18121E] mb-8 border-b border-[#C59B7E]/20 pb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C59B7E]/25 shadow-xl leading-relaxed text-slate-600 text-xs md:text-sm space-y-6 font-light">
            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">OVERVIEW</h3>
            <p>
              This website is operated by <strong className="text-[#18121E] font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-[#18121E] font-semibold">{siteConfig.brandName}</strong>. <strong className="text-[#18121E] font-semibold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the client,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/ or purchasing haute couture garments, silk dresses, cashmere outerwear, or evening gowns from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using
              any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the
              terms and conditions of this agreement, then you may not access the website or use any services.
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">PRODUCTS OFFERED &amp; BILLING TERMS</h3>
            <p>
              We offer bespoke couture fashion collections through one-time acquisitions (Straight Sale) under the following pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-[#FAF8F6] border border-[#C59B7E]/25 rounded-2xl p-6 md:p-8 my-6 shadow-inner">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-[#C59B7E]/20 last:border-0 last:mb-0 last:pb-0">
                  <h4 className="text-sm md:text-base font-serif font-bold text-[#18121E] mb-3">
                    {product.name}
                  </h4>
                  <ul className="list-disc pl-5 m-0 space-y-3">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                        ? `FREE Standard Priority ${siteConfig.shippingCarrier} Shipping`
                        : `$${product.ssShipping} Shipping`;

                      return (
                        <li key={bundle.quantity} className="text-xs md:text-sm leading-relaxed text-slate-600 font-light">
                          Upon ordering a <strong className="text-[#18121E] font-semibold">{bundle.quantity > 1 ? `${bundle.quantity}-Piece Atelier Wardrobe Ensemble` : "Single Atelier Piece"}</strong>,
                          you will be charged a singular transaction fee of <strong className="text-[#18121E] font-semibold">${totalCost.toFixed(2)}</strong> (including {shippingText}) for {product.name}.
                          Your parcel will be dispatched via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days of payment.
                          The transaction charge will appear on your card statement as <strong className="text-[#18121E] font-semibold">“{siteConfig.descriptor}”</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">SECTION 1 - ONLINE STORE TERMS</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state
              or province of residence, or that you are the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,
              violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">SECTION 2 - SHIPPING &amp; DELIVERY POLICY</h3>
            <p>
              All orders are processed, inspected, and shipped within 1-2 business days of payment confirmation. We ship our packages via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive a tracking number via email once your parcel has been dispatched from our Austin, TX studio.
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">SECTION 3 - {siteConfig.trialPeriod || 14}-DAY FIT &amp; DRAPE GUARANTEE</h3>
            <p>
              We stand behind our couture pieces with a {siteConfig.trialPeriod || 14}-day fit and drape guarantee. If you are not completely satisfied with the fit or silhouette of your purchase,
              please contact our styling concierge desk at <strong className="text-[#18121E] font-semibold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-[#18121E] font-semibold">{siteConfig.email}</strong> to obtain a Return Merchandise Authorization (RMA) number.
            </p>
            <p>
              Returns must be shipped to our designated facility at: <strong className="text-[#18121E] font-semibold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned item in its original condition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
