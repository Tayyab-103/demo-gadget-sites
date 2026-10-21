"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[420px] bg-neutral-bg z-50 border-l border-line flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-y-0 left-0 w-px bg-brand-gradient" />
        <div className="p-6 border-b border-line flex items-center justify-between bg-surface">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-brand-gradient text-white flex items-center justify-center text-sm font-black">♪</span>
            <h3 className="m-0 text-base font-black text-neutral-text tracking-tight uppercase">Your Cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-faint hover:text-neutral-text leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-14">
              <div className="text-6xl mb-4 text-gradient font-black">♫</div>
              <p className="text-muted text-sm">Your cart is empty — let&apos;s find some gear.</p>
              <button
                className="btn-primary py-3.5 px-8 text-[0.7rem] uppercase tracking-widest mt-6"
                onClick={() => setIsCartOpen(false)}
              >
                Keep Browsing
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const bundles = item.bundles && item.bundles.length > 0 ? item.bundles : null;
              const tierIndex = bundles ? bundles.findIndex((b) => b.quantity === item.Qty) : -1;
              const canDecrease = bundles ? tierIndex > 0 : item.Qty > 1;
              const canIncrease = bundles
                ? tierIndex > -1 && tierIndex < item.EnableMaxqty - 1
                : true;

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
                <div className="flex gap-4 pb-5 mb-5 border-b border-line items-start relative group" key={item.Id}>
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[72px] h-[72px] object-cover rounded-xl bg-surface border border-line flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-neutral-text mb-0.5 truncate">{item.Name}</div>
                    <div className="text-[0.62rem] text-primary-light mb-3 uppercase tracking-wider font-extrabold">
                      {item.Label || "Standard Pack"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 bg-surface p-1 rounded-lg border border-line">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="bg-surface-2 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-primary-soft text-xs font-bold text-neutral-text disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-neutral-text font-bold">{item.Qty}</span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="bg-surface-2 w-6 h-6 rounded-md flex items-center justify-center cursor-pointer hover:bg-primary-soft text-xs font-bold text-neutral-text disabled:opacity-25 disabled:cursor-not-allowed transition-all"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-neutral-text">${item.Price}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-faint hover:text-red-400 cursor-pointer text-xl px-1.5 transition-colors self-start leading-none"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-line bg-surface">
            <div className="flex items-center justify-between mb-5">
              <span className="font-extrabold text-muted uppercase text-xs tracking-widest">Subtotal</span>
              <span className="font-black text-xl text-neutral-text">${getCartTotal()}</span>
            </div>

            <Link
              href="/checkout"
              className="btn-primary py-4 px-8 text-xs uppercase tracking-widest w-full mb-3"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-ghost py-3.5 px-8 text-xs uppercase tracking-widest w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
