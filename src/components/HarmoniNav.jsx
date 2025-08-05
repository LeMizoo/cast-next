import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const HarmoniNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="px-6 py-4 bg-gray-900 text-white shadow sticky top-0 z-50 animate-fadeIn">
      <div className="flex items-center justify-between">
        {/* Logo + Titre */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo spirituel" className="h-8 w-auto" />
          <span className="font-choral tracking-wide text-white text-sm md:text-base">
            Chœur Artistique & Spirituel de Tanà
          </span>
        </div>

        {/* Liens desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className={isActive("/") ? "link-actif" : "link-nav"}>Accueil</Link>
          <Link to="/galerie" className={isActive("/galerie") ? "link-actif" : "link-nav"}>Galerie</Link>
          <Link to="/profil" className={isActive("/profil") ? "link-actif" : "link-nav"}>Profil</Link>
          <Link to="/rejoindre" className={isActive("/rejoindre") ? "link-actif" : "link-nav"}>Rejoindre</Link>
          <Link to="/espace" className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">Espace membre</Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu mobile"
          className="md:hidden text-indigo-200"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <>
          <div onClick={() => setIsOpen(false)} className="menu-backdrop" />
          <nav className="absolute right-0 top-16 w-64 p-6 bg-gray-800 text-white rounded-lg shadow-lg z-50 transition-all duration-500 ease-out">
            <ul className="flex flex-col space-y-3">
              <li><Link to="/" className="link-nav">Accueil</Link></li>
              <li><Link to="/galerie" className="link-nav">Galerie</Link></li>
              <li><Link to="/profil" className="link-nav">Profil</Link></li>
              <li><Link to="/rejoindre" className="link-nav">Rejoindre</Link></li>
              <li><Link to="/espace" className="bg-indigo-600 text-white text-center px-4 py-2 rounded hover:bg-indigo-700">Espace membre</Link></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default HarmoniNav;