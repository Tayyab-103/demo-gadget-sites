"use client";

import React, { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-14 sm:py-16 bg-[#ff4370] text-white font-sans relative overflow-hidden" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffb703] bg-white/10 px-3 py-1 rounded-full mb-3 inline-block">
              VIP Family Club
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Get 15% Discount on First Subscribe
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mt-2">
              Receive secret holiday toy drops, restock notifications, and exclusive family board game coupon codes.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px] max-w-md">
            {subscribed ? (
              <div className="bg-white/15 border border-white/30 rounded-2xl p-4 text-center text-sm font-bold text-white backdrop-blur-md">
                🎉 Thanks for joining! Use promo code <span className="text-[#ffb703] font-black">PLAY25</span> at checkout!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white text-[#1e293b] placeholder-black/40 pl-5 pr-14 py-4 rounded-full text-sm font-medium focus:outline-none shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#ffb703] text-[#1e293b] flex items-center justify-center font-bold hover:bg-white transition-all cursor-pointer shadow-md"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
