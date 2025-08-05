import React from 'react'
import { Link } from 'react-router-dom'

const blocks = [
  {
    text: "Fondé en 2003 à Antananarivo, le C.A.S.T. est un ensemble vocal dont l’essence repose sur le souffle sacré de la musique. Fruit d’une convergence de vocations artistiques et spirituelles...",
    image: "/assets/images/photo1.jpg",
    imageLeft: true,
  },
  {
    text: "Chaque nef devient une chambre d’écho divine : la rosace accueille les voix comme une couronne céleste, les voûtes se transforment en tambours spirituels...",
    image: "/assets/images/photo2.jpg",
    imageLeft: false,
  },
  {
    text: "Chaque photo ou chaque vidéo murmure une histoire de foi, de partage, de vocation. Ce ne sont pas des souvenirs : ce sont des archives vivantes de l’émotion.",
    image: "/assets/images/photo3.jpg",
    imageLeft: true,
  },
]

const GallerySection = () => {
  return (
    <section className="space-y-12">
      {blocks.map((block, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-6 items-center">
          {block.imageLeft && <img src={block.image} alt="" className="w-64 rounded-lg shadow-md" />}
          <p className="text-lg leading-relaxed font-serif">{block.text}</p>
          {!block.imageLeft && <img src={block.image} alt="" className="w-64 rounded-lg shadow-md" />}
        </div>
      ))}

      {/* Diaporama simplifié */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Diaporama spirituel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {blocks.map((b, i) => (
            <img key={i} src={b.image} alt={`Slide ${i + 1}`} className="rounded-lg shadow hover:scale-105 transition-transform" />
          ))}
        </div>

        <Link to="/galerie-complete" className="mt-4 inline-block text-indigo-600 underline text-sm">
          👉 Voir toutes les images en taille réelle
        </Link>
      </div>
    </section>
  )
}

export default GallerySection