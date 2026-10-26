"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { useCart } from "@/context/CartContext";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Checkout() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();

  // Redirect to homepage if cart is empty on mount
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

    // Minimal form validations
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
        // Success
        clearCart();
        router.push(`/confirm?order_id=${data.order_id}`);
      } else {
        // Error from CRM gateway
        setErrorMsg(data.error_message || "There was an error processing your transaction. Please check your card details and try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to connect to the payment server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return null; // Don't render checkout forms if redirecting
  }

  // Generate CC Expiry Months & Years options
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 15 }, (_, i) => String(currentYear + i));

  return (
    <>
      <Header />
      
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-4 border-black/10 border-t-primary rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold text-ink">Processing Secure Order...</h4>
          <p className="text-xs text-neutral-text/55">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-surface py-10 sm:py-16 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-ink">Checkout</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-ink mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Encrypted Checkout
              </div>
              <h1 className="text-2xl sm:text-4xl font-black uppercase text-ink tracking-tight leading-tight">
                Secure Checkout
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-line shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl mb-6 text-xs sm:text-sm">
                  <strong>Transaction Alert:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Shipping Information */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider border-b border-line pb-3 mb-5 text-ink">
                    1. Shipping Destination
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">First Name</label>
                      <input type="text" name="firstName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Last Name</label>
                      <input type="text" name="lastName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Street Address</label>
                    <input type="text" name="shippingAddress1" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.shippingAddress1} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">City</label>
                      <input type="text" name="shippingCity" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.shippingCity} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">State</label>
                      <input type="text" name="shippingState" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" placeholder="e.g. CA" value={formData.shippingState} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">ZIP Code</label>
                      <input type="text" name="shippingZip" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.shippingZip} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Email Address</label>
                      <input type="email" name="email" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Phone Number</label>
                      <input type="tel" name="phone" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                {/* 2. Payment Method */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider border-b border-line pb-3 mb-5 text-ink">
                    2. Payment Details
                  </h3>

                  <div className="mb-4">
                    <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Card Number</label>
                    <input type="text" name="cc_no" placeholder="•••• •••• •••• ••••" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface font-mono" value={formData.cc_no} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Month</label>
                      <select name="cc_month" className="block w-full px-3 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.cc_month} onChange={handleChange} required>
                        <option value="">MM</option>
                        {months.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Year</label>
                      <select name="cc_year" className="block w-full px-3 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface" value={formData.cc_year} onChange={handleChange} required>
                        <option value="">YYYY</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold mb-1.5 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">CVV</label>
                      <input type="password" name="CVV" maxLength={4} placeholder="CVV" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-ink bg-surface font-mono" value={formData.CVV} onChange={handleChange} required />
                    </div>
                  </div>
                </div>

                {/* Shipping Insurance Option */}
                <div className="bg-surface border border-black/[0.05] rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="insurance"
                      checked={shippingInsurance}
                      onChange={handleInsuranceChange}
                      className="w-4 h-4 rounded text-ink focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="insurance" className="text-xs text-ink font-semibold cursor-pointer">
                      Add Shipping Protection (+$1.00)
                    </label>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary">+$1.00</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-xs sm:text-sm py-4 px-8 rounded-full uppercase tracking-widest shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Authorize Payment &amp; Place Order (${grandTotal})
                </button>
              </form>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-5 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-line shadow-[0_15px_45px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="text-base font-bold uppercase tracking-wider text-ink pb-3 border-b border-line">
                Order Summary ({cart.length} items)
              </h3>

              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.Id} className="flex items-center gap-3.5 pb-4 border-b border-line last:border-0 last:pb-0">
                    <img
                      src={item.Image}
                      alt={item.Name}
                      className="w-14 h-14 rounded-xl object-cover bg-surface border border-black/5 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-ink truncate">{item.Name}</h4>
                      <p className="text-[0.62rem] text-neutral-text/50 uppercase font-mono">Qty: {item.Qty} • {item.Label}</p>
                    </div>
                    <div className="text-xs sm:text-sm font-black font-mono text-ink">
                      ${(parseFloat(String(item.Price))).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Breakdown */}
              <div className="bg-surface rounded-2xl p-5 border border-line space-y-2.5 text-xs">
                <div className="flex justify-between text-neutral-text/60">
                  <span>Cart Subtotal:</span>
                  <span className="font-mono font-bold text-ink">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-text/60">
                  <span>Tracked {siteConfig.shippingCarrier} Shipping:</span>
                  <span className="font-mono font-bold text-emerald-600">FREE</span>
                </div>
                {shippingInsurance && (
                  <div className="flex justify-between text-neutral-text/60">
                    <span>Shipping Protection:</span>
                    <span className="font-mono font-bold text-ink">$1.00</span>
                  </div>
                )}
                <div className="pt-2 border-t border-line flex justify-between text-sm font-black text-ink">
                  <span>Total Amount:</span>
                  <span className="font-mono text-base text-ink">${grandTotal}</span>
                </div>
              </div>

              <div className="space-y-2 text-[0.68rem] text-neutral-text/50 font-medium pt-1">
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>256-Bit SSL Encrypted Transaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>{siteConfig.trialPeriod}-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
