import { NextResponse } from 'next/server'

export async function GET() {
  // Return mock orders
  return NextResponse.json([
    {
      id: 1,
      user: { name: 'Demo User', email: 'demo@example.com' },
      orderItems: [
        { menuItem: { name: 'Grilled Chicken Breast' }, quantity: 2, price: 12.99 }
      ],
      createdAt: new Date().toISOString(),
      totalAmount: 25.98,
      deliveryAddress: '123 Demo Street',
      deliveryInstructions: 'Leave at door',
      estimatedDeliveryTime: new Date(Date.now() + 30 * 60 * 1000).toISOString()
    }
  ]);
}

export async function POST(request: Request) {
  // Mock order creation: always succeed
  return NextResponse.json({
    id: 2,
    status: 'CONFIRMED',
    createdAt: new Date().toISOString()
  });
} 