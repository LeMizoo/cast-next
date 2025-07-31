// src/hooks/useSlides.js
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import localSlides from '../components/slideImages'; // tableau d'images locales

export default function useSlides() {
  const [items, setItems] = useState([]);
  const [source, setSource] = useState('');

  useEffect(() => {
    const verifySlides = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'media'));
        const docs = snapshot.docs.map(doc => doc.data());

        if (docs.length > 0) {
          setItems(docs);
          setSource('Firestore');
        } else {
          setItems(localSlides.map((url, i) => ({
            imageUrl: url,
            title: `Slide ${i + 1}`
          })));
          setSource('Local');
        }
      } catch (error) {
        console.warn('🔧 Firebase échoué, fallback local');
        setItems(localSlides.map((url, i) => ({
          imageUrl: url,
          title: `Slide ${i + 1}`
        })));
        setSource('Local');
      }
    };

    verifySlides();
  }, []);

  return { items, source };
}