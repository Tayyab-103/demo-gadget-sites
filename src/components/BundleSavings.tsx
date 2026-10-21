import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import SectionHeading from "@/components/SectionHeading";

const products = productsData as unknown as Product[];

// Pack sizes highlighted in the comparison table
const SHOWN_PACKS = [1, 3, 5, 8];

const unit = (price: number, qty: number) => (price / qty).toFixed(2);

export default function BundleSavings() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-wash" id="bundles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bundle & save"
          title={<>More packs, <span className="text-gradient">lower price</span> per item</>}
          description="Every product comes in 1 to 8-pack bundles. The more you stock up, the less you pay per item — handy for multi-pet homes or keeping spares in the car."
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product) => {
            const bundles = product.bundles ?? [];
            const single = parseFloat(product.ssPrice);
            const shown = bundles.filter((b) => SHOWN_PACKS.includes(b.quantity));
            const best = bundles[bundles.length - 1];
            const bestSaving = best ? Math.round((1 - best.price / (single * best.quantity)) * 100) : 0;

            return (
              <div key={product.id} className="card p-5 sm:p-6 flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-2xl object-cover bg-primary-soft" />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold text-ink leading-snug line-clamp-2">{product.name}</h3>
                    {bestSaving > 0 && (
                      <span className="inline-block mt-1 text-[0.68rem] font-bold text-primary-deep bg-primary-soft px-2 py-0.5 rounded-md">
                        Save up to {bestSaving}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-line overflow-hidden text-sm">
                  <div className="grid grid-cols-3 bg-neutral-bg px-4 py-2.5 text-[0.65rem] font-bold uppercase tracking-wider text-faint">
                    <span>Pack</span>
                    <span className="text-center">Total</span>
                    <span className="text-right">Per item</span>
                  </div>
                  {shown.map((b) => {
                    const isBest = b.quantity === best?.quantity;
                    return (
                      <div
                        key={b.quantity}
                        className={`grid grid-cols-3 px-4 py-3 border-t border-line items-center ${isBest ? "bg-brand-gradient-soft" : ""}`}
                      >
                        <span className="font-semibold text-ink">
                          {b.quantity}-pack
                          {isBest && <span className="ml-1.5 text-[0.6rem] font-bold uppercase text-secondary-deep">Best</span>}
                        </span>
                        <span className="text-center text-muted">${b.price.toFixed(2)}</span>
                        <span className="text-right font-bold text-ink">${unit(b.price, b.quantity)}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href={`/product/${product.id}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 border-2 border-ink/10 hover:border-primary hover:bg-primary-soft text-ink font-bold text-sm py-3 rounded-full transition-colors"
                >
                  Choose a bundle →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
