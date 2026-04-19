import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-accent">Pro</span>Wash
        </div>
        <p className="footer-text">
          Llevando el brillo y cuidado de tu vehículo al siguiente nivel. Experiencia profesional al alcance de un clic.
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} ProWash. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
