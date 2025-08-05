import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-cast.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/galerie", label: "Galerie" },
    { path: "/profil", label: "Profil" },
    { path: "/rejoindre", label: "Rejoindre" },
    { path: "/espace", label: "Espace membre" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-spirit z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="C.A.S.T. Logo" className="h-10 w-auto" />
        </Link>

        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-300 ${
                location.pathname === item.path ? "text-indigo-600 font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bouton burger pour mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-800 hover:text-indigo-600 font-medium transition-colors duration-300 ${
                  location.pathname === item.path ? "text-indigo-600 font-bold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;