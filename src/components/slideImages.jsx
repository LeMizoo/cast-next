import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import localSlides from './slideImages'; // Fallback local

export default function AnimatedSlide() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'media'));
        const docs = snapshot.docs.map(doc => doc.data());

        // 👉 Si Firestore renvoie des images, on les utilise
        if (docs.length > 0) {
          setItems(docs);
        } else {
          console.warn('Aucune image Firebase, basculement vers local.');
          setItems(localSlides.map((src, i) => ({ imageUrl: src, title: `Slide ${i + 1}` })));
        }
      } catch (error) {
        console.error('Erreur Firebase, utilisation des images locales 💾', error);
        setItems(localSlides.map((src, i) => ({ imageUrl: src, title: `Slide ${i + 1}` })));
      }
    };

    fetchMedia();
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [items]);

  if (items.length === 0) {
    return <div className="text-center text-gray-500">⏳ Chargement du carrousel...</div>;
  }

  return (
    <div className="animated-slide flex justify-center items-center">
      <img
        src={items[index].imageUrl}
        alt={items[index].title || `Slide ${index + 1}`}
        className="rounded-xl shadow-lg transition-all duration-700 w-full max-w-3xl h-auto object-cover"
      />
    </div>
  );
}