import React from 'react';
import Home from './pages/Home';
import SlideGallery from './components/SlideGallery';

function App() {
  return (
    <div>
      {/* Tu peux alterner ici selon la page à afficher */}
      <Home />

      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>
        🌿 Cast-Next Gallery
      </h1>
      <SlideGallery />
    </div>
  );
}

export default App;