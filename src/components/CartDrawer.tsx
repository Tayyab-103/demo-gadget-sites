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
    getCartTotal,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-white text-black z-1000 border-l border-black/10 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-black/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <h3 className="m-0 text-sm font-black text-black tracking-widest uppercase font-mono">
              ATHLETE CART
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-black/40 hover:text-black leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-black/50 text-xs font-mono uppercase tracking-wider mb-6">
                Your athlete cart is empty.
              </p>
              <button
                className="inline-block font-black text-center whitespace-nowrap bg-black text-white hover:bg-black/80 transition-all py-3.5 px-7 rounded-[3px] text-xs uppercase tracking-wider cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Apparel Catalog
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
                <div
                  className="flex gap-4 pb-5 mb-5 border-b border-black/10 items-start relative group"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-xl bg-black/5 flex-shrink-0"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=150&q=80";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-xs sm:text-sm text-black mb-0.5 truncate uppercase tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-black/50 mb-3 uppercase tracking-wider font-mono">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-black/5 p-1 rounded-[3px]">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded-[2px] bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-black font-black font-mono">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded-[2px] bg-white text-black flex items-center justify-center cursor-pointer text-xs font-black disabled:opacity-25 disabled:cursor-not-allowed"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-black text-black font-mono">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-black/30 hover:text-black cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-black/10 bg-white">
            <div className="flex items-center justify-between mb-5 font-mono">
              <span className="font-black text-black uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-black text-lg text-black">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-secondary text-black hover:brightness-110 transition-all py-3.5 px-6 rounded-[3px] text-xs w-full shadow-xs mb-2.5"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center font-black uppercase tracking-wider bg-transparent border border-black/20 text-black hover:bg-black/5 transition-all py-3 px-6 rounded-[3px] text-xs w-full cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
