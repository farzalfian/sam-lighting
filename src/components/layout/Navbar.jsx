"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png" // Replace with the actual path to your logo
            alt="SAM LIGHTING Logo"
            width={70} // Adjusted width
            height={20} // Adjusted height
            className="object-contain ml-0" // Ensure the logo stays left-aligned
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-yellow-500 md:hidden z-50"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-12 left-0 right-0 bg-gray-900 md:bg-transparent md:flex items-center justify-end md:gap-6 transform ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } md:translate-y-0 md:opacity-100 transition-all duration-300 ease-in-out md:block`}
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
    <li className="py-1 md:py-0 text-center md:text-left">
      <Link
        href={href}
        className="text-lg font-medium text-white hover:text-yellow-500 transition-colors duration-300 block"
      >
        {label}
      </Link>
    </li>
  );
}
