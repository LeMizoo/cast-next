export default function Accueil() {
  return (
    <section className="bg-texture text-gray-800 px-6 py-12 md:px-20">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-indigo-800">
          Site Officiel du C.A.S.T.
        </h1>
        <p className="italic text-lg text-gray-600 mb-8 fade-in">
          “Quand l’art devient prière, la musique touche l’âme”
        </p>
        <div className="space-y-6 text-left">
          <p className="fade-in text-base md:text-lg text-gray-700 leading-relaxed">
            Fondé en mars 2003 à Antananarivo, le C.A.S.T. est un ensemble vocal dont l’essence repose
            sur le souffle sacré de la musique. Fruit d’une convergence de vocations artistiques et spirituelles,
            il rassemble des choristes issus de toutes les Églises chrétiennes du FFKM —
            illustrant une véritable unité œcuménique.
          </p>
          <p className="fade-in text-base md:text-lg text-gray-700 leading-relaxed">
            Sous la houlette de Son Excellence <strong className="text-indigo-700">Liva ANDRIAMANALINARIVO</strong>, président fondateur, et du directeur artistique
            <strong className="text-indigo-700"> Maître Éric RASAMIMANANA</strong>,
            le chœur poursuit une mission : faire vibrer l’âme et porter au-delà des mots la puissance de la foi par la voix humaine.
          </p>
          <p className="fade-in text-base md:text-lg text-gray-700 leading-relaxed">
            Le chœur interprète ses œuvres dans les églises emblématiques de la capitale :
            Cathédrale d’Andohalo, Faravohitra, Saint Michel Itaosy, et bien d’autres.
            Chaque lieu devient un sanctuaire où la musique devient prière vivante.
          </p>
        </div>
      </div>
    </section>
  );
}