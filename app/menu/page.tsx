"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Star, Clock, Heart } from 'lucide-react'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: "Grilled Chicken Breast",
      description: "Tender grilled chicken breast marinated with herbs and spices, served with fresh vegetables and your choice of sauce.",
      price: "12.99",
      category: "main",
      image: "/grilling.jfif",
      prepTime: "15-20 min",
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: "Chicken Shawarma",
      description: "Traditional shawarma with tender chicken, fresh vegetables, and our signature garlic sauce wrapped in warm pita bread.",
      price: "8.99",
      category: "main",
      image: "/shawarma.jfif",
      prepTime: "10-15 min",
      rating: 4.9,
      popular: true
    },
    {
      id: 3,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with tender chicken and aromatic spices, served with raita and pickled onions.",
      price: "15.99",
      category: "main",
      image: "/bryani.jfif",
      prepTime: "20-25 min",
      rating: 4.7,
      popular: false
    },
    {
      id: 4,
      name: "Chicken Kebab",
      description: "Skewered chicken marinated in herbs and spices, grilled to perfection and served with grilled vegetables.",
      price: "10.99",
      category: "main",
      image: "/kebab.jfif",
      prepTime: "12-18 min",
      rating: 4.6,
      popular: false
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon-900 to-primary-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg animate-slideUp">
            Our <span className="text-secondary-300">Menu</span>
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn delay-200">
            Discover our delicious halal dishes, prepared with the finest ingredients and authentic recipes
          </p>
        </div>
        {/* Background Logo Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="/logo.jfif" 
            alt="Chicken Riding Motorbike Logo" 
            className="w-full h-auto max-h-full opacity-60"
          />
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setSelectedCategory('main')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'main'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Main Courses
            </button>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Item Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-secondary-300 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer" />
                  </div>
                </div>

                {/* Item Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-2xl font-bold text-primary-600">${item.price}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
                  
                  {/* Rating and Prep Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{item.prepTime}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600">Great deals on your favorite dishes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Family Pack</h3>
              <p className="text-lg mb-4">Get 4 main dishes for the price of 3. Perfect for family dinners!</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">$35.99</span>
                <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-400 to-secondary-300 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Lunch Special</h3>
              <p className="text-lg mb-4">Any main dish + drink + side for just $12.99. Available 11 AM - 3 PM.</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold">$12.99</span>
                <button className="bg-white text-secondary-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Order?</h2>
          <p className="text-xl mb-8 text-gray-600">Experience the best halal food in town</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout" className="bg-primary-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-700 hover:scale-105 transition-all">
              Checkout Now
            </Link>
            <Link href="/" className="border-2 border-primary-600 text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-primary-600 hover:text-white hover:scale-105 transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 