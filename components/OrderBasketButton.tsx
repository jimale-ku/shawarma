"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useOrderBasket } from "./OrderBasketContext";

export default function OrderBasketButton() {
  const { items, total } = useOrderBasket();
  if (items.length === 0) return null;

  return (
    <Link
      href="/checkout"
      className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3 hover:bg-primary-700 transition-colors"
      style={{ minWidth: 180 }}
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="font-semibold">{items.length} item{items.length > 1 ? 's' : ''}</span>
      <span className="ml-2 font-bold">${total.toFixed(2)}</span>
    </Link>
  );
} 