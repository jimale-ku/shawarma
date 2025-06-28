"use client";

import React, { createContext, useContext, useState } from "react";

export type BasketItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

interface OrderBasketContextType {
  items: BasketItem[];
  addItem: (item: Omit<BasketItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearBasket: () => void;
  total: number;
}

const OrderBasketContext = createContext<OrderBasketContextType | undefined>(undefined);

export const useOrderBasket = () => {
  const ctx = useContext(OrderBasketContext);
  if (!ctx) throw new Error("useOrderBasket must be used within OrderBasketProvider");
  return ctx;
};

export const OrderBasketProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<BasketItem[]>([]);

  const addItem = (item: Omit<BasketItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i)).filter((i) => i.quantity > 0)
    );
  };

  const clearBasket = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <OrderBasketContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearBasket, total }}>
      {children}
    </OrderBasketContext.Provider>
  );
}; 