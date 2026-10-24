"use client";

import React, { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <aside className="relative bg-[#181818] text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Decorative Pattern / Blur */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#D47C65_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <span className="category-subtitle text-secondary">
          <b className="text-white">exclusive</b> access
        </span>

        <h3 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mt-1 mb-3 sm:mb-4">
          Newsletter
        </h3>

        <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6 sm:mb-8">
          Be the first to hear about private seasonal discounts, early access to new arrivals, and capsule releases.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary text-secondary px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>✓</span> Thank you for subscribing to Modern Meadow!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-0 sm:bg-white/10 sm:p-1.5 sm:rounded-full sm:border sm:border-white/20 sm:focus-within:border-secondary sm:backdrop-blur-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full sm:flex-1 bg-white/10 sm:bg-transparent px-4 sm:px-5 py-3 sm:py-3 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none rounded-full border border-white/20 sm:border-0 focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-secondary text-white font-bold text-xs uppercase tracking-widest px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </aside>
  );
}
