import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
