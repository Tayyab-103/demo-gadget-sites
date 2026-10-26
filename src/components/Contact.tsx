import React from "react";
import { siteConfig } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const icon = (d: React.ReactNode) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

export const contactChannels = [
  {
    label: "Call us",
    value: siteConfig.phone,
    note: "Speak with our support team",
    href: `tel:${siteConfig.phone}`,
    icon: icon(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />),
  },
  {
    label: "Email us",
    value: siteConfig.email,
    note: "Reply within 1 business day",
    href: `mailto:${siteConfig.email}`,
    icon: icon(<><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>),
  },
  {
    label: "Returns address",
    value: siteConfig.address,
    note: "Please contact us before sending a return",
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
    icon: icon(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>),
  },
];

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title={<>Need a hand? <span className="text-gradient">We&apos;re here.</span></>}
            text="Questions about sizing, compatibility or an order you've placed — reach out and a real person will get back to you."
          />

          <div className="mt-8 space-y-3">
            {contactChannels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 card p-4 sm:p-5 hover:border-primary/40 transition-all"
              >
                <span className="icon-tile w-12 h-12 flex-shrink-0">{c.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.16em] text-faint">{c.label}</span>
                  <span className="block text-sm sm:text-base font-bold text-ink group-hover:text-primary transition-colors [overflow-wrap:anywhere]">{c.value}</span>
                  <span className="block text-xs text-muted mt-0.5">{c.note}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-faint">{`${siteConfig.brandName} is operated by ${siteConfig.corpName}.`}</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 sm:-inset-4 rounded-[2.4rem] bg-brand-gradient rotate-[2deg] opacity-90" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
            <img src="/img/web/contact.jpg" alt="Hands working on a project at a workbench" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
