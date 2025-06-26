'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In real app, this would authenticate via API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to home page after successful login
      window.location.href = '/'
    } catch (error) {
      console.error('Login error:', error)
      setError('Login failed. Please check your credentials.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary-600">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input-field"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input-field"
              placeholder="Your password"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/register" className="text-primary-600 hover:underline">Don't have an account? Register</a>
        </div>
      </div>
    </div>
  )
} 