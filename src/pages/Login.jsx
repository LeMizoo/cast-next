// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Identifiants incorrects ou erreur réseau.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError('Erreur lors de la connexion avec Google.');
    }
  };

  const handleGitHubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      setError("Erreur lors de la connexion avec GitHub.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleEmailLogin} style={styles.form}>
        <h2 style={styles.title}>Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>Se connecter</button>
        <div style={styles.separator}>ou</div>
        <button type="button" onClick={handleGoogleLogin} style={{ ...styles.button, backgroundColor: '#db4437' }}>
          Connexion avec Google
        </button>
        <button type="button" onClick={handleGitHubLogin} style={{ ...styles.button, backgroundColor: '#333' }}>
          Connexion avec GitHub
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5fa',
  },
  form: {
    padding: '2rem',
    borderRadius: '10px',
    background: '#ffffff',
    boxShadow: '0 0 12px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.8rem',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    margin: '0.5rem 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    marginTop: '0.5rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: 'none',
    color: '#fff',
    backgroundColor: '#4CAF50',
    cursor: 'pointer',
  },
  separator: {
    margin: '1rem 0',
    color: '#888',
    fontSize: '0.9rem',
  },
  error: {
    color: 'red',
    marginTop: '0.5rem',
    fontSize: '0.9rem',
  },
};

export default Login;