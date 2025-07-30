// src/pages/Dashboard.jsx
import React from 'react';

export default function Dashboard() {
  return (
    <div style={{
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1f2937' }}>Dashboard Admin</h1>
      <p style={{ fontSize: '1.2rem', color: '#4b5563' }}>Bienvenue Super Admin 👑</p>
    </div>
  );
}