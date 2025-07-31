import { useState, useEffect } from 'react';
import useSlides from '../hooks/useSlides';

const AnimatedSlide = () => {
  const { items, source } = useSlides();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) return <p>Chargement du carrousel...</p>;

  return (
    <div className="animated-slide flex flex-col items-center">
      <img
        src={items[index].imageUrl}
        alt={items[index].title}
        className="rounded-xl shadow-lg transition duration-700 w-full max-w-4xl h-auto object-cover"
      />
      <p className="text-xs text-gray-400 mt-2">Source : {source}</p>
    </div>
  );
};

export default AnimatedSlide;