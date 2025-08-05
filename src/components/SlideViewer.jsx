import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function SlideViewer() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const snapshot = await getDocs(collection(db, "slides"));
        const data = snapshot.docs.map(doc => doc.data());
        setSlides(data);
      } catch (error) {
        console.error("Erreur Firestore:", error);
      }
    };
    fetchSlides();
  }, []);

  return (
    <div className="slide-container">
      {slides.length === 0 ? (
        <p>Aucun slide trouvé.</p>
      ) : (
        slides.map((slide, i) => (
          <div key={i} className="slide">
            <h2>{slide.title}</h2>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))
      )}
    </div>
  );
}