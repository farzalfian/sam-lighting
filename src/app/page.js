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
  Gift,
  Phone,
  Calendar,
  CheckCircle,
  X
} from 'lucide-react';

export default function Home() {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [showMobilePromo, setShowMobilePromo] = useState(false);

  const whatsappNumber = "6281316640961";
  const whatsappMessage = encodeURIComponent(
    `🎉 Halo SAM-LIGHTING! Saya tertarik dengan PROMO SPESIAL anda!
    
📝 Informasi saya:
• Nama: [Isi Nama Anda]
• Acara: [Jenis Acara]  
• Tanggal: [Tanggal Acara]
• Alat yang dibutuhkan: [Nama Alat]
• Lokasi: [Lokasi Acara]

💰 Saya ingin memanfaatkan diskon 20% untuk paket lighting & sound!

Mohon informasi detail dan ketersediaan. Terima kasih! 🙏`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const promoFeatures = [
    { icon: Zap, text: "Professional Lighting Setup", color: "text-yellow-400" },
    { icon: Music, text: "Premium Sound System", color: "text-blue-400" },
    { icon: Clock, text: "24/7 Customer Support", color: "text-green-400" },
    { icon: CheckCircle, text: "Guaranteed Quality", color: "text-purple-400" }
  ];

  const promoHighlights = [
    "Diskon 20% untuk paket lengkap",
    "Free konsultasi setup",
    "Teknisi berpengalaman",
    "Garansi peralatan"
  ];

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 1);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotating promo features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promoFeatures.length);
    }, 3000);
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

  // Auto-show mobile promo after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !showMobilePromo) {
        setTimeout(() => setShowMobilePromo(true), 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showMobilePromo]);

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

      {/* Mobile-First Promo Section */}
      <section className="relative py-10 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-slate-900 overflow-hidden">
        {/* Animated Background - Mobile optimized */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-5 sm:top-10 left-1/4 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-5 sm:bottom-10 right-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div 
            id="promo-section"
            data-animate
            className={`transform transition-all duration-1000 ${
              isVisible['promo-section'] 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Mobile-First Promo Card */}
            <div className="relative bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-xl p-4 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  {/* Mobile Badge */}
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-500/30 animate-pulse">
                      <Gift className="w-3 h-3 text-red-400" />
                      <span className="text-xs text-red-400 font-medium">Limited Time Offer</span>
                    </div>
                  </div>

                  {/* Mobile Title */}
                  <div className="text-center mb-6">
                    <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                      PROMO SPESIAL
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-lg text-gray-400">Diskon hingga</span>
                      <span className="text-2xl sm:text-3xl font-bold text-yellow-400 animate-bounce">20%</span>
                    </div>
                  </div>

                  {/* Mobile Description */}
                  <p className="text-center text-gray-300 mb-6 px-2">
                    Untuk pemesanan paket <span className="text-yellow-400 font-semibold">lighting dan sound</span> lengkap selama bulan ini!
                  </p>

                  {/* Mobile Features */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    {promoHighlights.map((highlight, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 text-sm text-gray-300 bg-gray-800/30 p-3 rounded-lg"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Rotating Feature */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <div className="p-2 bg-gray-700 rounded-lg">
                        {React.createElement(promoFeatures[currentPromoIndex].icon, {
                          className: `w-5 h-5 ${promoFeatures[currentPromoIndex].color}`
                        })}
                      </div>
                      <span className="text-gray-200 font-medium text-sm">
                        {promoFeatures[currentPromoIndex].text}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Countdown */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-xl border border-gray-700 shadow-xl mb-6">
                    <p className="text-center text-gray-400 text-xs mb-3">Promo berakhir dalam:</p>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-gradient-to-b from-gray-700 to-gray-800 p-2 rounded-lg">
                          <div className="text-lg font-bold text-yellow-400">{value.toString().padStart(2, '0')}</div>
                          <div className="text-xs text-gray-500 uppercase">{unit.slice(0, 3)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="text-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center w-full space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-6 rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5" />
                        <span>PESAN SEKARANG</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>

                    {/* Mobile Contact Info */}
                    <div className="flex items-center justify-center space-x-4 text-xs text-gray-400 mt-4">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-3 h-3" />
                        <span>Instant Response</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>Free Consultation</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (unchanged) */}
                <div className="hidden lg:flex items-center justify-between space-x-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-500/30 mb-6 animate-pulse">
                      <Gift className="w-4 h-4 text-red-400" />
                      <span className="text-sm text-red-400 font-medium">Limited Time Offer</span>
                    </div>

                    {/* Main Title */}
                    <div className="mb-6">
                      <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                        PROMO SPESIAL
                      </h2>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl text-gray-400">Diskon hingga</span>
                        <span className="text-4xl font-bold text-yellow-400 animate-bounce">20%</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-300 mb-8 max-w-lg">
                      Untuk pemesanan paket <span className="text-yellow-400 font-semibold">lighting dan sound</span> lengkap selama bulan ini!
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {promoHighlights.map((highlight, index) => (
                        <div 
                          key={index}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Rotating Feature */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                        <div className="p-2 bg-gray-700 rounded-lg">
                          {React.createElement(promoFeatures[currentPromoIndex].icon, {
                            className: `w-5 h-5 ${promoFeatures[currentPromoIndex].color}`
                          })}
                        </div>
                        <span className="text-gray-200 font-medium">
                          {promoFeatures[currentPromoIndex].text}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - CTA */}
                  <div className="flex flex-col items-center space-y-6">
                    {/* Countdown Timer */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-xl">
                      <p className="text-center text-gray-400 text-sm mb-3">Promo berakhir dalam:</p>
                      <div className="grid grid-cols-4 gap-2 text-center">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                          <div key={unit} className="bg-gradient-to-b from-gray-700 to-gray-800 p-3 rounded-lg">
                            <div className="text-xl font-bold text-yellow-400">{value.toString().padStart(2, '0')}</div>
                            <div className="text-xs text-gray-500 uppercase">{unit}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5" />
                        <span>PESAN SEKARANG</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>

                    {/* Contact Options */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4" />
                        <span>Instant Response</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Free Consultation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating Promo Banner */}
      {showMobilePromo && (
        <div className="fixed top-4 left-4 right-4 z-50 lg:hidden">
          <div className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-3 rounded-xl shadow-2xl animate-slide-down">
            <button
              onClick={() => setShowMobilePromo(false)}
              className="absolute top-2 right-2 p-1 bg-black/20 rounded-full hover:bg-black/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Gift className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">PROMO SPESIAL 20% OFF!</p>
                <p className="text-xs opacity-90">Paket lighting & sound lengkap</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white/20 rounded-lg font-bold text-sm hover:bg-white/30 transition-colors"
              >
                Pesan
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