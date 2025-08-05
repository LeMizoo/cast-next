import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Galerie from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Member from './pages/member';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

// 🔐 Exemple fictif d'utilisateur
const currentUser = { uid: 'abc123', role: 'admin' };

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={currentUser}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={currentUser}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;