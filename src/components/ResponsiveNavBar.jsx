import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Branding logo + titre */}
        <div className="flex items-center space-x-2 animate-fadeIn">
          <img src="/logo-cast.png" alt="Logo Cast" className="h-8 w-auto" />
          <span className="text-sm md:text-base font-semibold tracking-wide whitespace-nowrap">
            Chœur Artistique & Spirituel de Tanà
          </span>
        </div>

        {/* Burger menu en mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Liens desktop */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">Accueil</Link>
          <Link to="/galerie" className="hover:text-yellow-400 transition">Galerie</Link>
          <Link to="/profil" className="hover:text-yellow-400 transition">Profil</Link>
          <Link to="/espace" className="text-yellow-400 underline">Espace membre</Link>
        </div>
      </div>

      {/* Liens mobile */}
      {isOpen && (
        <div className="mt-3 space-y-2 md:hidden">
          <Link to="/" className="block text-sm hover:text-yellow-400 transition">Accueil</Link>
          <Link to="/galerie" className="block text-sm hover:text-yellow-400 transition">Galerie</Link>
          <Link to="/profil" className="block text-sm hover:text-yellow-400 transition">Profil</Link>
          <Link to="/espace" className="block text-sm text-yellow-400 underline">Espace membre</Link>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavBar;