'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Heart, Eye, Zap, Star, ArrowRight, Sparkles, Play, Volume2, Lightbulb, X } from 'lucide-react';

export default function ProductCard({ product }) {
  const { name, image, description, discount, isNew, category, rating, price, originalPrice } = product;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // 3D tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  const getCategoryIcon = () => {
    switch (category?.toLowerCase()) {
      case 'sound':
        return <Volume2 size={12} />;
      case 'lighting':
        return <Lightbulb size={12} />;
      default:
        return <Zap size={12} />;
    }
  };

  const getCategoryColor = () => {
    switch (category?.toLowerCase()) {
      case 'sound':
        return 'from-blue-500 to-cyan-500';
      case 'lighting':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showPopup && !e.target.closest('.popup-content')) {
        closePopup();
      }
    };

    if (showPopup) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  return (
    <>
      <div 
        ref={cardRef}
        className="group relative bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 transition-all duration-700 hover:shadow-purple-500/25 hover:border-purple-500/40 hover:-translate-y-3 backdrop-blur-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{
          transform: isHovered 
            ? `perspective(1000px) rotateX(${(mousePosition.y - 150) * 0.05}deg) rotateY(${(mousePosition.x - 150) * 0.05}deg) translateZ(20px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
        }}
      >
        {/* Enhanced Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/15 via-blue-600/10 to-cyan-600/15 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Dynamic Light Rays */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse delay-300" />
        </div>
        
        {/* Enhanced Badges */}
        <div className="absolute top-4 left-4 z-30 flex flex-col gap-2">
          {isNew && (
            <div className="relative group/badge">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-sm opacity-60"></div>
              <span className="relative px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2 border border-emerald-400/30">
                <Sparkles size={10} className="animate-pulse" />
                NEW ARRIVAL
              </span>
            </div>
          )}
          {discount && (
            <div className="relative group/badge">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-sm opacity-60"></div>
              <span className="relative px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg border border-red-400/30">
                SAVE {discount}%
              </span>
            </div>
          )}
        </div>

        {/* Enhanced Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/50 backdrop-blur-md transition-all duration-300 hover:bg-black/70 hover:scale-110 border border-white/20 hover:border-red-400/50"
        >
          <Heart 
            size={18} 
            className={`transition-all duration-300 ${
              isWishlisted 
                ? 'text-red-500 fill-red-500 animate-pulse' 
                : 'text-white hover:text-red-400'
            }`} 
          />
        </button>

        {/* Enhanced Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
          
          {/* Image */}
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-115' : 'scale-100'
            }`}
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 z-15">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 100}ms`,
                  transform: isHovered ? 'translateY(-10px)' : 'translateY(0px)'
                }}
              />
            ))}
          </div>
          
          {/* Enhanced Quick Actions Overlay - Only Eye button now */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex gap-4">
              <button 
                className="group/btn p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                onClick={(e) => e.stopPropagation()}
              >
                <Eye size={20} className="group-hover/btn:animate-pulse" />
              </button>
            </div>
          </div>

          {/* Play Button for Demo */}
          <button 
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-25 p-4 bg-white/20 backdrop-blur-md rounded-full text-white transition-all duration-500 border-2 border-white/30 hover:border-white/60 hover:bg-white/30 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            onClick={handlePlayClick}
          >
            <Play size={24} className="ml-1" />
          </button>
        </div>

        {/* Enhanced Content Section */}
        <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-black/10">
          {/* Category with Icon */}
          {category && (
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getCategoryColor()} bg-opacity-20`}>
                {getCategoryIcon()}
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${getCategoryColor()} bg-clip-text text-transparent`}>
                {category}
              </span>
            </div>
          )}
          
          {/* Product Name with Enhanced Typography */}
          <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500 leading-tight">
            {name}
          </h3>

          {/* Rating */}
          {rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={`${
                      i < Math.floor(rating) 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-gray-600'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-gray-400 text-sm">({rating})</span>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
            {description}
          </p>


        </div>

        {/* Enhanced Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>

        {/* Subtle Border Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ padding: '1px', margin: '-1px' }}>
          <div className="w-full h-full bg-gray-900 rounded-3xl"></div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="popup-content relative max-w-4xl max-h-[90vh] w-full mx-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-all duration-300 border border-white/20"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 aspect-square lg:aspect-auto relative bg-gradient-to-br from-gray-800 to-gray-700">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Details Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Category */}
                {category && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor()} bg-opacity-20`}>
                      {getCategoryIcon()}
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${getCategoryColor()} bg-clip-text text-transparent`}>
                      {category}
                    </span>
                  </div>
                )}

                {/* Product Name */}
                <h2 className="text-white font-bold text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {name}
                </h2>

                {/* Rating */}
                {rating && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${
                            i < Math.floor(rating) 
                              ? 'text-yellow-400 fill-yellow-400' 
                              : 'text-gray-600'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-400">({rating} stars)</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {description}
                </p>

                {/* Action Button */}
                <button className="w-full bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                  <Eye size={18} />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}