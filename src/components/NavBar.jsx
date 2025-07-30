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