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
          <div className="w-12 h-12 border-4 border-black/10 border-t-secondary rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold text-ink">Processing Secure Order...</h4>
          <p className="text-xs text-neutral-text/55">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="bg-neutral-bg py-12 md:py-20 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <span className="eyebrow mb-4">Secure Checkout</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-ink mb-8 tracking-tight">Checkout <span className="text-secondary">Securely</span></h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Form Column */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md">
              {errorMsg && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl mb-6 text-xs md:text-sm">
                  <strong>Transaction Status:</strong> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Billing/Shipping Address */}
                <h3 className="text-base font-bold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-ink">
                  1. Shipping Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">First Name</label>
                    <input type="text" name="firstName" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Last Name</label>
                    <input type="text" name="lastName" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Shipping Address</label>
                  <input type="text" name="shippingAddress1" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.shippingAddress1} onChange={handleChange} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">City</label>
                    <input type="text" name="shippingCity" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.shippingCity} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">State</label>
                    <input type="text" name="shippingState" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" placeholder="e.g. CA" value={formData.shippingState} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">ZIP / Postal Code</label>
                    <input type="text" name="shippingZip" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.shippingZip} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Phone Number</label>
                    <input type="tel" name="phone" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Email Address</label>
                    <input type="email" name="email" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                {/* Credit Card Details */}
                <h3 className="text-base font-bold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-ink mt-10">
                  2. Payment Details
                </h3>

                <div className="flex flex-col mb-4">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Credit Card Number</label>
                  <input
                    type="text"
                    name="cc_no"
                    maxLength={19}
                    className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm"
                    placeholder="•••• •••• •••• ••••"
                    value={formData.cc_no}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Expiry Month</label>
                    <select name="cc_month" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.cc_month} onChange={handleChange} required>
                      <option value="">Month</option>
                      {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">Expiry Year</label>
                    <select name="cc_year" className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" value={formData.cc_year} onChange={handleChange} required>
                      <option value="">Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-wider text-neutral-text/75">CVV / CVC</label>
                    <input type="password" name="CVV" maxLength={4} className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white shadow-sm" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-primary text-primary-text hover:bg-ink hover:text-white transition-all duration-300 py-4 px-8 rounded-full w-full cursor-pointer mt-8 text-xs uppercase tracking-widest shadow-md hover:shadow-lg">
                  Secure Purchase
                </button>
              </form>
            </div>

            {/* Cart Summary Column */}
            <div className="sticky top-[120px] flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md">
                <h3 className="text-base font-bold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-ink">
                  Order Summary
                </h3>

                {/* Cart list items */}
                {cart.map((item) => (
                  <div className="flex justify-between items-center py-4 border-b border-dashed border-black/10 last:border-b-0" key={item.Id}>
                    <div className="flex-1 pr-4">
                      <strong className="text-xs md:text-sm font-bold text-ink">{item.Name}</strong>
                      <span className="block text-[0.65rem] font-semibold text-neutral-text/45 uppercase tracking-wide mt-1">
                        {item.Label} (Qty: {item.Qty})
                      </span>
                    </div>
                    <span className="font-extrabold text-sm md:text-base text-neutral-text">
                      ${item.Total}
                    </span>
                  </div>
                ))}

                {/* Shipping Insurance Checkbox */}
                <div
                  className="p-4 bg-secondary/5 border border-dashed border-secondary/30 rounded-2xl my-6 flex items-center gap-3.5 cursor-pointer hover:bg-secondary/8 transition-colors duration-200"
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
                    <strong className="text-xs md:text-sm font-bold text-ink block">
                      Add Shipping Insurance
                    </strong>
                    <span className="text-[0.65rem] text-neutral-text/50">
                      Guarantees delivery coverage for damage or loss ($1.00)
                    </span>
                  </div>
                </div>

                {/* Subtotals & Grand Total */}
                <div className="flex flex-col gap-3 text-xs md:text-sm mt-4">
                  <div className="flex justify-between items-center text-neutral-text/70">
                    <span>Cart Subtotal:</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-neutral-text/70">
                    <span>Shipping:</span>
                    <span className="text-green-700 font-extrabold tracking-wider">FREE</span>
                  </div>
                  {shippingInsurance && (
                    <div className="flex justify-between items-center text-neutral-text/70">
                      <span>Shipping Insurance:</span>
                      <span className="font-semibold">$1.00</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center border-t border-black/5 pt-4 mt-2 font-bold text-base md:text-lg">
                    <span className="text-ink uppercase tracking-wider text-xs md:text-sm">Grand Total:</span>
                    <span className="text-secondary font-extrabold">${grandTotal}</span>
                  </div>
                </div>
              </div>

              {/* Safety Disclosures */}
              <div className="py-6 text-center text-[0.68rem] text-neutral-text/40 leading-relaxed bg-white border border-black/5 rounded-2xl shadow-inner">
                <p className="font-semibold">
                  🔒 256-Bit SSL Encrypted Connection.
                </p>
                <p className="mt-1">
                  Your card statement details will appear as: <strong>{siteConfig.descriptor}</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
