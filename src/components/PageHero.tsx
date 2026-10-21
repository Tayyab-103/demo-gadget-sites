import React from "react";
import Link from "next/link";
import PawIcon from "@/components/PawIcon";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
}

/** Compact banner used at the top of the inner pages (shop, about, contact). */
export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="bg-brand-wash relative overflow-hidden">
      <PawIcon className="absolute right-[8%] top-8 w-16 h-16 text-primary/30 rotate-12" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className={image ? "md:col-span-7" : "md:col-span-12 text-center"}>
          <nav className="text-xs font-semibold text-muted mb-4">
            <Link href="/" className="hover:text-ink">Home</Link> <span className="mx-1.5">/</span>
            <span className="text-ink">{eyebrow}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight leading-[1.08]">{title}</h1>
          {description && (
            <p className={`mt-4 text-muted text-base sm:text-lg leading-relaxed max-w-xl ${image ? "" : "mx-auto"}`}>{description}</p>
          )}
        </div>
        {image && (
          <div className="md:col-span-5">
            <img src={image} alt="" className="w-full h-56 sm:h-64 object-cover rounded-[2rem] shadow-xl ring-8 ring-white" />
          </div>
        )}
      </div>
    </section>
  );
}
