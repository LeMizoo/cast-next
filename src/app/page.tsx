import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-yellow-50 text-center px-6 py-16">
      <Image
        src="/photos/logo.png"
        alt="Logo du C.A.S.T."
        width={120}
        height={120}
        className="mx-auto mb-6 rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-title text-indigo-800 mb-2">🎶 C.A.S.T.</h1>
      <p className="text-lg italic text-gray-700 mb-4">Chœur Artistique & Spirituel de Tanà</p>
      <p className="text-md text-gray-600 mb-10">
        « Quand l’art devient prière » — Issu des Églises du FFKM, le chœur fait entendre la lumière par la musique.
      </p>

      <Link href="/vision" className="inline-block bg-indigo-700 text-white px-6 py-3 rounded shadow hover:bg-indigo-800 transition">
        🎧 Écouter notre voix
      </Link>
    </main>
  );
}