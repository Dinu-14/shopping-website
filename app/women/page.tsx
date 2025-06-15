import React from 'react';

const products = [
  {
    name: 'Elegant Dress',
    price: '3200 LKR',
    image: '/one.webp',
    description: 'A beautiful dress for any occasion.',
  },
  {
    name: 'Chic Handbag',
    price: '$25',
    image: '/two.webp',
    description: 'Trendy and spacious handbag.',
  },
  {
    name: 'Stylish Shoes',
    price: '$30',
    image: '/three.webp',
    description: 'Comfortable and fashionable shoes.',
  },
  {
    name: 'Summer Hat',
    price: '$15',
    image: '/vercel.svg',
    description: 'Perfect for sunny days.',
  },
  {
    name: 'Classic Scarf',
    price: '$10',
    image: '/globe.svg',
    description: 'Add a touch of elegance to any outfit.',
  },
  {
    name: 'Denim Jacket',
    price: '$40',
    image: '/window.svg',
    description: 'A must-have for your wardrobe.',
  },
];

const WomenPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Women's Collection</h1>
      <p className="mb-8 text-gray-600">Discover the latest trends in women's fashion. Shop dresses, accessories, shoes, and more!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-sm text-gray-400 mb-2">{product.description}</p>
            <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-pink-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Special Offer!</h2>
        <p className="mb-4">Sign up for our newsletter and get 10% off your first order.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="p-2 rounded border w-full" />
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default WomenPage;