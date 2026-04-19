import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.jpeg" alt="Full Cars Logo" className="logo-img" />
          <span className="logo-text"><span className="logo-accent">Full</span> Cars</span>
        </div>
        <nav className="nav-links">
          <a href="#services">Servicios</a>
          <a href="#gallery">Galería</a>
          <a href="#contact">Contacto</a>
        </nav>
        <div className="header-action">
          <a href="#booking" className="btn-primary">Reservar Ahora</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
