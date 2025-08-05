import React, { useState, useEffect } from "react";
import GalleryAll from "../components/GalleryAll";
import Footer from "../components/Footer";

import photo1 from "../assets/images/gallery/photo1.jpg";
import photo2 from "../assets/images/gallery/photo2.jpg";
import photo3 from "../assets/images/gallery/photo3.jpg";
import photo4 from "../assets/images/gallery/photo4.jpg";

const miniatures = [
  { src: photo1, alt: "Chœur en lumière 1", caption: "Un chant qui élève l’âme vers l’éternel" },
  { src: photo2, alt: "Chœur en lumière 2", caption: "L’harmonie des voix, murmure du divin" },
  { src: photo3, alt: "Chœur en lumière 3", caption: "Dans la lumière, nos cœurs s’unissent" },
  { src: photo4, alt: "Chœur en lumière 4", caption: "Chaque note, une prière portée au ciel" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % miniatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % miniatures.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + miniatures.length) % miniatures.length);

  return (
    <>
      <main className="pt-12 px-6 max-w-6xl mx-auto space-y-16 text-gray-800">
        {/* Slider */}
        <section className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
          {miniatures.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-serif italic text-center">{image.caption}</p>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            &#10095;
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {miniatures.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </section>

        {/* Section spirituelle */}
        <section className="section-sacrée text-center rounded-xl p-8">
          <h1 className="text-4xl font-bold text-indigo-700 font-serif tracking-tight">
            Quand l’art devient prière, la musique touche l’âme
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Fondé en 2003 à Antananarivo, le <strong>C.A.S.T.</strong> est un ensemble vocal œcuménique,
            porteur d’une ferveur artistique et spirituelle.
          </p>
        </section>

        {/* Histoire */}
        <section className="bg-gradient-to-br from-[#f7f1e1] to-[#ece5d8] p-6 rounded-xl shadow-spirit text-gray-800 space-y-6 border border-yellow-200">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h2 className="text-3xl font-bold text-yellow-700 font-serif tracking-wide">Histoire</h2>
          </div>
          <p className="text-lg font-light leading-relaxed">
            Depuis sa création, le <strong>C.A.S.T.</strong> incarne une mission de service et de spiritualité,
            œuvrant à faire entendre la voix de l’âme malgache dans un dialogue entre tradition et modernité.
            Chaque étape de son cheminement est marquée par la foi, la rigueur, et la quête de beauté.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">Les fondateurs et la direction</h3>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Son Excellence Liva ANDRIAMANALINARIVO (Président fondateur)</li>
                <li>Éric RASAMIMANANA (Directeur artistique)</li>
                <li>Jules R. et Tovoniaina R. (Assistants et chefs de pupitre)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-700">Vision du projet</h3>
              <p className="mt-2 text-gray-700">
                Le C.A.S.T. aspire à devenir une cathédrale vivante, où chaque voix, chaque note,
                chaque silence participe à la révélation du divin dans l’art vocal, tout en affirmant
                l’identité culturelle malgache.
              </p>
            </div>
          </div>
        </section>

        {/* Galerie immersive */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Galerie immersive</h2>
          <GalleryAll images={miniatures} />
        </section>

        {/* Répertoire musical */}
        <section className="bg-gradient-to-br from-[#f1f5ec] to-[#e6ede2] p-6 rounded-xl shadow-spirit text-gray-800 space-y-6 border border-green-200">
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-3xl font-bold text-green-700 font-serif tracking-wide">Répertoire musical</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Œuvres classiques européennes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Messiah</strong> — Händel</li>
                <li><strong>La Création</strong> & <strong>Les Saisons</strong> — Haydn</li>
                <li><strong>Requiem</strong>, <strong>Ave Verum Corpus</strong> — Mozart</li>
                <li><strong>Ode à la joie</strong> — Beethoven</li>
                <li><em>Panis Angelicus</em>, <em>Gloria in excelsis Deo</em>, <em>Kyrie</em></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">Compositions malgaches & œuvres originales</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li><strong>Tompo ô, indrisy</strong> — Rémi Andriantsoavina</li>
                <li><strong>Ny feonay</strong> — Joelison Randrianindrina</li>
                <li>Arrangements liturgiques d’Éric Rasamimanana</li>
                <li>Polyphonies d’inspiration biblique ou hymnique</li>
                              </ul>
            </div>
          </div>
        </section>

        {/* In Memoriam */}
        <section
          className="text-gray-900 p-6 rounded-lg border border-yellow-600 shadow-lg max-w-4xl mx-auto"
          style={{
            backgroundImage: `url('/parchment-bg.png')`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image */}
            <img
              src= "/Lucien-Em-Randrianarivelo.jpg"
              alt="Portrait commémoratif"
              className="w-48 h-auto rounded-lg border border-gray-500 shadow-md self-start"
            />

            {/* Texte */}
            <div className="italic text-[1.05rem] leading-relaxed font-serif">
              <h2 className="text-3xl font-bold mb-3 not-italic text-yellow-800">In Memoriam</h2>
              <p>
                Le murmure d’un homme devenu souffle éternel.<br /><br />
                Avant même d’évoquer les fondations visibles du chœur, il est juste de saluer une présence discrète mais essentielle :
                <strong className="text-yellow-700"> Monsieur Lucien Emmanuel RANDRIANARIVELO (†)</strong>.<br /><br />
                À l’image d’un orfèvre du sacré, il a patiemment transcrit les partitions complexes en grilles solfa accessibles,
                offrant à chaque choriste le don de compréhension.<br /><br />
                Mais sa mission allait plus loin : il a offert une âme malgache aux chefs-d’œuvre classiques, traduisant leurs paroles avec délicatesse, fidélité et spiritualité.<br /><br />
                <span className="text-gray-700 font-medium">
                  "Misaotra anao, Raiamandreny. Ianao no nandika sy nandray ny feon’ny lanitra ho tenin’ny tanindrazana."
                </span><br /><br />
                Son héritage est immatériel, mais palpable à chaque instant, dans chaque vibration du chœur.<br />
                Il ne chantait pas… mais c’est grâce à lui que chacun peut chanter avec clarté et profondeur.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer final */}
      <Footer />
    </>
  );
};

export default Home;