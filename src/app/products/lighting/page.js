'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/lib/data2';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function LightingPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const lightingProducts = featuredProducts.filter(
    (product) => product.category === 'lighting'
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] shadow-xl overflow-hidden mb-12 rounded-lg">
        
        {/* Background Zoom In */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-background.jpg"
            alt="Lighting Equipment"
            fill
            className="object-cover brightness-[0.5]"
          />
        </motion.div>

        {/* Overlay + Typing Text + CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
          }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-transparent to-black/80"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-yellow-400 text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
          >
            <TypeAnimation
              sequence={[
                'LIGHTING EQUIPMENT', 2000,
                'CREATING ATMOSPHERE', 2000,
                'BRIGHTEN YOUR EVENT', 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-gray-200 text-lg mt-4 max-w-xl"
          >
            Lighting berkualitas untuk mendukung setiap acara Anda.
          </motion.p>
        </motion.div>
      </div>


        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">
          {lightingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative aspect-square bg-gray-900 rounded-t-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/40 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-xl"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
