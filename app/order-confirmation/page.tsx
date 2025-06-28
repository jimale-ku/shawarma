'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react'

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!orderId) return
    setLoading(true)
    fetch(`/api/orders?orderId=${orderId}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch order details.')
        setLoading(false)
      })
  }, [orderId])

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>
  if (!order) return <div className="min-h-screen flex items-center justify-center">Order not found.</div>

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Your order has been successfully placed</p>
        </div>

        {/* Order Details */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-semibold">#{order.id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status:</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {order.status}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold text-lg">${Number(order.totalAmount).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <Clock className="w-5 h-5 text-primary-600" />
            <span>Delivery Information</span>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium">Delivery Address</p>
                <p className="text-gray-600">{order.deliveryAddress}</p>
              </div>
            </div>
            {order.deliveryInstructions && (
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-600 mt-0.5" />
                <div>
                  <p className="font-medium">Delivery Instructions</p>
                  <p className="text-gray-600">{order.deliveryInstructions}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Items */}
        <div className="card mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Items</h2>
          <div className="space-y-3">
            {order.orderItems?.map((item: any, index: number) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.menuItem?.name || 'Item'}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/menu" className="btn-primary text-center">
            Order More Food
          </Link>
          <Link href="/orders" className="btn-secondary text-center">
            View My Orders
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center text-gray-600">
          <p>Need help? Contact us at support@halalchick.com</p>
          <p>or call us at +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
} 