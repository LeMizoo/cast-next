import React from 'react'

const tracks = [
  { title: "Tompo ô, indrisy", composer: "Rémi Andriantsoavina", src: "/audio/tompo-o.mp3" },
  { title: "Ny feonay", composer: "Joelison Randrianindrina", src: "/audio/ny-feonay.mp3" },
  { title: "Gloria in excelsis Deo", composer: "Mozart", src: "/audio/gloria.mp3" },
]

const AudioSection = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-green-700 font-serif">Résonances spirituelles</h2>
      <p className="text-gray-700 italic">Écoutez les vibrations qui touchent l’âme.</p>

      <ul className="space-y-6">
        {tracks.map((track, idx) => (
          <li key={idx} className="bg-green-50 p-4 rounded-xl shadow border border-green-200">
            <p className="font-semibold text-green-900">{track.title}</p>
            <p className="text-sm text-green-700 mb-2">Compositeur : {track.composer}</p>
            <audio controls src={track.src} className="w-full rounded-lg" />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AudioSection