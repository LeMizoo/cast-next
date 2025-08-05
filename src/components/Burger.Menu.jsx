import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          zIndex: 1000,
          background: "none",
          border: "none",
          fontSize: "2rem",
        }}
      >
        ☰
      </button>

      {isOpen && (
        <nav
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "250px",
            height: "100%",
            background: "#fff",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            padding: "2rem",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>🏠 Accueil</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>✨ À propos</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>🎨 Galerie</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>💌 Contact</Link>
        </nav>
      )}
    </>
  );
}