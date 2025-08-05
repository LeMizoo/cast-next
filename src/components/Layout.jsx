// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import HarmoniNav from "./HarmoniNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Barre de navigation spirituelle */}
      <HarmoniNav />

      {/* Contenu principal */}
      <main className="flex-grow px-6 py-10">
        <Outlet />
      </main>

      {/* Pied de page inspiré */}
      <Footer />
    </div>
  );
};

export default Layout;