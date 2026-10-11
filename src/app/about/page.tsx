"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const timelineEvents = [
  {
    year: "2018",
    title: "Atelier Genesis",
    desc: "Founded by traditional oil painters and botanical illustrators searching for mineral pigments free from artificial synthetic fillers."
  },
  {
    year: "2020",
    title: "Archival ASTM Formulation",
    desc: "Perfected cold-pressed vehicle chemistry achieving ASTM Class I & II lightfast ratings across all core color ranges."
  },
  {
    year: "2022",
    title: "Handcrafted Brush Line",
    desc: "Introduced precision Kolinsky and synthetic sable brush suites, individually balanced and hand-cupped with seamless nickel ferrules."
  },
  {
    year: "2024+",
    title: "Nationwide Studio Distribution",
    desc: "Expanded direct-to-studio supply across North America with expedited 24–48 hour fulfillment and dedicated artist support."
  }
];

const pillars = [
  {
    number: "01",
    title: "Single-Source Pure Pigments",
    desc: "We formulate every paint batch with maximum pigment load and triple-milled dispersion. The result is pure, vibrant chromatic intensity and exceptional tinting strength that never turns muddy."
  },
  {
    number: "02",
    title: "Ergonomic Handcrafted Brushes",
    desc: "Each brush is shaped and tested by hand. Balanced hardwood handles provide responsive control for broad washes or delicate calligraphic precision."
  },
  {
    number: "03",
    title: "Museum-Grade Archival Surfaces",
    desc: "Our triple-primed Belgian linen and acid-free cotton canvases provide the tooth, flexibility, and longevity demanded for multi-generational exhibition."
  },
  {
    number: "04",
    title: "Ethical & Responsible Craftsmanship",
    desc: "We are committed to sustainable timber handles, non-toxic studio alternatives, and recyclable packaging across our entire catalog."
  }
];

const stats = [
  { value: "25,000+", label: "Studios & Artists Supplied" },
  { value: "100%", label: "Archival Lightfast Standard" },
  { value: "99.4%", label: "Artist Satisfaction Rating" },
  { value: "60-Day", label: "Studio Satisfaction Guarantee" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white py-20 md:py-28 border-b border-white/10">
          <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-2xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 mb-6 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-secondary font-bold">Atelier Heritage</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl">
                Dedicated to the Craft of <span className="text-secondary">Master Painters</span>
              </h1>

              <p className="mt-6 text-sm sm:text-base md:text-lg text-white/75 max-w-3xl leading-relaxed">
                {siteConfig.brandName} was established on a simple conviction: artists should never have to compromise on pigment purity, brush elasticity, or archival substrate integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Origin & Mission */}
        <section className="py-16 md:py-24 bg-white border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Images Collage */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                  <Image
                    src="/img/photo-1513364776144-60967b0f800f.jpg"
                    alt="Fine art studio craftsmanship"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Quote Card */}
                <div className="sm:absolute -bottom-8 -right-4 mt-4 sm:mt-0 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-sm border border-secondary/20">
                  <span className="text-secondary text-2xl font-serif">“</span>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                    Remarkable artwork begins with uncompromising materials formulated to endure for centuries.
                  </p>
                  <span className="block text-[0.68rem] text-secondary font-bold uppercase tracking-wider mt-3">
                    — Master Studio Chemist
                  </span>
                </div>
              </div>

              {/* Right Story Text */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="eyebrow">Our Story</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-primary leading-tight">
                  From Hand-Poured Batches to <span className="text-secondary">Nationwide Studios</span>
                </h2>

                <p className="text-sm sm:text-base text-neutral-text/75 leading-relaxed">
                  Founded under the benchmark of <strong>MCC 5970 (Artist’s Supply and Craft Shops)</strong>, {siteConfig.brandName} bridges traditional 19th-century atelier standards with contemporary lightfast chemistry.
                </p>

                <p className="text-sm sm:text-base text-neutral-text/75 leading-relaxed">
                  Every formulation undergoes rigorous laboratory lightfastness testing and real-world studio trials by working fine artists before entering our catalog. Whether you work in oils, acrylics, watermedia, or mixed craft mediums, our mission is to empower your vision with flawless color consistency and responsive tactile feedback.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5">
                  <div className="p-4 rounded-xl bg-neutral-bg border border-black/5">
                    <span className="text-2xl font-black text-primary block">ASTM I &amp; II</span>
                    <span className="text-xs text-neutral-text/60 mt-1 block">Maximum Lightfast Rating</span>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-bg border border-black/5">
                    <span className="text-2xl font-black text-primary block">100% Acid-Free</span>
                    <span className="text-xs text-neutral-text/60 mt-1 block">Archival Canvas Longevity</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Pillars of Excellence */}
        <section className="py-16 md:py-24 bg-neutral-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="eyebrow justify-center mb-3">Our Core Principles</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-primary">
                The Four Pillars of <span className="text-secondary">North Star</span>
              </h2>
              <p className="text-neutral-text/70 text-sm sm:text-base max-w-2xl mx-auto mt-4">
                How we maintain the highest quality standards across every brush, pigment tube, and linen roll we ship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pil) => (
                <div
                  key={pil.number}
                  className="bg-white rounded-3xl p-8 border border-black/8 shadow-xs hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-black text-secondary/40 block mb-4 font-mono">
                      {pil.number}
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {pil.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-secondary/30 rounded-full mt-6" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Milestones / Timeline */}
        <section className="py-16 md:py-24 bg-white border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="eyebrow justify-center mb-3">Evolution</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-primary">
                Our Journey &amp; Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineEvents.map((evt, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-neutral-bg border border-black/5">
                  <span className="text-xs font-extrabold text-secondary uppercase tracking-widest block mb-2">
                    {evt.year}
                  </span>
                  <h4 className="text-base font-bold text-primary mb-2">{evt.title}</h4>
                  <p className="text-xs text-neutral-text/70 leading-relaxed">{evt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 md:py-20 bg-neutral-bg">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-primary text-white p-8 sm:p-14 text-center relative overflow-hidden border border-secondary/20 shadow-2xl">
              <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
              
              <span className="text-secondary text-xs uppercase tracking-[0.2em] font-bold block mb-3">
                Begin Your Next Masterpiece
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white mb-4">
                Equip Your Studio with Archival Supplies
              </h2>
              <p className="text-white/75 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                Discover our curated collection of oil &amp; acrylic pigments, handcrafted brush suites, and pre-stretched Belgian linen canvases backed by our 60-day guarantee.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/shop"
                  className="bg-secondary text-primary font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                  Shop Full Catalog
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-9 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20"
                >
                  Contact Atelier Support
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
