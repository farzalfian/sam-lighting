'use client';

import Image from 'next/image';
import { useState } from 'react';
import { featuredProducts } from '@/lib/data2';

export default function SoundPage() {
  const soundProducts = featuredProducts.filter(
    (product) => product.category === 'sound'
  );

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] mb-12 shadow-xl rounded-lg overflow-hidden">
          <Image
            src="/images/music.jpg" // ganti jika punya gambar hero sound khusus
            alt="Sound Equipment"
            fill
            className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-transparent to-black/70">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
              SOUND EQUIPMENT
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-4">
              Solusi audio terbaik untuk setiap acara Anda
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
          {soundProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="relative aspect-square bg-gray-900 rounded-t-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-white/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={500}
              height={300}
              className="w-full rounded-md mb-4 object-cover"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
