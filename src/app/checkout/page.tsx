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
          <div className="w-12 h-12 border-4 border-black/10 border-t-secondary rounded-full animate-spin" />
          <h4 className="mt-6 text-lg font-bold text-primary">Processing Secure Order...</h4>
          <p className="text-xs text-neutral-text/55">Please do not refresh or close this window.</p>
        </div>
      )}

      <main className="flex-grow bg-[#FAF9F6]">
        {/* Dedicated Checkout Header Banner */}
        <section className="bg-[#132B1C] text-white py-12 md:py-16 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-[#78C470] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#78C470]">Secure Checkout</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-sans mb-2">
              Secure <span className="text-[#78C470]">Checkout</span>
            </h1>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              Complete your workshop order. Free tracked express shipping and 60-day garden trial included.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

              {/* Form Column */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/5 shadow-sm">
                {errorMsg && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl mb-6 text-xs md:text-sm">
                    <strong>Transaction Status:</strong> {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Billing/Shipping Address */}
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-[#11281A] font-sans">
                    1. Shipping Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">First Name</label>
                      <input type="text" name="firstName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Last Name</label>
                      <input type="text" name="lastName" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Shipping Address</label>
                    <input type="text" name="shippingAddress1" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.shippingAddress1} onChange={handleChange} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">City</label>
                      <input type="text" name="shippingCity" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.shippingCity} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">State</label>
                      <input type="text" name="shippingState" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" placeholder="e.g. CA" value={formData.shippingState} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">ZIP Code</label>
                      <input type="text" name="shippingZip" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.shippingZip} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Email Address</label>
                      <input type="email" name="email" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Phone Number</label>
                      <input type="tel" name="phone" className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>

                  {/* Payment Details */}
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-[#11281A] font-sans">
                    2. Payment Information
                  </h3>

                  <div className="flex flex-col mb-4">
                    <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Card Number</label>
                    <input type="text" name="cc_no" maxLength={19} className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" placeholder="•••• •••• •••• ••••" value={formData.cc_no} onChange={(e) => {
                      const val = e.target.value.replace(/\s?/g, "").replace(/(\d{4})/g, "$1 ").trim();
                      setFormData(prev => ({ ...prev, cc_no: val }));
                    }} required />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Month</label>
                      <select name="cc_month" className="block w-full px-3 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.cc_month} onChange={handleChange} required>
                        <option value="">MM</option>
                        {months.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">Year</label>
                      <select name="cc_year" className="block w-full px-3 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" value={formData.cc_year} onChange={handleChange} required>
                        <option value="">YYYY</option>
                        {years.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-1.5 text-xs uppercase tracking-wider text-[#11281A]">CVV</label>
                      <input type="password" name="CVV" maxLength={4} className="block w-full px-4 py-3 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] text-[#11281A] bg-[#FAF9F6]" placeholder="•••" value={formData.CVV} onChange={handleChange} required />
                    </div>
                  </div>

                  <button type="submit" className="inline-flex items-center justify-center gap-2 font-bold text-center bg-[#265C1E] hover:bg-[#1E4A17] text-white transition-all py-4 px-8 rounded-lg w-full cursor-pointer mt-4 text-xs uppercase tracking-wider shadow-md hover:shadow-lg">
                    Complete Secure Order — ${grandTotal}
                    <span>→</span>
                  </button>
                </form>
              </div>

              {/* Cart Summary Column */}
              <div className="lg:col-span-5 sticky top-[120px] flex flex-col gap-6">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/5 shadow-sm">
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider border-b border-black/5 pb-3.5 mb-6 text-[#11281A] font-sans">
                    Order Summary
                  </h3>

                  {/* Cart list items */}
                  {cart.map((item) => (
                    <div className="flex justify-between items-center py-3.5 border-b border-dashed border-black/10 last:border-b-0" key={item.Id}>
                      <div className="flex-1 pr-4">
                        <strong className="text-xs sm:text-sm font-bold text-[#11281A] block">{item.Name}</strong>
                        <span className="text-[0.62rem] font-bold text-[#265C1E] uppercase tracking-wide">
                          {item.Label} (Qty: {item.Qty})
                        </span>
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm text-[#11281A]">
                        ${item.Total}
                      </span>
                    </div>
                  ))}

                  {/* Shipping Insurance Checkbox */}
                  <div
                    className="p-3.5 bg-[#FAF9F6] border border-black/10 rounded-2xl my-5 flex items-center gap-3 cursor-pointer hover:border-[#265C1E]/40 transition-colors"
                    onClick={() => setShippingInsurance(prev => !prev)}
                  >
                    <input
                      type="checkbox"
                      checked={shippingInsurance}
                      onChange={handleInsuranceChange}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 cursor-pointer accent-[#265C1E]"
                    />
                    <div>
                      <strong className="text-xs font-bold text-[#11281A] block">
                        Add Shipping Insurance (+$1.00)
                      </strong>
                      <span className="text-[0.62rem] text-neutral-text/60">
                        Guarantees full replacement for transit damage or loss
                      </span>
                    </div>
                  </div>

                  {/* Subtotals & Grand Total */}
                  <div className="flex flex-col gap-2.5 text-xs sm:text-sm mt-4">
                    <div className="flex justify-between items-center text-neutral-text/70">
                      <span>Cart Subtotal:</span>
                      <span className="font-bold text-[#11281A]">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-text/70">
                      <span>Tracked Express Shipping:</span>
                      <span className="text-[#265C1E] font-bold uppercase tracking-wider">FREE</span>
                    </div>
                    {shippingInsurance && (
                      <div className="flex justify-between items-center text-neutral-text/70">
                        <span>Shipping Insurance:</span>
                        <span className="font-bold text-[#11281A]">$1.00</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center border-t border-black/5 pt-4 mt-2 font-bold">
                      <span className="text-[#11281A] uppercase tracking-wider text-xs sm:text-sm font-extrabold">Total Due:</span>
                      <span className="text-lg sm:text-xl font-black text-[#132B1C]">${grandTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Safety Disclosures */}
                <div className="p-4 text-center text-xs text-neutral-text/60 bg-white border border-black/5 rounded-2xl shadow-xs">
                  <p className="font-bold text-[#11281A]">
                    🔒 256-Bit Bank-Grade SSL Encryption
                  </p>
                  <p className="mt-1 text-[0.68rem]">
                    Your statement descriptor will appear as: <strong className="text-[#11281A]">{siteConfig.descriptor}</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
