'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap, Home, Package, Lightbulb, Music, Phone, Sparkles, Star, Hexagon, Atom, Layers, Eye } from 'lucide-react';
import Image from 'next/image';

export default function FuturisticNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // Generate floating particles using CSS instead of canvas
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4,
        color: Math.random() > 0.5 ? 'bg-yellow-400/30' : 'bg-cyan-400/25',
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* 3D Background Effects */}
      <div className="fixed top-0 left-0 w-full h-32 z-30 pointer-events-none overflow-hidden">
        {/* CSS-based floating particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full ${particle.color} animate-bounce opacity-60`}
            style={{
              left: `${particle.left}%`,
              top: `${20 + Math.sin(particle.id) * 30}px`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: `0 0 ${particle.size * 2}px currentColor`
            }}
          />
        ))}
        
        {/* Holographic grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Dynamic light beams */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500/20 via-cyan-400/30 to-yellow-400/20" 
             style={{ animation: 'beam-scan 3s ease-in-out infinite' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-4 left-1/4 animate-spin-slow">
          <Hexagon className="w-8 h-8 text-cyan-400/30" />
        </div>
        <div className="absolute top-6 right-1/3 animate-bounce-slow">
          <Atom className="w-6 h-6 text-yellow-400/40" />
        </div>
        <div className="absolute top-2 left-2/3 animate-pulse">
          <Star className="w-5 h-5 text-purple-400/35" />
        </div>
        
        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 100">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
              <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </linearGradient>
          </defs>
          <path d="M0,50 Q200,20 400,50 T800,50" stroke="url(#lineGradient)" strokeWidth="1" fill="none">
            <animate attributeName="d" 
              values="M0,50 Q200,20 400,50 T800,50;M0,50 Q200,80 400,50 T800,50;M0,50 Q200,20 400,50 T800,50" 
              dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M0,30 Q400,70 800,30" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none">
            <animate attributeName="d" 
              values="M0,30 Q400,70 800,30;M0,30 Q400,10 800,30;M0,30 Q400,70 800,30" 
              dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <nav className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-3xl shadow-2xl border-b-2 border-cyan-400/40 shadow-cyan-400/10' 
          : 'bg-gray-900/90 backdrop-blur-2xl'
      }`}>
        
        {/* Mouse follower effect */}
        <div 
          className="absolute w-32 h-32 bg-gradient-radial from-yellow-400/15 via-cyan-400/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-70 transition-all duration-300"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
            transform: 'translate(-50%, -50%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Futuristic Logo */}
            <div className="flex items-center space-x-4 group relative">
              <div className="relative">
                {/* Holographic logo container */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-yellow-400/20 to-purple-500/20 rounded-2xl blur-xl scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/30 to-cyan-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                
                {/* Logo container with PNG image */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl border border-cyan-400/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl overflow-hidden">
                  <Image
                    src="/images/logo.png" // Ganti dengan path logo PNG Anda
                    alt="SAM Lighting Logo"
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-all duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Star className="w-3 h-3 text-yellow-400 animate-pulse" />
                </div>
              </div>
              
              {/* Enhanced 3D text */}
              <div className="hidden sm:block relative">
                <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-cyan-400 to-yellow-400 tracking-wider relative z-10 group-hover:from-yellow-300 group-hover:via-cyan-300 group-hover:to-yellow-300 transition-all duration-500">
                  SAM LIGHTING
                </h1>
                {/* Multiple text shadows for 3D effect */}
                <h1 className="absolute inset-0 text-2xl font-black text-yellow-400/30 tracking-wider blur-sm animate-pulse">
                  SAM LIGHTING
                </h1>
                <h1 className="absolute inset-0 text-2xl font-black text-cyan-400/20 tracking-wider blur-lg">
                  SAM LIGHTING
                </h1>
                
                {/* Subtitle */}
                <p className="text-xs text-gray-400 tracking-[0.3em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  FUTURE TECH
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <FuturisticNavItem href="/" label="HOME" icon={Home} />
              <FuturisticNavItem href="/products" label="PRODUCTS" icon={Package} />
              <FuturisticNavItem href="/products/lighting" label="LIGHTING" icon={Lightbulb} isSpecial />
              <FuturisticNavItem href="/products/sound" label="SOUND" icon={Music} />
              <FuturisticNavItem href="/contact" label="CONTACT" icon={Phone} isButton />
            </div>

            {/* Futuristic Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative p-3 rounded-2xl text-gray-300 hover:text-cyan-400 transition-all duration-500 focus:outline-none group"
              aria-label="Toggle Menu"
            >
              {/* Button effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-yellow-400/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gray-800/60 rounded-2xl border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300"></div>
              
              <div className="relative w-7 h-7 z-10">
                <Menu 
                  size={28} 
                  className={`absolute inset-0 transition-all duration-500 ${
                    isMenuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={28} 
                  className={`absolute inset-0 transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
                  }`} 
                />
              </div>
              
              {/* Orbiting sparkles */}
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-spin" />
              <Star className="absolute -bottom-1 -left-1 w-2 h-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            </button>
          </div>
        </div>

        {/* Futuristic Mobile Menu */}
        <div className={`md:hidden transition-all duration-1000 ease-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        }`}>
          <div className="relative bg-gradient-to-br from-gray-900/98 via-gray-800/95 to-gray-900/98 backdrop-blur-3xl border-t-2 border-cyan-400/40 overflow-hidden">
            
            {/* Mobile menu background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-yellow-400/8"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
            
            {/* Geometric decorations */}
            <div className="absolute top-4 right-6 opacity-30">
              <Hexagon className="w-12 h-12 text-cyan-400/40 animate-spin-slow" />
            </div>
            <div className="absolute bottom-4 left-6 opacity-25">
              <Layers className="w-10 h-10 text-yellow-400/40 animate-bounce-slow" />
            </div>
            
            {/* Mobile navigation items */}
            <div className="px-6 py-8 space-y-4 relative z-10">
              <FuturisticMobileNavItem href="/" label="HOME" icon={Home} onClick={toggleMenu} />
              <FuturisticMobileNavItem href="/products" label="PRODUCTS" icon={Package} onClick={toggleMenu} />
              <FuturisticMobileNavItem href="/products/lighting" label="LIGHTING" icon={Lightbulb} onClick={toggleMenu} isSpecial />
              <FuturisticMobileNavItem href="/products/sound" label="SOUND" icon={Music} onClick={toggleMenu} />
              <FuturisticMobileNavItem href="/contact" label="CONTACT US" icon={Phone} onClick={toggleMenu} isButton />
            </div>
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400/30 via-yellow-400/40 to-cyan-400/30"></div>
          </div>
        </div>
      </nav>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes beam-scan {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100vw); }
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}

function FuturisticNavItem({ href, label, icon: Icon, isButton = false, isSpecial = false }) {
  if (isButton) {
    return (
      <a
        href={href}
        className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 via-yellow-500 to-cyan-500 text-gray-900 font-bold rounded-2xl hover:from-cyan-400 hover:via-yellow-400 hover:to-cyan-400 transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cyan-400/50 group flex items-center space-x-3 overflow-hidden"
      >
        {/* Button background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
        
        <Icon size={18} className="relative z-10 group-hover:animate-pulse" />
        <span className="relative z-10 tracking-wide">{label}</span>
        <Eye size={14} className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className="relative px-4 py-3 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-500 rounded-xl group flex items-center space-x-2 overflow-hidden"
    >
      <Icon size={16} className="relative z-10 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110" />
      <span className="relative z-10 tracking-wide">{label}</span>
      
      {/* Special lighting effects */}
      {isSpecial && (
        <>
          <Zap className="absolute top-1 right-1 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-cyan-400/20 to-yellow-400/15 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </>
      )}
      
      {/* Hover effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-400 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%] rounded-full shadow-lg group-hover:shadow-cyan-400/60"></div>
    </a>
  );
}

function FuturisticMobileNavItem({ href, label, icon: Icon, onClick, isButton = false, isSpecial = false }) {
  if (isButton) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="flex items-center justify-center space-x-4 w-full px-6 py-5 text-center bg-gradient-to-r from-cyan-500 via-yellow-500 to-cyan-500 text-gray-900 font-bold rounded-2xl hover:from-cyan-400 hover:via-yellow-400 hover:to-cyan-400 transition-all duration-500 relative group shadow-2xl transform hover:scale-[1.02] overflow-hidden"
      >
        {/* Enhanced mobile button effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
        
        <Icon size={22} className="relative z-10 group-hover:animate-pulse" />
        <span className="relative z-10 text-lg tracking-wide">{label}</span>
        <Sparkles size={18} className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-spin" />
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center space-x-4 px-6 py-4 text-gray-300 hover:text-white hover:bg-gray-800/60 rounded-2xl transition-all duration-500 font-semibold relative group border border-gray-700/30 hover:border-cyan-400/50 overflow-hidden"
    >
      {/* Special lighting effects for mobile */}
      {isSpecial && (
        <>
          <Zap className="absolute top-2 right-4 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 via-cyan-500/12 to-yellow-400/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <Star className="absolute bottom-2 right-2 w-3 h-3 text-cyan-300 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
        </>
      )}
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"></div>
      
      <Icon size={22} className="relative z-10 transition-all duration-300 group-hover:text-cyan-400 group-hover:scale-110" />
      <span className="relative z-10 text-lg tracking-wide">{label}</span>
      
      {/* Side accent */}
      <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-yellow-400 transition-all duration-300 group-hover:h-3/4 group-hover:top-[12.5%] rounded-r-full shadow-lg group-hover:shadow-cyan-400/60"></div>
    </a>
  );
}