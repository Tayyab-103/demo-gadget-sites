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
          cart,
          shippingInsurance,
          grandTotal
        })
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        setErrorMsg(data.error || "Transaction declined. Please check payment details.");
        setLoading(false);
      } else {
        clearCart();
        router.push(`/confirm?orderId=${data.orderId || "HKT-" + Math.floor(100000 + Math.random() * 900000)}`);
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg("A network error occurred while connecting to the payment gateway.");
      setLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => currentYear + i);
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));

  return (
    <>
      <Header />
      <main className="bg-neutral-bg text-ink py-12 md:py-20 relative overflow-hidden border-t border-line">
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                256-Bit SSL Encrypted
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase text-ink tracking-tight">
              Secure <span className="text-ink/80">Checkout</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface rounded-2xl p-6 sm:p-8 border border-line shadow-sm">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-xs md:text-sm">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* 1. Shipping Information */}
                <div>
                  <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink border-b border-line pb-3 mb-5">
                    1. Shipping Destination
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">First Name</label>
                      <input type="text" name="firstName" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Last Name</label>
                      <input type="text" name="lastName" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Street Address</label>
                    <input type="text" name="shippingAddress1" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.shippingAddress1} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">City</label>
                      <input type="text" name="shippingCity" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.shippingCity} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">State</label>
                      <input type="text" name="shippingState" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" placeholder="e.g. TX" value={formData.shippingState} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">ZIP Code</label>
                      <input type="text" name="shippingZip" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.shippingZip} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Phone Number</label>
                      <input type="tel" name="phone" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Email Address</label>
                      <input type="email" name="email" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                {/* 2. Payment Details */}
                <div className="pt-4">
                  <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink border-b border-line pb-3 mb-5">
                    2. Payment &amp; Security
                  </h2>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Credit Card Number</label>
                    <input
                      type="text"
                      name="cc_no"
                      maxLength={19}
                      className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface"
                      placeholder="•••• •••• •••• ••••"
                      value={formData.cc_no}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                        setFormData(prev => ({ ...prev, cc_no: val }));
                      }}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Month</label>
                      <select name="cc_month" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.cc_month} onChange={handleChange} required>
                        <option value="">Month</option>
                        {months.map((m) => (
                          <option key={m} value={m} className="bg-neutral-bg">{m}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">Year</label>
                      <select name="cc_year" className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" value={formData.cc_year} onChange={handleChange} required>
                        <option value="">Year</option>
                        {years.map((y) => (
                          <option key={y} value={y} className="bg-neutral-bg">{y}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-muted">CVV / CVC</label>
                      <input type="text" name="CVV" maxLength={4} className="w-full px-4 py-3 text-xs sm:text-sm border border-line rounded-xl focus:outline-none focus:border-secondary transition-all text-ink bg-surface" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Shipping Insurance Opt-in */}
                  <div className="mt-4 p-4 bg-neutral-bg rounded-xl border border-line flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="insurance"
                      checked={shippingInsurance}
                      onChange={handleInsuranceChange}
                      className="mt-1 w-4 h-4 rounded text-secondary focus:ring-secondary cursor-pointer"
                    />
                    <label htmlFor="insurance" className="text-xs text-ink/80 cursor-pointer">
                      <strong className="text-ink block font-bold">Add Priority Transit Insurance (+$1.00)</strong>
                      Covers lost, stolen, or damaged kitchen parcels with instant priority replacement.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-primary-dark transition-all duration-300 py-4 px-8 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-lg mt-2 disabled:opacity-50"
                >
                  {loading ? "Authorizing Security Protocol..." : `Complete Order — $${grandTotal}`}
                </button>

                <p className="text-center text-[0.65rem] text-muted">
                  By clicking complete, your statement will reflect <strong className="text-ink/80">{siteConfig.descriptor}</strong>.
                </p>

              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 bg-surface rounded-2xl p-6 sm:p-8 border border-line shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-ink border-b border-line pb-3 mb-5">
                Order Summary
              </h2>

              <div className="flex flex-col gap-4 mb-6">
                {cart.map((item) => (
                  <div key={item.Id} className="flex items-center justify-between gap-4 pb-4 border-b border-line">
                    <div className="flex items-center gap-3">
                      <img src={item.Image} alt={item.Name} className="w-12 h-12 object-contain rounded-lg bg-surface p-1 border border-line" />
                      <div>
                        <div className="text-xs font-bold text-ink line-clamp-1">{item.Name}</div>
                        <div className="text-[0.65rem] text-muted">{item.Label || `${item.Qty} Units`}</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-secondary">
                      ${(parseFloat(String(item.Price)) * item.Qty).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 text-xs text-muted mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping ({siteConfig.shippingCarrier})</span>
                  <span className="text-secondary font-bold">FREE</span>
                </div>
                {shippingInsurance && (
                  <div className="flex justify-between">
                    <span>Priority Insurance</span>
                    <span className="text-ink">$1.00</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-ink pt-3 border-t border-line">
                  <span>Total Amount</span>
                  <span className="text-secondary text-base">${grandTotal}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-line flex flex-col gap-2 text-[0.65rem] text-muted">
                <div>✓ {siteConfig.trialPeriod}-Day Return Policy</div>
                <div>✓ Free {siteConfig.shippingCarrier} Shipping ({siteConfig.shippingPeriod} Business Days)</div>
                <div>✓ Safe 256-bit Encrypted Checkout</div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
