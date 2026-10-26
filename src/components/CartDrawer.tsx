"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { siteConfig, fallbackImage } from "@/lib/brandIcon";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-primary-dark/60 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-white text-ink z-1000 border-l border-line flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between bg-primary text-primary-text">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
            <h3 className="m-0 text-sm font-black tracking-[0.18em] uppercase">Your cart</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-white/60 hover:text-secondary leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-sm mb-6">Your cart is empty.</p>
              <Link href="/shop" className="btn-plum" onClick={() => setIsCartOpen(false)}>
                Browse the collection
              </Link>
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
                <div
                  className="flex gap-4 pb-5 mb-5 border-b border-line items-start relative group"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-xl bg-mist flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-xs sm:text-sm text-ink mb-0.5 truncate uppercase tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-gold-ink font-bold mb-3 uppercase tracking-wider">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-neutral-bg p-1 rounded-full">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-ink font-black">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-primary">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-muted hover:text-red-600 cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-line bg-mist">
            <div className="flex items-center justify-between mb-1">
              <span className="font-black text-ink uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-black text-xl text-primary">
                ${getCartTotal()}
              </span>
            </div>

            <p className="text-xs text-muted mb-5">Free {siteConfig.shippingCarrier} shipping included.</p>
            <Link
              href="/checkout"
              className="btn-gold w-full mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-ghost w-full text-primary hover:bg-white"
            >
              Keep shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
