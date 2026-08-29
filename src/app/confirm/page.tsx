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
  const orderId = searchParams.get("order_id") || "N/A";
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C5A059]/30 text-center max-w-[620px] mx-auto shadow-2xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border-2 border-[#C5A059] text-[#121820] flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-[#C5A059]/15 shadow-md">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-serif font-bold uppercase text-[#121820] mb-3 tracking-tight">Patron Order Confirmed!</h2>
      <p className="text-[#1A202C]/75 text-sm md:text-base mb-8 leading-relaxed font-normal">
        Thank you for acquiring with {siteConfig.brandName}. Your fine stationery order has been submitted to our Austin, TX atelier for archival packaging and wax sealing.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#FAF8F5] border border-[#C5A059]/20 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#1A202C]/50 uppercase tracking-wider text-[0.68rem] font-serif font-bold">Order ID:</span>
          <strong className="text-[#121820] font-serif font-bold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#1A202C]/50 uppercase tracking-wider text-[0.68rem] font-serif font-bold">Order Date:</span>
          <span className="text-[#121820] font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#1A202C]/50 uppercase tracking-wider text-[0.68rem] font-serif font-bold">Carrier:</span>
          <span className="text-[#121820] font-semibold">{siteConfig.shippingCarrier} Ground Express</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#1A202C]/50 uppercase tracking-wider text-[0.68rem] font-serif font-bold">Estimated Dispatch:</span>
          <span className="text-[#C5A059] font-serif font-bold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-[#1A202C]/65 leading-relaxed mb-8 font-normal">
        A dispatch confirmation email containing your real-time tracking number will be sent to your registered inbox shortly.
        For patron concierge assistance, reach our team at <strong className="text-[#121820] font-bold">{siteConfig.email}</strong> or call <strong className="text-[#121820] font-bold">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-[#C5A059] text-[#121820] hover:bg-[#D4AF37] transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg w-full sm:w-auto hover:scale-105"
        >
          Explore More Collections
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-serif text-center whitespace-nowrap bg-[#FAF8F5] border border-[#C5A059]/40 text-[#121820] hover:bg-[#C5A059]/10 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
        >
          Back to Atelier
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF8F5] pt-28 pb-16 md:pt-32 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-[#121820]">Loading Order Confirmation...</h4>
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
