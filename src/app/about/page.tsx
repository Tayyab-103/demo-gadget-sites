import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import QualityPromise from "@/components/QualityPromise";
import { siteConfig, brandShort } from "@/lib/brandIcon";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn how ${siteConfig.brandName} picks the hand tools, testers and hardware it sells.`,
};

const values = [
  {
    title: "Useful over flashy",
    text: "Every product earns its spot by solving a real job around the house or shop — tightening, testing or powering something.",
  },
  {
    title: "Specs you can trust",
    text: "We publish materials, sizes, ranges and compatibility so you can check fit before you buy, not after it arrives.",
  },
  {
    title: "Fair, simple pricing",
    text: "Clear prices, free shipping and automatic bundle savings. No memberships, no subscriptions, no codes to hunt for.",
  },
  {
    title: "Support from people",
    text: "A real team answers our phone line and inbox, and we reply to every message within one business day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          crumb="About"
          eyebrow={`About ${brandShort}`}
          title={<>Good tools, <span className="text-gradient">plainly sold</span></>}
          text={`${siteConfig.brandName} is a small online hardware shop focused on a few dependable essentials for homeowners, DIYers and the trades.`}
        />

        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2.4rem] bg-brand-gradient rotate-[-2deg] opacity-90" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/img/web/hero2.jpg" alt="Socket and wrench set in a case" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title={<>Why we keep the shelf <span className="text-gradient">short</span></>}
              />
              <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>
                  Shopping for tools online usually means scrolling past hundreds of near-identical listings with half the details missing. We wanted the opposite: a store where every product is explained clearly and priced honestly.
                </p>
                <p>
                  So we keep our range tight. Magnetic screwdriver bits that grip. A digital multimeter for everyday electrical checks. A long, properly rated power cable for video doorbells. Each one comes with full specs and is backed by our guarantee.
                </p>
                <p>
                  {`Orders are packed within 1-2 business days and shipped free by ${siteConfig.shippingCarrier}. If something isn't right, you have ${siteConfig.trialPeriod} days from delivery to let us know.`}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop" className="btn-primary">Shop the Tools</Link>
                <Link href="/contact" className="btn-ghost">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-surface">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
            <SectionHeading eyebrow="What we value" title={<>How we <span className="text-gradient">do business</span></>} />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {values.map((v, i) => (
                <div key={v.title} className="card p-6 sm:p-7">
                  <span className="icon-tile w-11 h-11 font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QualityPromise />
      </main>
      <Footer />
    </>
  );
}
