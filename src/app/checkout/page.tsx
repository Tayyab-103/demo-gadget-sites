"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Checkout() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, [cart, router]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    shippingAddress1: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    shippingCountry: "US",
    phone: "",
    email: "",
    cc_no: "",
    cc_month: "",
    cc_year: "",
    CVV: "",
    notes: ""
  });

  const [shippingInsurance, setShippingInsurance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsuranceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInsurance(e.target.checked);
  };

  const cartTotal = parseFloat(getCartTotal());
  const insurancePrice = shippingInsurance ? 1.00 : 0.00;
  const grandTotal = (cartTotal + insurancePrice).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (formData.cc_no.replace(/\s/g, "").length < 13) {
      setErrorMsg("Please enter a valid credit card number.");
      setLoading(false);
      return;
    }

    if (formData.CVV.length < 3) {
      setErrorMsg("Please enter a valid CVV.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          products: JSON.stringify(cart),
          "shipping-insurance": shippingInsurance ? "yes" : "no"
        })
      });

      const data = await response.json();

      if (response.ok && data.order_id) {
        clearCart();
        router.push(`/confirm?order_id=${data.order_id}`);
      } else {
        setErrorMsg(data.error_message || "There was an error processing your transaction. Please verify card details and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("A network error occurred. Please try again or reach our support.");
    } finally {
      setLoading(false);
    }
  };

  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear + i));

  return (
    <>
      <Header />
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center backdrop-blur-md">
          <div className="w-12 h-12 border-4 border-black/10 border-t-secondary rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold text-primary">Processing Secure Order...</h4>
          <p className="text-xs text-neutral-text/55">Please do not refresh or navigate away.</p>
        </div>
      )}

      <main className="bg-neutral-bg py-8 sm:py-12 md:py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10">
          <div className="mb-6 sm:mb-10 text-center max-w-xl mx-auto">
            <span className="eyebrow justify-center mb-2 sm:mb-3">Expedition Express</span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              Fast Encrypted <span className="text-secondary">Checkout</span>
            </h1>
            <div className="mx-auto mt-3 mb-3 w-10 h-px bg-secondary" />
            <p className="text-xs sm:text-sm text-neutral-text/60">
              All transactions are secured with 256-bit bank-grade encryption.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-10 border border-black/6 shadow-sm">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl mb-6 text-xs sm:text-sm">
                  <strong>Notice:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-5 flex items-center gap-2">
                  <span>01</span>
                  <span className="w-4 h-px bg-secondary/40" />
                  <span>Shipping Address</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">First Name</label>
                    <input type="text" name="firstName" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Last Name</label>
                    <input type="text" name="lastName" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Delivery Address</label>
                  <input type="text" name="shippingAddress1" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" placeholder="Street address or apartment/suite" value={formData.shippingAddress1} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">City</label>
                    <input type="text" name="shippingCity" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.shippingCity} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">State</label>
                    <input type="text" name="shippingState" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" placeholder="e.g. TX" value={formData.shippingState} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Postal Code</label>
                    <input type="text" name="shippingZip" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.shippingZip} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Phone Number</label>
                    <input type="tel" name="phone" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Email For Order Tracking</label>
                    <input type="email" name="email" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                {/* Credit Card Details */}
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary mb-5 flex items-center gap-2 pt-4 border-t border-black/6">
                  <span>02</span>
                  <span className="w-4 h-px bg-secondary/40" />
                  <span>Card Payment Details</span>
                </h3>

                <div className="mb-4">
                  <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Card Number</label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white"
                    placeholder="•••• •••• •••• ••••"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Exp Month</label>
                    <select name="cc_month" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white cursor-pointer" value={formData.cc_month} onChange={handleChange} required>
                      <option value="">Month</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Exp Year</label>
                    <select name="cc_year" className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white cursor-pointer" value={formData.cc_year} onChange={handleChange} required>
                      <option value="">Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">CVV Code</label>
                    <input type="password" name="CVV" maxLength={4} className="w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-[3px] bg-secondary text-white hover:bg-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md mt-4"
                >
                  Confirm &amp; Place Order (${grandTotal})
                </button>
              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 sticky top-28 space-y-4">
              <div className="bg-white rounded-3xl p-4 sm:p-8 border border-black/6 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-black/6 pb-3 mb-5">
                  Order Summary
                </h3>

                <div className="divide-y divide-black/5">
                  {cart.map((item) => (
                    <div className="py-3.5 flex justify-between items-center gap-3" key={item.Id}>
                      <div className="min-w-0 flex-1">
                        <strong className="text-xs sm:text-sm font-bold text-primary truncate block">
                          {item.Name}
                        </strong>
                        <span className="text-[0.65rem] font-semibold text-secondary uppercase tracking-wider">
                          {item.Label} × {item.Qty}
                        </span>
                      </div>
                      <span className="font-black text-sm text-primary flex-shrink-0">
                        ${item.Total}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Shipping Insurance Checkbox */}
                <div
                  className="p-4 bg-neutral-bg border border-dashed border-secondary/30 rounded-2xl my-5 flex items-center gap-3.5 cursor-pointer hover:bg-secondary/5 transition-colors"
                  onClick={() => setShippingInsurance(prev => !prev)}
                >
                  <input
                    type="checkbox"
                    checked={shippingInsurance}
                    onChange={handleInsuranceChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-4 h-4 cursor-pointer accent-secondary"
                  />
                  <div>
                    <strong className="text-xs font-bold text-primary block">
                      Add Comprehensive Shipping Insurance
                    </strong>
                    <span className="text-[0.65rem] text-neutral-text/50 block">
                      Guarantees immediate zero-deductible replacement for transit damage or loss ($1.00)
                    </span>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
                  <div className="flex justify-between text-neutral-text/60">
                    <span>Subtotal</span>
                    <span className="font-bold text-primary">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-text/60">
                    <span>Express Shipping</span>
                    <span className="font-bold text-emerald-600">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between text-neutral-text/60">
                      <span>Shipping Insurance</span>
                      <span className="font-bold text-primary">$1.00</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center border-t border-black/8 pt-4 mt-2 font-black text-base sm:text-lg text-primary">
                    <span className="text-xs uppercase tracking-wider">Total</span>
                    <span className="text-secondary">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="p-4 rounded-2xl bg-white border border-black/5 text-center text-[0.68rem] text-neutral-text/50">
                🔒 256-Bit Encrypted Checkout • Statement Descriptor: <strong>{siteConfig.descriptor}</strong>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
