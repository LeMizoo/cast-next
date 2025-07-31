// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="text-center bg-gray-50 py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">L'harmonie de la diversité</h1>
      <p className="text-xl text-gray-600">Chanter ensemble pour unir les voix et les cœurs</p>
    </section>
  );
}
// Exemple à ajouter dans HeroSection.jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="text-center py-10"
>
  <p className="text-2xl italic font-light text-gray-600">
    « La beauté est la lumière du cœur. »
  </p>
</motion.div>