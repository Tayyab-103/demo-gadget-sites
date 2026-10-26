import React from "react";
import Link from "next/link";
import { products, productPrice } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

export default function ProductGrid() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden" id="products">
      <div className="absolute inset-x-0 top-0 h-80 bg-brand-gradient-soft pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Shop the essentials"
            title={<>Tools we stand <span className="text-gradient">behind</span></>}
            text="Every item below ships free and is covered by our satisfaction guarantee. Buy more than one and bundle pricing applies automatically."
          />
          <Link href="/shop" className="btn-ghost self-start md:self-auto flex-shrink-0">View All Tools</Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {products.map((product, idx) => {
            const specs = product.description.split(";").map((s) => s.trim()).filter(Boolean).slice(0, 3);
            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-[0.62rem] font-bold uppercase tracking-wider text-primary shadow-sm">
                    {product.category}
                  </span>
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 text-[0.7rem] font-extrabold text-ink flex items-center justify-center shadow-sm">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5 flex-1">
                    {specs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-[0.8rem] text-muted leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                    <div>
                      <div className="text-[0.6rem] font-bold uppercase tracking-wider text-faint">From</div>
                      <div className="text-2xl font-extrabold text-ink">${productPrice(product).toFixed(2)}</div>
                    </div>
                    <span className="h-11 pl-5 pr-4 rounded-full bg-brand-gradient text-primary-text text-xs font-bold flex items-center gap-2 shadow-md transition-all group-hover:gap-3">
                      View Tool
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
