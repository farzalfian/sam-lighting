'use client';
import React, { useState, useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import { 
  Sparkles, 
  Clock, 
  MessageCircle, 
  Zap, 
  Music, 
  Star,
  ArrowRight,
  Shield,
  Phone,
  Users,
  CheckCircle,
  X,
  Award,
  Headphones,
  Truck,
  ThumbsUp
} from 'lucide-react';

export default function Home() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showMobileContact, setShowMobileContact] = useState(false);

  const whatsappNumber = "6281316640961";
  const whatsappMessage = encodeURIComponent(
    `🎵 Halo SAM-LIGHTING! Saya tertarik dengan layanan anda!
    
📝 Informasi saya:
• Nama: [Isi Nama Anda]
• Jenis Acara: [Wedding/Corporate/Party/dll]  
• Tanggal: [Tanggal Acara]
• Lokasi: [Lokasi Acara]
• Estimasi Tamu: [Jumlah Tamu]

💡 Saya ingin konsultasi gratis untuk kebutuhan lighting & sound system.

Mohon informasi detail dan penawaran terbaik. Terima kasih! 🙏`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const whyChooseUsFeatures = [
    { 
      icon: Award, 
      title: "Berpengalaman 10+ Tahun", 
      description: "Telah menangani ribuan acara dengan tingkat kepuasan 99%",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/10 to-orange-400/10"
    },
    { 
      icon: Shield, 
      title: "Garansi Peralatan", 
      description: "Semua peralatan bergaransi dan backup tersedia",
      color: "text-blue-400",
      bgColor: "from-blue-400/10 to-cyan-400/10"
    },
    { 
      icon: Headphones, 
      title: "Support 24/7", 
      description: "Tim teknis siap membantu kapan saja selama acara",
      color: "text-green-400",
      bgColor: "from-green-400/10 to-emerald-400/10"
    },
    { 
      icon: Truck, 
      title: "Setup & Pickup", 
      description: "Layanan antar, setup, dan ambil peralatan gratis",
      color: "text-purple-400",
      bgColor: "from-purple-400/10 to-pink-400/10"
    }
  ];

  const valuePoints = [
    "✨ Peralatan Premium & Terawat",
    "🎯 Paket Sesuai Budget",
    "👨‍💼 Teknisi Berpengalaman",
    "🚚 Free Setup & Delivery",
    "💯 Kepuasan Pelanggan Terjamin",
    "🎵 Sound System Crystal Clear"
  ];

  // Rotating features effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % whyChooseUsFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
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

  // Auto-show mobile contact after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !showMobileContact) {
        setTimeout(() => setShowMobileContact(true), 1500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobileContact]);

  return (
    <main className="relative">
      {/* Enhanced Hero Section */}
      <div className="relative">
        {/* Animated background elements - Optimized for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-12 sm:w-24 h-12 sm:h-24 bg-green-400/10 rounded-full blur-xl sm:blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <Hero
          title="LIGHTING AND SOUND SYSTEM"
          subtitle="Sewa peralatan lighting dan sound system berkualitas untuk acara anda"
        />
      </div>

      {/* Enhanced Categories with Animation */}
      <div 
        id="categories-section" 
        data-animate
        className={`transform transition-all duration-1000 ${
          isVisible['categories-section'] 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}
      >
        <Categories />
      </div>

      {/* Enhanced Featured Products Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-gray-800 to-black py-8 sm:py-16 overflow-hidden">
        {/* Background Pattern - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px] sm:bg-[size:50px_50px]"></div>
        
        {/* Floating Elements - Mobile optimized */}
        <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-10 sm:w-20 h-10 sm:h-20 bg-yellow-400/5 rounded-full blur-xl sm:blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-8 sm:w-16 h-8 sm:h-16 bg-blue-500/5 rounded-full blur-lg sm:blur-xl animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div 
            id="products-header"
            data-animate
            className={`text-center mb-8 sm:mb-12 transform transition-all duration-1000 delay-200 ${
              isVisible['products-header'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full border border-yellow-400/20 mb-3 sm:mb-4">
              <Star className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-yellow-400 font-medium">Premium Collection</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
              PRODUK UNGGULAN
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Koleksi peralatan terbaik kami dengan teknologi terdepan untuk memberikan pengalaman acara yang tak terlupakan
            </p>
          </div>
          
          <div 
            id="products-grid"
            data-animate
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible['products-grid'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            <FeaturedProducts />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile-First */}
      <section className="relative py-10 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
        {/* Animated Background - Mobile optimized */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-5 sm:top-10 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div 
            id="why-choose-section"
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible['why-choose-section'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-3 sm:mb-4">
                <ThumbsUp className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 animate-pulse" />
                <span className="text-xs sm:text-sm text-blue-400 font-medium">Trusted by 1000+ Customers</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
                MENGAPA MEMILIH KAMI?
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                Kepercayaan ribuan pelanggan adalah bukti komitmen kami memberikan layanan terbaik
              </p>
            </div>

            {/* Main Content */}
            <div className="relative bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 backdrop-blur-xl p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  {/* Mobile Rotating Feature Highlight */}
                  <div className="mb-6">
                    <div className={`bg-gradient-to-r ${whyChooseUsFeatures[currentFeatureIndex].bgColor} p-4 rounded-xl border border-gray-700/50`}>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-gray-800 rounded-lg">
                          {React.createElement(whyChooseUsFeatures[currentFeatureIndex].icon, {
                            className: `w-5 h-5 ${whyChooseUsFeatures[currentFeatureIndex].color}`
                          })}
                        </div>
                        <h3 className="text-white font-bold text-sm">
                          {whyChooseUsFeatures[currentFeatureIndex].title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-xs pl-11">
                        {whyChooseUsFeatures[currentFeatureIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile Features Grid */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {valuePoints.map((point, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 text-sm text-gray-300 bg-gray-800/30 p-3 rounded-lg"
                      >
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>



                  {/* Mobile CTA */}
                  <div className="text-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-full space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5" />
                        <span>KONSULTASI GRATIS</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>

                    {/* Mobile Contact Info */}
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 mt-4">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>Respon Cepat</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>1000+ Happy Clients</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  {/* Left Content */}
                  <div>
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-6 mb-8">
                      {whyChooseUsFeatures.map((feature, index) => (
                        <div 
                          key={index}
                          className={`relative p-6 rounded-xl border transition-all duration-300 ${
                            index === currentFeatureIndex 
                              ? `bg-gradient-to-r ${feature.bgColor} border-gray-600 scale-105` 
                              : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-gray-800 rounded-lg">
                              {React.createElement(feature.icon, {
                                className: `w-6 h-6 ${feature.color}`
                              })}
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-lg mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Value Points */}
                    <div className="grid grid-cols-2 gap-3">
                      {valuePoints.map((point, index) => (
                        <div key={index} className="text-sm text-gray-300">
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col justify-center h-full">
                    {/* Stats or Additional Info */}
                    <div className="text-center mb-8">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
                          <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
                          <div className="text-gray-300 text-sm">Acara Sukses</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                          <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                          <div className="text-gray-300 text-sm">Tahun Pengalaman</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-6 rounded-xl border border-yellow-500/20">
                          <div className="text-3xl font-bold text-yellow-400 mb-2">99%</div>
                          <div className="text-gray-300 text-sm">Tingkat Kepuasan</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative flex items-center space-x-3">
                          <MessageCircle className="w-5 h-5" />
                          <span>KONSULTASI GRATIS</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </a>

                      {/* Contact Info */}
                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mt-6">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Respon Cepat</span>
                        </div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>1000+ Happy Clients</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating Contact Banner */}
      {showMobileContact && (
        <div className="fixed top-4 left-4 right-4 z-50 lg:hidden">
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl shadow-2xl animate-slide-down">
            <button
              onClick={() => setShowMobileContact(false)}
              className="absolute top-2 right-2 p-1 bg-black/20 rounded-full hover:bg-black/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Konsultasi GRATIS!</p>
                <p className="text-xs opacity-90">Dapatkan penawaran terbaik</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 rounded-lg font-bold text-sm hover:bg-white/30 transition-colors"
              >
                Chat
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Floating Action Button */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 sm:space-x-3 bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
          <span className="hidden sm:inline font-medium text-sm">Chat WhatsApp</span>
          <span className="sm:hidden font-medium text-xs">Chat</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </a>
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}