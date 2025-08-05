import React from 'react'

const albums = [
  {
    title: "Concerts",
    images: ["/assets/images/concert1.jpg", "/assets/images/concert2.jpg"],
  },
  {
    title: "Portraits",
    images: ["/assets/images/choriste1.jpg", "/assets/images/choriste2.jpg"],
  },
  {
    title: "Coulisses",
    images: ["/assets/images/backstage1.jpg"],
  },
]

const PhotoGallery = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-2xl font-bold text-yellow-700 font-serif">Écho visuel du chœur</h2>
      <p className="text-gray-700 italic">Des instants sacrés capturés par l’image.</p>

      {albums.map((album, idx) => (
        <div key={idx}>
          <h3 className="text-xl text-yellow-800 font-semibold mb-4">{album.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {album.images.map((src, i) => (
              <img key={i} src={src} alt={`${album.title}-${i + 1}`} className="rounded-lg shadow hover:scale-105 transition-transform" />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default PhotoGallery