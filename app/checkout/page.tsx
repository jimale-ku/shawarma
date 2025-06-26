'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MapPin, Clock, CreditCard, Truck } from 'lucide-react'

export default function CheckoutPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: '',
    paymentMethod: 'cash'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock cart data - in real app this would come from context/state
  const cartItems = [
    { id: '1', name: 'Grilled Chicken Breast', price: 12.99, quantity: 2 },
    { id: '2', name: 'Chicken Shawarma', price: 8.99, quantity: 1 }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = 2.99
  const total = subtotal + deliveryFee

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In real app, this would create the order via API
      const orderData = {
        items: cartItems.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        deliveryAddress: formData.address,
        deliveryInstructions: formData.instructions,
        totalAmount: total,
        paymentMethod: formData.paymentMethod
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Redirect to order confirmation
      router.push('/order-confirmation?orderId=12345')
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
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
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
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      checked={formData.paymentMethod === 'mobile'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="text-primary-600"
                    />
                    <span>Mobile Money</span>
                  </label>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-3 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Truck className="w-5 h-5" />
                    <span>Place Order - ${total.toFixed(2)}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 