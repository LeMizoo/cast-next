// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ user, children }) {
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }
  return children;
}