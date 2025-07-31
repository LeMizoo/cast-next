import { useState } from 'react'; // Utile si tu utilises des hooks plus tard
import Header from '../components/Header';
import AnimatedSlide from '../components/AnimatedSlide';
import Gallery from '../components/Gallery'; // ✅ Ajout de la galerie
import Footer from '../components/Footer';
import '../styles/gallery.css'; // ✅ Ajout du style pour la galerie

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800 font-serif">
      <Header />

      <section className="py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
          Galerie du Choeur ✨
        </h1>
        <p className="italic text-lg text-gray-600 mb-8">
          « Ce que vous entendrez aujourd'hui, ce ne sont pas des voix… Ce sont des âmes en prière. »
        </p>
        <AnimatedSlide />
      </section>

      <section className="py-10 px-4">
        <Gallery /> {/* 🌿 Voici la galerie qui s'intègre harmonieusement */}
      </section>

      <Footer />
    </main>
  );
}