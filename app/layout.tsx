import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import { OrderBasketProvider } from '../components/OrderBasketContext';
import OrderBasketButton from '../components/OrderBasketButton';

export const metadata = {
  title: 'Halal Chick',
  description: 'Fresh halal meals delivered fast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <OrderBasketProvider>
          <Navbar />
          {children}
          <OrderBasketButton />
        </OrderBasketProvider>
      </body>
    </html>
  );
}
