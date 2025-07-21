'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap, Home, Package, Lightbulb, Music, Phone, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Advanced Lighting Effects Background */}
      <div className="fixed top-0 left-0 w-full h-24 z-40 pointer-events-none overflow-hidden">
        {/* Moving Spotlight Effects */}
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-yellow-400/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-0 left-3/4 w-36 h-36 bg-purple-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-0 left-1/2 w-28 h-28 bg-green-400/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Dynamic LED Strip */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent animate-pulse"></div>
        <div className="absolute top-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-yellow-400/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      </div>

      <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/96 backdrop-blur-2xl shadow-2xl border-b border-yellow-400/30 shadow-yellow-400/5' 
          : 'bg-gray-900/85 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Enhanced Logo with Multiple Effects */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-yellow-400/25 rounded-xl blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-yellow-300/15 rounded-lg blur-md scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                <Image
                  src="/images/logo.png"
                  alt="SAM LIGHTING Logo"
                  width={70}
                  height={28}
                  className="object-contain transition-all duration-300 group-hover:scale-110 relative z-10 group-hover:brightness-110"
                  priority
                />
                
                {/* Multiple electric effects */}
                <Zap className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <div className="hidden sm:block relative">
                <span className="text-xl font-bold text-white tracking-wide relative z-10 transition-all duration-300 group-hover:text-yellow-50">
                  SAM LIGHTING
                </span>
                {/* Enhanced text glow */}
                <span className="absolute inset-0 text-xl font-bold text-yellow-400/40 tracking-wide blur-sm group-hover:text-yellow-400/60 transition-all duration-300">
                  SAM LIGHTING
                </span>
                <span className="absolute inset-0 text-xl font-bold text-white/10 tracking-wide blur-lg group-hover:text-yellow-200/20 transition-all duration-500">
                  SAM LIGHTING
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Icons */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
              <NavItem href="/" label="HOME" icon={Home} />
              <NavItem href="/products" label="PRODUCTS" icon={Package} />
              <NavItem href="/products/lighting" label="LIGHTING" icon={Lightbulb} hasLightEffect />
              <NavItem href="/products/sound" label="SOUND" icon={Music} />
              <NavItem href="/contact" label="CONTACT US" icon={Phone} isButton />
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-xl text-gray-300 hover:text-yellow-400 hover:bg-gray-800/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 relative group"
              aria-label="Toggle Menu"
            >
              {/* Enhanced button glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/15 to-yellow-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              <div className="relative w-6 h-6 z-10">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                  }`} 
                />
              </div>
              
              {/* Sparkling effect */}
              <Sparkles className="absolute top-0 right-0 w-2 h-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-700 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-gradient-to-b from-gray-900/98 via-gray-900/95 to-gray-800/98 backdrop-blur-2xl border-t border-yellow-400/30 relative overflow-hidden">
            {/* Enhanced mobile menu lighting effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/8 via-transparent to-blue-400/5 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400/8 rounded-full blur-xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>
            
            {/* Mobile menu content */}
            <div className="px-6 py-6 space-y-3 relative z-10">
              <MobileNavItem href="/" label="HOME" icon={Home} onClick={toggleMenu} />
              <MobileNavItem href="/products" label="PRODUCTS" icon={Package} onClick={toggleMenu} />
              <MobileNavItem href="/products/lighting" label="LIGHTING" icon={Lightbulb} onClick={toggleMenu} hasLightEffect />
              <MobileNavItem href="/products/sound" label="SOUND" icon={Music} onClick={toggleMenu} />
              <MobileNavItem href="/contact" label="CONTACT US" icon={Phone} onClick={toggleMenu} isButton />
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          </div>
        </div>
      </nav>
    </>
  );
}

function NavItem({ href, label, icon: Icon, isButton = false, hasLightEffect = false }) {
  if (isButton) {
    return (
      <Link
        href={href}
        className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-gray-900 font-semibold rounded-xl hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 hover:shadow-xl relative group flex items-center space-x-2"
      >
        {/* Enhanced button effects */}
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/25 via-white/20 to-yellow-300/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        <Icon size={16} className="relative z-10 group-hover:animate-pulse" />
        <span className="relative z-10">{label}</span>
        <Sparkles size={12} className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white relative group transition-all duration-300 rounded-lg flex items-center space-x-2"
    >
      <Icon size={16} className="relative z-10 transition-all duration-300 group-hover:text-yellow-400" />
      <span className="relative z-10">{label}</span>
      
      {/* Enhanced lighting-specific effects */}
      {hasLightEffect && (
        <>
          <Zap className="absolute top-0 right-0 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-yellow-500/25 to-yellow-400/15 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </>
      )}
      
      {/* Regular enhanced hover effects */}
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/12 group-hover:to-yellow-600/12 rounded-lg transition-all duration-300" />
      <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%] rounded-full shadow-sm group-hover:shadow-yellow-400/60" />
    </Link>
  );
}

function MobileNavItem({ href, label, icon: Icon, onClick, isButton = false, hasLightEffect = false }) {
  if (isButton) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center justify-center space-x-3 w-full px-6 py-4 text-center bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 text-gray-900 font-bold rounded-xl hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 transition-all duration-300 mt-6 relative group shadow-lg transform hover:scale-[1.02]"
      >
        {/* Enhanced mobile button glow */}
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-300/25 via-white/20 to-yellow-300/25 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
        <Icon size={20} className="relative z-10 group-hover:animate-pulse" />
        <span className="relative z-10 text-lg">{label}</span>
        <Sparkles size={16} className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-4 px-5 py-4 text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-xl transition-all duration-300 font-medium relative group border border-transparent hover:border-gray-700/50"
    >
      {/* Enhanced lighting-specific mobile effects */}
      {hasLightEffect && (
        <>
          <Zap className="absolute top-2 right-3 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 via-yellow-500/12 to-yellow-400/8 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          <Sparkles className="absolute bottom-2 right-2 w-2 h-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
        </>
      )}
      
      {/* Icon with enhanced effects */}
      <Icon size={20} className="relative z-10 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110" />
      <span className="relative z-10 text-lg">{label}</span>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </Link>
  );
}