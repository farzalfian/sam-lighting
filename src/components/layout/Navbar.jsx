'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="SAM LIGHTING Logo"
            width={70}
            height={28}
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-yellow-500 md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0 md:opacity-100 md:translate-y-0 pointer-events-none md:pointer-events-auto'
          }`}
        >
          <NavItem href="/" label="HOME" />
          <NavItem href="/products" label="PRODUCTS" />
          <NavItem href="/products/lighting" label="LIGHTING" />
          <NavItem href="/products/sound" label="SOUND" />
          <NavItem href="/contact" label="CONTACT US" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <li className="py-2 md:py-0 text-center md:text-left group">
      <Link
        href={href}
        className="text-lg font-medium text-white relative block transition duration-300 hover:text-yellow-400"
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
      </Link>
    </li>
  );
}
