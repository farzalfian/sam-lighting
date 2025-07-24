// components/CategoryCard.jsx
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaStar } from 'react-icons/fa';

export default function CategoryCard({ category, index, hoveredCategory, setHoveredCategory }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px'
  });

  const IconComponent = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
      className="group cursor-pointer"
      onMouseEnter={() => setHoveredCategory(category.id)}
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <Link href={category.link}>
        <div className={`relative bg-gradient-to-br ${category.bgColor} backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-600/30 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-700 transform hover:-translate-y-2 hover:scale-105`}>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-700/20" />
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            animate={hoveredCategory === category.id ? { opacity: 0.1 } : { opacity: 0 }}
          />
          <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
            <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <motion.div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
              <IconComponent className={`text-2xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
            </motion.div>
            <div className="absolute top-6 left-6 px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20">
              {category.count}
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className={`text-white font-bold text-xl mb-2 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                {category.name}
              </h3>
            </div>
          </div>

          <div className="p-6 relative z-10">
            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
              {category.description}
            </p>
            <motion.button
              className={`w-full py-3 px-6 bg-gradient-to-r ${category.color} text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Products</span>
              <FaArrowRight className="text-sm" />
            </motion.button>

            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: (index * 0.2) + (i * 0.1) }}>
                  <FaStar className="text-yellow-400 text-sm" />
                </motion.div>
              ))}
              <span className="text-gray-400 text-xs ml-2">(4.9)</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
