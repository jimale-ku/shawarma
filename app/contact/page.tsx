import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary-600">Contact Us</h1>
        <form
          action="https://formspree.io/f/movwpqzg"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input-field"
              placeholder="Your Name"
            />
          </div>
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
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              className="input-field"
              rows={5}
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
} 