import React from 'react'
import { Link } from 'react-router-dom'
import GallerySection from '../components/GallerySection'
import VideoSection from '../components/VideoSection'
import AudioSection from '../components/AudioSection'
import PhotoGallery from '../components/PhotoGallery' // à inclure si besoin

const Gallery = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto space-y-16 text-gray-900">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold font-serif text-indigo-700">Galerie Cast-Next</h1>
        <p className="italic text-gray-700">Un chant visuel et sonore, entre foi et art</p>
      </header>

      {/* Partie Photos */}
      <GallerySection />

      {/* Partie Vidéos */}
      <VideoSection />

      {/* Partie Audios */}
      <AudioSection />

      {/* Partie Albums Visuels */}
      {/* <PhotoGallery /> */}
    </div>
  )
}

export default Gallery