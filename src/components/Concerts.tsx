export default function Concerts() {
  return (
    <section className="px-6 py-16 fade-in bg-texture text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-title text-indigo-800 mb-8 text-center">
          Nos Concerts
        </h2>

        {/* 🗓️ À venir */}
        <div className="mb-12">
          <h3 className="text-2xl font-title text-yellow-700 mb-4">🎵 À venir</h3>
          <ul className="space-y-6 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Festival Gospel</strong><br />
              📅 20 août 2025 — <span className="italic">Cathédrale d’Analakely</span><br />
              🎟️ Entrée libre — Venez nombreux !
            </li>
            <li>
              <strong>Nuit Chorale</strong><br />
              📅 12 septembre 2025 — <span className="italic">Auditorium ORTANA</span><br />
              🌍 Avec la participation de chœurs invités
            </li>
          </ul>
        </div>

        {/* 🔙 Passés */}
        <div>
          <h3 className="text-2xl font-title text-yellow-700 mb-4">🎶 Concerts passés</h3>
          <ul className="space-y-6 text-base md:text-lg leading-relaxed">
            <li>
              <strong>Noël en Chœur</strong><br />
              📅 23 décembre 2024 — Temple FJKM Tranovato<br />
              🌟 Ambiance festive et méditative
            </li>
            <li>
              <strong>Chant pour la Paix</strong><br />
              📅 1er novembre 2024 — Église Catholique Faravohitra<br />
              🤝 Collaboration œcuménique inédite
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}