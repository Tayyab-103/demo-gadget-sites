"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const stepBtn =
    "w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-ink hover:bg-surface disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-surface text-ink z-1000 flex flex-col transition-all duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0 shadow-2xl visible" : "translate-x-full shadow-none invisible"
        }`}
      >
        <div className="px-6 py-5 border-b border-line flex items-center justify-between">
          <h3 className="text-lg font-extrabold">Your cart</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-ink transition-colors cursor-pointer"
            aria-label="Close Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-neutral-bg flex items-center justify-center mx-auto mb-5 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <p className="text-sm text-muted">Your cart is empty.</p>
              <button className="btn-primary mt-6" onClick={() => setIsCartOpen(false)}>
                Keep shopping
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const bundles = item.bundles && item.bundles.length > 0 ? item.bundles : null;
              const tierIndex = bundles ? bundles.findIndex((b) => b.quantity === item.Qty) : -1;
              const canDecrease = bundles ? tierIndex > 0 : item.Qty > 1;
              const canIncrease = bundles ? tierIndex > -1 && tierIndex < item.EnableMaxqty - 1 : true;

              const handleDecrease = () => {
                if (bundles) {
                  if (tierIndex > 0) updateQuantity(item.Id, bundles[tierIndex - 1].quantity);
                } else {
                  updateQuantity(item.Id, item.Qty - 1);
                }
              };

              const handleIncrease = () => {
                if (bundles) {
                  if (canIncrease) updateQuantity(item.Id, bundles[tierIndex + 1].quantity);
                } else {
                  updateQuantity(item.Id, item.Qty + 1);
                }
              };

              return (
                <div className="flex gap-4 pb-5 mb-5 border-b border-line items-start" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-20 h-20 object-cover rounded-2xl bg-neutral-bg flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100?text=Product";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-sm leading-snug">{item.Name}</div>
                      <button
                        onClick={() => removeFromCart(item.Id)}
                        className="text-muted hover:text-red-600 cursor-pointer transition-colors"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="text-xs text-muted mt-0.5">{item.Label || "Single tool"}</div>

                    <div className="flex items-center justify-between gap-3 mt-3">
                      <div className="flex items-center gap-1 bg-neutral-bg rounded-full p-1">
                        <button onClick={handleDecrease} disabled={!canDecrease} className={stepBtn} aria-label="Decrease quantity">
                          &minus;
                        </button>
                        <span className="px-2 text-sm font-bold">{item.Qty}</span>
                        <button onClick={handleIncrease} disabled={!canIncrease} className={stepBtn} aria-label="Increase quantity">
                          +
                        </button>
                      </div>
                      <div className="text-sm font-extrabold">${item.Price}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-line bg-neutral-bg">
            <div className="flex items-center justify-between text-sm text-muted mb-2">
              <span>Shipping ({siteConfig.shippingCarrier})</span>
              <span className="font-semibold text-ink">Free</span>
            </div>
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold">Subtotal</span>
              <span className="font-extrabold text-xl">${getCartTotal()}</span>
            </div>
            <Link href="/checkout" className="btn-primary w-full" onClick={() => setIsCartOpen(false)}>
              Checkout
            </Link>
            <button onClick={() => setIsCartOpen(false)} className="btn-outline w-full mt-2.5">
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
