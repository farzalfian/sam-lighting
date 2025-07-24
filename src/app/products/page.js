'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export default function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const isInView = useInView(categoriesRef, { once: true, amount: 0.1 });

  const categories = [
    {
      id: 'lighting',
      name: 'Lighting Equipment',
      description: 'Explore high-quality lights for your events, from stage lighting to decorative effects.',
      image: '/images/hero-background.jpg',
      link: '/products/lighting',
      icon: '💡',
      features: ['Professional Grade', 'Energy Efficient', 'Remote Control']
    },
    {
      id: 'sound',
      name: 'Sound System',
      description: 'Premium sound systems for clear, impactful audio at any event.',
      image: '/images/sound.jpg',
      link: '/products/sound',
      icon: '🔊',
      features: ['Crystal Clear', 'High Power', 'Wireless Ready']
    },
    {
      id: 'effects',
      name: 'Special Effects',
      description: 'Create stunning atmospheres with smoke machines, strobes, and more.',
      image: '/images/products/effects/category.jpg',
      link: '/products/effects',
      icon: '✨',
      features: ['Visual Impact', 'Safe Operation', 'Multiple Effects']
    },
    {
      id: 'packages',
      name: 'Event Packages',
      description: 'Pre-built bundles designed for a hassle-free setup and excellent results.',
      image: '/images/packages.jpg',
      link: '/products/packages',
      icon: '📦',
      features: ['Complete Setup', 'Cost Effective', 'Professional Support']
    },
  ];

  // Animation variants
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
      <div ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          {/* Background with overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 via-slate-900/60 to-gray-900/90">
            <Image
              src="/images/hero-background2.jpg"
              alt="Our Products"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-slate-900/40 to-slate-700/30" />
          
          {/* Floating particles */}
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
              🎯 Complete Solutions
            </div>
            
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 text-4xl md:text-6xl lg:text-7xl font-black drop-shadow-2xl mb-6 leading-tight">
              OUR PRODUCTS
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-base md:text-lg max-w-2xl mb-8 leading-relaxed px-4"
          >
            Discover the best lighting and sound solutions for your unforgettable events. 
            Professional equipment with exceptional quality and reliability.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-4"
          >
            <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Explore Categories
            </button>
            <button className="w-full sm:w-auto px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Get Quote
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
            <p className="text-gray-400 text-xs mt-2">Explore our categories</p>
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
            Product <span className="text-yellow-400">Categories</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose from our comprehensive range of professional equipment categories
          </p>
        </motion.div>

        {/* Enhanced Categories Grid */}
        <motion.div
          ref={categoriesRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(category.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group"
            >
              <div className="bg-gradient-to-b from-slate-700/30 to-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 border border-slate-600/50 hover:border-yellow-400/50 h-full">
                
                {/* Category Image */}
                <div className="relative h-48 bg-gradient-to-b from-slate-800/50 to-gray-900/50 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Badge */}
                  <div className="absolute top-3 right-3 w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center text-lg font-bold">
                    {category.icon}
                  </div>
                </div>
                
                {/* Category Info */}
                <div className="p-5 space-y-3 flex flex-col flex-grow">
                  <h3 className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300 transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {category.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-600/50 text-slate-200 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 border-t border-slate-600/50">
                    <Link href={category.link}>
                      <button className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 text-sm">
                        View Products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 bg-gradient-to-r from-slate-700/20 to-slate-800/30 rounded-2xl border border-slate-600/30 backdrop-blur-sm"
        >
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-medium mb-4 border border-yellow-400/30">
              🚀 Ready To Start?
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Plan Your Perfect Event Today
            </h2>
          </div>
          
          <p className="text-gray-300 mb-6 max-w-xl mx-auto px-4">
            Let us help you create unforgettable moments with the best lighting and sound systems. 
            Professional service guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto px-4">
            <Link href="/contact" className="flex-1">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                Contact Us
              </button>
            </Link>
            <Link href="/products/packages" className="flex-1">
              <button className="w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                View Packages
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}