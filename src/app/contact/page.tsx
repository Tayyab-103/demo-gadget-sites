import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import { contactChannels } from "@/components/Contact";
import { siteConfig } from "@/lib/brandIcon";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.brandName} by phone or email for order, shipping and product questions.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumb="Contact"
          eyebrow="Customer support"
          title={<>We&apos;re here to <span className="text-gradient">help</span></>}
          text="Questions about a product, an order or a return? Reach out — a real person replies within one business day."
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
              {contactChannels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group card p-6 sm:p-8 flex flex-col min-w-0 hover:-translate-y-1 hover:border-primary/40 transition-all"
                >
                  <span className="icon-tile w-12 h-12">{c.icon}</span>
                  <span className="mt-6 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-faint">{c.label}</span>
                  <span className="mt-1 text-base sm:text-lg font-bold text-ink group-hover:text-primary transition-colors [overflow-wrap:anywhere]">{c.value}</span>
                  <span className="mt-2 text-sm text-muted">{c.note}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 grid lg:grid-cols-5 gap-4 lg:gap-5">
              <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden min-h-[280px]">
                <img src="/img/web/contact.jpg" alt="Hands working on a project at a workbench" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/85 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white max-w-md">
                  <div className="text-xl sm:text-2xl font-extrabold">Tell us what you&apos;re working on.</div>
                  <p className="mt-2 text-sm text-white/80">Share the project or your device model and we&apos;ll point you to the right tool.</p>
                </div>
              </div>
              <div className="lg:col-span-2 rounded-[2rem] bg-brand-gradient text-white p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
                <div className="relative">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Order details</div>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="text-white/70">Shipping</dt>
                      <dd className="font-semibold">{`Free ${siteConfig.shippingCarrier}, ${siteConfig.shippingPeriod} business days`}</dd>
                    </div>
                    <div>
                      <dt className="text-white/70">Returns</dt>
                      <dd className="font-semibold">{`${siteConfig.trialPeriod}-day satisfaction guarantee`}</dd>
                    </div>
                    <div>
                      <dt className="text-white/70">Statement descriptor</dt>
                      <dd className="font-semibold">{siteConfig.descriptor}</dd>
                    </div>
                    <div>
                      <dt className="text-white/70">Company</dt>
                      <dd className="font-semibold">{siteConfig.corpName}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
