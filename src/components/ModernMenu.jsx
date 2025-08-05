import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./ModernMenu.css";

const ModernMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="menu-wrapper">
      <div className="logo-container">
        <img src={logo} alt="Logo spirituel" className="logo" />
      </div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/gallery">Galerie</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </header>
  );
};

export default ModernMenu;