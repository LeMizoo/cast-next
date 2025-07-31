// src/components/NavBar.jsx
export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-700">C.A.S.T</div>
      <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
        <li className="group relative">
          <button>Présentation</button>
        </li>
        <li><button>Inspiration</button></li>
        <li><button>Notre Voix</button></li>
        <li><button>Rejoindre</button></li>
        <li><button className="bg-blue-600 text-white px-4 py-2 rounded">Espace membre</button></li>
      </ul>
    </nav>
  );
}
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Cast-Next</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/galerie">Galerie</Link></li>
        <li><Link to="/profil">Profil</Link></li>
        <li><Link to="/connexion">Connexion</Link></li>
      </ul>
    </nav>
  );
}
const [open, setOpen] = useState(false);

<button onClick={() => setOpen(!open)} className="md:hidden">
  {/* Icône burger ici */}
</button>

{open && (
  <ul className="flex flex-col space-y-4">
    {/* Liens ici */}
  </ul>
)}
// components/FixedMenu.jsx
import React from 'react';

export default function FixedMenu() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="CAST Logo" className="h-10 w-10" />
          <span className="text-white text-xl font-serif tracking-wide">C.A.S.T.</span>
        </div>

        {/* Menu */}
        <nav className="space-x-6 text-white font-light text-sm">
          <a href="#accueil" className="hover:text-yellow-400 transition">Accueil</a>
          <a href="#a-propos" className="hover:text-yellow-400 transition">À propos</a>
          <a href="#galerie" className="hover:text-yellow-400 transition">Galerie</a>
          <a href="#rejoindre" className="hover:text-yellow-400 transition">Rejoindre</a>
          <a href="#espace" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300 transition">Espace membre</a>
        </nav>
      </div>
    </header>
  );
}
