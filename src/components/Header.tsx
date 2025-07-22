import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-900 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-title font-bold tracking-wide">🎶 C.A.S.T.</span>
        </div>

        {/* Menu horizontal centré */}
        <nav className="flex-1">
          <ul className="flex justify-center gap-6 text-sm md:text-base font-medium">
            <li><Link href="/" className="hover:text-yellow-300 transition">Accueil</Link></li>
            <li><Link href="/vision" className="hover:text-yellow-300 transition">Vision</Link></li>
            <li><Link href="/repertoire" className="hover:text-yellow-300 transition">Répertoire</Link></li>
            <li><Link href="/concerts" className="hover:text-yellow-300 transition">Concerts</Link></li>
            <li><Link href="/galerie" className="hover:text-yellow-300 transition">Galerie</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* Slogan centré en-dessous */}
      <div className="text-center mt-4 italic text-gray-200 text-sm md:text-lg">
        “Une voix pour l’unité, une musique pour la foi.”
      </div>
    </header>
  );
}