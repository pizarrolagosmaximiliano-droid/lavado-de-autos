import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607860108855-64bc74820afc?q=80&w=600&auto=format&fit=crop'
  ];

  return (
    <section className="section gallery" id="gallery">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Nuestros Resultados</h2>
          <p className="section-subtitle">Casos reales, brillo incomparable.</p>
        </div>
        <div className="gallery-grid">
          {images.map((url, i) => (
            <div key={i} className="gallery-item">
              <img src={url} alt={`Resultado Lavado ${i+1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
