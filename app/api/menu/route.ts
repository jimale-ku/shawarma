import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';

export async function GET() {
  try {
    const menuItems = await prisma.menuItem.findMany({
      where: { isAvailable: true },
      include: { category: true }
    });
    return NextResponse.json(menuItems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch menu items' }, { status: 500 });
  }
} 