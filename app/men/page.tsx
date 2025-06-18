import React from 'react';

const menProducts = [
  {
    id: 1,
    name: 'Classic Denim Jacket',
    price: '4500 LKR',
    image: '/one.webp',
    description: 'A timeless denim jacket for all seasons.',
  },
  {
    id: 2,
    name: 'Slim Fit Chinos',
    price: '3200 LKR',
    image: '/two.webp',
    description: 'Comfortable and stylish chinos for daily wear.',
  },
  {
    id: 3,
    name: 'Casual Sneakers',
    price: '5000 LKR',
    image: '/three.webp',
    description: 'Trendy sneakers to complete your look.',
  },
  {
    id: 4,
    name: 'Cotton Polo Shirt',
    price: '2100 LKR',
    image: '/vercel.svg',
    description: 'Soft cotton polo shirt in multiple colors.',
  },
  {
    id: 5,
    name: 'Leather Belt',
    price: '1500 LKR',
    image: '/globe.svg',
    description: 'Premium quality leather belt for formal and casual wear.',
  },
  {
    id: 6,
    name: 'Sports Watch',
    price: '7500 LKR',
    image: '/window.svg',
    description: 'Water-resistant sports watch with modern design.',
  },
];

const testimonials = [
  {
    name: "John D.",
    text: "Great quality and fast delivery! The chinos fit perfectly.",
  },
  {
    name: "Alex P.",
    text: "Love the sneakers. Super comfortable for everyday use.",
  },
  {
    name: "Ravi S.",
    text: "The denim jacket is my new favorite. Highly recommend!",
  },
];

const MenPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {menProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Add to Cart</button>
          </div>
        ))}
      </div>
      {/* Testimonials Section */}
      <section className="bg-blue-50 py-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow w-72">
              <p className="italic text-gray-700">"{t.text}"</p>
              <p className="mt-2 font-semibold text-right text-blue-700">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenPage;
