'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/lib/data2';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

export default function LightingPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const isInView = useInView(productsRef, { once: true, amount: 0.1 });

  const lightingProducts = featuredProducts.filter(
    (product) => product.category === 'lighting'
  );

  // Enhanced products with features
  const enhancedProducts = lightingProducts.map((product, index) => ({
    ...product,
    subcategory: ['stage', 'ambient', 'spot', 'led'][index % 4],
    features: [
      'Hemat Energi',
      'Tahan Lama',
      'Remote Control',
      'Multiple Colors'
    ].slice(0, Math.floor(Math.random() * 2) + 2),
  }));

  // Simple animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 min-h-screen">
      
      {/* Enhanced Hero Section */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-gray-900/90">
            <Image
              src="/images/hero-background.jpg"
              alt="Lighting Equipment"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-slate-900/40 to-slate-700/30" />
          
          {/* Floating particles - reduced for performance */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-sm"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-6 border border-yellow-400/30">
              ✨ Premium Lighting Solutions
            </div>
            
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-4xl md:text-6xl lg:text-7xl font-black drop-shadow-2xl mb-6 leading-tight">
              ILLUMINATE
              <br />
              <span className="text-white">YOUR WORLD</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-base md:text-lg max-w-2xl mb-8 leading-relaxed px-4"
          >
            Ciptakan atmosfer yang sempurna dengan koleksi peralatan lighting profesional kami. 
            Dari panggung hingga ruang pribadi, wujudkan visi pencahayaan Anda.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4"
          >
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Jelajahi Produk
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Konsultasi Gratis
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-yellow-400 text-xl"
            >
              ↓
            </motion.div>
            <p className="text-gray-400 text-xs mt-2">Scroll untuk melihat produk</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Koleksi <span className="text-yellow-400">Lighting</span> Terbaik
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Temukan berbagai peralatan pencahayaan profesional untuk semua kebutuhan Anda
          </p>
        </motion.div>

        {/* Optimized Product Grid */}
        <motion.div
          ref={productsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 pb-16"
        >
          {enhancedProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(product.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-b from-slate-700/30 to-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-slate-600/50 hover:border-yellow-400/50">
                
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-b from-slate-800/50 to-gray-900/50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Simple hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold uppercase">
                    {product.subcategory}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h3 className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features - limited for mobile */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-purple-700/50 text-purple-200 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between pt-2 border-t border-purple-700/50">
                    <span className="text-gray-400 text-sm">Tersedia</span>
                    <button className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                      Lihat Detail →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 bg-gradient-to-r from-purple-800/20 to-purple-900/30 rounded-2xl border border-purple-700/30 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Butuh Konsultasi Khusus?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto px-4">
            Tim ahli kami siap membantu Anda menemukan solusi pencahayaan yang tepat.
          </p>
          <a href='/contact'>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Hubungi Sekarang
            </button>
          </a>
        </motion.div>
      </div>

      {/* Optimized Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-purple-800 to-purple-900 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-purple-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <button
                  className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-red-500 transition-colors flex items-center justify-center text-sm"
                  onClick={() => setSelectedProduct(null)}
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 space-y-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  {selectedProduct.name}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-white font-semibold mb-2 text-sm">Fitur Unggulan:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <span key={idx} className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-xs">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-3 border-t border-purple-700">
                  <button className="flex-1 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg text-sm">
                    Sewa Sekarang
                  </button>
                  <button className="flex-1 py-2 border border-yellow-400 text-yellow-400 font-bold rounded-lg text-sm hover:bg-yellow-400 hover:text-black transition-all">
                    Tanya Detail
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}