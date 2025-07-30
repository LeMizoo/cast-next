import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'; // aforona avy eo

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
import ProtectedRoute from './components/ProtectedRoute';

// Inside Routes:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute user={currentUser}>
      <Dashboard />
    </ProtectedRoute>
  }
/>