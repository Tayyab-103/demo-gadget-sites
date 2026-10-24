"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import siteConfigData from "../../config/site-config.json";
import { Product, CartItem, SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product, quantity: number, price: number | string, label?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getCartTotal: () => string;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const savedCart = localStorage.getItem("cartPdtArr");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (e) {
    console.error("Error parsing cart data from localStorage", e);
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(loadCartFromStorage);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartPdtArr", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, price: number | string, label = "", size = "M") => {
    // If site configuration limits cart to one product
    const limitOne = siteConfig.oneProductCartLimit === "yes";
    const maxQty = product.bundles && product.bundles.length > 0 ? product.bundles.length : 8;
    const clampedQty = Math.min(maxQty, Math.max(1, quantity));
    const matchedBundle = product.bundles?.find((b) => b.quantity === clampedQty);
    const itemTotal = matchedBundle
      ? matchedBundle.price.toFixed(2)
      : (parseFloat(String(price)) * clampedQty).toFixed(2);
    const itemUnitPrice = matchedBundle
      ? (matchedBundle.price / clampedQty).toFixed(2)
      : parseFloat(String(price)).toFixed(2);

    if (limitOne) {
      const newItem: CartItem = {
        Id: product.id,
        Name: product.name,
        Image: product.image,
        Price: itemUnitPrice,
        Qty: clampedQty,
        Total: itemTotal,
        billModel: product.billingModel,
        StickyId: product.stickyId,
        trlPrice: product.ssPrice,
        EnableMaxqty: maxQty,
        Label: label,
        bundles: product.bundles,
        size: size,
        oldPrice: product.oldPrice,
      };
      setCart([newItem]);
      setIsCartOpen(true);
      return;
    }

    setCart((prevCart) => {
      // Find item with matching Id AND matching size
      const existingItemIndex = prevCart.findIndex((item) => item.Id === product.id && (item.size || "M") === size);

      if (existingItemIndex > -1) {
        // Update existing item
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        const newQty = Math.min(maxQty, existingItem.Qty + clampedQty);
        const existingMatchedBundle = existingItem.bundles?.find((b) => b.quantity === newQty);
        
        updatedCart[existingItemIndex] = {
          ...existingItem,
          Qty: newQty,
          Price: existingMatchedBundle
            ? (existingMatchedBundle.price / newQty).toFixed(2)
            : existingItem.Price,
          Total: existingMatchedBundle
            ? existingMatchedBundle.price.toFixed(2)
            : (parseFloat(String(existingItem.Price)) * newQty).toFixed(2)
        };
        return updatedCart;
      } else {
        // Add new item
        const newItem: CartItem = {
          Id: product.id,
          Name: product.name,
          Image: product.image,
          Price: itemUnitPrice,
          Qty: clampedQty,
          Total: itemTotal,
          billModel: product.billingModel,
          StickyId: product.stickyId,
          trlPrice: product.ssPrice,
          EnableMaxqty: maxQty,
          Label: label,
          bundles: product.bundles,
          size: size,
          oldPrice: product.oldPrice,
        };
        return [...prevCart, newItem];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.Id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.Id !== productId) return item;

        const maxQty = item.EnableMaxqty || (item.bundles ? item.bundles.length : 8);
        const clampedQty = Math.min(maxQty, quantity);

        const matchedBundle = item.bundles?.find((b) => b.quantity === clampedQty);
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
          Qty: clampedQty,
          Total: (parseFloat(String(item.Price)) * clampedQty).toFixed(2)
        };
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.Total), 0).toFixed(2);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.Qty, 0);
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
