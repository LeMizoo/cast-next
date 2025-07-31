import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const SlideGallery = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'slides'));
      const slideData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSlides(slideData);
    };

    fetchSlides();
  }, []);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1rem'
    }}>
      {slides.map((slide) => (
        <img
          key={slide.id}
          src={slide.imageUrl}
          alt={`Slide ${slide.id}`}
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
  );
};

export default SlideGallery;