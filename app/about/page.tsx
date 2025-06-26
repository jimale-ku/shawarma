import React from 'react'
import Link from 'next/link'
import { Clock, Star, Truck, Heart, Users, ChefHat } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section with Chef Photo */}
      <section className="bg-gradient-to-r from-maroon-900 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg animate-slideUp">
            About <span className="text-secondary-300">Halal Chic</span>
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto animate-fadeIn delay-200">
            Our story of passion, quality, and commitment to serving the best halal food
          </p>
        </div>
        {/* Background Chef Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/chefpose.jfif" 
            alt="Our Chefs" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Halal Chick started with a simple dream: to bring delicious, authentic halal food to our community. 
                What began as a small family kitchen has grown into a beloved local favorite, serving thousands of 
                satisfied customers every day.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our passion for quality halal food, commitment to fast delivery, and dedication to our values 
                drives everything we do. We believe that great food should be accessible, affordable, and 
                delivered with care to your doorstep.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="w-6 h-6 text-primary-600" />
                <span className="text-gray-700 font-medium">Made with love and care</span>
              </div>
            </div>
            <div className="animate-slideUp delay-200">
              <div className="relative group">
                <img 
                  src="/tasting.jfif" 
                  alt="Chef Tasting Food" 
                  className="rounded-lg w-full h-80 object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-lg font-semibold">Quality Control</p>
                  <p className="text-sm opacity-90">Every dish is tasted and perfected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Makes Us Different</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slideUp delay-300">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Halal Certified</h3>
              <p className="text-gray-600">Every ingredient and process is certified halal, ensuring the highest standards of quality and authenticity.</p>
            </div>
            <div className="text-center animate-slideUp delay-400">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethically Sourced</h3>
              <p className="text-gray-600">We partner with trusted suppliers who share our commitment to ethical and sustainable practices.</p>
            </div>
            <div className="text-center animate-slideUp delay-500">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast, Hot Delivery</h3>
              <p className="text-gray-600">Your food arrives fresh, hot, and ready to enjoy in record time, maintaining perfect temperature and quality.</p>
            </div>
            <div className="text-center animate-slideUp delay-600">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality + Affordability</h3>
              <p className="text-gray-600">We believe great taste and quality shouldn't break the bank. Enjoy premium halal food at fair prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Mission</h2>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 rounded-lg shadow-lg">
              <p className="text-2xl font-medium leading-relaxed">
                "Our mission is to make delicious halal meals accessible, fast, and affordable for everyone—without compromising on quality."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Team Section with Photo Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Meet Our Team</h2>
          
          {/* Photo Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Man Grilling */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg animate-slideUp delay-300">
              <img 
                src="/grilling.jfif" 
                alt="Chef Grilling" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Master Griller</h3>
                <p className="text-sm opacity-90">Perfecting every flame</p>
              </div>
            </div>

            {/* Chef Cooking */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg animate-slideUp delay-400">
              <img 
                src="/twochefs.jfif" 
                alt="Chef Cooking" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Head Chef</h3>
                <p className="text-sm opacity-90">Crafting authentic flavors</p>
              </div>
            </div>

            {/* Subway Delivery */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg animate-slideUp delay-500">
              <img 
                src="/Subway.jfif" 
                alt="Subway Delivery" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Delivery Team</h3>
                <p className="text-sm opacity-90">Fast & reliable service</p>
              </div>
            </div>
          </div>

          {/* Team Description */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our dedicated team works together to bring you the best halal dining experience. From our master grillers 
              who perfect every flame, to our head chefs who craft authentic flavors, to our delivery team who ensures 
              your food arrives hot and fresh - every member plays a vital role in our mission to serve you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Taste the Difference?</h2>
          <p className="text-xl mb-8">Experience our commitment to quality, taste, and service today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transition-all">
              Order Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 hover:scale-105 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 