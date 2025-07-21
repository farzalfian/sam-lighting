'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Zap, 
  Music, 
  Package, 
  ArrowRight, 
  Star, 
  Sparkles,
  Play,
  ChevronRight,
  Eye,
  ShoppingBag
} from 'lucide-react';

export default function Categories() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const categories = [
    {
      id: 'lighting',
      name: 'LIGHTING EQUIPMENT',
      description: 'Professional lighting solutions for every event',
      image: '/images/hero-background.jpg',
      url: '/products/lighting',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-400/30',
      features: ['LED Par Lights', 'Moving Heads', 'Laser Systems', 'Controllers'],
      stats: '50+ Items'
    },
    {
      id: 'sound',
      name: 'SOUND SYSTEM',
      description: 'Crystal clear audio equipment for perfect acoustics',
      image: '/images/sound.jpg',
      url: '/products/sound',
      icon: Music,
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-400/30',
      features: ['Speakers', 'Mixers', 'Microphones', 'Amplifiers'],
      stats: '40+ Items'
    },
    {
      id: 'packages',
      name: 'PACKAGES',
      description: 'Complete event solutions with special pricing',
      image: '/images/packages.jpg',
      url: '/products/packages',
      icon: Package,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-400/30',
      features: ['Wedding Package', 'Corporate Events', 'Birthday Party', 'Concert Setup'],
      stats: '10+ Packages'
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div 
          id="categories-header"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible['categories-header'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-full border border-gray-600/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-gray-300 font-medium">Explore Our Categories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
            PILIH KATEGORI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Temukan peralatan terbaik untuk kebutuhan acara Anda dengan koleksi lengkap dan berkualitas tinggi
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                id={`category-${category.id}`}
                data-animate
                className={`transform transition-all duration-1000 ${
                  isVisible[`category-${category.id}`] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Link href={category.url}>
                  <div 
                    className={`group relative h-96 overflow-hidden rounded-2xl border ${category.borderColor} bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2`}
                    onMouseEnter={() => setHoveredCategory(category.id)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <Image 
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col p-6">
                      {/* Top Section - Icon & Stats */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 ${category.bgColor} backdrop-blur-sm rounded-xl border ${category.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                        </div>
                        
                        <div className="text-right">
                          <div className={`inline-flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${category.color} rounded-full text-xs font-medium text-black`}>
                            <Star className="w-3 h-3" />
                            <span>{category.stats}</span>
                          </div>
                        </div>
                      </div>

                      {/* Middle Section - Spacer */}
                      <div className="flex-1"></div>

                      {/* Bottom Section - Text Content */}
                      <div className="space-y-4">
                        {/* Category Name */}
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                            {category.name}
                          </h3>
                          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                            {category.description}
                          </p>
                        </div>

                        {/* Features List - Hidden by default, shown on hover */}
                        <div className={`space-y-2 transition-all duration-500 ${
                          hoveredCategory === category.id 
                            ? 'opacity-100 transform translate-y-0' 
                            : 'opacity-0 transform translate-y-4'
                        }`}>
                          <div className="flex flex-wrap gap-2">
                            {category.features.slice(0, 2).map((feature, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-white/10 backdrop-blur-sm text-xs text-gray-300 rounded-md border border-white/20"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                          <span className="text-sm text-gray-400 group-hover:text-gray-300">
                            View Collection
                          </span>
                          
                          <div className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${category.color} text-black rounded-full font-medium text-sm shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all duration-300`}>
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${
                      hoveredCategory === category.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-75'
                    }`}>
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div 
          id="categories-cta"
          data-animate
          className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
            isVisible['categories-cta'] 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-full border border-gray-600/30">
            <ShoppingBag className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Need help choosing? Contact our experts for free consultation</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}