import React from 'react';
import Slider from 'react-slick'; // Import the Slider component

const Hero = () => {
  //  Declare settings before return
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/one.web",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "3000LKR",

    },
    {
      id: 1,
      img: "/two.web",
      title: "Trending Accre",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",

    },
    {
      id: 2,
      img: "/three.web",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",

    },
  ]
  return (
    <section className="relative bg-gradient-to-r from-pink-100 to-blue-100 py-16 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WOMEN'S LATEST FASHION SALE</h1>
          <p className="text-lg mb-6">Trending Items & Accessories</p>
          <span className="inline-block bg-black text-white px-4 py-2 rounded mb-4">3000 LKR</span>
          <br />
          <button className="bg-pink-500 text-white px-6 py-3 rounded font-semibold hover:bg-pink-600 transition">Shop Now</button>
        </div>
        <div>
          <img src="/one.webp" alt="Hero Banner" className="w-80 h-80 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
