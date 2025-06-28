import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Main Courses',
        description: 'Delicious main dishes',
        image: '/logo.jfif'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Popular',
        description: 'Our most loved dishes',
        image: '/logo.jfif'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Grilled',
        description: 'Fresh grilled chicken dishes',
        image: '/logo.jfif'
      }
    })
  ])

  // Create menu items
  const menuItems = await Promise.all([
    prisma.menuItem.create({
      data: {
        name: 'Grilled Chicken Breast',
        description: 'Tender grilled chicken breast marinated with herbs and spices, served with fresh vegetables and your choice of sauce.',
        price: 12.99,
        categoryId: categories[0].id,
        isPopular: true,
        image: '/grilling.jfif'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Shawarma',
        description: 'Traditional shawarma with tender chicken, fresh vegetables, and our signature garlic sauce wrapped in warm pita bread.',
        price: 8.99,
        categoryId: categories[0].id,
        isPopular: true,
        image: '/shawarma.jfif'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with tender chicken and aromatic spices, served with raita and pickled onions.',
        price: 15.99,
        categoryId: categories[0].id,
        isPopular: false,
        image: '/bryani.jfif'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Kebab',
        description: 'Skewered chicken marinated in herbs and spices, grilled to perfection and served with grilled vegetables.',
        price: 10.99,
        categoryId: categories[0].id,
        isPopular: false,
        image: '/kebab.jfif'
      }
    }),
    // Adding 3 more food items
    prisma.menuItem.create({
      data: {
        name: 'Chicken Burger',
        description: 'Juicy grilled chicken patty with fresh lettuce, tomatoes, and special sauce in a soft bun.',
        price: 9.99,
        categoryId: categories[0].id,
        isPopular: true,
        image: '/hamburger.jfif'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Hot Dog',
        description: 'Grilled chicken sausage with onions, mustard, and ketchup in a fresh bun.',
        price: 6.99,
        categoryId: categories[0].id,
        isPopular: false,
        image: '/hotdog.jfif'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Subway Style Chicken',
        description: 'Fresh chicken sandwich with your choice of vegetables and sauces, just like Subway!',
        price: 7.99,
        categoryId: categories[0].id,
        isPopular: true,
        image: '/Subway.jfif'
      }
    })
  ])

  // Create delivery zones
  const deliveryZones = await Promise.all([
    prisma.deliveryZone.create({
      data: {
        name: 'City Center',
        deliveryFee: 2.99,
        minOrderAmount: 15.00,
        estimatedDeliveryTime: 25
      }
    }),
    prisma.deliveryZone.create({
      data: {
        name: 'Suburbs',
        deliveryFee: 4.99,
        minOrderAmount: 20.00,
        estimatedDeliveryTime: 35
      }
    }),
    prisma.deliveryZone.create({
      data: {
        name: 'Outer Areas',
        deliveryFee: 6.99,
        minOrderAmount: 25.00,
        estimatedDeliveryTime: 45
      }
    })
  ])

  console.log('Database seeded successfully!')
  console.log(`Created ${categories.length} categories`)
  console.log(`Created ${menuItems.length} menu items`)
  console.log(`Created ${deliveryZones.length} delivery zones`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 