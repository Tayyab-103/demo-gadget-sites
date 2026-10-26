"use client";

import Link from "next/link";
import productsData from "../../config/products.json";
import { Product, Bundle } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

// One card per product: single-unit price, plus the best bundle saving as a badge
const tiles = products.map((product) => {
  const bundles = product.bundles && product.bundles.length > 0 ? product.bundles : [{ quantity: 1, price: Number(product.ssPrice) }];
  const single = bundles[0];
  const unitBase = single.price / single.quantity;
  const largest = bundles[bundles.length - 1];
  const maxSavings = Math.round(100 - (largest.price / (unitBase * largest.quantity)) * 100);
  return { product, single, maxSavings, maxQty: largest.quantity };
});

// `compact` is used on /shop, where the page banner already carries the heading
export default function ProductGrid({ compact = false }: { compact?: boolean }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product, bundle: Bundle) => {
    const unitPrice = (bundle.price / bundle.quantity).toFixed(2);
    addToCart(product, bundle.quantity, unitPrice, "Single Unit");
  };

  return (
    <section className="bg-surface relative overflow-hidden py-16 md:py-24" id="shop">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="container-page relative z-10">
        {!compact && (
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <span className="eyebrow">The Catalog</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Shop parts &amp; <span className="text-gradient">equipment</span>
            </h2>
            <p className="mt-4 text-sm text-ink/60 md:text-base">
              Pick a single unit or a multi-pack — bundles lower the price per unit the more you stock up.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map(({ product, single, maxSavings, maxQty }) => (
            <div key={product.id} className="card card-hover group relative flex flex-col overflow-hidden">
              <Link
                href={`/product/${product.id}`}
                className="relative m-2.5 mb-0 block aspect-[4/3.2] overflow-hidden rounded-2xl bg-linear-to-br from-surface to-wash"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
                {maxSavings > 0 && (
                  <span className="bg-brand-gradient absolute right-3 top-3 rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-widest text-white shadow-sm">
                    {`Save up to ${maxSavings}%`}
                  </span>
                )}
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-primary">{product.category}</span>
                <Link href={`/product/${product.id}`}>
                  <h3 className="mt-1.5 line-clamp-2 min-h-[2.6em] text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {product.name}
                  </h3>
                </Link>
                <p className="mb-4 mt-2 line-clamp-2 text-xs leading-relaxed text-ink/55">{product.description}</p>

                <div className="mt-auto flex items-end justify-between gap-3 border-t border-line pt-4">
                  <div>
                    <span className="text-xl font-extrabold text-ink">${single.price.toFixed(2)}</span>
                    <p className="mt-0.5 text-[0.7rem] font-medium text-ink/50">
                      {maxQty > 1 ? `Bundles up to ${maxQty} units available` : "Single unit"}
                    </p>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product, single)}
                    className="icon-chip h-11 w-11 cursor-pointer rounded-full transition-transform duration-300 hover:scale-110"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="mt-10 text-center">
            <Link href="/shop" className="btn-outline">
              View All Products
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
