import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveNavBar from "./ResponsiveNavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Barre de navigation principale */}
      <ResponsiveNavBar />

      {/* Zone de contenu dynamique */}
      <main className="px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import HarmoniNav from "./HarmoniNav";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Barre de navigation spirituelle */}
      <HarmoniNav />

      {/* Zone de contenu dynamique */}
      <main className="px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;