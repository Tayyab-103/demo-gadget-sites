"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-16 sm:py-20 bg-neutral-bg relative" id="newsletter">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        <div className="relative rounded-[2rem] overflow-hidden bg-secondary grid grid-cols-1 lg:grid-cols-2">

          {/* Copy + form */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <span className="eyebrow text-secondary-text mb-4">The Harbor Letter</span>
            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-secondary-text">
              Styling notes &amp; new arrivals, <span className="italic">now and then.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-secondary-text/75 leading-relaxed max-w-md">
              Join our list for simple home styling ideas, care tips, and first word when new pieces arrive. No clutter &mdash; just a note when there&apos;s something worth sharing.
            </p>

            {subscribed ? (
              <div className="mt-8 bg-neutral-bg rounded-2xl p-5 flex items-center gap-4 max-w-md">
                <span className="w-10 h-10 rounded-full bg-primary text-primary-text flex items-center justify-center flex-shrink-0">&#10003;</span>
                <div>
                  <p className="font-serif text-lg text-neutral-text">You&apos;re on the list.</p>
                  <p className="text-xs text-neutral-text/60">Thanks for joining {siteConfig.brandName}.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-2 bg-neutral-bg rounded-3xl sm:rounded-full p-1.5 shadow-lg shadow-primary/10">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    aria-label="Email address"
                    className="flex-1 bg-transparent px-5 py-3 text-sm text-neutral-text placeholder:text-neutral-text/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-text hover:bg-primary-dark px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
                <span className="block mt-3 text-[0.68rem] text-secondary-text/60 pl-2">
                  Unsubscribe anytime with one click.
                </span>
              </form>
            )}
          </div>

          {/* Image */}
          <div className="relative min-h-[280px] lg:min-h-[460px]">
            <Image
              src="/img/brand/about2.jpg"
              alt="Calm living room with natural light and soft textures"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
