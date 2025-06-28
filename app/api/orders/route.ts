import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get('orderId')
  if (orderId) {
    // Fetch a single order by ID (for order confirmation page)
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        user: true,
        orderItems: { include: { menuItem: true } },
      },
    })
    if (!order) return NextResponse.json(null, { status: 404 })
    return NextResponse.json(order)
  }
  if (searchParams.get('all') === 'true') {
    // Return all orders for admin
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        orderItems: { include: { menuItem: true } },
      },
    })
    return NextResponse.json(orders)
  }
  // Return mock orders (or implement user-specific orders if needed)
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
  try {
    const data = await request.json();
    // data: { items, deliveryAddress, deliveryInstructions, totalAmount, paymentMethod, name, phone }
    // For now, create a user on the fly (in real app, use authenticated user)
    const user = await prisma.user.create({
      data: {
        name: data.name || 'Guest',
        email: data.email || `guest${Date.now()}@halalchick.com`,
        password: 'hashedpassword', // In real app, never store plain text
        phone: data.phone || '',
        address: data.deliveryAddress || '',
      },
    });
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        status: 'CONFIRMED',
        totalAmount: data.totalAmount,
        deliveryFee: 2.99,
        deliveryAddress: data.deliveryAddress,
        deliveryInstructions: data.deliveryInstructions,
        paymentStatus: 'PAID',
        paymentMethod: data.paymentMethod?.toUpperCase() || 'CASH',
        orderItems: {
          create: data.items.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { orderItems: true },
    });
    return NextResponse.json({
      id: order.id,
      status: order.status,
      createdAt: order.createdAt,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
} 