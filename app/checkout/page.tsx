
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Clock, CreditCard, Truck } from 'lucide-react'
import { useOrderBasket } from '../../components/OrderBasketContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items: cartItems, total: basketTotal, clearBasket, removeItem } = useOrderBasket()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: '',
    paymentMethod: 'cash'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = cartItems.length > 0 ? 2.99 : 0
  const total = subtotal + deliveryFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const orderData = {
        items: cartItems.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        deliveryAddress: formData.address,
        deliveryInstructions: formData.instructions,
        totalAmount: total,
        paymentMethod: formData.paymentMethod,
        name: formData.name,
        phone: formData.phone
      }

      // Send order to backend
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })
      if (!res.ok) throw new Error('Failed to create order')
      const result = await res.json()

      clearBasket()
      // Redirect to order confirmation with real order ID
      router.push(`/order-confirmation?orderId=${result.id}`)
    } catch (error) {
      console.error('Error creating order:', error)
      alert('Failed to create order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="lg:order-2">
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your order basket is empty.</p>
                ) : cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center gap-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="flex items-center space-x-2 text-primary-700">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Estimated Delivery: 25-35 minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Delivery Information */}
              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>Delivery Information</span>
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-field"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="input-field"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Address
                    </label>
                    <textarea
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="input-field"
                      rows={3}
                      placeholder="Enter your complete delivery address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea
                      value={formData.instructions}
                      onChange={(e) => setFormData({...formData, instructions: e.target.value})}
                      className="input-field"
                      rows={2}
                      placeholder="Any special instructions for delivery"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="card">
                <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  <span>Payment Method</span>
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === 'cash'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="text-primary-600"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="text-primary-600"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors text-lg flex items-center justify-center"
                disabled={isSubmitting || cartItems.length === 0}
              >
                {isSubmitting ? 'Placing Order...' : 'Place Order'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 