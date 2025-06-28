"use client";

import { useEffect, useState } from "react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("/api/orders?all=true")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch orders.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin: All Orders</h1>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Total</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Created</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="px-4 py-2 font-mono">{order.id}</td>
                    <td className="px-4 py-2">{order.user?.name || 'Guest'}<br /><span className="text-xs text-gray-500">{order.user?.email}</span></td>
                    <td className="px-4 py-2">{order.deliveryAddress}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2 font-semibold">${Number(order.totalAmount).toFixed(2)}</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc pl-4">
                        {order.orderItems?.map((item: any, idx: number) => (
                          <li key={idx}>{item.menuItem?.name || 'Item'} x {item.quantity}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-4 py-2 text-xs">{new Date(order.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {orders.length === 0 && <div className="text-gray-500 mt-4">No orders found.</div>}
          </div>
        )}
      </div>
    </div>
  );
} 