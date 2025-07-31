import React from 'react';
import logo from '../assets/logo.svg'; // ✅ Import standard compatible avec Vite

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo Cast-Next" className="w-10 h-10" />
        <h1 className="text-2xl font-bold text-gray-800 font-serif tracking-wide">
          C.A.S.T.
        </h1>
      </div>

      <nav className="space-x-6 text-gray-600 font-medium hidden md:block">
        <a href="/" className="hover:text-blue-600">Accueil</a>
        <a href="/about" className="hover:text-blue-600">À propos</a>
        <a href="/gallery" className="hover:text-blue-600">Galerie</a>
        <a href="/join" className="hover:text-blue-600">Rejoindre</a>
        <a href="/member" className="hover:text-blue-600">Espace membre</a>
      </nav>
    </header>
  );
};

export default Header;