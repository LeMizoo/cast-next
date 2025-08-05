import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu après navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative z-50 md:hidden">
      {/* Bouton burger */}
      <button
        id="menu-toggle"
        aria-controls="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="text-indigo-700 focus:outline-none"
        aria-label="Ouvrir le menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? "M6 18L18 6M6 6l12 12" // croix
                : "M4 6h16M4 12h16M4 18h16" // trois lignes
            }
          />
        </svg>
      </button>

      {/* Menu vertical flottant à droite */}
      <nav
        id="menu"
        aria-labelledby="menu-toggle"
        className={`flex flex-col absolute top-16 right-0 p-6 w-56 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-2 w-full">
          <li>
            <Link
              to="/"
              className="block w-full text-indigo-700 hover:text-indigo-900 transition duration-200"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/galerie"
              className="block w-full text-indigo-700 hover:text-indigo-900 transition duration-200"
            >
              Galerie
            </Link>
          </li>
          <li>
            <Link
              to="/profil"
              className="block w-full text-indigo-700 hover:text-indigo-900 transition duration-200"
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              to="/rejoindre"
              className="block w-full text-indigo-700 hover:text-indigo-900 transition duration-200"
            >
              Rejoindre
            </Link>
          </li>
          <li>
            <Link
              to="/espace"
              className="block w-full bg-indigo-600 text-white font-semibold px-4 py-2 rounded hover:bg-indigo-700 transition duration-200 text-center"
            >
              Espace membre
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBurger;