'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Heart, Eye, Zap } from 'lucide-react';

export default function ProductCard({ product }) {
  const { name, image, description, discount, isNew, category } = product;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/30 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
            <Zap size={10} />
            NEW
          </span>
        )}
        {discount && (
          <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
            -{discount}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:scale-110"
      >
        <Heart 
          size={16} 
          className={`transition-colors duration-300 ${
            isWishlisted ? 'text-red-500 fill-red-500' : 'text-white hover:text-red-400'
          }`} 
        />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
        
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-3">
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Eye size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        {/* Category */}
        {category && (
          <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
            {category}
          </span>
        )}
        
        {/* Product Name */}
        <h3 className="text-white font-bold text-xl mt-2 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-2 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine" />
      </div>
    </div>
  );
}
