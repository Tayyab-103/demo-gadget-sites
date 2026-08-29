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
        className={`fixed inset-0 bg-[#0D1B2A]/80 backdrop-blur-xs z-999 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 w-full max-w-[430px] bg-[#F8F6F0] text-[#18222F] z-1000 border-l border-[#C87D3B]/30 flex flex-col transition-transform duration-300 ease-in-out transform shadow-2xl ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-[#C87D3B]/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <span className="text-[#C87D3B] text-base">✈</span>
            <h3 className="m-0 text-sm font-extrabold text-[#0D1B2A] tracking-widest uppercase">
              TRAVELER FLIGHT BAG
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-transparent border-none text-2xl cursor-pointer text-[#18222F]/40 hover:text-[#0D1B2A] leading-none transition-colors"
            aria-label="Close Cart"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#18222F]/50 text-xs font-bold uppercase tracking-wider mb-6">
                Your flight bag is currently empty.
              </p>
              <button
                className="inline-block font-extrabold text-center whitespace-nowrap bg-[#0D1B2A] text-white border border-[#C87D3B] hover:bg-[#C87D3B] transition-all py-3.5 px-7 rounded-full text-xs uppercase tracking-wider cursor-pointer shadow-md"
                onClick={() => setIsCartOpen(false)}
              >
                Explore Luggage &amp; Gear
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
                  className="flex gap-4 pb-5 mb-5 border-b border-[#C87D3B]/15 items-start relative group bg-white p-3.5 rounded-2xl border"
                  key={item.Id}
                >
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-[70px] h-[70px] object-cover rounded-xl bg-black/5 flex-shrink-0 border border-[#C87D3B]/20"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=150&q=80";
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-[#0D1B2A] mb-0.5 truncate tracking-tight">
                      {item.Name}
                    </div>
                    <div className="text-[0.62rem] text-[#C87D3B] mb-3 uppercase tracking-wider font-extrabold">
                      {item.Label || "Single Unit"}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      {/* Stepper Controls */}
                      <div className="flex items-center gap-1 bg-[#F8F6F0] p-1 rounded-lg border border-[#C87D3B]/30">
                        <button
                          onClick={handleDecrease}
                          disabled={!canDecrease}
                          className="w-5 h-5 rounded bg-white text-[#0D1B2A] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed shadow-2xs"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs text-[#0D1B2A] font-extrabold">
                          {item.Qty}
                        </span>
                        <button
                          onClick={handleIncrease}
                          disabled={!canIncrease}
                          className="w-5 h-5 rounded bg-white text-[#0D1B2A] flex items-center justify-center cursor-pointer text-xs font-bold disabled:opacity-25 disabled:cursor-not-allowed shadow-2xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-sm font-extrabold text-[#0D1B2A]">
                        ${item.Price}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="bg-transparent border-none text-[#18222F]/30 hover:text-[#0D1B2A] cursor-pointer text-lg px-1 transition-colors self-start leading-none"
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
          <div className="p-6 border-t border-[#C87D3B]/20 bg-white">
            <div className="flex items-center justify-between mb-5">
              <span className="font-bold text-[#0D1B2A] uppercase text-xs tracking-wider">
                Subtotal
              </span>
              <span className="font-black text-xl text-[#0D1B2A]">
                ${getCartTotal()}
              </span>
            </div>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center font-extrabold uppercase tracking-wider bg-[#C87D3B] text-white hover:bg-[#D98745] transition-all py-3.5 px-6 rounded-full text-xs w-full shadow-lg mb-2.5 hover:scale-[1.01]"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Priority Checkout →
            </Link>

            <button
              onClick={() => setIsCartOpen(false)}
              className="inline-flex items-center justify-center text-xs tracking-wider bg-transparent border border-[#C87D3B]/40 text-[#0D1B2A] hover:bg-[#F8F6F0] transition-all py-3 px-6 rounded-full w-full cursor-pointer font-bold"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </>
  );
}
