"use client";

import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The Blind Spot Car Mirrors completely eliminated my lane-change blind spots on the highway. High clarity, stick firmly, and don't vibrate at high speeds.",
    name: "Sarah M.",
    role: "Daily Commuter",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "The magnetic phone mount is rock solid. Holds my phone firmly on the dashboard even over rough bumps and potholes with zero slipping.",
    name: "David K.",
    role: "Rideshare Driver",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    quote: "The fuzzy leopard steering wheel cover set is so soft and cozy! Keeps the wheel cool in the summer and warm in winter, plus it looks great.",
    name: "Elena R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    quote: "Super easy peel-and-stick installation for the blind spot mirrors. Makes parallel parking and merging in heavy traffic 100% stress-free.",
    name: "Priya N.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    quote: "The 360-degree rotation on the suction phone mount makes navigation viewing seamless. Quick one-handed phone placement every time.",
    name: "Marcus T.",
    role: "Road Trip Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "Fast shipping and the quality of all the accessories exceeded my expectations. Everything arrived well-packaged and ready to install.",
    name: "Grace L.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
  {
    quote: "Bought the blind spot mirrors for both our family cars. Essential safety upgrade for teen drivers and highway commuting.",
    name: "Daniel R.",
    role: "Family Vehicle Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "Equipped our entire delivery vehicle fleet with these phone mounts. Durable suction that holds up in summer heat without falling off.",
    name: "Priya S.",
    role: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "The leopard steering wheel set includes the seat belt cushions and gear cover too. Really comfortable grip and fits snugly.",
    name: "Tom H.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80",
  },
];

const columns = [
  { items: testimonials.slice(0, 3), duration: "26s" },
  { items: testimonials.slice(3, 6), duration: "32s", className: "hidden md:flex" },
  { items: testimonials.slice(6, 9), duration: "21s", className: "hidden lg:flex" },
];

function QuoteIcon() {
  return (
    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" />
      </g>
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-lg transition-all duration-300 hover:border-secondary/30">
      <div className="mb-5 text-white/60">
        <QuoteIcon />
      </div>
      <p className="text-sm leading-relaxed text-white/60">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <img src={t.image} alt={t.name} className="h-9 w-9 flex-shrink-0 rounded-full border border-white/10 object-cover" />
        <div>
          <p className="text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/45">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20" id="testimonials">
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center md:mb-16">
        <span className="eyebrow eyebrow-invert justify-center mb-4">Customer Love</span>
        <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
          Trusted by <span className="text-secondary">40k+ Drivers &amp; Mechanics</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/60 md:text-base">
          Real stories from mechanics, fleet operators, and DIYers who trust our automotive parts.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-primary to-transparent md:h-32" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-primary to-transparent md:h-32" />

        <div className="grid h-[560px] grid-cols-1 gap-4 overflow-hidden md:grid-cols-2 md:h-[600px] lg:grid-cols-3">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`animate-scroll-up flex flex-col gap-4 ${col.className || "flex"}`}
              style={{ animationDuration: col.duration }}
            >
              {[...col.items, ...col.items].map((t, i) => (
                <TestimonialCard key={`${colIdx}-${t.name}-${i}`} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
