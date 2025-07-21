'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { featuredProducts } from '@/lib/data2';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Filter Configuration
const FILTERS = [
  { id: 'all', label: 'Semua Produk', icon: '💡' },
  { id: 'stage', label: 'Panggung', icon: '🎭' },
  { id: 'ambient', label: 'Ambient', icon: '✨' },
  { id: 'spot', label: 'Spot Light', icon: '🔦' },
  { id: 'led', label: 'LED', icon: '🌈' }
];

export default function LightingPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  const isInView = useInView(productsRef, { once: true, amount: 0.2 });

  const lightingProducts = featuredProducts.filter(
    (product) => product.category === 'lighting'
  );

  // Add mock subcategories to products for filtering
  const enhancedProducts = lightingProducts.map((product, index) => ({
    ...product,
    subcategory: ['stage', 'ambient', 'spot', 'led'][index % 4],
    features: [
      'Hemat Energi',
      'Tahan Lama',
      'Remote Control',
      'Multiple Colors'
    ].slice(0, Math.floor(Math.random() * 3) + 2),
    gallery: [product.image, product.image, product.image] // Mock gallery
  }));

  const filteredProducts = activeFilter === 'all' 
    ? enhancedProducts 
    : enhancedProducts.filter(product => product.subcategory === activeFilter);

  // Hero image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Stagger container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      
      {/* Enhanced Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Dynamic Background Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero-background.jpg"
                alt="Lighting Equipment"
                fill
                className="object-cover brightness-[0.4]"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Animated Overlay Particles */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-purple-500/20" />
          
          {/* Floating Light Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              variants={floatingVariants}
              animate="animate"
              className="absolute w-2 h-2 bg-yellow-400 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced Hero Content */}
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
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-4">
              ✨ Premium Lighting Solutions
            </div>
            
            <h1 className="text-yellow-400 text-4xl md:text-6xl lg:text-8xl font-black drop-shadow-2xl mb-4">
              <TypeAnimation
                sequence={[
                  'ILLUMINATE', 2000,
                  'TRANSFORM', 2000,
                  'INSPIRE', 2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Ciptakan atmosfer yang sempurna dengan koleksi peralatan lighting profesional kami. 
            Dari panggung hingga ruang pribadi, wujudkan visi pencahayaan Anda.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
              Jelajahi Produk
            </button>
            <button className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Konsultasi Gratis
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-yellow-400 text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Enhanced Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Kategori <span className="text-yellow-400">Produk</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                  ${activeFilter === filter.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600'
                  }
                `}
              >
                <span className="text-lg">{filter.icon}</span>
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Product Grid */}
        <motion.div
          ref={productsRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-24"
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${product.id}-${activeFilter}`}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onHoverStart={() => setHoveredCard(product.id)}
                onHoverEnd={() => setHoveredCard(null)}
                onClick={() => setSelectedProduct(product)}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 border border-gray-700 hover:border-yellow-400/50">
                  
                  {/* Product Image with Overlay Effects */}
                  <div className="relative aspect-square bg-gradient-to-b from-gray-900 to-black overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === product.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4"
                    >
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-yellow-400 hover:text-black transition-colors">
                          👁️
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-yellow-400 hover:text-black transition-colors">
                          ❤️
                        </button>
                      </div>
                    </motion.div>



                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold uppercase">
                      {product.subcategory}
                    </div>
                  </div>
                  
                  {/* Enhanced Product Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <span className="text-gray-400 text-sm">Tersedia untuk disewa</span>
                      <button className="text-yellow-400 hover:text-yellow-300 font-medium text-sm">
                        Lihat Detail →
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-3xl border border-yellow-400/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Konsultasi Khusus?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda menemukan solusi pencahayaan yang tepat untuk kebutuhan spesifik Anda.
          </p>
          <a href='/contact'>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            Hubungi Sekarang
          </button>
          </a>
        </motion.div>
      </div>

      {/* Enhanced Modal with Gallery */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-red-500 transition-colors flex items-center justify-center"
                  onClick={() => setSelectedProduct(null)}
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-bold text-yellow-400">
                    {selectedProduct.name}
                  </h2>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div>
                  <h3 className="text-white font-semibold mb-2">Fitur Unggulan:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <span key={idx} className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <button className="flex-1 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-all">
                    Sewa Sekarang
                  </button>
                  <button className="flex-1 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-black transition-all">
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