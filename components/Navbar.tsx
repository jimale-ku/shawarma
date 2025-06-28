'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { useOrderBasket } from './OrderBasketContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items } = useOrderBasket()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-maroon-900 shadow-md sticky top-0 z-50 animate-fadeIn font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jfif"
              alt="Chicken on Bike Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-3xl font-extrabold tracking-wide text-white drop-shadow-lg">
              Halal <span className="text-secondary-300">Chic</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-100 hover:text-secondary-300 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-gray-100 hover:text-secondary-300 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-gray-100 hover:text-secondary-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-100 hover:text-secondary-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/checkout" className="relative p-2 text-gray-100 hover:text-secondary-300 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            </Link>
            <Link href="/login" className="btn-primary">
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-100 hover:text-secondary-300 transition-colors">
                Home
              </Link>
              <Link href="/menu" className="text-gray-100 hover:text-secondary-300 transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-gray-100 hover:text-secondary-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-100 hover:text-secondary-300 transition-colors">
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <Link href="/checkout" className="relative p-2 text-gray-100 hover:text-secondary-300 transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                </Link>
                <Link href="/login" className="btn-primary">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 