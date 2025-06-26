import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Grilled',
        description: 'Fresh grilled chicken dishes',
        image: '/images/categories/grilled.jpg'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Curry',
        description: 'Rich and flavorful curry dishes',
        image: '/images/categories/curry.jpg'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Wraps',
        description: 'Delicious wraps and sandwiches',
        image: '/images/categories/wraps.jpg'
      }
    }),
    prisma.category.create({
      data: {
        name: 'Sides',
        description: 'Perfect accompaniments',
        image: '/images/categories/sides.jpg'
      }
    })
  ])

  // Create menu items
  const menuItems = await Promise.all([
    prisma.menuItem.create({
      data: {
        name: 'Grilled Chicken Breast',
        description: 'Tender grilled chicken breast marinated with herbs and spices',
        price: 12.99,
        categoryId: categories[0].id,
        isPopular: true,
        image: '/images/menu/grilled-breast.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Shawarma',
        description: 'Traditional shawarma with fresh vegetables and garlic sauce',
        price: 8.99,
        categoryId: categories[2].id,
        isPopular: true,
        image: '/images/menu/shawarma.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice with tender chicken and aromatic spices',
        price: 15.99,
        categoryId: categories[1].id,
        isPopular: true,
        image: '/images/menu/biryani.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Kebab',
        description: 'Skewered chicken with grilled vegetables and special marinade',
        price: 10.99,
        categoryId: categories[0].id,
        image: '/images/menu/kebab.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Curry',
        description: 'Rich and creamy curry with tender chicken pieces',
        price: 13.99,
        categoryId: categories[1].id,
        image: '/images/menu/curry.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Chicken Wrap',
        description: 'Fresh wrap with grilled chicken, lettuce, and special sauce',
        price: 7.99,
        categoryId: categories[2].id,
        image: '/images/menu/wrap.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'French Fries',
        description: 'Crispy golden fries seasoned with herbs',
        price: 3.99,
        categoryId: categories[3].id,
        image: '/images/menu/fries.jpg'
      }
    }),
    prisma.menuItem.create({
      data: {
        name: 'Steamed Rice',
        description: 'Perfectly steamed basmati rice',
        price: 2.99,
        categoryId: categories[3].id,
        image: '/images/menu/rice.jpg'
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