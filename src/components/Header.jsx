import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="header-container">
        <div className="logo">
          <span className="logo-accent">Pro</span>Wash
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
