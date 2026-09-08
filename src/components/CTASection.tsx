"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-0" id="cta">
      {/* Full-bleed dark purple background */}
      <div className="relative bg-gradient-to-br from-[#3B0764] via-[#5B21B6] to-[#7C3AED] py-20 sm:py-28">

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

        {/* Floating sparkle dots */}
        <div className="absolute top-8 left-[15%] w-2 h-2 rounded-full bg-purple-300/60 animate-soft-float" />
        <div className="absolute top-16 right-[20%] w-3 h-3 rounded-full bg-violet-300/50 animate-soft-float-reverse" />
        <div className="absolute bottom-12 left-[30%] w-2 h-2 rounded-full bg-purple-200/60 animate-soft-float" />
        <div className="absolute bottom-8 right-[10%] w-1.5 h-1.5 rounded-full bg-white/40 animate-soft-float-reverse" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Content */}
            <div className="flex flex-col items-start">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 font-bold text-xs uppercase tracking-widest mb-6">
                🌿 Join the Nursery Circle
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-5">
                Be the First to<br />
                <span className="text-purple-300">Discover</span> What&apos;s New.
              </h2>

              <p className="text-purple-100 text-sm leading-relaxed mb-8 max-w-md font-normal">
                Join 2,400+ parents who get early access to new organic collections, exclusive member discounts, and gentle baby care guidance — delivered with love.
              </p>

              {/* Rating proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Parent"
                      className="w-8 h-8 rounded-full border-2 border-[#5B21B6] object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-300 text-xs gap-0.5">{"★".repeat(5)}</div>
                  <p className="text-purple-200 text-[0.65rem] font-medium">Loved by 2,400+ nursery families</p>
                </div>
              </div>
            </div>

            {/* Right: Subscribe Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/30">
              {subscribed ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mx-auto mb-4">
                    💜
                  </div>
                  <h3 className="text-xl font-black text-[#1E1040] mb-2">Welcome to the Family!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
                    Your first exclusive offer is on its way. Check your inbox for a little welcome gift from us.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-[#7C3AED] text-xs font-bold px-4 py-2 rounded-full border border-purple-100">
                    ✓ You&apos;re subscribed
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1E1040] tracking-tight mb-1.5">
                      Get 15% Off Your First Order
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Subscribe now and unlock your welcome discount instantly. No spam — ever.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-5 py-4 text-sm border-2 border-purple-100 rounded-2xl focus:outline-none focus:border-[#7C3AED] bg-purple-50/30 text-[#1E1040] placeholder:text-gray-400 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-purple-400/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                    >
                      Claim My 15% Discount →
                    </button>
                  </form>

                  {/* Discount Code Visual */}
                  <div className="mt-5 pt-5 border-t border-purple-100 flex items-center justify-between">
                    <div className="text-[0.65rem] text-gray-400 font-medium">Your code will be:</div>
                    <div className="flex items-center gap-2 bg-purple-50 border border-dashed border-purple-300 rounded-xl px-3 py-1.5">
                      <span className="text-xs font-black text-[#7C3AED] tracking-widest">GROVE15</span>
                    </div>
                  </div>

                  <p className="mt-3 text-center text-[0.65rem] text-gray-400">
                    🔒 No spam. Unsubscribe anytime. Trusted by 2,400+ parents.
                  </p>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
