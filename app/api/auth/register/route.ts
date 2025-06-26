import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  // Mock registration: always succeed
  return NextResponse.json({
    id: 1,
    name: 'Demo User',
    email: 'demo@example.com',
    phone: '1234567890',
    address: '123 Demo Street',
    role: 'user',
    createdAt: new Date().toISOString()
  })
} 