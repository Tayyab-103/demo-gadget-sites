"use client";

import React, { createContext, useContext, useState, useSyncExternalStore, ReactNode } from "react";
import siteConfigData from "../../config/site-config.json";
import { Product, CartItem, SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product, quantity: number, price: number | string, label?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getCartTotal: () => string;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

let memoryCart: CartItem[] = [];
let isLoadedFromStorage = false;
const listeners = new Set<() => void>();
const EMPTY_CART: CartItem[] = [];

function getServerCart(): CartItem[] {
  return EMPTY_CART;
}

function emitChange() {
  listeners.forEach((l) => l());
}

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return EMPTY_CART;
  if (!isLoadedFromStorage) {
    isLoadedFromStorage = true;
    try {
      const saved = localStorage.getItem("cartPdtArr");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          memoryCart = parsed;
        }
      }
    } catch {
      // ignore
    }
  }
  return memoryCart;
}

function updateCartStorage(newCart: CartItem[]) {
  memoryCart = newCart;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("cartPdtArr", JSON.stringify(newCart));
    } catch {
      // ignore
    }
  }
  emitChange();
}

function subscribeCart(listener: () => void) {
  listeners.add(listener);
  const handleStorage = (e: StorageEvent) => {
    if (e.key === "cartPdtArr") {
      isLoadedFromStorage = false;
      getStoredCart();
      emitChange();
    }
  };
  window.addEventListener("storage", handleStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSyncExternalStore(
    subscribeCart,
    getStoredCart,
    getServerCart
  );

  const addToCart = (product: Product, quantity: number, price: number | string, label = "") => {
    const limitOne = siteConfig.oneProductCartLimit === "yes";

    if (limitOne) {
      const newItem: CartItem = {
        Id: product.id,
        Name: product.name,
        Image: product.image,
        Price: price,
        Qty: quantity,
        Total: (parseFloat(String(price)) * quantity).toFixed(2),
        billModel: product.billingModel,
        StickyId: product.stickyId,
        trlPrice: product.ssPrice,
        EnableMaxqty: product.bundles ? product.bundles.length : 1,
        Label: label,
        bundles: product.bundles
      };
      updateCartStorage([newItem]);
      setIsCartOpen(true);
      return;
    }

    const currentCart = memoryCart;
    const existingIndex = currentCart.findIndex((item) => item.Id === product.id);

    if (existingIndex > -1) {
      const updated = [...currentCart];
      const existingItem = updated[existingIndex];
      const newQty = existingItem.Qty + quantity;
      updated[existingIndex] = {
        ...existingItem,
        Qty: newQty,
        Total: (parseFloat(String(price)) * newQty).toFixed(2)
      };
      updateCartStorage(updated);
    } else {
      const newItem: CartItem = {
        Id: product.id,
        Name: product.name,
        Image: product.image,
        Price: price,
        Qty: quantity,
        Total: (parseFloat(String(price)) * quantity).toFixed(2),
        billModel: product.billingModel,
        StickyId: product.stickyId,
        trlPrice: product.ssPrice,
        EnableMaxqty: product.bundles ? product.bundles.length : 1,
        Label: label,
        bundles: product.bundles
      };
      updateCartStorage([...currentCart, newItem]);
    }

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    updateCartStorage(memoryCart.filter((item) => item.Id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const updated = memoryCart.map((item) => {
      if (item.Id !== productId) return item;
      const matchedBundle = item.bundles?.find((b) => b.quantity === quantity);
      if (matchedBundle) {
        return {
          ...item,
          Qty: matchedBundle.quantity,
          Price: (matchedBundle.price / matchedBundle.quantity).toFixed(2),
          Total: matchedBundle.price.toFixed(2)
        };
      }
      return {
        ...item,
        Qty: quantity,
        Total: (parseFloat(String(item.Price)) * quantity).toFixed(2)
      };
    });

    updateCartStorage(updated);
  };

  const clearCart = () => {
    updateCartStorage([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.Total), 0).toFixed(2);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.Qty, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
