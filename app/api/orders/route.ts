import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        },
        orderItems: {
          include: {
            menuItem: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { userId, items, deliveryAddress, deliveryInstructions, totalAmount } = body

    // Create order
    const order = await prisma.order.create({
      data: {
        userId,
        totalAmount: parseFloat(totalAmount),
        deliveryAddress,
        deliveryInstructions,
        estimatedDeliveryTime: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now
        orderItems: {
          create: items.map((item: any) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: parseFloat(item.price),
            notes: item.notes
          }))
        }
      },
      include: {
        orderItems: {
          include: {
            menuItem: true
          }
        }
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
} 