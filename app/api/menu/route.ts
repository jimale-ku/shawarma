import { NextResponse } from 'next/server';

export async function GET() {
  // Return mock menu data
  return NextResponse.json([
    { id: 1, name: "Grilled Chicken Breast", price: 12.99 },
    { id: 2, name: "Chicken Shawarma", price: 8.99 }
  ]);
} 