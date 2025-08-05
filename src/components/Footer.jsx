import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-gray-100 text-center py-6 mt-10 border-t border-indigo-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-3">
          © 2003–2025 <strong>C.A.S.T.</strong> — Chœur Artistique & Spirituel de Tanà
        </div>

        <div className="mb-3">
          Site réalisé avec <span className="text-red-400">❤️</span> par{" "}
          <strong>Tovoniaina RAHENDRISON</strong>
        </div>

        <blockquote className="italic text-sm mb-3 text-indigo-200">
          « Ce que vous entendrez aujourd’hui, ce ne sont pas des voix… Ce sont des âmes en prière, des silences qui vibrent, des cœurs en harmonie. »
        </blockquote>

        <div className="mb-3">
          📍 Antananarivo | ✉️{" "}
          <a
            href="mailto:positifaid@live.fr"
            className="underline text-indigo-300 hover:text-indigo-100 transition"
          >
            positifaid@live.fr
          </a>
        </div>

        <div className="space-x-4">
          🌐 Suivez-nous :{" "}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-300 hover:text-indigo-100 transition"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-300 hover:text-indigo-100 transition"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;