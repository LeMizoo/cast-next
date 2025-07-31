export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-center text-sm text-gray-500 py-6">
      <p className="mb-2">
        © {new Date().getFullYear()} Choeur Artistique & Spirituel de Tanà — Tissé avec foi et code
      </p>
      <p>
        <span className="italic">“L’écho de chaque voix est une lumière en chemin.”</span>
      </p>
    </footer>
  );
}