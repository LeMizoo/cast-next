// src/components/Navbar.jsx
import React from 'react';
import { ReactComponent as Logo } from '@/assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-md">
      <div className="flex items-center space-x-3">
        <Logo className="h-10 w-auto text-white hover:scale-105 transition-transform duration-300" />
        <span className="text-xl font-semibold text-white">CastVision</span>
      </div>
      <ul className="flex space-x-6">
        <li><a href="/" className="text-white hover:text-blue-400 transition-colors duration-200">Accueil</a></li>
        <li><a href="/about" className="text-white hover:text-blue-400 transition-colors duration-200">À propos</a></li>
        <li><a href="/contact" className="text-white hover:text-blue-400 transition-colors duration-200">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;