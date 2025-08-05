// src/components/MediaGallery.jsx
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function MediaGallery() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'media'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMedia(items);
      } catch (error) {
        console.error('Erreur lors du chargement des médias:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  if (loading) {
    return <div className="text-center mt-6 text-gray-500">Chargement des visions… ⏳</div>;
  }

  if (media.length === 0) {
    return <div className="text-center mt-6 text-gray-400">Aucun média pour le moment 🌱</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {media.map(item => (
        <div key={item.id} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">Par {item.author}</p>
        </div>
      ))}
    </div>
  );
}