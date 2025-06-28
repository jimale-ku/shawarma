"use client";
import React from 'react'
import Link from 'next/link'
import { ShoppingCart, MapPin, Clock, Star } from 'lucide-react'
import { useOrderBasket } from '../components/OrderBasketContext';

export default function Home() {
  const { addItem } = useOrderBasket();
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon-900 to-primary-800 text-white animate-fadeIn relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg animate-slideUp">
              Fresh Halal Chicken
              <span className="block text-secondary-400 animate-fadeIn delay-200">Delivered to You</span>
            </h1>
            <p className="text-2xl mb-10 max-w-2xl mx-auto animate-fadeIn delay-300">
              Order delicious halal chicken and meals prepared with the finest ingredients. 
              Fast delivery, great prices, and 100% halal certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-400">
              <Link href="/menu" className="btn-primary text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform">
                Order Now
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-3 hover:scale-105 transition-transform">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* Background Hamburger Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hamburger.jfif" 
            alt="Delicious Hamburger" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white animate-fadeIn delay-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">Why Choose Halal Chick?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slideUp delay-300">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <ShoppingCart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
              <p className="text-gray-600">Order online with just a few clicks. Track your order in real-time.</p>
            </div>
            <div className="text-center animate-slideUp delay-400">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery to your doorstep. Average delivery time: 30 minutes.</p>
            </div>
            <div className="text-center animate-slideUp delay-500">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% halal certified ingredients. Fresh and delicious every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="py-16 bg-gray-50 animate-fadeIn delay-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Items</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item) => (
              <div key={item.id} className="card hover:shadow-2xl hover:scale-105 transition-transform duration-300 animate-slideUp delay-400">
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-square object-cover rounded-lg mb-4 w-full h-40"
                />
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-600 font-bold">${item.price}</span>
                  <button
                    type="button"
                    className="btn-primary text-sm"
                    onClick={() => addItem({ id: String(item.id), name: item.name, price: Number(item.price), image: item.image })}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/menu" className="btn-primary hover:scale-105 transition-transform">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white animate-fadeIn delay-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who choose Halal Chick for their meals.</p>
          <Link href="/menu" className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all">
            Start Ordering Now
          </Link>
        </div>
      </section>
    </div>
  )
}

const popularItems = [
  {
    id: 1,
    name: "Grilled Chicken Breast",
    description: "Tender grilled chicken breast with herbs and spices",
    price: "12.99",
    image: "/breast.jfif"
  },
  {
    id: 2,
    name: "Chicken Shawarma",
    description: "Traditional shawarma with fresh vegetables and sauce",
    price: "8.99",
    image: "/shawarma.jfif"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Fragrant rice with tender chicken and aromatic spices",
    price: "15.99",
    image: "/bryani.jfif"
  },
  {
    id: 4,
    name: "Chicken Kebab",
    description: "Skewered chicken with grilled vegetables",
    price: "10.99",
    image: "/kebab.jfif"
  }
]