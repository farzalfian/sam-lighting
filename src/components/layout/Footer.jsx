'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Phone, 
  Instagram, 
  Mail, 
  MapPin, 
  Home, 
  Settings, 
  MessageCircle,
  ExternalLink,
  ChevronUp,
  Zap,
  Music
} from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { label: 'Beranda', href: '/', icon: Home },
    { label: 'Daftar Alat', href: '#alat', icon: Settings },
    { label: 'Kontak', href: '#kontak', icon: MessageCircle },
  ];

  const contactItems = [
    {
      label: 'WhatsApp',
      value: '+62 813-1664-0961',
      href: 'https://wa.me/6281316640961',
      icon: Phone,
      color: 'text-green-400 hover:text-green-300',
      bgColor: 'hover:bg-green-500/10'
    },
    {
      label: 'Instagram',
      value: '@lighting_sam',
      href: 'https://www.instagram.com/lighting_sam?igsh=MW9pMDk4Ynp5MG1seg==',
      icon: Instagram,
      color: 'text-pink-400 hover:text-pink-300',
      bgColor: 'hover:bg-pink-500/10'
    },
    {
      label: 'Email',
      value: 'samlighting73@gmail.com',
      href: 'mailto:samlighting73@gmail.com',
      icon: Mail,
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'hover:bg-blue-500/10'
    },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-300 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-400 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              {/* Brand Section - Enhanced */}
              <div className="lg:col-span-5">
                <div 
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSection('brand')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      <div className="relative p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full">
                        <Image 
                          src="/images/logo.png" 
                          alt="SAM LIGHTING Logo" 
                          width={40} 
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-orange-300 transition-all duration-300">
                        SAM LIGHTING
                      </h2>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        Sound & Lighting Rental
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    Sewa lighting dan sound system terbaik untuk acara kamu! Kami menjamin kualitas dan keandalan
                    untuk memberikan pengalaman terbaik bagi kebutuhan event Anda.
                  </p>
                  
                  {/* Feature Highlights */}
                  <div className="flex items-center space-x-6 mt-6">
                    <div className="flex items-center space-x-2 text-yellow-400">
                      <Zap size={18} className="animate-pulse" />
                      <span className="text-sm font-medium">Professional Lighting</span>
                    </div>
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Music size={18} />
                      <span className="text-sm font-medium">Premium Sound</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Section - Enhanced */}
              <div className="lg:col-span-3">
                <div
                  onMouseEnter={() => setHoveredSection('nav')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                    <span className="mr-2">🧭</span> Navigasi
                  </h3>
                  <ul className="space-y-3">
                    {navigationItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <li key={item.href} className="group">
                          <a
                            href={item.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <IconComponent 
                              size={18} 
                              className="text-gray-400 group-hover:text-yellow-400 transition-colors" 
                            />
                            <span className="group-hover:text-yellow-400 transition-colors">
                              {item.label}
                            </span>
                            <ExternalLink 
                              size={14} 
                              className="opacity-0 group-hover:opacity-100 text-gray-500 ml-auto transition-opacity" 
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Contact Section - Enhanced */}
              <div className="lg:col-span-4">
                <div
                  onMouseEnter={() => setHoveredSection('contact')}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                    <span className="mr-2">📞</span> Hubungi Kami
                  </h3>
                  <div className="space-y-4 mb-8">
                    {contactItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group flex items-center space-x-4 p-4 rounded-xl border border-gray-700/50 ${item.bgColor} hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className={`p-2 rounded-lg bg-gray-800 group-hover:scale-110 transition-transform`}>
                            <IconComponent size={20} className={item.color} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-400 group-hover:text-gray-300">
                              {item.label}
                            </p>
                            <p className={`font-medium ${item.color} text-sm`}>
                              {item.value}
                            </p>
                          </div>
                          <ExternalLink 
                            size={16} 
                            className="text-gray-500 group-hover:text-gray-300 transition-colors" 
                          />
                        </a>
                      );
                    })}
                  </div>

                  {/* Location Map */}
                  <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white flex items-center">
                      <MapPin size={18} className="mr-2 text-red-400" />
                      Lokasi Kami
                    </h4>
                    <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-700 group-hover:border-gray-600 transition-all duration-300 group-hover:shadow-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7510301972818!2d106.90292887650352!3d-6.327767996588177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8396093982897c20!2sSam%20Lighting!5e0!3m2!1sen!2sid!4v1687962438577!5m2!1sen!2sid"
                        width="100%"
                        height="220"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-none transition-all duration-300 group-hover:scale-105"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider with gradient */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full text-xs text-gray-400">
                  ⚡ Trusted Event Partner ⚡
                </span>
              </div>
            </div>

            {/* Footer Bottom - Enhanced */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <p>© {new Date().getFullYear()} SAM Lighting & Sound Rental.</p>
                <span className="hidden md:inline text-gray-600">|</span>
                <p className="hidden md:inline">All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-xs px-3 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                  🟢 Available 24/7
                </span>
                <span className="text-xs text-gray-400">
                  Made with ❤️ in Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
          showScrollTop 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
        } hover:scale-110 hover:-translate-y-1`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="animate-bounce" />
      </button>
    </>
  );
}