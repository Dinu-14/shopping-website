import React from 'react'
import Hero from '../../components/Hero'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* Featured Products Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Example product cards */}
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="/one.webp" alt="Product 1" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 font-semibold">Stylish Dress</h3>
              <p className="text-gray-500">3000 LKR</p>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="/two.webp" alt="Product 2" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 font-semibold">Trendy Bag</h3>
              <p className="text-gray-500">$20</p>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="/three.webp" alt="Product 3" className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 font-semibold">Fashion Shoes</h3>
              <p className="text-gray-500">$20</p>
              <button className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/women">
              <div className="bg-pink-100 px-8 py-4 rounded-lg font-semibold cursor-pointer hover:bg-pink-200 transition">Women</div>
            </Link>
            <div className="bg-blue-100 px-8 py-4 rounded-lg font-semibold">Men</div>
            <div className="bg-green-100 px-8 py-4 rounded-lg font-semibold">Kids</div>
            <div className="bg-yellow-100 px-8 py-4 rounded-lg font-semibold">Accessories</div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-4 text-gray-600">Get the latest updates and offers.</p>
          <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="p-2 rounded border w-full" />
            <button type="submit" className="bg-black text-white px-6 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </section>
      {/* Add more sections/components as needed */}
    </div>
  )
}

export default HomePage