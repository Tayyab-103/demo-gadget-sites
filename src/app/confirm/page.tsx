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
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C59B7E]/30 text-center max-w-[620px] mx-auto shadow-2xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border border-[#C59B7E]/40 text-[#18121E] flex items-center justify-center text-2xl mx-auto mb-6 font-bold bg-gradient-to-tr from-[#E6C2AC] via-[#C59B7E] to-[#B88564] shadow-lg shadow-[#C59B7E]/20">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#18121E] mb-3 tracking-tight">Couture Acquisition Confirmed</h2>
      <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-light">
        Thank you for acquiring from {siteConfig.brandName}. Your couture selection has been scheduled for multi-point atelier inspection and priority white-glove dispatch from our Austin, TX studio.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#FAF8F6] border border-[#C59B7E]/20 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-xs">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Atelier Order ID:</span>
          <strong className="text-[#18121E] font-mono font-bold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Order Date:</span>
          <span className="text-[#18121E] font-medium">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Carrier:</span>
          <span className="text-[#18121E] font-medium">{siteConfig.shippingCarrier} Priority Air Tracked</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 uppercase tracking-wider text-[0.68rem] font-bold">Estimated Dispatch:</span>
          <span className="text-[#C59B7E] font-serif font-bold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-slate-500 leading-relaxed mb-8 font-light">
        A dispatch confirmation email containing your {siteConfig.shippingCarrier} tracking code will be delivered to your inbox shortly.
        For private styling concierge inquiries, connect with our atelier team at <strong className="text-[#18121E] font-medium">{siteConfig.email}</strong> or <strong className="text-[#18121E] font-medium">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-bold text-center whitespace-nowrap bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 text-[#18121E] transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-lg shadow-[#C59B7E]/20 w-full sm:w-auto"
        >
          Explore More Creations
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-[#FAF8F6] border border-[#C59B7E]/30 text-[#18121E] hover:bg-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF8F6] pt-28 pb-16 md:pt-36 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-[#18121E]">Loading Order Confirmation...</h4>
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
