"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

function ConfirmContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || searchParams.get("order_id") || "HKT-849201";
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 border border-line text-center max-w-[580px] mx-auto shadow-sm text-ink">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-primary/10 shadow-sm">
        ✓
      </div>

      <h1 className="text-2xl md:text-3xl font-black uppercase text-ink mb-3 tracking-tight">Order Confirmed</h1>
      <p className="text-ink/80 text-xs md:text-sm mb-8 leading-relaxed">
        Thank you for equipping your kitchen with {siteConfig.brandName}. We&rsquo;re preparing your order for shipment now.
      </p>

      {/* Order Info Table */}
      <div className="bg-neutral-bg border border-line rounded-xl p-5 text-left mb-8 text-xs leading-relaxed">
        <div className="flex justify-between items-center mb-3">
          <span className="text-muted uppercase tracking-wider text-[0.65rem] font-bold">Order Reference:</span>
          <strong className="text-secondary font-bold tracking-wider">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-muted uppercase tracking-wider text-[0.65rem] font-bold">Date:</span>
          <span className="text-ink font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-muted uppercase tracking-wider text-[0.65rem] font-bold">Carrier:</span>
          <span className="text-ink font-medium">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-ink font-medium">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.7rem] text-muted leading-relaxed mb-8">
        A dispatch notification with your tracking link will be sent to your email. For assistance, reach out to <strong className="text-ink/80">{siteConfig.email}</strong> or call <strong className="text-ink/80">{siteConfig.phone}</strong>.
      </p>

      <div>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-3.5 px-8 rounded-xl text-xs uppercase tracking-widest shadow-md"
        >
          Back to home &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-neutral-bg py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden border-t border-line">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12 text-ink">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Loading Order Details...</h4>
            </div>
          }>
            <ConfirmContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
