import React from "react";
import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  crumb: string;
}

export default function PageHero({ eyebrow, title, text, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-wash border-b border-line">
      <div className="absolute inset-0 blueprint-grid [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 text-center flex flex-col items-center">
        <nav className="flex items-center gap-2 text-xs font-semibold text-faint mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.08] max-w-3xl">
          {title}
        </h1>
        {text && <p className="mt-5 text-sm sm:text-lg text-muted max-w-2xl leading-relaxed">{text}</p>}
      </div>
    </section>
  );
}
