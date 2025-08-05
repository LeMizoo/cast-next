import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // On utilise Layout maintenant
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Profil from './pages/Profil';
import Rejoindre from './pages/Rejoindre';
import EspaceMembre from './pages/EspaceMembre';
import './styles/style.css';
import FallbackMystique from './components/FallbackMystique'; // à créer ou placer dans /components

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/rejoindre" element={<Rejoindre />} />
        <Route path="/espace" element={<EspaceMembre />} />
        {/* Route fallback personnalisée si besoin */}
        <Route path="*" element={<FallbackMystique />} />
      </Route>
    </Routes>
  );
}