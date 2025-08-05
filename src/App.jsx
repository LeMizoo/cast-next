import { Routes, Route } from 'react-router-dom';
import HarmoniNav from './components/HarmoniNav'; // Nouveau composant de navigation
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Profil from './pages/Profil';
import Rejoindre from './pages/Rejoindre';
import EspaceMembre from './pages/EspaceMembre';
import './styles/style.css';
import FallbackMystique from './components/FallbackMystique'; // à créer ou placer dans /components

export default function App() {
  return (
    <>
      <HarmoniNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/rejoindre" element={<Rejoindre />} />
        <Route path="/espace" element={<EspaceMembre />} />
        {/* Route fallback personnalisée si besoin */}
        <Route path="*" element={<FallbackMystique />} />
      </Routes>
    </>
  );
}